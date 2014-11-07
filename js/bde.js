var scroll_speed = 500, // en ms
    diapo_speed = 400,
    diapo_auto = 2500,
    home_appear_first_time = false;



jQuery(document).ready(function($){
    var main = $("#main"),
        nav = $("#navigation");
        nav_h = nav.height();
    var main_offset_top = parseInt(main.offset().top);

    console.log(
        $("nav").width()+", "+
        ($("nav a[href='#main']").width()+$("nav a[href='#wrap-diapo']").width()+$("nav a[href='#team']").width()+$("nav a[href='#contact']").width())
    );

    window.mySwipe = new Swipe(document.querySelector("#diapo"), {
        startSlide: 0,
        speed: diapo_speed,
        auto: diapo_auto,
        continuous: true
    });

    $(window).resize(function(){
        main_offset_top = parseInt(main.offset().top);
    });

	$(window).scroll(function(e){
        main.offset({top: main_offset_top});
        if(main.offset().top > nav.offset().top + 84){
            $("header").removeClass("nav-bar-colored");
            // $("footer").css("display", "none");
        }else{
            $("header").addClass("nav-bar-colored");
            // $("footer").css("display", "block");
        }
        if($("#diapo").offset().top > nav.offset().top){
            $("footer").css("display", "none");
        }else{
            $("footer").css("display", "block");
        }
        // if(!home_appear_first_time && ($("#actu .article h3").offset().top - main.offset().top) < nav.offset().top){
        //     home_appear_first_time = true;
        // }
    });

    $("nav a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        if(target != "#contact"){
            $('html, body').animate( { scrollTop: $(target).offset().top }, scroll_speed );
        }else{
            if($(document).width() < 1024){
                $('html, body').animate( { scrollTop: $("footer").offset().top }, scroll_speed );
            }else{
                $('html, body').animate( { scrollTop: $(document).height() }, scroll_speed );
            }
        }
		return false;
    });

    $("#go_articles").click(function(e){
        e.preventDefault();
        $('html, body').animate( { scrollTop: $("#wrap-home").offset().top }, scroll_speed );
        return false;
    })

});
