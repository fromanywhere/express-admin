var Model = require('../model/Model');
var ViewCtx = require('../context/ViewCtx');
var AbstractBlockController = require('./AbstractBlockController');
var Utils = require('../utils/Utils');

class IndexController extends AbstractBlockController {

    getViewCtx (ctx) {
        return new IndexViewCtx(ctx);
    }
}

class IndexViewCtx extends ViewCtx {

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

    getNewsList() {
        var list = [];
        Model.getNewsListSortByDate().forEach(news => {
            news.link = Utils.getLink('EditNews', {
                id: news._id
            });
            news.renderDate = this.getFormattedDate(news.date);

            list.push(news);
        });
        return list;
    }

    getRubricsList() {
        var list = [];
        Model.getRubricsListSortByRating().forEach(rubric => {
            rubric.count = Object.keys(Model.getAllNews(rubric._id)).length;

            list.push(rubric);
        });
        return list;
    }

    getTemplateParams() {
        return {
            news: this.getNewsList(),
            rubrics: this.getRubricsList(),
            editRubricsLink: Utils.getLink('EditRubrics'),
            editNewsLink: Utils.getLink('EditNews'),
            searchLink: Utils.getLink('Search')
        };
    }
}

module.exports = (req, res) => {
    new IndexController(req, res);
};