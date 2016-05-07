changeMenuTabs = function(selected) {
    $('.pointing.menu a').each(function(index){
        $(this).removeClass('active');
    })
    $(selected).addClass('active');
};