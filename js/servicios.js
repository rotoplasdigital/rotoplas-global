jQuery(document).ready(function($){
    ////// TABS
        //$('#bebbia, #bebederos, #rieggo, #plomerisimo').css( 'display' , 'none' );
        $('.tab').click(function(){
            the_tab = $(this).attr('data');
            $('.tab').removeClass('tab-selected');
            $(this).addClass('tab-selected');
            $('.tab-nodo:visible').fadeOut( 'fast' , function(){
                $("#" + the_tab ).fadeIn();
            });
        });
    //
});