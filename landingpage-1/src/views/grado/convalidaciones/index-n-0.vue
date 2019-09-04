<template>
  <main>
    <h1 class="u-hidden">Convalidaciones y traslado de expediente</h1>
    <!-- <CABECERA Nº0> -->
    <cabecera0 />
    <!-- </CABECERA Nº0> -->

    <!--<SECCIÓN Nº0>-->
    <section0 />
    <!--</SECCIÓN Nº0>-->

    <!--<SECCIÓN Nº1>-->
    <section1 />
    <!--</SECCIÓN Nº1>-->

    <!--<SECCIÓN Nº2>-->
    <section2 />
    <!--</SECCIÓN Nº2>-->
  </main>
</template>
<script>
import cabecera0 from "@/components/contains/convalidaciones/cabecera-0.vue";
import section0 from "@/components/contains/convalidaciones/section-0.vue";
import section1 from "@/components/contains/convalidaciones/section-1.vue";
import section2 from "@/components/contains/convalidaciones/section-2.vue";
export default {
  components: {
    cabecera0,
    section0,
    section1,
    section2
  }
};
</script>