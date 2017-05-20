var Model = require('../model/Model');
var ViewCtx = require('../context/ViewCtx');
var AbstractBlockController = require('./AbstractBlockController');
var fs = require('fs');
var path = require('path');

class EditNewsController extends AbstractBlockController {

    removeFile(newsId) {
        var news = Model.getAllNews()[newsId];
        if (news.image) {
            fs.unlinkSync(path.join(__dirname, '..', news.image));
        }
    }

    handleRequest(ctx) {
        if (ctx.isPOST()) {
            var params = ctx.getRequestParams();

            var oldFile = ctx.getRequestParams().filename;
            var newFile = ctx.getFiles().length && ctx.getFiles()[0].path;
            var text = ctx.getRequestParams().text.split(/(?:\r\n|\r|\n)/g).map(function (str) {
                return str.trim();
            });

            switch(params.action) {
                case 'edit':
                    if (Model.isNewsExists(params.newsId)) {
                        if ((!newFile && !oldFile) || (newFile && oldFile && (newFile !== oldFile))) {
                            this.removeFile(params.newsId);
                        }

                        Model.saveNews(params.newsId, {
                            title: params.title,
                            date: params.date,
                            rubric: params.rubric,
                            image: newFile || oldFile || null,
                            text: text
                        });
                    } else {
                        Model.createNews({
                            title: params.title,
                            date: params.date,
                            rubric: params.rubric,
                            image: newFile || null,
                            text: text
                        });
                    }
                    break; 
                case 'remove':
                    this.removeFile(params.id);
                    Model.removeNews(params.id);
                    break;                                 
            }

            return "/";
        }

        return super.handleRequest(ctx);
    }

    getViewCtx (ctx) {
        return new EditNewsViewCtx(ctx);
    }
}

class EditNewsViewCtx extends ViewCtx {

    getMatchNews() {
        var id = this.ctx.getRequestParams().id;
        var news = null;
        if (id) {
            news = Model.getAllNews()[id];
        }
        return news;
    }

    getRubrics(news) {
        var rubrics = Model.getRubricsListSortByRating();
        if (news) {
            rubrics.forEach(rubric => {
                rubric.selected = rubric._id === news.rubric;
            });
        } else {
            if (rubrics.length) {
                rubrics[0].selected = true;
            }
        }
        return rubrics;
    }

    getFormattedDate(date) {
        var safeDate = date
            ? new Date(date)
            : new Date();

        var options = {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        return safeDate.toLocaleDateString('ru-RU', options);
    }

    getFormattedText(text) {
        return Array.isArray(text)
            ? text.join('<!--&-->')
            : '';
    }

    populateNews(news) {
        var safeNews = news || {};
        return Object.assign(safeNews, {
            rubricsList: this.getRubrics(news),
            saveDate: new Date().getTime(),
            dateFormatted: this.getFormattedDate(safeNews.date),
            textFormatted: this.getFormattedText(safeNews.text)
        });
    }

    getTemplateParams() {
        return this.populateNews(this.getMatchNews());
    }
}

module.exports = (req, res) => {
    new EditNewsController(req, res);
};