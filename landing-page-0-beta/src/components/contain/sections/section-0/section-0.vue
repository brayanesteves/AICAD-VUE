<template>
  <div class="banner_principal">
    <!--<SLIDERSHOW>-->

    <div class="slideshow"></div>
    <div class="content" v-on:scroll.passive="mediaQueries()">
      <!--<SLIDERSHOW>-->
      <div class="cont_logo">
        <div class="container">
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4 no-padding hidden-xs logo_aicad">
            <img
              :src="'img/home/aicad.png'"
              class="img-responsive pull-left"
              alt="AICAD"
              title="AICAD"
            />
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4 no-padding visible-xs logo_aicad">
            <img
              :src="'img/home/aicad.png'"
              class="img-responsive"
              alt="AICAD"
              title="AICAD"
              style="margin-top: 75px;"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-center">
            <h1>
              PRACTICAS EN EMPRESAS
              <br />Prácticas en empresas
              <strong>
                <span>Madrid</span>
              </strong>
            </h1>
          </div>
        </div>
        <div class="row cont_circulos text-center">
          <ul class="list-inline">
            <li class="circulo">
              <p>
                <strong>+10000</strong>
                <br />
                <span class="descripcion">ALUMNOS</span>
              </p>
            </li>
            <li class="circulo">
              <p>
                <strong>+2500</strong>
                <br />
                <span class="descripcion">EMPRESAS</span>
              </p>
            </li>
            <li class="circulo">
              <p>
                <strong>200</strong>
                <br />
                <span class="descripcion">
                  UNIVERSIDADES
                  <br />EN EUROPA
                </span>
              </p>
            </li>
            <li class="circulo">
              <p>
                <strong>5</strong>
                <br />
                <span class="descripcion">CONTINENTES</span>
              </p>
            </li>
            <li class="circulo">
              <p>
                <strong>120</strong>
                <br />
                <span class="descripcion">PAISES</span>
              </p>
            </li>
            <li class="circulo">
              <p>
                <strong>15000</strong>
                <br />
                <span class="descripcion">PROGRAMAS</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!--********************<SECCIÓN GAMING>********************-->
      <div class="seccion_gaming">
        <div class="container">
          <h2>¿Buscas oportunidades de formación con prácticas en empresas?</h2>
        </div>
      </div>
      <!--********************</SECCIÓN GAMING>********************-->
      <div class="participar text-center">
        <div class="container">
          <a class="btn btn-default" href="/aicad/inscribete" title>QUIERO MATRICULARME AHORA</a>
        </div>
      </div>
      <!--********************<SECCIÓN Nº1>********************-->
    </div>
  </div>
</template>
<script>
export default {
  name: "section0",
  methods: {
    /*----------------<MEDIA QUERIES>----------------*/
    mediaQueries: function() {
      if (innerWidth <= 414) {
        var slider = document.getElementsByClassName("elementos");
        var slide = document.getElementsByClassName("item");
        for (var i = 0; i < slider.length; i++) {
          slider[i].classList.remove("slider");
          slider[i].classList.add("slider-movil");
        }

        for (var i = 0; i < slide.length; i++) {
          slide[i].classList.remove("slide");
          slide[i].classList.add("slide-movil");
        }
      } else {
        var slider = document.getElementsByClassName("elementos");
        var slide = document.getElementsByClassName("item");
        for (var i = 0; i < slider.length; i++) {
          slider[i].classList.remove("slider-movil");
          slider[i].classList.add("slider");
        }
        for (var i = 0; i < slide.length; i++) {
          slide[i].classList.remove("slide-movil");
          slide[i].classList.add("slide");
        }
      }
      /*----------------</MDIA QUERIES>----------------*/
    }
  },
  created: function() {
    window.addEventListener("resize", this.mediaQueries());
    this.mediaQueries();
  },
  destroyed: function() {
    window.addEventListener("resize", this.mediaQueries());
  }
};
</script>
<style scoped>
.banner_principal{background-color:#0082c3;}
.cont_logo .logo-aicad img { height:62px; }
.cont_logo .logo_aicad { width:500px; margin:10px 0;  }
.home h1{font-family: 'Lato', sans-serif;font-size: 48px;color:#ffffff;line-height: 40px;margin-top: 10px;}
.home h1 strong{font-family: 'Lato', sans-serif;}
.content{position:absolute;top:10%;width:100%;color:#fff;}
@media only screen and (min-device-width :320px) and (max-device-width :414px) and (-webkit-min-device-pixel-ratio:1){
.logo_aicad{margin-top:30%}
.slideshow{display:none;}
}
</style>