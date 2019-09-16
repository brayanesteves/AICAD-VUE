<template>
    <div class="navegacion">
    <!--<CABECERA>-->
	<header class="header">
    <div class="container no-padding text-left">
        <div class="col-lg-6 col-md-6 col-sm-5 col-xs-7 no-padding-right text-left">
            <a href="https://www.aicad.es/" title="AICAD" class="hidden-xs logo-aicad">
                <img src="img/comunes/aicad_header.png" class="img-responsive pull-left" alt="" title="" />
            </a>
            <a href="http://www.aicad.es/" title="AICAD" class="hidden-xs logo-aicad">
                <img src="img/comunes/pc_header.png" class="img-responsive logo-aicad pull-left" alt="" title="" />
            </a>

            <div class="col-xs-12 visible-xs">
                <a href="https://www.aicad.es/" title="AICAD">
                    <img src="img/comunes/aicad_header.png" class="img-responsive" alt="" title="" />
                </a>
            </div>

            <div class="col-xs-12 visible-xs">
                <a href="http://www.aicad.es/" title="AICAD">
                    <img src="img/comunes/pc_header.png" class="img-responsive logo-aicad hidden-xs" alt="" title="" />
                    <img src="img/comunes/pc_header.png" class="img-responsive logo-icad hidden-sm hidden-md hidden-lg" alt="" title="" />
                </a>
            </div>
        </div>
        <!--<BOTÓN HAMBURGUESA>-->
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-4 no-padding-left no-padding-right button_menu text-center pull-right">
            <button id="nav-expander" class="nav-expander fixed pull-right hidden-xs" href="#" @click.prevent="menuSlider(1, 0)">
                <i class="fa fa-bars"></i>
            </button>
            <button type="button" class="navbar-toggle collapsed nav-expander fixed pull-right"  @click.prevent="menuSlider(1, 2)">
                <i class="fa fa-bars"></i>
            </button>
        </div>
        <!--</BOTÓN HAMBURGUESA>-->
        <div class="col-lg-5 col-md-5 col-sm-6 col-xs-5 no-padding-right no-padding-left">
                <ul class="navbar-nav nav pull-right top_links">                    
                    <li class="hidden-xs"><a>Síguenos</a></li>
                    <li class="hidden-xs"><a href="https://twitter.com/abusinessschool" title="Twitter AICAD"><i class="fab fa-twitter-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://www.facebook.com/AICADBUSINESSSCHOOL/" title="Facebook AICAD"><i class="fab fa-facebook-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://plus.google.com/+AicadEslaspalmas/about" title="Google pluss AICAD"><i class="fab fa-google-plus-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw" title="Youtube AICAD"><i class="fab fa-youtube-square"></i></a></li>
                    <li class="hidden-xs"><a href="https://www.instagram.com/aicad/" title="Instagram AICAD"><i class="fab fa-instagram"></i></a></li>
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
                                <a class="dropdown-toggle ">¿QUÉ ES?</a>
                                <ul class="dropdown-menu">
                                    <li ><a href="/aicad/que-es/informacion">INFORMACIÓN</a></li>
                                    <li ><a href="/aicad/que-es/ventajas-de-participar">VENTAJAS DE PARTICIPAR</a></li>
                                    <li ><a href="/aicad/que-es/metodo-de-competicion">MÉTODO DE COMPETICIÓN</a></li>
                                    <li ><a target="_blank" href="">BASES</a></li>
                                    <li ><a href="/aicad/que-es/empresas-colaboradoras">EMPRESAS COLABORADORAS</a></li>
                                </ul>
                            </li>
                            <li ><a href="/aicad/quienes-pueden-participar" title="">¿QUIÉNES PUEDEN PARTICIPAR?</a></li>

                            <li class="dropdown" cursor="pointer">
                                <a class="dropdown-toggle ">¿CÓMO PARTICIPAR?</a>
                                <ul class="dropdown-menu">
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
    data(){
        return {
            Activar: false
        }
    },
    methods: {
        /*----------------------<MENU SLIDER>----------------------*/
        menuSlider: function(Actvr, Accns){
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

                
                case 2:
                    if(this.Activar == true){
                        this.Activar = false;
                        document.querySelector('#bs-example-navbar-collapse-1').classList.add('collapse');
                    }else{
                        this.Activar = true;
                        document.querySelector('#bs-example-navbar-collapse-1').classList.remove('collapse');
                    }
                    
                    break;

                default:
                    alert("Opción inexistente");
                    break;
            }
            break;
        }
        }
    }   
    }
</script>
<style scoped>

</style>