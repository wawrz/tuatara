$(document).ready(function(){
    $(".link-element").click(function(){
            $.ajax({
            url: "http://httpbin.org/post",
            data: {
            mail: $("input#inp")[0].value,
            question: $("input#inp2")[0].value,
            },
            type: 'POST',
            success: function (resp) {
                alert("your e-mail: " + JSON.stringify(resp.form.mail)
                + " and question:" + JSON.stringify(resp.form.question));
            },
            error: function(e) {
                alert('Error: '+ JSON.stringify(e.status));
            }  
        });
    });
});