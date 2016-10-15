// 'POST'

class Input {

    constructor(params) {
        this.elm = params.elm;
        this.url = params.url;

        this._init();
    }

    _init() {
        $(this.elm).on('submit', this._handleSubmit);
    }

    _handleSubmit(e) {
        e.preventDefault();

        this.post(
            this.url, {
                'word': $(e.target).find('input').eq(0).val(),
                'rhyme': $(e.target).find('input').eq(1).val()
            }
        );
    }

    post(url, data) {

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        })
            .done(function () {
                window.log("success");
            })
            .fail(function () {
                window.log("error");
            })
            .always(function () {
                window.log("complete");
            });
    }
}

export default Input;