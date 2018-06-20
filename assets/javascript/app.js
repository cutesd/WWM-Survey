
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
        var pageCnt;

        this.start = init;

        function init() {
            pageCnt = 0;
            $('#btnPrev').on("click", function () {
                nextPage(pageCnt++);
            });
            $('#btnNext').on("click", function () {
                prevPage(pageCnt--);
            });
        }

        function nextPage(n) {
            console.log("nextPage", n);
            if (mainDiv !== undefined) {
                mainDiv.addClass('d-none');
            }
            var pageObj = page_arr[n]
            mainDiv = $(pageObj.div);
            mainDiv.removeClass('d-none');

            eval(pageObj.val + "Page(" + n + ")");

        }

        function prevPage(n) {

        }

        function welcomePage(n) {
            console.log('welcome', n);
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
            val: "result",
            div: "resultDiv"
        }
    ];

    var mySurvey = new Survey(pages);
    mySurvey.start();



});