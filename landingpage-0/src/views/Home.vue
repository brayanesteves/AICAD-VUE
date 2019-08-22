<template>
  
    <!--*****************************<CONTENIDO>*********************************-->
<main>
  <div class="home text-center">
        <!--********************<SECCIÓN Nº0>********************-->
        <div class="banner_principal">
          <!--<SLIDERSHOW>-->
            <div id="slider" class="slider elementos">
              <div class="slide item vertical">
              </div>
                <div class="slide item vertical">
              </div>
              <div class="slide item vertical">
              </div>
              <div class="slide item vertical">
              </div>
            </div>            
            <!--<SLIDERSHOW>-->
            <div class="cont_logo">
                <div class="container">
                    <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4 logo_aicad no-padding hidden-xs">
                        <img src="img/home/aicad.png" class="img-responsive pull-left" alt="AICAD" title="AICAD" />
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4 logo_aicad no-padding visible-xs">
                        <img src="img/home/aicad.png" class="img-responsive" alt="AICAD" title="AICAD" style="margin-top: 35px;"/>
                    </div>
                </div>
            </div>
            
        </div>     
        <!--********************</SECCIÓN Nº0>********************-->
        <div class="container">
          <div class="row">
              <div class="col-xs-12 text-center">
                  <h1>PRACTICAS EN EMPRESAS<br>Prácticas en empresas <strong><span>Madrid</span></strong></h1>
              </div>
          </div>
          <div class="row cont_circulos text-center">
              <ul class="list-inline">
                  <li class="circulo"><p><strong>+10000</strong><br><span class="descripcion">ALUMNOS</span></p></li>
                  <li class="circulo"><p><strong>+2500</strong><br><span class="descripcion">EMPRESAS</span></p></li>
                  <li class="circulo"><p><strong>200</strong><br><span class="descripcion">UNIVERSIDADES<br />EN EUROPA</span></p></li>
                  <li class="circulo"><p><strong>5</strong><br><span class="descripcion">CONTINENTES</span></p></li>
                  <li class="circulo"><p><strong>120</strong><br><span class="descripcion">PAISES</span></p></li>
                  <li class="circulo"><p><strong>15000</strong><br><span class="descripcion">PROGRAMAS</span></p></li>
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
              <a class="btn btn-default" href="/aicad/inscribete" title="">
                  QUIERO MATRICULARME AHORA
              </a>
          </div>
      </div>
        
     
        <!--********************<SECCIÓN Nº1>********************-->
        <!--********************<SECCIÓN: INSCRIBETE>********************-->
        <div class="inscribete_home">
          <!--********************<SECCIÓN: TIEMPO>********************-->
            <div  class="seccion_tiempo">
                <div id="seccion_tiempo" class="container">
                        <div class="row">
                            <div class="col-xs-12 text-center countdown-anuncio">
                                <h3>AICAD BUSINESS SCHOOL TE ABRE LAS PUERTAS <br><span>A PRÁCTICAS EN EMPRESAS  ALREDEDOR DEL MUNDO</span></h3>
                                <p class="texto text-center">EMPIEZA EN </p>
                            </div>
                            <div class="col-xs-12">
                            <div id="countdown" class="countdown text-center">
                              <ul>
                              <tiempo  v-for="(times, index) in times" :key="index" v-bind="time=times" />
                              </ul>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
                <!--********************</SECCIÓN: TIEMPO>********************-->
            </div>
            <!--********************</SECCIÓN: INSCRIBETE>********************-->
  <!--********************</SECCIÓN Nº1>********************-->
  </div>
</main>

    <!--*****************************</CONTENIDO>*********************************-->
</template>

<script>
import tiempo from '@/components/contain/section/tiempo/tiempo-n-0.vue'
export default {
  
  props: ["time"],
  components: {
    tiempo,
  },
  
  
  }

</script>
