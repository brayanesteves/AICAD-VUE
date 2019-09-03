<template>
    <header>
		<!--***********<MENÚ Nº0: PRINCIPAL>***********-->
		<div class="menu-principal">
			<div class="wrapper">
				<nav class="menu-n-0">
					<!--<SECTION Nº0>-->
					<sectionp0 />
					<!--</SECTION Nº0>-->

					<!--<SECTION Nº1>-->
					<sectionp1 />
					<!--</SECTION Nº1>-->

					<!--<SECTION Nº2>-->
					<sectionp2 />
					<!--</SECTION Nº2>-->
				</nav>
			</div>
		</div>
		<!--***********</MENÚ Nº0: PRINCIPAL>***********-->

		<!--***********<MENÚ Nº1: RESPONSIVO>***********-->
		<div class="wrapper u-position-relative">
			<nav class="c-nav-principal" id="fixMenu">
			<!--<SECTION Nº0>-->
			<sectionr0 />			
			<!--</SECTION Nº0>-->

			<!--<SECTION Nº1>-->
			<sectionr1 />			
			<!--</SECTION Nº1>-->

			<!--<SECTION Nº2>-->
			<sectionr2 />			
			<!--</SECTION Nº2>-->
			</nav>
		</div>
		<!--***********</MENÚ Nº1: RESPONSIVO>***********-->
	</header>
</template>
<script>
import sectionp0 from '@/components/contains/header/principal/section-0.vue'
import sectionp1 from '@/components/contains/header/principal/section-1.vue'
import sectionp2 from '@/components/contains/header/principal/section-2.vue'
import sectionr0 from '@/components/contains/header/responsivo/section-0.vue'
import sectionr1 from '@/components/contains/header/responsivo/section-1.vue'
import sectionr2 from '@/components/contains/header/responsivo/section-2.vue'
export default {
	components: {
		/* ------------- <MENU Nº0: PRINCIPAL> ------------- */
		sectionp0,
		sectionp1,
		sectionp2,
		/* ------------- </MENU Nº0: PRINCIPAL> ------------- */

		/* ------------- <MENU Nº0: RESPONSIVO> ------------- */
		sectionr0,
		sectionr1,
		sectionr2,
		/* ------------- </MENU Nº0: RESPONSIVO> ------------- */
	},
	
}
</script>