/**
 * Класс контекста для View
 * Позволяет писать в наследуемых классах произвольную логику обработки запрошенных данных из Model
 * Позволяет View получать не только данные из Model, но и состояние (State) приложения
 */
class ViewCtx {

    /**
     *
     * @param {AppRequestCtx} ctx
     */
    constructor(ctx) {
        /** @type {AppRequestCtx} */
        this.ctx = ctx;
    }

    /**
     *
     * @return {Object}
     */
    getTemplateParams() {
        return {};
    }
}

module.exports = ViewCtx;