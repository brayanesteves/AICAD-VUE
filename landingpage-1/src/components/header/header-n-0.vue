<template>
    <header>
		<!--***********<MENÚ Nº0: PRINCIPAL>***********-->
		<div class="menu-principal">
			<div class="wrapper">
				<nav class="menu-n-0">
					<!--<SECTION Nº0>-->
					<section>
						<div class="c-nav-accesos__button-drop">
							<a href="" id="navAccesosDrop">Accesos rápidos</a>
						</div>
						<div class="c-nav-accesos__idiomas">
							<a name="es" class="active">ESP</a>
							<a name="en" href="#">ENG</a>
							<a href="#"><img :src="img_0" alt="Idioma Chino"></a>

							<section class="c-form-search c-form-destock u-display__none">
								
							</section>
						</div>
					</section>
					<!--</SECTION Nº0>-->

					<!--<SECTION Nº1>-->
					<section class="c-nav-accesos__navigation js-nav u-display__none">
							<router-link to="/" >Inicio</router-link>
							<a href="saladeprensa/">Sala de comunicación</a>
							<a href="informacion-de-interes-alumnos/">Alumnos</a>
							<a href="informacion-de-interes-faculty-personal/">Faculty / personal</a>
							<a href="centrosensenanza/">Centros de enseñanza</a>
							<a href="informacion-de-interes-empresas/">Empresas</a>
							<a href="https://campusvirtual.esic.edu/public/">Campus virtual</a>
					</section>
					<!--</SECTION Nº1>-->

					<!--<SECTION Nº2>-->
						<section class="c-contact-destock u-display__none">
							<a class="modal__btn" href="#">Contacto<img class="phone" :src="img_1" alt="Icon phone"></a>
							<a class="modal__btn" href="#"><img class="whatsapp" :src="img_2" alt="Icono whatsapp"></a>
							<!-- <a href="https://api.whatsapp.com/send?phone=34664457707" target="_blank" onClick="ga('send', 'event', 'usabilidad', 'head_grado', 'boton_contacto_whatsapp')"><img class="whatsapp" src="imagenes/mobile/icon-whatsapp.png" alt="Icono whatsapp"></a> -->
						<a href="#formUniversityGeneral" id="ContactFixButton" style="border-bottom:none">
							<svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" style="fill: white; position: relative; top: 2px;">
								<g>
									<path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"></path>
									<path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"></path>
									<path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"></path>
									<path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"></path>
								</g>
							</svg>
						</a>
					</section>
					<!--</SECTION Nº2>-->
				</nav>
			</div>
		</div>
		<!--***********</MENÚ Nº0: PRINCIPAL>***********-->

		<!--***********<MENÚ Nº1: RESPONSIVO>***********-->
		<div class="wrapper u-position-relative">
			<nav class="c-nav-principal" id="fixMenu">
				<!--<SECTION Nº0>-->
			<section>
				<div class="logo">
					<a href="./">
						<picture>
							<source media="(min-width: 768px)" :srcset="img_3">
							<img :src="img_4" alt="ESIC Business & Marketing School">
						</picture>
					</a>
				</div>
				<div class="menu-icons">
					<a href="#formUniversityGeneral" class="sobreIcon">
						<img src="" alt="Icono contacto">
					</a>
					<a class="modal__btn" href="#"><img class="whatsapp" :src="img_2" alt="Icono whatsapp"></a>
					<!-- <a href="https://api.whatsapp.com/send?phone=34664457707" class="whatsapp" target="_blank"><img src="imagenes/mobile/icon-whatsapp.png" alt="Icono whatsapp"></a> -->
					<a class="modal__btn" href="#" ><img :src="img_5" alt="Icono teléfono"></a>
					<a href="#" id="lupa" class="icon-lupa"><img :src="img_6" alt="Icono buscador" ></a>
					<a href="#" id="menuIcon" class="content-lines">
						<span class="lines line-top"></span>
						<span class="lines line-mid"></span>
						<span class="lines line-bottom"></span>
					</a>
				</div>
			</section>
			<!--</SECTION Nº0>-->

			<!--<SECTION Nº1>-->
			<section class="c-form-search c-form-search-js u-display__none">
				
			</section>
			<!--</SECTION Nº1>-->

			<!--<SECTION Nº2>-->
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
				<!--</SECTION Nº2>-->
			</nav>
		</div>
		<!--***********</MENÚ Nº1: RESPONSIVO>***********-->
	</header>
</template>
<script>
export default {
	data(){
		return {
			img_0: '../imagenes/mobile/cn.png',
			img_1: '../imagenes/mobile/icon-phone-white.png',
			img_2: '../imagenes/mobile/icon-whatsapp.png',
			img_3: '../imagenes/mobile/logo-esic-big.png',
			img_3_0: '../imagenes/mobile/logo-esic.png',
			img_4:'imagenes/mobile/icon-sobre-nav.png',
			img_5:'../imagenes/mobile/icon-telephone.png',
			img_6:'../imagenes/mobile/icon-lupa.png'
		}
	}
}
</script>