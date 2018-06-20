
$(document).ready(function () {

    var Survey = function (page_arr) {

        var userData = {
            nameFirst: '',
            nameLast: '',
            email: '',
            phone: '',
            timeZone: '',
            state: '',
            country: '',
            answers: {}
        };


        var mainDiv;
        var pageObj;
        var pageCnt;
        var qCnt;

        this.start = init;

        function init() {
            pageCnt = qCnt = 0;
            nextPage(pageCnt);
        }

        function btnSetup() {
            $(mainDiv).find('#btnPrev').on("click", function () {
                console.log("clicked ", mainDiv);
                prevPage(--pageCnt);
            });
            $(mainDiv).find('#btnNext').on("click", submit);
        }

        function nextPage(n) {
            console.log("nextPage", n);
            if (mainDiv !== undefined) {
                mainDiv.addClass('d-none');
            }
            pageObj = page_arr[n];
            if (mainDiv !== undefined) console.log(page_arr[n].div, "<>", page_arr[n - 1].div);

            if (mainDiv == undefined || page_arr[n].div !== page_arr[n - 1].div) {
                console.log("notequal");
                mainDiv = $(pageObj.div);
                //
                btnSetup();
            }
            mainDiv.removeClass('d-none');
            eval(pageObj.val + "Page(" + n + ")");

        }

        function prevPage(n) {
            console.log("prevPage", n);
        }

        function submit() {
            if (pageObj.val !== 'welcome') {
                var form = mainDiv.find('#form-leadgen');
                console.log(form);
            }
            nextPage(++pageCnt);
        }

        function welcomePage(n) {
            console.log('welcome', n);
            mainDiv.find('.content-container').html("<h3>Welcome Page</h3>");
        }

        function leadgenPage(n) {
            console.log('leadgen', n);
        }

        function questionPage(n) {
            console.log('question', n);
            mainDiv.find('.content-container').html("<h3>Question " + n + " Page</h3>")
        }

        function resultsPage(n) {
            console.log('results', n);
            mainDiv.find('.content-container').html("<h3>Results Page</h3>")
        }

    }

    var pages = [
        {
            val: "welcome",
            div: "#welcomeDiv"
        },
        {
            val: "leadgen",
            div: "#leadgenDiv"

        },
        {
            val: "question",
            div: "#questionDiv",
            question: '',
            type: 'checkbox',
            responses: [
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                }
            ]
        },
        {
            val: "question",
            div: "#questionDiv",
            question: '',
            type: 'radio',
            responses: [
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                }
            ]
        },
        {
            val: "question",
            div: "#questionDiv",
            question: '',
            type: 'radio',
            responses: [
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                }
            ]
        },
        {
            val: "question",
            div: "#questionDiv",
            question: '',
            type: 'radio',
            responses: [
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                },
                {
                    answer: '',
                    value: ''
                }
            ]
        },
        {
            val: "question",
            div: "#questionDiv",
            question: '',
            type: 'textarea'
        },
        {
            val: "results",
            div: "#resultsDiv"
        }
    ];

    var mySurvey = new Survey(pages);
    mySurvey.start();



});