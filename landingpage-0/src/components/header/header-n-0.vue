<template>
    <div class="navegacion">
    <!--<CABECERA>-->
	<header class="header">
    <div class="container no-padding text-left">
        <div class="col-lg-6 col-md-6 col-sm-5 col-xs-7 no-padding-right text-left">
            <a href="https://www.aicad.es/" title="AICAD" data-rel="nueva_ventana" class="hidden-xs logo-aicad">
                <img src="img/comunes/aicad_header.png" class="img-responsive pull-left" alt="" title="" />
            </a>
            <a href="http://www.aicad.es/" title="AICAD" data-rel="nueva_ventana" class="hidden-xs logo-aicad">
                <img src="img/comunes/pc_header.png" class="img-responsive logo-aicad pull-left" alt="" title="" />
            </a>

            <div class="col-xs-12 visible-xs">
                <a href="https://www.aicad.es/" title="AICAD" data-rel="nueva_ventana">
                    <img src="img/comunes/aicad_header.png" class="img-responsive" alt="" title="" />
                </a>
            </div>

            <div class="col-xs-12 visible-xs">
                <a href="http://www.aicad.es/" title="AICAD" data-rel="nueva_ventana">
                    <img src="img/comunes/pc_header.png" class="img-responsive logo-aicad hidden-xs" alt="" title="" />
                    <img src="img/comunes/pc_header.png" class="img-responsive logo-icad hidden-sm hidden-md hidden-lg" alt="" title="" />
                </a>
            </div>
        </div>
        <!--<BOTÓN HAMBURGUESA>-->
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-4 no-padding-left no-padding-right button_menu text-center pull-right">
            <button id="nav-expander" class="nav-expander fixed pull-right hidden-xs" href="#" @click.prevent.stop="menuSlider(1, 0)">
                <i class="fa fa-bars"></i>
            </button>
            <button type="button" class="navbar-toggle collapsed nav-expander fixed pull-right">
                <i class="fa fa-bars"></i>
            </button>
        </div>
        <!--</BOTÓN HAMBURGUESA>-->
        <div class="col-lg-5 col-md-5 col-sm-6 col-xs-5 no-padding-right no-padding-left">
                <ul class="navbar-nav nav pull-right top_links">                    
                    <li class="hidden-xs"><a>Síguenos</a></li>
                    <li class="hidden-xs"><a href="https://twitter.com/abusinessschool" title="Twitter AICAD" data-rel="nueva_ventana"><i class="fab fa-twitter-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://www.facebook.com/AICADBUSINESSSCHOOL/" title="Facebook AICAD" data-rel="nueva_ventana"><i class="fab fa-facebook-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://plus.google.com/+AicadEslaspalmas/about" title="Google pluss AICAD" data-rel="nueva_ventana"><i class="fab fa-google-plus-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw" title="Youtube AICAD" data-rel="nueva_ventana"><i class="fab fa-youtube-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://www.instagram.com/aicad/" title="Instagram AICAD" data-rel="nueva_ventana"><i class="fab fa-instagram"></i></a></li>
                    <li class="hidden"><a href="" title="">ES</a></li>
                    <li class="margin-left"><a href="/aicad/">ES</a></li>
                    <li><span>|</span></li>
                    <li class="last"><a href="">EN</a></li>
                </ul>

        </div>

        <div class="col-xs-12 menu_movil hidden-sm hidden-md hidden-lg">
            <nav class="navbar-default" role="navigation">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="visible-xs active"><a href="/aicad/" title="">Inicio</a></li>
                            <li class="visible-xs"><a href="/aicad/acceso-miembros" title=""><u>Acceso miembros</u></a></li>
                            <li class="visible-xs "><a href="/aicad/faqs" title="">Faq´s</a></li>
                            <li class="dropdown" cursor="pointer">
                                <a class="dropdown-toggle " data-toggle="dropdown" cursor="pointer">¿QUÉ ES?</a>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                    <li ><a href="/aicad/que-es/informacion">INFORMACIÓN</a></li>
                                    <li ><a href="/aicad/que-es/ventajas-de-participar">VENTAJAS DE PARTICIPAR</a></li>
                                    <li ><a href="/aicad/que-es/metodo-de-competicion">MÉTODO DE COMPETICIÓN</a></li>
                                    <li ><a target="_blank" href="">BASES</a></li>
                                    <li ><a href="/aicad/que-es/empresas-colaboradoras">EMPRESAS COLABORADORAS</a></li>
                                </ul>
                            </li>
                            <li ><a href="/aicad/quienes-pueden-participar" title="">¿QUIÉNES PUEDEN PARTICIPAR?</a></li>

                            <li class="dropdown" cursor="pointer">
                                <a class="dropdown-toggle " data-toggle="dropdown">¿CÓMO PARTICIPAR?</a>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                    <li ><a href="/aicad/como-participar/informacion">INFORMACIÓN</a></li>
                                    <li ><a href="/aicad/como-participar/fases-de-la-competicion">FASES</a></li>
                                </ul>
                            </li>

                            <li ><a href="/aicad/los-premios" title="">LOS PREMIOS</a></li>
                            <li ><a href="/aicad/global-experience" title="">GLOBAL EXPERIENCE</a></li>
                            <li class="inscribete "><a href="/aicad/inscribete" title="">INSCRÍBETE<img src=""></a></li>
                            <li class="last "><a href="/aicad/sobre-aicad" title="">SOBRE AICAD</a></li>
                        </ul>
                    </div>
                 </div>
            </nav>
        </div>
    </div>
