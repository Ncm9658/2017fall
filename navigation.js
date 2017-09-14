    $(function(){
        $("#header-placeholder").load("_header.html");

        $(".nav-link").removeClass("active");
        $('.nav-link[href$="singup.html"]').addClass("active");

        $(".btn-primary").click(function(){
            $(this).closest(".col-md-4").css({'max-width' : 'none'})
            .animate({'flex-basis' : '100%'})
        });
    });