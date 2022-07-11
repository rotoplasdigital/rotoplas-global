/* ==============================================================
/*	INCIALIZAR includeHTML
/* ============================================================== */
includeHTML();


/* ==============================================================
/*	HIDE MENU
/* ============================================================== */
    
    //var logo = document.getElementById('navegacion-logo')
    //var logoMovil = document.getElementById('navegacion-logo-movil')
    var menu = document.getElementById('navegacion')
    var prevScrollpos = window.pageYOffset
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            menu.classList.add('scrolled-alternate')
            //logo.classList.remove('logo-oculto')
            //logoMovil.classList.remove('logo-oculto')
        } else {
            menu.classList.remove('scrolled-alternate')
            //logo.classList.add('logo-oculto')
            //logoMovil.classList.add('logo-oculto')
        }
        var currentScrollPos = window.pageYOffset;
        var currentWidth = document.documentElement.clientWidth;
        if (prevScrollpos > currentScrollPos) {
            menu.classList.remove('scrolled-down')
            menu.classList.add('scrolled-up')
        } else {
            menu.classList.remove('scrolled-up')
            menu.classList.add('scrolled-down')
        }
        prevScrollpos = currentScrollPos
    }

    /* var toggler = document.getElementById('navegacion-toggler')
    toggler.onclick = function() {
        if ( window.pageYOffset == 0 && menu.classList.contains('scrolled-alternate') ) {
            menu.classList.remove('scrolled-alternate')
        } else {
            menu.classList.add('scrolled-alternate')
        }
        
    } */
/* hide menu */