<template>
  
    <!--*****************************<CONTENIDO>*********************************-->
<main>
  <div class="home text-center">
        <!--********************<SECCIÓN Nº0>********************-->
        <div class="banner_principal" v-on:resize="mediaQueries">
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
              <div  class="seccion_tiempo" @load="Almcnr_Fch(1)">
    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 text-center countdown-anuncio">
                                <h3>AICAD BUSINESS SCHOOL TE ABRE LAS PUERTAS <br><span>A PRÁCTICAS EN EMPRESAS  ALREDEDOR DEL MUNDO</span></h3>
                                <p class="texto text-center">EMPIEZA EN </p>
                            </div>
                            <div class="col-xs-12">
                            <div id="countdown" class="countdown text-center">
                              <ul>
                                <li>
                                  <p class="days">00</p>
                                  <p class="timeRefDays">Días</p>
                                </li>
                                <li>
                                  <p class="hours">00</p>
                                  <p class="timeRefHours">Horas</p>
                                </li>
                                <li>
                                  <p class="minutes">00</p>
                                  <p class="timeRefMinutes">Min</p>
                                  </li>
                                  <li>
                                    <p class="seconds">00</p>
                                    <p class="timeRefSeconds">Seg</p>
                                  </li> 
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
//import tiempo from '@/components/contain/section/tiempo/tiempo-n-0.vue'
export default {
  components: {
   // tiempo
  },
  /*data: {
    
  },*/
  methods: {
    /*----------------<MEDIA QUERIES>----------------*/
    mediaQueries: function(){
      windows.addEventListener('resize', () => {
    if(innerWidth <= 414){
      
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
    }else{
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
  });
  /*----------------</MDIA QUERIES>----------------*/
    },
  
    /*----------------<CUENTA REGRESIVA>----------------*/
    getTimeRemaining: function(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
        };
    },
    
    initializeClock: function(clase, endtime) {
        var clock = document.getElementById(clase);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
    
        function updateClock() {
        var t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
            this.clearInterval(timeinterval);
        }
        }
    
        this.updateClock();
        var timeinterval = setInterval(this.updateClock, 1000);
    },   
    
    Almcnr_Fch: function(Actvr){
      var deadline;
          var Fecha = new Date();
          var D  = Fecha.getDate();
          var Dia = (D < 10) ? '0' + D : D;
          var Mes = Fecha.getMonth();
          var SlcnnMs = (Mes < 10) ? '0' + Mes : Mes;
          var SlcnnMs=new Array(12);
        switch(Actvr){
        case 0:
            document.querySelector('.countdown-anuncio').innerHTML = '<h3><br><span>Se ha desactivado la cuenta regresiva.</span></h3>'
            +'<p class="texto text-center countdown-subtitulo"></p>';
            document.querySelector('.countdown').innerHTML = '';    
            break;

            case 1:
            
            
            this.SlcnnMs[0]="Enero";
            this.SlcnnMs[1]="Febrero";
            this.SlcnnMs[2]="Marzo";
            this.SlcnnMs[3]="Abril";
            this.SlcnnMs[4]="Mayo";
            this.SlcnnMs[5]="Junio";
            this.SlcnnMs[6]="Julio";
            this.SlcnnMs[7]="Aug";
            this.SlcnnMs[8]="Sep";
            this.SlcnnMs[9]="Oct";
            this.SlcnnMs[10]="Nov";
            this.SlcnnMs[11]="Dic";          
            this.deadline = (this.Dia) + " " + this.SlcnnMs[this.Fecha.getUTCMonth()] + " " +this.Fecha.getFullYear() + " " + 23+":"+18+":"+59;        
            
            
            if (new Date(this.deadline) > new Date()) {
                this.initializeClock('countdown', this.deadline);
            } else {            
                this.deadline = (this.Dia) + " " + this.SlcnnMs[this.Fecha.getUTCMonth()] + " " +this.Fecha.getFullYear() + " " + 23+":"+18+":"+59;        
                this.initializeClock('countdown', this.deadline);
            }  
            break;
        }
}
  },
  
  
  
}

</script>
