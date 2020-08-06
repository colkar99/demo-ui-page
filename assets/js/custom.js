$(function(){
    $('ul.level-1-menu li a').on('click', function() {        
        $(this).parent('li').addClass("active").siblings().removeClass("active");
        var currentIndex = $(this).parent('li').index();
        var equaleTab2 = $(".level-2-tab").eq(currentIndex);
        var equaleTab3 = $(".level-3-tab").eq(currentIndex);
        equaleTab2.addClass("active").siblings().removeClass("active");
        equaleTab2.find(".level-2-menu li:first-child").addClass("active").siblings().removeClass("active");
        equaleTab3.addClass("active").siblings().removeClass("active");
        equaleTab3.children(".level-3-inner-tab:first-child").addClass("active").siblings().removeClass("active");
    });
    $('ul.level-2-menu li a').on('click', function() {        
        $(this).parent('li').addClass("active").siblings().removeClass("active");
        var currentIndex = $(this).parent('li').index();        
        var equaleTab3 = $(".level-3-tab.active");
        var equaleInnerTab3 = equaleTab3.children(".level-3-inner-tab").eq(currentIndex);
        equaleInnerTab3.addClass("active").siblings().removeClass("active");        
    });
    $('ul.level-3-tab-menu li a').on('click', function() {        
        $(this).parent('li').addClass("active").siblings().removeClass("active");        
        var currentIndex = $(this).parent('li').index();        
        var equaleTab3 = $(this).parents("ul").siblings('.level-3-tab-content-container').find(".level-3-tab-content").eq(currentIndex);
        equaleTab3.addClass("active").siblings().removeClass("active");        
    });
});