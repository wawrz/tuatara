$(document).ready(function(){            
    $('.section-start h2 span').click(function() {
        var hasClicked = $(this).hasClass('animation-start');
        $(this).removeClass('animation-end');
        if(hasClicked) {
            $(this).addClass('animation-end');
            $(this).removeClass('animation-start');
        } else {
            var spans = $('.section-start h2 span');
            for (var i = 0; i < spans.length; i++) {
                if (spans[i].classList.contains('animation-start')) {
                    spans[i].classList.add('animation-end');
                    spans[i].classList.remove('animation-start');
                }
            }
            $(this).addClass('animation-start');
        }
    });
});