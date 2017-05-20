var Utils = require('../utils/Utils');

class Model {

    /**
     * @typedef {Object} News
     * @property {number} rubric
     * @property {number} date
     * @property {string} title
     * @property {string} [image]
     * @property {Array.<string>} [text]
     */

    /**
     * @typedef {Object} Rubric
     * @property {number} rating
     * @property {string} title
     */

    constructor() {
        /** @type News */
        this.news = {
            0: {
                rubric: 0,
                title: 'Генпрокуратура внесла представление Мединскому',
                date: 1494774066492,
                text: [
                    'Генеральная прокуратура России внесла представление министру культуры Владимиру Мединскому. Об этом в понедельник, 5 сентября, сообщается на сайте надзорного органа. Оно связано с порядком ввоза в страну культурных ценностей для личного пользования.',
                    'Речь идет о провозе предметов через белорусско-российскую и казахско-российскую границы. В июле 2010 года три страны заключили между собой договор, который освобождает от уплаты таможенных платежей при ввозе в то или иное государство товаров личного пользования.',
                    'Тем не менее Минкульт создал временный порядок ввоза культурных ценностей, по которому граждане обязаны заплатить за их осмотр (экспертизу). Однако и федеральный закон «О вывозе и ввозе культурных ценностей» предусматривает плату за экспертизу только в отношении вывозимых товаров.',
                    'Таким образом, путешественники не могут в полной мере воспользоваться своим правом бесплатно ввозить в Россию культурные объекты для личного пользования.',
                    '«Это создает предпосылки для коррупционных проявлений со стороны сотрудников таможенных органов и экспертов», — заключает Генпрокуратура.',
                    'По информации органа, экспертизу Минкульт поручил коммерческой организации, хотя это могут делать и подчиненные ведомству учреждения.'
                ],
                image: 'public/uploads/pic_e6fc60b990b09f294f73974d23b95c41.jpg'
            },
            1: {
                rubric: 1,
                title: 'Космос на Земле',
                date: 1494773066392,
                text: [
                    'Практически у каждого на смартфоне установлены картографические сервисы. При этом немногие задумываются, как эти карты появились и почему они настолько точные. Объяснение этому есть, оно довольно простое: добиться такой точности при столь огромных масштабах удалось благодаря космическим аппаратам, которые на протяжении многих лет проводят дистанционное зондирование Земли.',
                    'Так как мониторинг из космоса ведется на постоянной основе, благодаря спутниковым технологиям удается, например, предупреждать стихийные бедствия и оценивать ущерб от них. В частности — наводнения и лесные пожары. В случае последних, особенно когда они происходят в удаленных районах, свежие спутниковые снимки особенно актуальны, ведь они показывают масштаб пожаров и направление распространения огня. Вкупе с метеорологическими прогнозами подобная информация позволяет оперативно разработать стратегию борьбы с возгораниями.',
                    'Кроме всего прочего, дистанционное зондирование Земли позволяет проводить мониторинги сельскохозяйственного, природоохранного и строительного характера, в том числе и выявляя законодательные нарушения.',
                    'Всеми этими делами за пределами планеты занимается Государственная корпорация «РОСКОСМОС». Но не каждому известно, что Корпорация активно работает и на Земле.'

                ],
                image: 'public/uploads/detail_9943ac211b4e7c60148ef8dff3e8187a.jpg'
            },
            2: {
                rubric: 1,
                title: 'Что скрывается на секретной подледной базе США',
                date: 1494772066292,
                text: [
                    'Американцы заинтересовались Гренландией еще во время Второй мировой, получив от посла оккупированной Дании разрешение на использование острова в целях обороны (с 1814 года Гренландия — датская колония). Холодная война сделала остров жизненно важным для противовоздушной обороны — кратчайший путь для стратегических бомбардировщиков и ракет из СССР в США проходил через Гренландию.',
                    'Уже в 1951 году американцы построили там свою самую северную авиабазу Туле (в 1118 километрах к северу от полярного круга). Но вскоре Пентагон решил, что стратегические бомбардировщики и радиолокационная станция не способны защитить США от неожиданного прорыва «красных» через Арктику. Родился проект «Ледяной червь» (Project Iceworm): разместить на острове 600 межконтинентальных баллистических ракет (МБР), постоянно перемещающихся по рельсам в туннелях под ледяным щитом.',
                    'Для маскировки оборонного проекта общественности предложили не секретный и устрашающий, а открытый и утопичный план — построить в Гренландии идеальный подледный город, где ученые, инженеры и военные будут вместе решать свои творческие задачи. Лагерь Camp Century («Столетие») должен был стать символом морального и технического превосходства «свободного мира», покоряющего Арктику.'
                ]
            },
            3: {
                rubric: 2,
                title: 'Сборная России обыграла Гану, прервав серию из семи матчей без побед',
                date: 1494771066192,
                text: [
                    'Сборная России по футболу одержала победу над командой Ганы в товарищеском матче в рамках подготовки к домашему чемпионату мира-2018. Встреча, прошедшая в Москве на стадионе «Локомотив», завершилась со счетом 1:0. Единственный мяч забил Федор Смолов на 20-й минуте.'
                ],
                image: 'public/uploads/online_dca30f870e07f68183447216098914f6.jpg'
            }

        };

        /** @type Rubric */
        this.rubrics = {
            0: {
                rating: 3,
                title: 'Культура'
            },
            1: {
                rating: 2,
                title: 'Наука'
            },
            2: {
                rating: 1,
                title: 'Спорт'
            }
        };
    }

