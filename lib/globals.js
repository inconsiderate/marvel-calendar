changeMenuTabs = function(selected) {
    $('.pointing.menu a').each(function(){
        $(this).removeClass('active');
    });
    $(selected).addClass('active');
};