<template>
    <div class = "principal">
    <main>
		<h1 class="u-hidden">Admisiones y ayudas</h1>
		<!--<SECTION Nº0>-->
		<section0 />
		<!--</SECTION Nº0>-->

		<!--<SECTION Nº1>-->
		<section1 />
		<!--</SECTION Nº1>-->

		<!--<SECTION Nº2>-->
		<section2 />
		<!--</SECTION Nº2>-->

		<!-- end dropdown mobile to tab desktop -->
		<!--<SECTION Nº3>-->
		<section3 />
		<!--</SECTION Nº3>-->

		<!--<SECTION Nº4>-->
		<section4 />
		<!--</SECTION Nº4>-->

		<!--<FORMULARIO Nº0>-->
		<formulario0 />
		<!--</FORMULARIO Nº0>-->
    <div>
	
	<!-- pop up contacto -->
	<section id="popup__contacto" class="modal__wrapp form__contacto">
        <div class="modal__inner">
			<div class="modal c-popup-contacto">
				<span class="close" href="#">&times;</span>
				<section class="pop-body c-card__form">

					<div class="c-card__form-header">
						<p class="c-title__blue ">CONTACTO</p>
						<!-- <span class="c-form__paragraph">(*) Campos obligatorios</span> -->
					</div>

					<div id="contenedor_form">
					</div>
				<p class="nota">(*) Campos obligatorios</p>
				</section>

			</div><!-- modal -->
		</div><!-- modal__iner -->
	</section><!-- modal js -->
	<!-- fin pop up contacto -->
	<!-- pop up Teléfonos sedes -->
	<section id="popup__phone__university" class="modal__wrapp">
		<div class="modal__inner">
			<div class="modal c-popup-contacto">
				<span class="close" href="#">&times;</span>
				<section class="pop-body c-card__form">
					<p class="c-popup-contact__title">Contacta</p>
					<p>Contacta con nuestros responsables de cada área y resuelve de forma rápida y eficaz tus dudas</p>
					<div class="c-popup-contact__table">
						<div class="c-pop-contact-table__head">
							<p>Campus</p>
							<p>Teléfonos</p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>Madrid</p>
							<p><a href="tel:+34914524167">91 452 41 67</a></p>
						</div>

						<div class="c-pop-contact-table__body">
							<p>Barcelona</p>
							<p><a href="tel:+34934144444">93 414 44 44</a></p>
						</div>

						<div class="c-pop-contact-table__body">
							<p>Valencia</p>
							<p><a href="tel:+34963390230">96 339 02 30</a></p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>Sevilla</p>
							<p><a href="tel:+34954460003">954 46 00 03</a></p>
						</div>

						<div class="c-pop-contact-table__body">
							<p>M laga</p>
							<p><a href="tel:+34952020367">952 02 03 67</a></p>
						</div>

						<div class="c-pop-contact-table__body">
							<p>Zaragoza</p>
							<p><a href="tel:+34976350714">976 35 07 14</a></p>
						</div>

						<div class="c-pop-contact-table__body">
							<p>Granada</p>
							<p><a href="tel:+34958222914">958 22 29 14</a></p>
						</div>
						
						<div class="c-pop-contact-table__body">
							<p>Navarra</p>
							<p><a href="tel:+34948290155">948 29 01 55</a></p>
						</div>
						
						<!-- <div class="c-pop-contact-table__body">
							<p>Brasil</p>
							<p><a href="tel:4133761417">(41) 3376 1417</a></p>
						</div> -->
					</div>
			 </section>
			</div><!-- modal -->
		</div><!-- modal__iner -->
	</section><!-- modal js -->

	<!-- fin pop up Teléfonos sedes -->

		<!-- Pop up Whatsapp sedes -->

	<section id="popup__whatsapp__university" class="modal__wrapp whatsapp">
		<div class="modal__inner">
			<div class="modal c-popup-contacto">
				<span class="close" href="#">&times;</span>
				<section class="pop-body c-card__form">
					<p class="c-popup-contact__title">
						<img class="whatsapp" src="imagenes/mobile/icon-whatsapp.png" alt="Icono whatsapp">WHATSAPP</p>
					<p class="c-popup-contact__subtitle">Contacta con nuestros responsables de cada área y resuelve de forma rápida y eficaz tus dudas</p>
					<div class="c-popup-contact__table">
						<div class="c-pop-contact-table__head">
							<p>Campus</p>
							<p>Whatsapp</p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>Madrid</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34664457707" target="_blank">664 457 707
								</a>
							</p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>Barcelona</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34667561114" target="_blank">667 561 114
								</a>
							</p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>Valencia</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34663808647" target="_blank">663 808 647
								</a>
							</p>
						</div>
						<!-- <div class="c-pop-contact-table__body">
							<p>Sevilla</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34664457707" target="_blank">664 457 707
								</a>
							</p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>M laga</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34664457707" target="_blank">664 457 707
								</a>
							</p>
						</div> -->
						<div class="c-pop-contact-table__body">
							<p>Zaragoza</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34662353857" target="_blank">662 353 857
								</a>
							</p>
						</div>
						<div class="c-pop-contact-table__body">
							<p>Granada</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34647884213" target="_blank">647 884 213
								</a>
							</p>
						</div>						
						<div class="c-pop-contact-table__body">
							<p>Navarra</p>
							<p>
								<a href="https://api.whatsapp.com/send?phone=34672699853" target="_blank">672 699 853
								</a>
							</p>
						</div>
						
						<!-- <div class="c-pop-contact-table__body">
							<p>Brasil</p>
							<p><a href="tel:4133761417">(41) 3376 1417</a></p>
						</div> -->
					</div>
			 </section>
			</div><!-- modal -->
		</div><!-- modal__iner -->
	</section><!-- modal js -->

	<!-- fin Pop up Whatsapp sedes -->

