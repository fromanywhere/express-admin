var Model = require('../model/Model');
var ViewCtx = require('../context/ViewCtx');
var AbstractBlockController = require('./AbstractBlockController');

class EditRubricsController extends AbstractBlockController {

    handleRequest(ctx) {
        if (ctx.isPOST()) {
            var params = ctx.getRequestParams();

            params.rubricId.forEach((id, index) => {
                Model.saveRubric(index, {
                    title: params.title[index],
                    rating: params.rubricId.length - index
                });
            });

            return "/";
        }

        return super.handleRequest(ctx);
    }

    getViewCtx (ctx) {
        return new EditNewsViewCtx(ctx);
    }
}

class EditNewsViewCtx extends ViewCtx {

    getTemplateParams() {
        return {
            rubrics: Model.getRubricsListSortByRating()
        };
    }
}

module.exports = (req, res) => {
    new EditRubricsController(req, res);
};