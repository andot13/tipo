$(document).ready(function() {
    $('.animate-fadein-left').addClass("hidden-elem").viewportChecker({
        classToAdd: 'visible-elem animated fadeInLeft',
        offset: 100,
        repeat: true
   	});

   	$('.animate-fadein-right').addClass("hidden-elem").viewportChecker({
        classToAdd: 'visible-elem animated fadeInRight',
        offset: 100,
        repeat: true
   	});

   	$('.animate-fadein-down').addClass("hidden-elem").viewportChecker({
        classToAdd: 'visible-elem animated fadeInDown',
        offset: 100,
        repeat: true
   	});

  	$('.animate-fadein').addClass("hidden-elem").viewportChecker({
        classToAdd: 'visible-elem animated fadeIn',
        offset: 100,
        repeat: true
   	});


});