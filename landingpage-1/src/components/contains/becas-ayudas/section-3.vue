<template>
		<section class="u-background-grey-icons questions-becas">
			<div class="wrapper">
			<div class="questions-becas__item">
				<p class="c-title-black-uppercase">¿Tienes dudas?</p>
  				<p>¿Qué diferencia hay entre ADE y Marketing? ¿Todos los títulos son oficiales? ¿Puedo estudiar 100% en inglés? ¿Carreras de 4 o de 5 años?... Estas y muchas otras <span class="u-bold">DUDAS pueden surgir al analizar tu futuro universitario, no dudes en consultarlas?</span> <a href="grado/becas-ayudas/faq/" class="u-color-grado u-bold">(VER FAQS)</a></p>
			</div>
			<div class="questions-becas__item">
				<p class="c-title-black-uppercase">Becas y ayudas</p>
				<p>No queremos que las cuestiones económicas supongan un obstáculo para que alcances tus objetivos y te asegures una formación con futuro, por ello, te presentamos una amplia batería de posibilidades que te ayudarán en este sentido, tanto el <a href="pdf/becas-y-ayudas-grado.pdf"  target="_blank" class="u-color-grado u-bold">PLAN DE BECAS</a> que hemos elaborado desde ESIC, como aquellas que ponen a tu alcance diferentes organismos públicos o privados.</p>
			</div>
			<div class="questions-becas__img">
				<div class="c-img-label">
					<img :src="Imagen_0" alt="Imagen guia">
					<span>
						<a href="pdf/becas-y-ayudas-grado.pdf" target="_blank">
							<span>Descargar</span> <span>guía</span>
							<img :src="Imagen_0_0" alt="Descargar">
						</a>
					</span>
				</div>
				<ul>
					<li>Becas propias</li>
					<li>Becas nacionales</li>
					<li>Becas internacionales</li>
					<li>Becas de movilidad para prácticas internacionales</li>
					<li>Seguro y ayudas</li>
				</ul>
			</div>
			<div class="questions-becas__item">
				<p class="c-title-black-uppercase">FINANCIACIÓN BANCARIA</p>
				<p> ESIC mantiene CONVENIOS DE FINANCIACIÓN con determinadas entidades bancarias en condiciones preferentes para los alumnos matriculados en cualquiera de los programas de la escuela. En la Secretaría del área se encuentran las normas y condiciones específicas de cada uno de estos convenios.
                    <a href="#formUniversityGeneral" id="" class="u-color-grado ayuda-financiacion">ESIC te ayuda con la financiación de tu Carrera</a></p>
			</div>
			<div class="c-img-label u-margin-left-auto u-margin-right-auto u-hidden">
				<img :src="Imagen_1" alt="Imagen guia">
				<span>
					<a href="pdf/condiciones-financiacion.pdf"><span>Descargar</span> <span>guía</span><img :src="Imagen_1_0" alt="icono Descargar"></a>
				</span>
			</div>
			<div class="questions-becas__item">
				<p class="c-title-black-uppercase">SI VIVES FUERA DE ALGUNA DE LAS CIUDADES DONDE ESIC TIENE CAMPUS, Y BUSCAS ALOJAMIENTO, TE RECOMENDAMOS UNA SERIE DE COMPAÑÍAS Y RESIDENCIAS DEDICADAS AL ALOJAMIENTO DE ESTUDIANTES. </p>
				<p>Busca la que mejor se adapte a tus necesidades.</p>
			</div>
			<div class="c-img-label u-margin-left-auto u-margin-right-auto">
					<img :src="Imagen_1_1" alt="Imagen guia">
					<span>
						<a href="pdf/residencias_apartamentos/residencias_apartamento.pdf" target="_blank"><span>ALOJAMIENTO</span><img :src="Imagen_1_2" alt="icono Descargar"></a>
					</span>
				</div>
			</div>
		</section>
</template>
<script>
export default {
    props: ['questions'],
    data() { 
        return {        
			Imagen_0: '../imagenes/mobile/university/becas-ayudas/guia3.png',
			Imagen_0_0: '../imagenes/mobile/university/becas-ayudas/icon-download-white.png',
			Imagen_1: '../imagenes/mobile/university/becas-ayudas/guia2.png',
			Imagen_1_0: '../imagenes/mobile/university/becas-ayudas/icon-download-white.png',
			Imagen_1_1: '../imagenes/mobile/university/becas-ayudas/guia1.png',
			Imagen_1_2: '../imagenes/mobile/university/becas-ayudas/icon-download-white.png'
        }       
    },
}
</script>