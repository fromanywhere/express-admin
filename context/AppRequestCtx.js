/**
 * Контекст запроса
 * Хранит в себе идентификатор текущего состояния и параметры запроса
 */
class AppRequestCtx {

    /**
     *
     * @param {http.ClientRequest} req
     */
    constructor(req) {
        this.files = req.files;
        this.requestMethod = req.method;
        this.requestParams = req.hasOwnProperty('body')
            ? Object.assign({}, req.body, req.query)
            : req.query;
    }

    /**
     * Возвращает параметры запроса
     * @return {Object.<string>}
     */
    getRequestParams() {
        return this.requestParams;
    }

    /**
     *
     * @returns {?{}}
     */
    getFiles() {
        return this.files;
    }

    /**
     *
     * @returns {boolean}
     */
    isPOST() {
        return this.requestMethod === 'POST';
    }
}

module.exports = AppRequestCtx;