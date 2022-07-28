jQuery(document).ready(function($){
    console.log('productos');
    the_tab = "almacenamiento"
    // Obtencion de la region
        pais = geoplugin_countryCode()
        console.log("Country: " + pais)
        productosOcultarMostrar()
        /* $.get("https://ipinfo.io", function (response) {
            pais = response.country;
            console.log("Country: " + pais);
            productosOcultarMostrar();
        }, "jsonp"); */
    // tabs
        $('#agroindustria, #conduccion, #purificacion, #tratamiento, #calentamiento, #tuberia').css( 'display' , 'none' )
        $('.tab').click(function(){
            the_tab = $(this).attr('data')
            $('.tab').removeClass('tab-selected')
            $(this).addClass('tab-selected')
            $('.tab-nodo:visible').fadeOut( 'fast' , function(){
                $("#" + the_tab ).fadeIn()
            })
        });
    // botones de pais
        // CAM = Guatemala/GT, El Salvador/SV, Honduras/HN, Nicaragua/NI, Costa rica/CR
        $('.producto-pais').click(function(){
            pais = $(this).attr('data')
            //console.log('producto-pais:' + pais);
            $('.producto-pais').removeClass('producto-pais-seleccion')
            $(this).addClass('producto-pais-seleccion')
            productosOcultarMostrar()
        });
    // funcion para ocultar productos segun el pais
        function productosOcultarMostrar() {
            if (pais == 'GT' || pais == 'SV' || pais == 'HN' || pais == 'NI' || pais == 'CR') {
                pais = 'CAM'
            }

            $(".tab").each(function(){
                if (!$(this).hasClass(pais)) {
                    $(this).css('display','none')
                } else {
                    $(this).css('display','inline-block')
                }
            });

            //console.log('productosOcultarMostrar');
            $(".productos-nodo").each(function(){
                if (!$(this).hasClass(pais)) {
                    $(this).css('display','none')
                } else {
                    $(this).css('display','inline-flex')
                }
            });

            //imagen_head = document.getElementById('head-' + the_tab);

            if (the_tab === "calentamiento" && pais === "AR") {
                document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/calentamiento-AR-head.jpg"
            } else if (the_tab == "calentamiento" && pais=="MX") {
                document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/calentamiento-MX-head.jpg"
            } else if (the_tab == "calentamiento" && pais=="PE") {
                document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/calentamiento-PE-head.jpg"
            } else if (the_tab === "tuberia" && pais === "AR") {
                document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/conduccion-AR-head.jpg"
            } else if (the_tab === "tratamiento" && pais === "AR") {
                document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/tratamiento-AR-head.jpg"
            }
        }
});