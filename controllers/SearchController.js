var Model = require('../model/Model');
var ViewCtx = require('../context/ViewCtx');
var AbstractBlockController = require('./AbstractBlockController');

class SearchController extends AbstractBlockController {

    getViewCtx (ctx) {
        return new SearchViewCtx(ctx);
    }
}

class SearchViewCtx extends ViewCtx {

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

    getSearchResult() {
        var query = this.ctx.getRequestParams().query;
        return Model.search(query).map((item) => {
            item.formattedDate = this.getFormattedDate(item.date);
            return item;
        });
    }

    getTemplateParams() {
        return {
            query: this.ctx.getRequestParams().query,
            result: this.getSearchResult()
        };
    }
}

module.exports = (req, res) => {
    new SearchController(req, res);
};