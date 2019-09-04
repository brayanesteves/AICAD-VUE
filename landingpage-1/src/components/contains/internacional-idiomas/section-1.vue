<template>
  <section class="c-content-idiomas amplia-fronteras">
    <img :src="ico_ok_0" alt="Amplía Fronteras" class="ico-section" />
    <div class="wrapper">
      <div class="title u-margin-bottom-md">
        <p>
          <img :src="ico_ok_1" alt="icono ok" class="hidden-xs u-margin-right-xs" />
          <strong>Amplía fronteras</strong>,
          <br class="hidden-sm" />multiplica tu empleabilidad
        </p>
      </div>
      <div class="icon-list-container">
        <div v-for="info in infor" :key="info" class>
          <div class="u-flex-shrink-null u-margin-right-xs">
            <img :src="info.img" :alt="info.alt" class="u-flex-shrink-null" />
          </div>
          <p>
            <span class="u-bold u-color-grado inner-title">{{info.info}}</span>
            <br class="hidden-sm" />
            {{info.description}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["info"],
  data() {
    return {
      ico_ok_0: "../imagenes/mobile/university/ico-ok.png",
      ico_ok_1: "../imagenes/mobile/university/ico-ok.png",
      infor: [
        {
          img: "../imagenes/mobile/university/ico-university.png",
          alt: "Icono University",
          info: " + 125 acuerdos ",
          descripiion: "con universidades nacionales e internacionales"
        },
        {
          img: "../imagenes/mobile/university/ico-world.png",
          alt: "Imagen mundo",
          info: "+ 40 Países ",
          descripiion: "en 4 continentes "
        },
        {
          img: "../imagenes/mobile/university/ico-plane.png",
          alt: "Icono study Tours",
          info: "Study Tours",
          descripiion: "residenciales "
        },
        {
          img: "../imagenes/mobile/university/ico-ping.png",
          alt: "icono ping",
          info: "+500 Alumnos ",
          descripiion: "al año en programas internacionales"
        }
      ]
    };
  }
};
</script>