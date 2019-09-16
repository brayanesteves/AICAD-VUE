<template>
  <!--*****************************<CONTENIDO>*********************************-->
    <div class="home text-center">
      <!--********************<SECCIÓN Nº0>********************-->
      <section0 />
      <!--********************</SECCIÓN Nº0>********************-->
      <!--********************<SECCIÓN: INSCRIBETE>********************-->
      <div class="inscribete_home">
        <!--********************<SECCIÓN: TIEMPO>********************-->
        <div class="seccion_tiempo">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center countdown-anuncio">
                <h3>
                  AICAD BUSINESS SCHOOL TE ABRE LAS PUERTAS
                  <br />
                  <span>A PRÁCTICAS EN EMPRESAS ALREDEDOR DEL MUNDO</span>
                </h3>
                <p class="texto text-center">EMPIEZA EN</p>
              </div>
              <div class="col-xs-12">
                <div id="countdown" class="countdown text-center">
                  <ul>
                    <li v-for="(clock, index) in times" :key="index">
                      <p :class="clock.class_">{{clock.time}}</p>
                      <p :class="clock._class">{{clock.text}}</p>
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
  <!--*****************************</CONTENIDO>*********************************-->
</template>

<script>
import section0 from "@/components/contain/sections/section-0/section-0.vue"
export default {
  name: "inicio",
  components: {
   section0
  },
  data() {
    return {
      empresa: "AICAD",
      deadline: "",
      Fecha: new Date(),
      startTime: 
        String(new Date().getMonth() +
        " " +
        new Date().getDay() +
        ", " +
        new Date().getFullYear() +
        " " +
        23 +
        ":" +
        18 +
        ":" +
        59),
        // <MM> <DD>, <YYYY> <H>:<M>:<S>
      endTime: "09 12, 2019 23:18:53",
      times: [
        { id: 0, class_: "days", _class: "timeRefDays", text: "Días", time: 1 },
        {
          id: 1,
          class_: "hours",
          _class: "timeRefHours",
          text: "Horas",
          time: 1
        },
        {
          id: 2,
          class_: "minutes",
          _class: "timeRefMinutes",
          text: "Min",
          time: 1
        },
        {
          id: 3,
          class_: "seconds",
          _class: "timeRefSeconds",
          text: "Seg",
          time: 1
        }
      ],
      progress: 100,
      // isActive: false,
      timeinterval: undefined
    };
  },
  methods: {
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
      if (t >= 0) {
        this.times[3].time = Math.floor((t / 1000) % 60); //seconds
        this.times[2].time = Math.floor((t / 1000 / 60) % 60); //minutes
        this.times[1].time = Math.floor((t / (1000 * 60 * 60)) % 24); //hours
        this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
      } else {
        this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
        this.progress = 0;
      }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
        ((currentTime - startTime) / (endTime - startTime)) * 100
      ).toFixed(2);
      this.progress = 100 - interval;
    }
  },
  created: function() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
  }
};
</script>
<style scoped>
html, body { overflow-x: hidden; margin:auto; }
/*--------------------------- <CARACTERISTICAS GENERALES> ----------------------------*/
.addthis_sharing_toolbox{float:right;margin-bottom: 20px;}
a{color:#FFFFFF; text-decoration: none;}
a:hover{color:#FFFFFF; opacity: 0.8;}
a:focus {outline: none;}
.container{max-width: 1110px;}
.row{padding:0; margin: 0;}
ul{margin: 0;}
.nav > li > a:hover, .nav > li > a:focus {background-color: transparent;}
ol,h2,h3{margin: 0; padding: 0;}
.modal-dialog {z-index: 2000;}
.modal-header{background-color: #ce1719 !important;}
.btn-default{padding:18px 30px;background-color:#28394d;font-family: 'Lato', sans-serif;font-size: 22px;color:#fff;border:3px solid #38bcdd;box-shadow: none;border-radius: 30px;}
.btn-default:hover,.btn-default:active{opacity: 1 !important;box-shadow: none;}
.btn-default:hover,.btn-default:active{background-color:#0070aa; color:#fff;}
.btn-primary{background-color:rgba(255,255,255,0.5);padding:12px;color:#000;border-color:#000;border-radius: 0;font-family: 'Lato', sans-serif;font-size: 14px;}
.btn-primary:hover,.btn-primary:focus{opacity: 1 !important;background-color: #fff !important;color: #000 !important;border-color:#000 !important;}
.no-padding {padding: 0 !important;}
.no-padding-left {padding-left: 0 !important;}
.no-padding-right {padding-right: 0 !important;}
span.mk { color: #cd1719; }
.img-responsive { margin: 0 auto; }
strong{font-family: 'Lato', sans-serif;font-weight: normal;}
p{font-size: 14px;font-family: 'Lato', sans-serif;}
.separador{color: #a4a4a4 !important;font-weight: bold;}
.required:after{content:"*";color: #cd1719;}
.icon-font-awesome { color: #cd1719;font-size: 70px; }
/*<CARACTERISTICAS GENERALES DE IMAGENES>*/
.imagenes .container{position: relative; }
.imagenes hr{ border-color: black; }
.imagenes .h3{ font-family: 'Lato', sans-serif; font-size: 42px; color: black; }
.imagenes .h3 strong{ font-family: 'Lato', sans-serif; }
.imagenes .h3 .red{ color: #cf1719; }
.imagenes .btn-imagenes{font-family: 'Lato', sans-serif;font-size: 14px;color:#000000;border:0 none;position: absolute;bottom: 20px;right: 0;text-decoration: none;}
.imagenes .btn-imagenes i{font-size: 30px;color:#a42c2c;position: relative;top: 4px;}   
/*</CARACTERISTICAS GENERALES DE IMAGENES>*/
/*--------------------------- </CARACTERISTICAS GENERALES> ----------------------------*/

/*--------------------------- <HOME> ----------------------------*/

.home .banner_principal{background-color:#0082c3;}
.logo-aicad img { height:62px; }
.home h1{font-family: 'Lato', sans-serif;font-size: 48px;color:#ffffff;line-height: 40px;margin-top: 10px;}
.home h1 strong{font-family: 'Lato', sans-serif;}
.logo_aicad { width:500px; margin:10px 0;  }
/*--------------------------- </HOME> ----------------------------*/

/*----------------------<SECCIÓN GAMING>----------------------*/
.home h1 strong span{color:#38bcdd;}
.home .seccion_gaming{position: relative;}
.home .seccion_gaming h2{padding: 30px 0;font-family: 'Lato', sans-serif;color:#ffffff;letter-spacing: 7px;position: relative;font-size: 28px;}
/*----------------------</SECCIÓN GAMING>----------------------*/

.home .seccion_gris,#final_form .seccion_gris{background-color: #545454;padding: 25px 0;font-family: 'Lato', sans-serif;color:#fff;letter-spacing: 13px;}

    .home .cont_circulos ul{margin-left: 0;display: inline-block;}
        .home .circulo p{margin-top: 55px;font-family: 'Lato', sans-serif;font-size: 16px;color:#fff;line-height:16px;letter-spacing: -2px;}
        .home .circulo.circulo3 p{font-size: 11px;line-height: 11px;letter-spacing: -1px;}
            .home .circulo p strong{font-family: 'Lato', sans-serif;font-size: 35px;color:#fff;letter-spacing: -3px;}
            .home .circulo p .descripcion{font-family: 'Lato', sans-serif;font-size: 15px;color:#fff; font-weight:600;}
            .home .circulo p span{font-size: 31px;}
    .home .participar{padding:10px 0 33px 0;position: relative;}

    /*----------------------<SECCIÓN: TIEMPO>----------------------*/
        .home .seccion_tiempo h3{font-family: 'Lato', sans-serif;color:#fff;font-size: 32px;margin-top: 40px; font-weight:600;}
    .home .seccion_tiempo{position: relative; top:0; padding-top: 15px; text-align: left;border-top:10px solid #ffffff;min-height: 405px;  }
    .home .seccion_tiempo .texto { font-family: 'Lato', sans-serif; font-size:32px; color: #fff; margin-top: 30px; font-weight:600;}
    .home .seccion_tiempo ul { padding-left: 0; }
    .home .seccion_tiempo ul li{font-family: 'Lato', sans-serif; color:#fff; margin-right: 10px; display: inline-block; text-align: center; }
    .home .seccion_tiempo ul li .days,.hours, .minutes, .seconds { font-family: 'Lato', sans-serif; font-size: 48px; margin-bottom: 0; font-weight:600; }    
    
    .home .seccion_tiempo ul li .timeRefDays, .timeRefHours, .timeRefMinutes, .timeRefSeconds { font-family: 'Lato', sans-serif; font-size: 18px; font-weight:600;}
    .home .seccion_tiempo ul li .days, .timeRefDays { color:#fff; }
    .home .seccion_tiempo ul li .hours, .timeRefHours { color:#fff; }
    .home .seccion_tiempo ul li .minutes, .timeRefMinutes { color:#fff; }
    .home .seccion_tiempo ul li .timeRefMinutes { color:#fff; }
    .home .seccion_tiempo ul li .seconds, .timeRefSeconds { color:#fff; }
    .home .seccion_tiempo ul li .btn-pill{ margin-top:4px; text-decoration:none; }
    
    /*----------------------</SECCIÓN: TIEMPO>----------------------*/

    /*----------------------<SECCIÓN: INSCRIBETE>----------------------*/
    .home .inscribete_home .secc_entiende h2{font-family: 'Lato', sans-serif;font-size: 44px;color: #000000;margin-top: 40px;margin-bottom: 24px;letter-spacing: -1px;}
    .home .inscribete_home .secc_entiende h2 span{color:#CF1719;}
    .home .inscribete_home .secc_entiende p{font-family: 'Lato', sans-serif; font-size: 32px;color: #000000;line-height: 35px;}
    .home .inscribete_home .secc_entiende p strong{font-family: 'Lato', sans-serif; font-weight: normal;color: #000000;}
    .home .inscribete_home .btn-default{font-family: 'Lato', sans-serif;padding:20px;position: relative;margin-top: 30px;margin-bottom: 40px;}    
    .home .btn-inscribete-home {background-color: #f5d11a !important;color:#000000 !important;padding: 20px;border: 0 none;border-radius: 0;font-size: 22px;font-family: 'Lato', sans-serif;margin-top: 45px;margin-bottom: 40px;}
    /*----------------------</SECCIÓN: INSCRIBETE>----------------------*/
   
</style>
