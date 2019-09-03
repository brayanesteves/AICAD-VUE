<template>
    <section>
		<div class="c-nav-accesos__button-drop">
			<a href="" id="navAccesosDrop" @click.prevent="navAccesosDrop(Actvr, 0)">Accesos rápidos</a>
		</div>
		<div class="c-nav-accesos__idiomas">
		    <a name="es" class="active">ESP</a>
			<a name="en" href="#">ENG</a>
			<a href="#"><img :src="img_0" alt="Idioma Chino"></a>
				<section class="c-form-search c-form-destock u-display__none">
								
				</section>
		</div>
	</section>
</template>
<script>
export default {
	props: ['Actvr'],
	data(){
		return {
			Actvr: 1,
			//JSNav: document.querySelector('.js-nav'),
			//Nav: document.querySelector('#navAccesosDrop'),

			img_0: '../imagenes/mobile/cn.png',
		}
	},
    methods: {
		/**
		 * @Actvr (Activar)
		 * @Clsfcn (Clasificación)
		 */
		navAccesosDrop: function(Actvr, Clsfcn){
			var Nav = document.querySelector('#navAccesosDrop');
			//this.JSNav.classList.toggle('u-display__none');
			Nav.classList.toggle('a-rotate-180deg--before');

		}
    }
}
</script>