    /**
     *
     * @param {number|string} [rubricId]
     * @returns {Object.<News>}
     */
    getAllNews(rubricId) {
        var newsList = {};
        for (var newsId in this.news) {
            if (this.news.hasOwnProperty(newsId)) {
                if (rubricId === undefined || this.news[newsId].rubric === Number(rubricId)) {
                    newsList[newsId] = JSON.parse(JSON.stringify(this.news[newsId]));
                    newsList[newsId]._id = Number(newsId);
                }
            }
        }

        return newsList;
    }

    /**
     * @returns {Object.<Rubric>}
     */
    getAllRubrics() {
        var rubricsList = JSON.parse(JSON.stringify(this.rubrics));
        for (var rubricId in rubricsList) {
            if (rubricsList.hasOwnProperty(rubricId)) {
                rubricsList[rubricId]._id = Number(rubricId);
            }
        }

        return rubricsList;
    }

    /**
     *
     * @param {number} [rubricId]
     * @returns {Array.<News>}
     */
    getNewsListSortByDate(rubricId) {
        return Object.values(this.getAllNews(rubricId)).sort((n1, n2) => {
            return n2.date - n1.date;
        });
    }

    /**
     *
     * @param {string|Object}content
     * @returns {Object}
     */
    prepareContent(content) {
        var processedContent = {};
        var parsedContent = (typeof content === 'string')
            ? JSON.parse(content)
            : content;
        for (var key in parsedContent) {
            if (parsedContent.hasOwnProperty(key)) {
                switch (key) {
                    case 'date':
                    case 'rubric':
                        processedContent[key] = Number(parsedContent[key]);
                        break;
                    case 'title':
                        processedContent[key] = Utils.escapeHTML(parsedContent[key]);
                        break;
                    case 'text':
                        processedContent[key] = !Array.isArray(parsedContent[key])
                            ? []
                            : parsedContent[key].map(textItem => {
                                return Utils.escapeHTML(textItem);
                            });
                        break;
                    default:
                        processedContent[key] = parsedContent[key];
                }
            }
        }

        return processedContent;
    }

    /**
     *
     * @param {number} id
     * @param {Object} content
     */
    saveNews(id, content) {
        this.news[id] = Object.assign(this.news[id], this.prepareContent(content));
    }

    /**
     *
     * @param {number} id
     */
    removeNews(id) {
        delete this.news[id];
    }

    /**
     *
     * @param {string} id
     * @return {boolean}
     */
    isNewsExists(id) {
        return this.news.hasOwnProperty(id);
    }

    /**
     *
     * @param {Object} content
     */
    createNews(content) {
        var id = Math.max.apply(null, Object.keys(this.news)) + 1;
        this.news[id] = this.prepareContent(content);
    }

    /**
     *
     * @returns {Array.<Rubric>}
     */
    getRubricsListSortByRating() {
        return Object.values(this.getAllRubrics()).sort((r1, r2) => {
            return r2.rating - r1.rating;
        });
    }

    /**
     *
     * @param {number} id
     * @param {Object} content
     */
    saveRubric(id, content) {
        this.rubrics[id] = Object.assign({}, this.rubrics[id], this.prepareContent(content));
    }

    /**
     *
     * @param {string} query
     * @returns {Array.<News>}
     */
    search(query) {
        var searchResult = [];

        if (query) {
            var newsList = this.getNewsListSortByDate();
            var rQuery = new RegExp(query, "ig");
            var highlight = function (string) {
                return string.replace(rQuery, (str) => {
                    return "<mark>" + str + "</mark>";
                });
            };

            newsList.forEach(news => {
                var itemResult = {
                    link: Utils.getLink('EditNews', {
                        id: news._id
                    })
                };
                var found = false;

                if (news.title.match(rQuery)) {
                    itemResult.title = highlight(news.title);
                    found = true;
                }

                if (Array.isArray(news.text)) {
                    for (var textIndex = 0; textIndex < news.text.length; textIndex++) {
                        var text = news.text[textIndex];
                        if (text.match(rQuery)) {
                            var sentences = text.split('. ');
                            for (var sentenceIndex = 0; sentenceIndex < sentences.length; sentenceIndex++) {
                                if (sentences[sentenceIndex].match(rQuery)) {
                                    itemResult.text = highlight(sentences[sentenceIndex]) + '.';
                                    break;
                                }
                            }

                            found = true;
                            break;
                        }
                    }
                }

                if (found) {
                    var rubrics = this.getAllRubrics();

                    itemResult.title = itemResult.title || news.title;
                    itemResult.image = news.image;
                    itemResult.date = news.date;
                    itemResult.rubric = rubrics[news.rubric].title;
                    if (!itemResult.text) {
                        itemResult.text = Array.isArray(news.text)
                            ? news.text[0]
                            : null;
                    }

                    searchResult.push(itemResult);
                }
            });
        }

        return searchResult;
    }
}

module.exports = new Model();