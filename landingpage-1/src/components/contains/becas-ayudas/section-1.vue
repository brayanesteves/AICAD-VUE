<template>
    <section class="c-seleccion-content">
			<div class="wrapper">
				<p class="c-seleccion-content__title">Si eres estudiante...</p>
				<div class="c-seleccion-content__item" v-for="icon in icons" :key="icon">
					<img v-bind:src="icon.picture" v-bind:alt="icon.alt">                    
					<div>
                        <p v-html="icon.descripcion_"></p>
					    <a v-html="icon._descripcion"></a>
					</div>
				</div>				
			</div>
		</section>
</template>
<script>
export default {
    props: ['icon'],
     data() { 
        return {       
        icons: [
            {
                clase: 'c-seleccion-content__item',
                picture: '../imagenes/mobile/university/becas-ayudas/icon-internacional.png',
                alt: 'Icono mundo',
                descripcion_: 'Proveniente de un <span>SISTEMA PREUNIVERSITARIO INTERNACIONAL o EXTRANJERO</span><span class="u-bold u-color-grado hidden-xs "> >> </span>',
                _descripcion: '<a href="grado/becas-ayudas/estudiante-internacional/" class="c-button-round-ghost-xl c-button-round-ghost-xl--orange">Informate <span>aquí</span></a>'
            },
            {
                clase: 'c-seleccion-content__item',
                picture: '../imagenes/mobile/university/becas-ayudas/icon-espanol.png',
                alt: 'Icono hombre hablando',
                descripcion_: 'Proveniente de un <span>SISTEMA PREUNIVERSITARIO ESPAÑOL :</span>',
                _descripcion: ''
            }
		],
		
        }       
    },
}
</script>