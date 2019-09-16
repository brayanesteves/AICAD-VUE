<template>
  <div id="menu">
    <nav class="nav-menu hidden-xs">
      <ul class="list-unstyled main-menu">
        <li class="text-right first">
          <a href id="nav-close" @click.prevent="menuSlider(1, 1)">
            <i class="fa fa-times"></i>
          </a>
        </li>
        <li class="dropdown">
          <a href>¿QUÉ ES?</a>
          <ul>
            <li>
              <a href="/aicad/que-es/informacion">INFORMACIÓN</a>
            </li>
            <li>
              <a href="/aicad/que-es/ventajas-de-participar">VENTAJAS DE PARTICIPAR</a>
            </li>
            <li>
              <a href="/aicad/que-es/metodo-de-competicion">MÉTODO DE COMPETICIÓN</a>
            </li>
            <li>
              <a
                target="_blank"
                href="archivos/pdf/bases_competicion_GMKC_2019.pdf"
              >BASES</a>
            </li>
            <li>
              <a href="/aicad/que-es/empresas-colaboradoras">EMPRESAS COLABORADORAS</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/aicad/quienes-pueden-participar" title>¿QUIÉNES PUEDEN PARTICIPAR?</a>
        </li>

        <li class="dropdown">
          <a>¿CÓMO PARTICIPAR?</a>
          <ul>
            <li>
              <a href="/aicad/como-participar/informacion">INFORMACIÓN</a>
            </li>
            <li>
              <a href="/aicad/como-participar/fases-de-la-competicion">FASES</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/aicad/los-premios" title>LOS PREMIOS</a>
        </li>
        <li>
          <a href="/aicad/global-experience" title>GLOBAL EXPERIENCE</a>
        </li>
        <li class="inscribete">
          <a href="/aicad/inscribete" title>
            INSCRÍBETE
            <img src="img/comunes/marca_inscribete.png" />
          </a>
        </li>
        <li>
          <a href="/aicad/sobre-aicad" title>SOBRE AICAD</a>
        </li>
        <li class="last">
          <a href="/aicad/contactanos" title=" Contáctanos">CONTÁCTANOS</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "menu0",
  methods: {
    /*----------------------<MENU SLIDER>----------------------*/
    menuSlider(Actvr, Accns) {
      var nav_expander;
      var nav_close;
      var widthNav;
      switch (Actvr) {
        case 0:
          break;

        case 1:
          switch (Accns) {
            // <APERTURA> //
            case 0:
              nav_expander = document.getElementById("nav-expander");
              widthNav =
                (innerWidth -
                  document.getElementsByClassName(".container").width) /
                  2 +
                document.getElementsByClassName(".nav-expander").width;
              if (widthNav > 100) {
                console.log(
                  document.querySelector("body").getAttribute("class")
                );
                if (
                  document.querySelector("body").getAttribute("class") ==
                  document.getElementsByClassName("nav-expanded")
                ) {
                  document
                    .querySelector(".nav-menu")
                    .setAttribute("style", "width:-20em");
                } else {
                  document
                    .querySelector(".nav-menu")
                    .getAttribute("style", "width:" + widthNav + "px");
                }
              }
              document.querySelector("body").classList.toggle("nav-expanded");
              break;
            // </APERTURA> //

            // <CERRAR> //
            case 1:
              nav_close = document.getElementById("nav-close");
              document.querySelector("body").classList.remove("nav-expanded");
              document.querySelector("body").removeAttribute("class");
              document
                .querySelector("body")
                .getAttribute("style", "width:-20em");
              break;
            // </CERRAR> //
          }
          break;
      }
    }
  }
};
</script>