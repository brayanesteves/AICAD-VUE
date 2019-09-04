<template>
    <div class = "principal">
		<main>
			<h1 class="u-hidden">{{titulo}}</h1>
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

			<!--<FORMULARIO Nº0>-->
			<formulario0 />
			<!--</FORMULARIO Nº0>-->    
		</main>
	</div>
</template>
<script>
import section0 from '@/components/contains/becas-ayudas/section-0.vue'
import section1 from '@/components/contains/becas-ayudas/section-1.vue'
import section2 from '@/components/contains/becas-ayudas/section-2.vue'
import section3 from '@/components/contains/becas-ayudas/section-3.vue'
import section4 from '@/components/contains/becas-ayudas/section-4.vue'
import formulario0 from '@/components/formularios/formulario-0.vue'
export default {    
    components: {
		section0,
		section1,
		section2,
		section3,
		section4,

		formulario0
		
	},
	data(){
		return {
			titulo: 'Admisiones y ayudas'
		}
	}
}
</script>