var Model = require('../model/Model');
var ViewCtx = require('../context/ViewCtx');
var AbstractBlockController = require('./AbstractBlockController');

class ApiController extends AbstractBlockController {

    getViewCtx (ctx) {
        return new ApiControllerCtx(ctx);
    }

    /**
     *
     * @param {http.ServerResponse} res
     */
    allowCrossDomain(res) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    }
}

class ApiControllerCtx extends ViewCtx {

    static getAllowedCommands() {
        return [
            'getNews',
            'getAllNews',
            'getRubric',
            'getAllRubrics',
            'isNewsExists',
            'getRubricsListSortByRating',
            'search'
        ];
    }

    getNews() {
        var id = this.ctx.getRequestParams().id;
        return Model.isNewsExists(id)
            ? Model.getAllNews()[id]
            : null;
    }

    getAllNews() {
        var id = this.ctx.getRequestParams().id;
        return Model.getAllNews(id);
    }

    getRubric() {
        var id = this.ctx.getRequestParams().id;
        var rubrics = Model.getAllRubrics();
        return rubrics.hasOwnProperty(id)
            ? rubrics[id]
            : null;
    }

    getAllRubrics() {
        return Model.getAllRubrics();
    }

    isNewsExists() {
        var id = this.ctx.getRequestParams().id;
        return Model.isNewsExists(id);    
    }

    getRubricsListSortByRating() {
        return Model.getRubricsListSortByRating();
    }

    search() {
        var query = this.ctx.getRequestParams().query;
        return Model.search(query);
    }

    getResult() {
        var command = this.ctx.getRequestParams().method;
        var success = {
            result: 'success',
            message: null
        };
        var fail = {
            result: 'success',
            message: null
        };
        
        if (ApiControllerCtx.getAllowedCommands().indexOf(command) === -1) {
            fail.message = 'Некорректный метод';
            return fail;
        }

        try {
            success.message = this[command]();
        } catch (e) {
            fail.message = e.message;
            return fail;
        }

        return success;
    }

    getTemplateParams() {
        return {
            result: JSON.stringify(this.getResult())
        };
    }
}

module.exports = (req, res) => {
    new ApiController(req, res);
};