<!--

	<section id="popup__fecha-limite" class="modal__wrapp fecha-limite">
		<div class="modal__inner">
			<div class="modal c-popup-fecha-limite">
				<div class="close">
					<img class="" src="imagenes/mobile/icon-close-fecha.png" alt="icono cerrar popup">
				</div>
				<div class="pop-body c-card__form">
					<p class="title">¡RECUERDA!</p>
					<p class="texto fecha">Fecha límite matriculación</p>
					<p class="texto campus">CAMPUS MADRID Y BARCELONA: 24 de julio</p>
				</div>
			</div>
		</div>
	</section>



	<div class="modal__filter" style="display: block;"></div>-->


	<!-- pop up buzon sugerencias -->

	<section id="popup__buzon" class="modal__wrapp">
		<div class="modal__inner">
			<div class="modal c-popup-contacto">
				<span class="close" href="#">&times;</span>
				<section class="" style="width: 100%">
				</section>
			</div><!-- modal -->
		</div><!-- modal__iner -->
	</section>

	<!-- fin pop up buzon sugerencias -->


		<!-- pop up privacidad -->

	<section id="popup__privacidad" class="modal__wrapp">
		<div class="modal__inner">
			<div class="modal">
			  <span class="close" href="#">&times;</span>
				<section class="pop-body c-card__form">
									</section>
			</div><!-- modal -->
		</div><!-- modal__iner -->
	</section><!-- modal js -->

	<!-- fin pop up privacidad -->


	<!-- pop up aspectos legales -->

	<section id="popup__legales" class="modal__wrapp">
		<div class="modal__inner">
			<div class="modal">
			 <span class="close" href="#">&times;</span>
				<section class="pop-body c-card__form">
									</section>
			</div><!-- modal -->
		</div><!-- modal__iner -->
	</section><!-- modal js -->

	<!-- fin pop up aspectos legales -->
    </div>
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
}
</script>