</header>
</div>
<!--<CABECERA>-->
</template>
<script>

export default {
    name: "navegacion",
    components: {

    },
    methods: {
        /*----------------------<MENU SLIDER>----------------------*/
        menuSlider(Actvr, Accns){
        var nav_expander;
        var nav_close;
        var widthNav;
        switch(Actvr){

            case 0:

            break;

            case 1:
            switch(Accns){
                // <APERTURA> //
                case 0:
                    nav_expander = document.getElementById("nav-expander");
                    widthNav = (((innerWidth - document.getElementsByClassName('.container').width) / 2) + document.getElementsByClassName('.nav-expander').width);
                    if(widthNav > 100) {
                        if(document.querySelector('body').getAttribute('class') == document.getElementsByClassName('nav-expanded')) {
                        document.querySelector('.nav-menu').setAttribute('style',"width:-20em");
                        } else {
                        document.querySelector('.nav-menu').getAttribute('style',"width:"+widthNav+"px");
                        }
                    }
                    document.querySelector('body').classList.toggle('nav-expanded');
               
                break;
                // </APERTURA> //
                
                // <CERRAR> //
                case 1:
                    nav_close = document.getElementById("nav-close");                    
                    document.querySelector('body').classList.remove('nav-expanded');
                    document.querySelector("body").removeAttribute("class");
                    document.querySelector('body').getAttribute('style',"width:-20em");
                break;
                // </CERRAR> //
            }
            break;
        }
        }
    }   
    }
</script>
<style scoped>
    header{ background-color:#28394d; box-shadow: 0 10px 16px 0 rgba(150,150,150,0.2),0 0px 20px 0 rgba(150,150,150,0.19) !important; }
    header .navbar-nav {margin: 0 !important;}
header .navbar-nav > li > a{padding: 22px 2px 13px;color:#fff;font-family: 'Lato', sans-serif;font-size: 12px;top:20px;display: inline;}
header .menu_movil li a{display: block;padding: 15px 0 15px 15px;font-family: 'Lato', sans-serif;font-size: 12px;}
    header .navbar-nav > li > span{color: #FE3333;font-size: 12px;position: relative;top: 19px;}
    header .navbar-nav li.margin-left{margin-left:14px;}
    header .navbar-nav li.last{margin-right:15px;}
    header .navbar-nav > li.no_activo a{color:#767676}
    header .navbar-nav > li > a i{font-size: 22px;position:relative;color:#fff;}
        header .navbar-nav > li > a i:hover,.footer .last_footer ul li i:hover{color:#fff;}
    header .nav-expander{background-color:transparent;color:#fff !important;min-height: 59px;width: 65px;padding:0;border-radius: 0;border:0 none;} /* min-height: 70px; */
        header .nav-expander:hover,header button.nav-expander:active{background-color: #444 !important; border-radius:50%;}
        header .nav-expander i{font-size: 40px;}
        header .navbar-nav li img.bandera_idioma{margin: 0 2px;}
        .header .top_links{position: relative;left:20px;}
		 .header .top_links li a{z-index: 105;}
        .header .button_text{position: absolute;top:1px;left:45px;font-size: 12px;}
    .nav-menu{background-color:#000;margin-top:0;border-radius: 0;border: 0 none;padding:0 0 0 15px;z-index: 3 !important;border-left: 1px solid #000;}
        .nav-menu ul.main-menu{margin-top:70px;}
.nav-expanded nav {right: 0 !important;}
            .main-menu li.first{border:none;padding:0 0 0 15px;}
            .main-menu li.first i{font-size: 20px;}
            .main-menu li.last{height:100px;border:0 none;}
            .main-menu li a{color:#fff;padding:15px 10px;font-family: 'Lato', sans-serif; text-decoration: none;border-bottom: 1px solid #5d6165;display: block;}
            .main-menu li a#nav-close{background-color: transparent;border:0 none}
            nav li:hover > a, nav li.open > a{background-color: #CE1719; color: white !important; opacity: 1 !important; }
            nav li.active a,nav li.active-dropdown li.active a{background-color: #232323;}
            .menu_movil li:hover a,.menu_movil li:hover li:hover a,.menu_movil li.open li:hover a,.menu_movil li.active a,.menu_movil li.active-dropdown li.active a{background-color: #EBECF1;}
            nav li a.active-dropdown{background-color: #CD1719;color:#ffffff !important; }
            nav li:hover li a, .nav li:hover li a{ background-color: #000; color: #c3c3c3; }
            .main-menu li.inscribete a{color:#FFD200;; }
            .main-menu li.inscribete a img{position: relative;top:-12px;left:3px;}
            .main-menu li ul { padding-left: 0;list-style-type: none; }
            .main-menu li ul li { border: 0;padding-left: 10px;}.main-menu li a
header .button_menu{z-index: 100;}
nav .open{padding-bottom: 0;}

header .texto-logos{ color:#fff; font-family: 'Lato', sans-serif; font-size: 10px;  margin-left: 10px; margin-right: 10px; margin-top: 10px; float: left; }

#twitter-widget-0{width: 100% !important;}
.fb-widget{width: 100% !important;}
.migas ul { padding-left: 0;display: inline-block;float:right;}
.migas ul li { display: inline; }
.migas ul li a { color: #000000; font-size: 12px; }
.migas ul li i{color: #CE1719;}
</style>