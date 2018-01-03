$(function() {
    // ajax请求数据
    $.ajax({
        url: "http://localhost:3000",
        type: "GET",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('h2').text(data.data.title);

            data.data.list.forEach((element, index) => {
                let html = "";
                if (element.type == null) {
                    return
                }
                if (element.type === 'string') {
                    html +=
                        '<li class="list-group-item DanhangText">' +
                            '<p class="list-group-item-heading"><span class="Cindex">'+ (index+1) +'</span><span>. </span>'+ element.title +'<em class="isMust">*</em></p>' +
                            '<div class="answerBox">' +
                                '<p class="answer list-group-item-text">' +
                                    '<input type="text" name="5" class="oneLine">' +
                                '</p>' +
                            '</div>' +
                        '</li>';

                }
                if (element.type === 'textarea') {
                    html +=
                        '<li class="list-group-item DuohangText">' +
                            '<p class="list-group-item-heading"><span class="Cindex">' + (index+1) + '</span><span>. </span>' + element.title + '<em class="isMust">*</em></p>' +
                            '<div class="answerBox">' +
                                '<p class="answer list-group-item-text">' +
                                    '<textarea name="6" class="duoLine"></textarea>' +
                                '</p>' +
                            '</div>' +
                        '</li>'
                }
                if (element.type === 'checkbox') {
                    let options = element.extra;
                    options = options.split('|');

                    let optionsHtml = "";
                    console.log(options);
                    options.forEach(function(option, i) {
                        optionsHtml +=
                    '<li class="answer list-group-item-text">' +
                        '<input type="checkbox" name="2" value="'+ (index+1) +'" id="2-Radio-1" class="labelauty">' +
                        '<label class="answerName" for="2-Radio-1">' +
                            '<span class="labelauty-unchecked-image"></span>' +
                            '<span class="labelauty-unchecked">'+ option +'</span>' +
                            '<span class="labelauty-checked-image"></span>' +
                            '<span class="labelauty-checked">'+ option +'</span>' +
                        '</label>' +
                    '</li>';

                        console.log(optionsHtml)
                    });
                    html +=
                        '<li class="list-group-item button-holder">' +
                            '<p class="list-group-item-heading"><span class="Cindex">'+ (index+1) + '</span><span>. </span>'+ element.title + '<em class="isMust">*</em></p>' +
                            '<ul class="answerBox Checkbox">' +
                                '<!-- id动态生成，格式为Cindex-type-选项序列-->'
                                + optionsHtml +
                            '</ul>' +
                        '</li>'
                }
                if (element.type === 'select') {
                    let options = element.extra;
                    options = options.split('|');

                    let optionsHtml = "";
                    options.forEach((option, i) => {
                        optionsHtml += '<option value="'+ i +'">' + option +'</option>'
                    });
                    html +=
                        '           <li class="list-group-item XiaLa">\n' +
                        '                <p class="list-group-item-heading"><span class="Cindex">'+ (index+1) + '</span><span>. </span>'+ element.title +'<em class="isMust">*</em></p>\n' +
                        '                <div class="answerBox">\n' +
                        '                    <p class="answer list-group-item-text">\n' +
                        '                        <select name="3" id="">\n' +
                                                    optionsHtml +
                        '                        </select>\n' +
                        '                    </p>\n' +
                        '                </div>\n' +
                        '            </li>'
                }
                $('.list-group').append(html)
            })

        },

        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR)
        }
    });

});