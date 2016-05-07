changeMenuTabs = function(selected) {
    $('.pointing.menu a').each(function(index){
        $(this).removeClass('active');
    })
    $(selected).addClass('active');
};

release = function(){
    if (this.releaseDate) {
        var m = moment(this.releaseDate).utc();
        return moment(m).format("MMMM Do YYYY");
    } else {
        return false;
    }
};