<template>
<section class="c-content-convalidaciones pasos">
	<img v-bind:src="icono_pasos_0" alt="Amplía fronteras" class="ico-section">
		<div class="wrapper">
			<div class="title u-margin-bottom-md">
				<p class=""><strong><img :src="icono_pasos_1" alt="Icono pasos" class="hidden-xs u-margin-right-xs"></strong> <br class="hidden-sm">¿Cómo solicitar tu convalidación?</p>
			</div>

			<div class="list-description__container">
				<div class="list-description__item">
					<span class="number__description u-color-grado">01.</span>
					<p><strong>Recopila la información</strong> necesaria antes de comenzar tu solicitud: <span class="txt-small">certificado académico oficial de notas de tu universidad de origen o tus calificaciones del ciclo formativo de Grado Superior.</span></p>
				</div>
				<div class="list-description__item">
					<span class="number__description u-color-grado">02.</span>
					<p> <strong>Solicita tu estudio de convalidaciones.</strong> Lo evaluaremos y te daremos respuesta en la mayor brevedad posible.</p>
                </div>
				<div class="list-description__item">
					<span class="number__description u-color-grado">03.</span>
					<p>Tras los <strong>resultados</strong>, si lo deseas, puedes solicitar tu prueba de admisión<a href="https://www.esic.edu/grado/becas-ayudas/?p=1&IdA=xx#contacto" class="u-text-bold u-color-grado"> pinchando aquí.</a></p>
				</div>
				<div class="button-final">
					<a href="#" class="modal__btn" data-modal="#form-convalidation">COMIENZA TU SOLICITUD DE CONVALIDACIÓN </a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
    data() {
		return {
			icono_pasos_0:'../imagenes/mobile/university/ico-pasos.png',
			icono_pasos_1:'../imagenes/mobile/university/ico-pasos-desktop.png',
		}
	}
}
</script>