var AppRequestCtx = require('../context/AppRequestCtx');
var ViewCtx = require('../context/ViewCtx');
var AbstractController = require('./AbstractController');

/**
 * Абстрактный блочный контроллер
 * Принимает параметры рендеринга.
 * На основании параметров принимает решение, следует ли возвращать результат рендера сопоставленного View (по умолчанию — да)
 */
class AbstractBlockController extends AbstractController {

    /**
     *
     * @param {http.ClientRequest} req
     * @param {http.ServerResponse} res
     */
    constructor (req, res) {
        super();
        
        var requestCtx = new AppRequestCtx(req);
        this.redirect = this.handleRequest(requestCtx);


        if (!this.redirect) {
            this.ctx = this.getViewCtx(requestCtx);
        }

        this.allowCrossDomain(res);
        this.render(res);
    }

    /**
     * Возвращает контекст для View
     * Опционально может быть переопределен для хранения дополнительных полей и методов
     * @param {AppRequestCtx} ctx
     * @returns {ViewCtx}
     */
    getViewCtx (ctx) {
        return new ViewCtx(ctx);
    }

    /**
     * Возвращает экземпляр View для блока
     * @return {string}
     */
    getView() {
        var name = this.constructor.name;
        return name.substr(0, name.length - 10); // Controller
    }

    /**
     * Метод-заглушка для обработки запроса
     * Возвращает признак необходимости редиректа
     * @param {AppRequestCtx} ctx
     * @return {boolean}
     */
    handleRequest(ctx) {
        return false;
    }

    /**
     * Позволяет наследникам определить возможность кроссдоменных запросов установкой заголовков ответа
     * @param {http.ServerResponse} res
     */
    allowCrossDomain(res) {}

    /**
     * Отрисовывает View при необходимости
     * @param {http.ServerResponse} res
     * @return {?string}
     */
    render(res) {
        return this.redirect
            ? res.redirect(this.redirect)
            : res.render(this.getView(), this.ctx.getTemplateParams());
    }
}

module.exports = AbstractBlockController;
