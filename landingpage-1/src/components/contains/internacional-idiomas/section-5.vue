<template>
  <section class="c-content-idiomas">
    <div class="wrapper">
      <p
        class="c-content-idiomas__title u-text-uppercase u-text-center u-bold deskopt-text-left"
      >¿QUÉ PODEMOS HACER POR TI?</p>
      <ul class="c-content-idiomas__listado">
        <li>
          En AICAD Idiomas somos centro preparador y examinador de los principales exámenes oficiales y certificados, tanto del ámbito profesional como académico:
          <strong>Cambridge y TOEFL</strong>.
          <div class="c-content-idiomas__logos">
            <a v-for="lang in logos_idiomas" :key="lang" :href="lang.href">
              <img :src="lang.img" :alt="lang.alt" />
            </a>
          </div>
        </li>
        <li>
          El proceso de
          <strong>aprendizaje de idiomas es homogéneo</strong>, agrupando a los alumnos por niveles con compañeros en situaciones similares.
        </li>
        <li>
          Si tu dominio del
          <strong>inglés</strong> es de
          <strong>nivel alto</strong> (mínimo C1)
          <strong>podrás cursar un segundo idioma</strong> en las titulaciones elegidas: chino.
        </li>
        <li>
          Apostamos por la
          <strong>certificación de los conocimientos de idiomas</strong> como acreditación a la hora de acceder con más garantías al mercado laboral.
        </li>
        <li>
          Opciones de
          <strong>recorridos internacionales, titulaciones y estancias en el extranjero</strong> para poner en práctica y mejorar tus habilidades lingüísticas.
        </li>
        <li>
          Impartimos
          <strong>otros cursos en otros idiomas</strong>, así como español para extranjeros.
        </li>
      </ul>
    </div>
    <!-- <div class="wrapper info-center">
				<a href="https://www.esic.edu/idiomas/" class="c-button-round-ghost-xl c-button-round-ghost-xl--orange visita-esic" onClick="ga('send', 'event', 'usabilidad', 'grado_idiomas', 'boton_visitar_esic_idiomas')">Visitar <span>ESIC Idiomas</span></a>
    </div>-->
  </section>
</template>
<script>
export default {
  name: "section5",
  props: ["lang"],
  data() {
    return {
      logos_idiomas: [
        {
          href: "https://www.cambridgeenglish.org/",
          img: "../imagenes/mobile/university/cambridge.png",
          alt: "Cambridge English"
        },
        {
          href: "https://capman.es/es",
          img: "../imagenes/mobile/university/logo-toefl.png",
          alt: "TOEFL"
        },
        {
          href: "https://www.cervantes.es/default.htm",
          img: "../imagenes/mobile/university/cervantes-logo.png",
          alt: "Instituto Cervantes"
        },
        {
          href: "https://examenes.cervantes.es/es/dele/que-es",
          img:
            "https://examenes.cervantes.es/sites/all/themes/examenes_zen/images/dele-logo.png",
          alt: "DELE"
        }
      ]
    };
  }
};
</script>