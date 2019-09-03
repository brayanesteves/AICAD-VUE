<template>
    <section class="c-menu js-nav-menu u-display__none">
		<div class="c-nav-accesos__navigation c-menu__principal">
			<router-link to="/" >Inicio</router-link>
			<router-link to="/institucion">Institución</router-link>
			<router-link to="/grado/carreras">Grados y Títulos <br class="hidden-md">Universitarios</router-link>
			<router-link to="/grado/becas-ayudas" >Admisiones <br class="hidden-md">y Ayudas</router-link>
			<router-link to="/grado/convalidaciones">Convalidaciones y <br class="hidden-md">traslados de expediente</router-link>
			<router-link to="/grado/internacional-idiomas">Internacional <br class="hidden-md">e Idiomas</router-link>
			<router-link to="/grado/practicas-empleo">Prácticas <br class="hidden-md">y empleo</router-link>
		</div>
		<div class="c-menu-campus">
			<p class="c-menu-campus__title">Campus</p>
			<ul class="c-menu-campus__list">
				<li><a href="madrid/grado/">Madrid</a></li>
				<li><a href="barcelona/grado/">Barcelona</a></li>
				<li><a href="valencia/grado/">Valencia</a></li>
				<li><a href="sevilla/grado/">Sevilla</a></li>
				<li><a href="zaragoza/grado/">Zaragoza</a></li>
				<li><a href="malaga/grado/">Málaga</a></li>
				<li><a href="navarra/grado/">Pamplona</a></li>
				<li><a href="granada/grado/">Granada</a></li>
			</ul>
		</div>
		<div class="c-menu-rrss">
			<a href="https://www.facebook.com/AICADBUSINESSSCHOOL/" target="_blank"><img src="imagenes/mobile/icon-facebook.png" alt="icono facebook"></a>
			<a href="https://twitter.com/abusinessschool" target="_blank"><img src="imagenes/mobile/icon-twitter.png" alt="icono twitter"></a>
			<a href="https://www.linkedin.com/school/aicad-business-school/" target="_blank"><img src="imagenes/mobile/icon-linkedn.png" alt="icono linkedin"></a>
			<a href="https://www.instagram.com/aicad/" target="_blank"><img src="imagenes/mobile/icon-instagram.png" alt="icono instagram"></a>
			<a href="https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw" target="_blank"><img src="imagenes/mobile/icon-youtube.png" alt="icono youtube"></a>
		</div>
	</section>
</template>
<script>
export default {
    
}
</script>