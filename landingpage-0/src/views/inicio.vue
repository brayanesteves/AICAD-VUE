<template>
  
    <!--*****************************<CONTENIDO>*********************************-->
<main>
  <div class="home text-center">
        <!--********************<SECCIÓN Nº0>********************-->
        <div class="banner_principal">
          <!--<SLIDERSHOW>-->
            
              <div class="slideshow"></div>
                <div class="content" v-on:scroll.passive="mediaQueries">
                 <!--<SLIDERSHOW>-->
                <div class="cont_logo">
                    <div class="container">
                        <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4 logo_aicad no-padding hidden-xs">
                            <img src="img/home/aicad.png" class="img-responsive pull-left" alt="AICAD" title="AICAD" />
                        </div>
                        <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4 logo_aicad no-padding visible-xs">
                            <img src="img/home/aicad.png" class="img-responsive" alt="AICAD" title="AICAD" style="margin-top: 75px;"/>
                        </div>
                    </div>
                </div>
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
              </div>
        </div>     
        <!--********************</SECCIÓN Nº0>********************-->
        
      
        <!--********************<SECCIÓN: INSCRIBETE>********************-->
        <div class="inscribete_home">
          <!--********************<SECCIÓN: TIEMPO>********************-->
              <div  class="seccion_tiempo">
    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 text-center countdown-anuncio">
                                <h3>AICAD BUSINESS SCHOOL TE ABRE LAS PUERTAS <br><span>A PRÁCTICAS EN EMPRESAS  ALREDEDOR DEL MUNDO</span></h3>
                                <p class="texto text-center">EMPIEZA EN </p>
                            </div>
                            <div class="col-xs-12">
                            <div id="countdown" class="countdown text-center">
                              <ul>
                                <li v-for="time in times" :key="time">
                                  <p v-bind:class="time.class_">{{time.time}}</p>
                                  <p v-bind:class="time._class">{{time.text}}</p>
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
  name: 'inicio',
  props:['time'],
  components: {
   // tiempo
  },
  data() {
    return {
      
    empresa: 'AICAD',
    deadline:"",
    Fecha: new Date(),     
    startTime: new Date().getMonth()+" "+new Date().getDay()+", "+new Date().getFullYear()+" " + 23+":"+18+":"+59,
    endTime: '08 28, 2019 23:18:53',
    times: [
      { id: 0, class_:'days', _class:'timeRefDays', text: "Días", time: 1 },
      { id: 1, class_:'hours', _class:'timeRefHours', text: "Horas", time: 1 },
      { id: 2, class_:'minutes', _class:'timeRefMinutes', text: "Min", time: 1 },
      { id: 3, class_:'seconds', _class:'timeRefSeconds', text: "Seg", time: 1 }
    ],
    progress: 100,
    // isActive: false,
    timeinterval: undefined
    }
    
  },
  methods: {
    /*----------------<MEDIA QUERIES>----------------*/
    mediaQueries: function(){
    
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
  /*----------------</MDIA QUERIES>----------------*/
    },
  
    updateTimer: function() {
      if (
        this.times[3].time > 0 ||
        this.times[2].time > 0 ||
        this.times[1].time > 0 ||
        this.times[0].time > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        clearTimeout(this.timeinterval);
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
      }
    },
    getTimeRemaining: function() {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
     if(t >= 0){
      this.times[3].time = Math.floor(t / 1000 % 60); //seconds
      this.times[2].time = Math.floor(t / 1000 / 60 % 60); //minutes
      this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24); //hours
      this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
       }else {
         this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
       }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
        (currentTime - startTime) / (endTime - startTime) * 100
      ).toFixed(2);
      this.progress = 100-interval;
    }
  },
  created: function() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
    window.addEventListener('resize', this.mediaQueries);
    this.mediaQueries();
  },
  destroyed: function(){
    window.addEventListener('resize', this.mediaQueries);
  }
  
  
  
  
}

</script>
