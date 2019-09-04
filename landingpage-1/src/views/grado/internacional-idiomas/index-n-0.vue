<template>
  <main>
    <h1
      class="u-hidden"
    >Proyección internacional Experiencia en el extranjero + formación en idiomas</h1>
	<!--<CABECERA Nº0>-->
	<cabecera0 />
	<!--</CABECERA Nº0>-->
	
    <!--<SECTION Nº0>-->
	<section0 />    
    <!--</SECTION Nº0>-->

    <!--<SECTION Nº1>-->
    <section1 />
    <!--</SECTION Nº1>-->

    <!--<SECTION Nº2>-->
	<section2 />
    <!--</SECTION Nº2>-->

    <!--<SECTION Nº3>-->
	<section3 />
    <!--</SECTION Nº3>-->

    <!--<SECTION Nº4>-->
	<section4 />
    <!--</SECTION Nº4>-->

    <!--<SECTION Nº5>-->
    <section5 />
    <!--</SECTION Nº5>-->

    <!--<SECTION Nº6>-->
	<section6 />    
    <!--<SECTION Nº6>-->
  </main>
</template>
<script>
import cabecera0 from "@/components/contains/internacional-idiomas/cabecera-0.vue";
import section0 from "@/components/contains/internacional-idiomas/section-0.vue";
import section1 from "@/components/contains/internacional-idiomas/section-1.vue";
import section2 from "@/components/contains/internacional-idiomas/section-2.vue";
import section3 from "@/components/contains/internacional-idiomas/section-3.vue";
import section4 from "@/components/contains/internacional-idiomas/section-4.vue";
import section5 from "@/components/contains/internacional-idiomas/section-5.vue";
import section6 from "@/components/contains/internacional-idiomas/section-6.vue";
export default {
  props: [""],
  components: {
	cabecera0,
	section0,
	section1,
	section2,
	section3,
	section4,
	section5,	
    section6,
  },
 
};
</script>