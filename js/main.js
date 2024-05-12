$(function(){
    $('.anchor_link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 150
        },500);
    });

    function animatePositions() {
        var positions = ["pos1", "pos2", "pos3", "pos4"];
        var currentPosIndex = 0;

        setInterval(function() {
            $(".bg .elip").removeClass(positions[currentPosIndex]);
            currentPosIndex = (currentPosIndex + 1) % positions.length;

            $(".bg .elip").addClass(positions[currentPosIndex]);
        }, 1500); 
    }

    animatePositions();
});


