$(function(){

	

    $('.anchor_link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 150
        },500);
    });

    
});


