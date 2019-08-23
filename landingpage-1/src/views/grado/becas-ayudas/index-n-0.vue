<template>
    <div class = "principal">
    <main>
		<h1 class="u-hidden">Admisiones y ayudas</h1>

		<section0 />

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


		<!-- dropdown mobile to tab desktop -->
		<section id="contentBecas"  class="u-block">

			<div class="cust__tabs__drop mobile-drop simple-tab">
				 <div class="tab__content">
					<div class="cust__acordeon">
						<div class="wrapper" @click.stop="Acordeon(1, 0)">
							<div class="item-heading " >
									<div class="item" >Prueba de admisión</div>
							</div>
						</div>
						<div class="cuerpo item-body ">
							<div class="wrapper">

								<section>
									<p class="u-text-uppercase u-bold">¿EN QUÉ CONSISTEN LAS PRUEBAS DE ADMISIÓN?</p>
									<p>La prueba de admisión de ESIC <span class="u-bold">puede realizarse tanto en español como en inglés</span>, siempre dependerá del <span class="u-bold">idioma en el que vayas a estudiar el grado universitario</span>. La duración es <span class="u-bold">aproximadamente de una hora y media y no necesitan de una preparación previa.</span></p>

									<p>En caso de <span class="u-bold">que seas un estudiante que vivas o residas fuera de la Provincia/Comunidad Autónoma donde ESIC tiene campus</span>, podrás realizar las pruebas de manera online.</p><p>La prueba de admisión se divide en <span class="u-bold">TRES FASES</span>:</p>
									<div class="list-stage">
										<div class="list-stage__item">
											<span>01</span>
											<p><span class="u-bold">Entrevista Personal;</span> tiene como finalidad conocer el perfil del candidato, su afinidad con la carrera elegida y su grado de motivación para estudiar en ESIC.</p>
										</div>
										<div class="list-stage__item">
											<span>02</span>
											<p><span class="u-bold">Caso Práctico o Business Case;</span> esta prueba se centra sobre todo en la capacidad de redacción, razonamiento y de expresión que tiene el candidato y no tanto en el conocimiento o el dominio de la materia.</p>
										</div>
										<div class="list-stage__item">
											<span>03</span>
											<p><span class="u-bold">Test de Inglés oral y escrito;</span> permitirá conocer el nivel de idioma del candidato, esta prueba <span class="u-bold">no es excluyente</span> para los alumnos que soliciten <span class="u-bold">estudiar titulaciones universitarias impartidas en castellano</span>.</p>
										</div>
									</div><!-- fin list stage -->
									<div class="stage-note">
										<div class="stage-note__item">
											<img src="imagenes/mobile/university/becas-ayudas/icon-note.png" alt="Icono atencion">
											<p>Aquellos candidatos que posean un certificado oficial de inglés, no necesitará realizar esta prueba de idioma.</p>
										</div>
									</div>
								</section>
							</div>

							<section class="list-stage-icon u-background-grey-icons">

								<div class="wrapper">
									<div class="list-stage-icon__item u-flex-column">
										<div class="u-display-flex">
											<img src="imagenes/mobile/university/becas-ayudas/icon-solicita-cita.png" alt="Icono solicitar cita">
											<p><span>SOLICITA TU CITA</span> Necesitarás decirnos en qué día y hora te gustaría realizar las pruebas. Elige la modalidad que prefieras para realizar la prueba.</p>
										</div>
										<a href="https://www.esic.edu/grado/becas-ayudas/?p=1&IdA=xx#contacto" class="cita espanol">Solicitar cita aquí<img src="imagenes/mobile/university/becas-ayudas/arrow-right-white.png" alt="solicitar cita"></a>
									</div>
									<div class="list-stage-icon__item">
										<img src="imagenes/mobile/university/becas-ayudas/icon-confirma-cita.png" alt="Icono confirmación cita">
										<p><span>CONFIRMACIÓN DE CITA</span> Una vez solicitada tu cita, recibirás un email de confirmación con todos los pasos a seguir.</p>
									</div>
									<div class="list-stage-icon__item">
										<img src="imagenes/mobile/university/becas-ayudas/icon-prueba-admision.png" alt="Icono admision">
										<p><span>PRUEBAS DE ADMISIÓN</span> Las pruebas tienen una duración aproximada de una hora y media. Recuerda que no necesitarás preparación previa.</p>
									</div>
									<div class="list-stage-icon__item">
										<img src="imagenes/mobile/university/becas-ayudas/icon-resolucion.png" alt="Icono resultados pruebas">
										<p><span>RESOLUCIÓN</span> Una vez realizadas todas las fases de las pruebas de admisión, te comunicaremos la resolución en 72h (3 días laborables.)</p>
									</div>
								</div>
							</section>
						</div>

					</div><!-- item -->

					<div class="cust__acordeon">
						<div class="wrapper"  @click="Acordeon(1, 0)">
							<div class="item-heading ">
								<div class="item">Admisión</div>
							</div>

						</div>
						<div class="cuerpo item-body">
							<div class="wrapper">

								<section>
									<p class="u-text-uppercase u-bold">¿QUÉ DOCUMENTACIÓN NECESITO?</p>
									<p>Será importante que tengas <span class="u-bold">preparado unos días antes de solicitar tu cita previa, la siguiente documentación</span> (en formato digital para prueba online):</p>

									<div class="list-stage">
										<div class="list-stage__item">
											<span>-</span>
											<p><span class="u-bold">DNI/ Pasaporte/ NIE.</span></p>
										</div>
										<div class="list-stage__item">
											<span>-</span>
											<p>Notas de <span class="u-bold"> Bachillerato </span> o del <span class="u-bold">sistema educativo equivalente.</span></p>
										</div>
										<div class="list-stage__item">
											<span>-</span>
											<p><span class="u-bold">Uno de los Requisitos de Acceso Legal a la Universidad Española*.</span></p>

										</div>
										  	<ul class="list-stage__list">
												<li>EvAU / Selectividad</li>
												<li>Certificado del Ciclo Formativo de Grado Superior</li>
												<li>Traslado de Expediente</li>
												<li>Certificado aprobado de la Prueba de Acceso para Mayores de 25 años</li>
												<li>Acreditación UNED definitiva</li>
												<li>Homologación del Bachillerato Extranjero Definitivo</li>
											</ul>


											<p>*En caso de <span class="u-bold">no tener uno de estos requisitos de acceso a la universidad española</span>, puedes realizar sin problema las <span class="u-bold">pruebas de admisión</span>, recuerda que dicha admisión será condicionada hasta su obtención en los plazos establecidos.</p>
											

										<div class="list-stage__item">
											<span>-</span>
											<p><span class="u-bold">Certificado Oficial de inglés.</span></p>
										</div>
										<p>(En caso de no tener certificado de inglés oficial, te haremos una prueba de idiomas interna).</p>
									</div><!-- fin list stage -->
									<div class="stage-note">
										<div class="stage-note__item">
											<p>*Para <strong>realizar las pruebas de admisión</strong> no será necesario tener en el momento el requisito de acceso a la universidad. En el caso de elegir un Grado Oficial, será necesario entregar el <strong>requisito de acceso a la universidad española correspondiente</strong>. En el caso de querer estudiar el <strong>Título Superior en Marketing Global</strong>, no será necesario el requisito de acceso a la universidad española.</p>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div><!-- item -->

					<div class="cust__acordeon">
						<div class="wrapper"  @click="Acordeon(1, 0)">
							<div class="item-heading">
								<div class="item">Reserva tu plaza</div>
							</div>
						</div>

						<div class="cuerpo item-body">
							<div class="wrapper">

								<section>
									<p class="u-text-uppercase u-bold">¿CUÁNDO REALIZO LA RESERVA DE PLAZA?</p>
									<p>La resolución de la prueba de admisión se comunica <span class="u-bold">en unas 72h / tres días laborables, si la resolución es favorable</span>, deberá ser <span class="u-bold">abonada el importe referente</span> a la reserva de plaza, <span class="u-bold">y en antes de la fecha indicada</span>. En caso de no realizar el ingreso en plazo <span class="u-bold">no se podrá garantizar la plaza.</span> </p>
									<p>El importe de la <span class="u-bold">reserva de plaza</span> será devuelto en el caso de que el alumno <span class="u-bold">no haya superado el Bachillerato, Ciclo Formativo de Grado Superior</span> o similar o la correspondiente <span class="u-bold">prueba de acceso a la universidad</span>.</p>

								</section>
							</div>
						</div>
					</div><!-- item -->

					<div class="cust__acordeon">
						<div class="wrapper"  @click="Acordeon(1, 0)">
							<div class="item-heading">
								<div class="item">Matrícula</div>
							</div>
						</div>

						<div class="cuerpo item-body">
							<div class="wrapper">

								<section>
									<p class="u-text-uppercase u-bold">YA TENGO EL REQUISITO DE ACCESO A LA UNIVERSIDAD, ¿PUEDO HACER LA MATRÍCULA?</p>

									<p>El <span class="u-bold">importe de la matricula</span> tendrá que ser abonado una vez que el alumno tenga <span class="u-bold">uno de los requisitos de acceso a la universidad (EvAU /SELECTIVIDAD, Ciclo Formativo de Grado Superior, Acceso para mayores de 25 años, Acreditación UNED definitiva, Homologación del Bachillerato Extranjero definitiva).</span> Para ello la <span class="u-bold">Oficina de Atención al Alumno de Grado</span> lo notificará al alumno con todos los pasos a seguir.</p>
								    <!--  <p class="u-underline">Para grados Madrid y Barcelona fecha tope de matrícula: 25 Julio</p> -->
								</section>
							</div>
						</div>

					</div><!-- item -->
				</div><!-- fin content del tab -->
			</div> <!-- cust tab panel MOBILE DROP-->
		</section>

		<!-- end dropdown mobile to tab desktop -->

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
					<img src="imagenes/mobile/university/becas-ayudas/guia3.png" alt="Imagen guia">
					<span>
						<a href="pdf/becas-y-ayudas-grado.pdf" target="_blank">
							<span>Descargar</span> <span>guía</span>
							<img src="imagenes/mobile/university/becas-ayudas/icon-download-white.png" alt="Descargar">
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
				<img src="imagenes/mobile/university/becas-ayudas/guia2.png" alt="Imagen guia">
				<span>
					<a href="pdf/condiciones-financiacion.pdf"><span>Descargar</span> <span>guía</span><img src="imagenes/mobile/university/becas-ayudas/icon-download-white.png" alt="icono Descargar"></a>
				</span>
			</div>
			<div class="questions-becas__item">
				<p class="c-title-black-uppercase">SI VIVES FUERA DE ALGUNA DE LAS CIUDADES DONDE ESIC TIENE CAMPUS, Y BUSCAS ALOJAMIENTO, TE RECOMENDAMOS UNA SERIE DE COMPAÑÍAS Y RESIDENCIAS DEDICADAS AL ALOJAMIENTO DE ESTUDIANTES. </p>
				<p>Busca la que mejor se adapte a tus necesidades.</p>
			</div>
			<div class="c-img-label u-margin-left-auto u-margin-right-auto">
					<img src="imagenes/mobile/university/becas-ayudas/guia1.png" alt="Imagen guia">
					<span>
						<a href="pdf/residencias_apartamentos/residencias_apartamento.pdf" target="_blank"><span>ALOJAMIENTO</span><img src="imagenes/mobile/university/becas-ayudas/icon-download-white.png" alt="icono Descargar"></a>
					</span>
				</div>
			</div>
		</section>
		<section class="choose-campus">
			<div class="wrapper">
				<p class="c-title-black-uppercase">Estamos a tu disposición</p>
				<p>En ESIC estamos siempre a tu disposición. Contamos con un equipo de profesionales dedicados a orientar tanto a padres como a sus hijos, en todo lo referente a estudios universitarios.</p>
				<div class="stage-note">
					<div class="stage-note__item">
						<img src="imagenes/mobile/university/becas-ayudas/icon-phone-grey.png" alt="icono llamada">
						<p><span class="u-text-uppercase u-bold u-block">PIDE CITA PREVIA:</span>Será necesario concertar una cita previa con el equipo de Admisiones, esta cita podrá solicitarse por teléfono o a través del formulario. <span class="u-block u-bold">¿Cuenta con nosotros!</span></p>
					</div>
				</div>

				<div class="contacto-cards" id="formUniversityGeneral">
					<p id="texto_selecciona" class="c u-padding-top-md u-padding-bottom-sm u-margin-bottom-null u-font-md"><span class="u-bold u-padding-left-lg u-font-lg">Selecciona el campus</span> con el que te gustaría contactar<a name="contacto" id="contacto">&nbsp;</a></p>
					<div class="card-content">
						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>Madrid</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-madrid.jpg" alt="Celia Montoya">

								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n01">Celia Montoya</p>
								<p class="u-text-center">Departamento de<br>admisiones</p>
								<a href="tel:+34914524167" class="u-text-center u-bold u-block u-color-grado">91 452 41 67</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>M laga</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-malaga.png" alt="cristina-porras">
								
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n10">Cristina Porras</p>
								<p class="u-text-center">Responsable de<br>admisiones</p>
								<a href="tel:+34952020369" class="u-text-center u-bold u-block u-color-grado">952 02 03 69</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>Valencia</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-valencia.png" alt="sefa-gomez">
								
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n02">Sefa Gómez</p>
								<p class="u-text-center">Responsable de<br>admisiones</p>
								<a href="tel:+34963390232" class="u-text-center u-bold u-block u-color-grado">96 339 02 32</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>Barcelona</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-barcelona.png" alt="cristina-borreguero">
								
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n12">Cristina Borreguero</p>
								<p class="u-text-center">Departamento de<br>admisiones</p>
								<a href="tel:+34934144444" class="u-text-center u-bold u-block u-color-grado">93 414 44 44</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>Navarra</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-navarra2.png" alt="gonzalo imizcoz">
								
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n05">Gonzalo Imázcoz</p>
								<p class="u-text-center">Responsable de<br>admisiones</p>
								<a href="tel:+34948290155" class="u-text-center u-bold u-block u-color-grado">948 29 01 55</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>Sevilla</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-sevilla.png" alt="maria-espinosa">
								
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n04">María Espinosa</p>
								<p class="u-text-center">Coordinadora área<br>universitaria</p>
								<a href="tel:+34954460003" class="u-text-center u-bold u-block u-color-grado">954 460 003</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
								<p>Zaragoza</p>
								<img src="imagenes/mobile/university/becas-ayudas/contacto-campus-zaragoza.jpg" alt="Javier González">
								
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold" id="n03">Javier González</p>
								<p class="u-text-center">Director<br>Comercial</p>
								<a href="tel:+34662322374" class="u-text-center u-bold u-block u-color-grado">662 322 374</a>
							</div>
						</article>

						<article class="c-card-contact">
							<div class="c-card-contact__img">
							  <p>Granada</p>
							  <img src="imagenes/mobile/university/becas-ayudas/contacto-campus-granada.png" alt="luis-linan">
							  
								<div class="c-card-contact__icon">
								  <svg version="1.1" width="25px" height="25px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
									<g>
									  <path d="M36.428,35.814c0.898,0,1.676-0.297,2.34-0.881L27.436,23.602c-0.271,0.192-0.535,0.383-0.783,0.563
										c-0.85,0.627-1.536,1.113-2.065,1.464c-0.526,0.351-1.229,0.705-2.106,1.071c-0.879,0.365-1.699,0.547-2.458,0.547H20h-0.022
										c-0.759,0-1.578-0.182-2.456-0.547c-0.878-0.366-1.581-0.723-2.107-1.071c-0.53-0.351-1.217-0.837-2.066-1.464
										c-0.236-0.173-0.499-0.363-0.782-0.564L1.23,34.934c0.664,0.586,1.442,0.881,2.341,0.881H36.428L36.428,35.814z"/>
									  <path d="M2.255,16.464C1.407,15.898,0.655,15.25,0,14.521v17.241l9.989-9.988
										C7.991,20.38,5.415,18.61,2.255,16.464z"/>
									  <path d="M37.766,16.464c-3.039,2.057-5.623,3.828-7.752,5.313l9.984,9.984V14.521
										C39.357,15.237,38.615,15.884,37.766,16.464z"/>
									  <path d="M36.428,4.389H3.571c-1.146,0-2.027,0.387-2.645,1.16C0.309,6.323,0,7.29,0,8.451
										c0,0.938,0.41,1.952,1.229,3.046c0.818,1.094,1.688,1.952,2.611,2.579c0.506,0.357,2.031,1.417,4.575,3.18
										c1.375,0.951,2.569,1.783,3.595,2.5c0.875,0.607,1.63,1.137,2.252,1.573c0.072,0.053,0.185,0.133,0.334,0.239
										c0.161,0.113,0.364,0.261,0.616,0.442c0.483,0.349,0.885,0.634,1.205,0.849c0.32,0.217,0.706,0.459,1.162,0.727
										c0.453,0.268,0.881,0.471,1.283,0.602c0.402,0.135,0.774,0.201,1.116,0.201H20h0.021c0.342,0,0.715-0.066,1.12-0.201
										c0.397-0.131,0.827-0.334,1.28-0.602c0.455-0.268,0.843-0.51,1.16-0.727c0.321-0.215,0.722-0.5,1.207-0.849
										c0.248-0.183,0.453-0.329,0.612-0.44c0.15-0.108,0.265-0.188,0.336-0.241c0.484-0.336,1.24-0.86,2.259-1.568
										c1.851-1.287,4.575-3.178,8.187-5.684c1.088-0.76,1.996-1.675,2.725-2.747c0.729-1.069,1.092-2.194,1.092-3.369
										c0-0.982-0.354-1.823-1.059-2.522C38.232,4.737,37.395,4.389,36.428,4.389z"/>
									</g>
								  </svg>
								</div>
							</div>
							<div class="c-card-contact__data">
								<p class="u-text-center u-bold extra-pad" id="n08">Luis Liñán</p>
							   <p class="u-text-center">Departamento de<br>admisiones</p>
								<a href="tel:+34958222914" class="u-text-center u-bold u-block u-color-grado">958 22 29 14</a>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>






		<section class="c-form-university c-form-mod-becas-ayudas " style="display:none">
			<div class="wrapper">

			<form class="material-form" method="POST" action="codigo/codigo.php" id="form_admisiones" >
			<input type="hidden" name="admisiones" value="1">
  		<input type="hidden" name="pagina" value="grado/becas-ayudas/">
			<input type="hidden" name="origen" value="">
			<input type="hidden" name="originCampaignId" value="">
			<input type="hidden" name="validar_hashcash_admisiones" value="TJDJgIeYkOeVyVLkHDVu">
			<input type="hidden" name="IdCA" value="">

			<div class="container">

				<div class="c-form-university__title contacta">
					<div class="u-border-bottom u-border-bottom--white u-padding-bottom-sm u-margin-bottom-sm">
						<img src="imagenes/mobile/university/becas-ayudas/logo-esic-blanco-m.png" alt="ESIC LOGO" class="margin-bottom-neg">
						<p class="u-text-center u-text-initial u-font-md u-margin-bottom-null">Contacta con</p>
						<p class="u-text-center c-title__blue c-title__blue--orange u-color-grado" id="nombre_contacto"></p>
					</div>
				</div>
				<p class="select-options">Selecciona una opción*</p>
				<div class="contain__radio">
					<label class="container_radios"><p>Padre/Madre</p>
						<input type="radio" name="relacion" value="Padre/Madre">
						<span class="checkmark"></span>
					</label>
					<label class="container_radios"><p>Tutor</p>
						<input type="radio" name="relacion" value="Tutor">
						<span class="checkmark"></span>
					</label>
					<label class="container_radios"><p>Estudiante</p>
						<input type="radio" name="relacion" value="Estudiante">
						<span class="checkmark"></span>
					</label>
				</div>

			  <!-- Text input -->

			  <section class="c-form-grid-desktop">
				<section class="c-form__contain-inputs">

				  <div class="material-input">
					<input class="input-item" type="text" name="nombre">
					<label>Nombre*</label>
					<span class="bar"></span>
				  </div>

				  <div class="material-input">
					<input class="input-item" type="text" name="apellido1">
					<label>Apellido*</label>
					<span class="bar"></span>
				  </div>

				  <div class="material-input">
					<select name="id_pais">
<option value="0">País de residencia*</option>
<option value="1">Afghanistán</option>
<option value="2">Albania</option>
<option value="64">Alemania</option>
<option value="4">Andorra</option>
<option value="5">Angola</option>
<option value="6">Antigua y Barbuda</option>
<option value="149">Arabia Saudí</option>
<option value="3">Argelia</option>
<option value="7">Argentina</option>
<option value="8">Armenia</option>
<option value="9">Australia</option>
<option value="10">Austria</option>
<option value="11">Azerbaijan</option>
<option value="12">Bahamas</option>
<option value="13">Bahrain</option>
<option value="14">Bangladesh</option>
<option value="15">Barbados</option>
<option value="17">Bélgica</option>
<option value="18">Belice</option>
<option value="19">Benin</option>
<option value="20">Bhutan</option>
<option value="16">Bielorrusia</option>
<option value="21">Bolivia</option>
<option value="22">Bosnia Herzegovina</option>
<option value="23">Botswana</option>
<option value="24">Brasil</option>
<option value="25">Brunei</option>
<option value="26">Bulgaria</option>
<option value="27">Burkina Faso</option>
<option value="29">Burundi</option>
<option value="33">Cabo Verde</option>
<option value="30">Camboya</option>
<option value="31">Camerún</option>
<option value="32">Canadá</option>
<option value="35">Chad</option>
<option value="36">Chile</option>
<option value="37">China</option>
<option value="45">Chipre</option>
<option value="38">Colombia</option>
<option value="39">Comoros</option>
<option value="40">Congo</option>
<option value="90">Corea del Norte</option>
<option value="91">Corea del Sur</option>
<option value="41">Costa Rica</option>
<option value="43">Croacia</option>
<option value="44">Cuba</option>
<option value="47">Dinamarca</option>
<option value="48">Djibouti</option>
<option value="49">Dominica</option>
<option value="51">Ecuador</option>
<option value="52">Egipto</option>
<option value="53">El Salvador</option>
<option value="73">El Vaticano</option>
<option value="178">Emiratos Árabes</option>
<option value="55">Eritrea</option>
<option value="153">Eslovaquia</option>
<option value="154">Eslovenia</option>
<option value="158" selected>España</option>
<option value="191">Estados Unidos</option>
<option value="56">Estonia</option>
<option value="57">Etiopía</option>
<option value="136">Filipinas</option>
<option value="59">Finlandia</option>
<option value="60">Francia</option>
<option value="61">Gabán</option>
<option value="62">Gambia</option>
<option value="65">Gana</option>
<option value="63">Georgia</option>
<option value="179">Gran Bretaña</option>
<option value="66">Grecia</option>
<option value="68">Guatemala</option>
<option value="69">Guinea</option>
<option value="54">Guinea Ecuatorial</option>
<option value="70">Guinea-Bissau</option>
<option value="71">Guyana</option>
<option value="72">Haití</option>
<option value="123">Holanda</option>
<option value="74">Honduras</option>
<option value="75">Hungría</option>
<option value="77">India</option>
<option value="78">Indonesia</option>
<option value="79">Irán</option>
<option value="80">Iraq</option>
<option value="81">Irlanda</option>
<option value="76">Islandia</option>
<option value="58">Islas Fiji</option>
<option value="67">Islas Granada</option>
<option value="110">Islas Marshall</option>
<option value="155">Islas Salomón</option>
<option value="82">Israel</option>
<option value="83">Italia</option>
<option value="84">Jamaica</option>
<option value="85">Japón</option>
<option value="86">Jordania</option>
<option value="87">Kazajistán</option>
<option value="88">Kenia</option>
<option value="89">Kiribati</option>
<option value="92">Kuwait</option>
<option value="93">Kyrgyzstan</option>
<option value="94">Laos</option>
<option value="97">Lesotho</option>
<option value="95">Letonia</option>
<option value="96">Líbano</option>
<option value="98">Liberia</option>
<option value="99">Libia</option>
<option value="100">Liechtenstein</option>
<option value="101">Lituania</option>
<option value="102">Luxemburgo</option>
<option value="103">Macedonia</option>
<option value="104">Madagascar</option>
<option value="106">Malasia</option>
<option value="105">Malawi</option>
<option value="107">Maldivas</option>
<option value="108">Mali</option>
<option value="109">Malta</option>
<option value="118">Marruecos</option>
<option value="112">Mauricio</option>
<option value="111">Mauritania</option>
<option value="113">Mjico</option>
<option value="114">Micronesia</option>
<option value="115">Moldavia</option>
<option value="116">Mónaco</option>
<option value="117">Mongolia</option>
<option value="119">Mozambique</option>
<option value="28">Myanmar</option>
<option value="120">Namibia</option>
<option value="121">Nauru</option>
<option value="122">Nepal</option>
<option value="125">Nicaragua</option>
<option value="126">Níger</option>
<option value="127">Nigeria</option>
<option value="128">Noruega</option>
<option value="133">Nueva Guinea Papúa</option>
<option value="124">Nueva Zelanda</option>
<option value="129">Om n</option>
<option value="130">Pakistán</option>
<option value="131">Palau</option>
<option value="132">Panama</option>
<option value="134">Paraguay</option>
<option value="135">Perú</option>
<option value="137">Polonia</option>
<option value="138">Portugal</option>
<option value="139">Qatar</option>
<option value="34">República Centroafricana</option>
<option value="46">República Checa</option>
<option value="50">República Dominicana</option>
<option value="142">Ruanda</option>
<option value="140">Rumanía</option>
<option value="141">Rusia</option>
<option value="143">Saint Kitts y Nevis</option>
<option value="144">Saint Lucia</option>
<option value="145">Saint Vincent</option>
<option value="146">Samoa</option>
<option value="147">San Marino</option>
<option value="150">Senegal</option>
<option value="151">Seychelles</option>
<option value="152">Sierra Leona</option>
<option value="188">Singapur</option>
<option value="165">Siria</option>
<option value="156">Somalia</option>
<option value="159">Sri Lanka</option>
<option value="148">Sto. Tom y Príncipe</option>
<option value="157">Sudáfrica</option>
<option value="160">Sudán</option>
<option value="163">Suecia</option>
<option value="164">Suiza</option>
<option value="161">Surinam</option>
<option value="162">Swazilandia</option>
<option value="168">Tailandia</option>
<option value="190">Taiwan</option>
<option value="166">Tajikistán</option>
<option value="167">Tanzania</option>
<option value="169">Togo</option>
<option value="170">Tonga</option>
<option value="171">Trinidad y Tobago</option>
<option value="172">T nez</option>
<option value="174">Turkmenistán</option>
<option value="173">Turquía</option>
<option value="175">Tuvalu</option>
<option value="177">Ucrania</option>
<option value="176">Uganda</option>
<option value="180">Uruguay</option>
<option value="181">Uzbekistán</option>
<option value="182">Vanuatu</option>
<option value="183">Venezuela</option>
<option value="184">Vietnam</option>
<option value="185">Yemen</option>
<option value="189">Yugoslavia</option>
<option value="186">Zambia</option>
<option value="187">Zimbabwe</option>
</select>
				  </div>

				  <p class="select-options u-align-center">Tipo de Bachillerato:*</p>
				  <div class="contain__radio u-align-center">
					<label class="container_radios"><p>Español</p>
					  <input type="radio" name="bachillerato" value="es">
					  <span class="checkmark"></span>
					</label>
					<label class="container_radios"><p>Extranjero</p>
					  <input type="radio" name="bachillerato" value="ex">
					  <span class="checkmark"></span>
					</label>
				  </div>


				  <div class="material-input">
					<input class="input-item" type="email" name="email">
					<label>Email*</label>
					<span class="bar"></span>
				  </div>

				  <div class="material-input">
					<input class="input-item" type="tel" name="telefono" maxlength="20" onkeypress="return soloNumeros(event)">
					<label>Tel&eacute;fono*</label>
					<span class="bar"></span>
				  </div>

				<div class="material-input">
					<select name="curso" class="tipo">
						<option value="">Curso*</option>
						<option value="1º Bachillerato">1º Bachillerato</option>
						<option value="2º Bachillerato">2º Bachillerato</option>
						<option value="CFGS">CFGS</option>
						<option value="4º ESO">4º ESO</option>
						<option value="Otros">Otros</option>
					</select>
				</div>

				  <div class="material-input">
					<select name="solicitud" class="tipo">
					  <option value="">Tipo de solicitud*</option>
					  <option value="Prueba">Prueba de admisión</option>
					  <option value="Información">Información</option>
					  <option value="Prueba+Información">Prueba de admisión + Información</option>
					</select>
				  </div>
      


				  <div class="material-input material-input--icon icon-calendar diayhora">
					<input class="input-item" type="text" id="fecha" name="fecha" readonly placeholder="¿Qué día quieres hacer la prueba?">
					<span class="bar"></span>
				  </div>

				  <div class="material-input material-input--icon icon-clock diayhora">
					<select name="hora">
					  <option value="">¿A qué hora? </option>
					  <option value="9:30h">9:30h</option>
					  <option value="10:00h">10:00h</option>
					  <option value="10:30h">10:30h</option>
					  <option value="11:00h">11:00h</option>
					  <option value="11:30h">11:30h</option>
					  <option value="12:00h">12:00h</option>
					  <option value="12:30h">12:30h</option>
					  <option value="15:30h">15:30h</option>
					  <option value="16:00h">16:00h</option>
					  <option value="16:30h">16:30h</option>
					  <option value="17:00h">17:00h</option>
					  <option value="17:30h">17:30h</option>
					</select>
				  </div>

				  <div class="material-input" id="modalidad">
					<select name="modalidad">
					  <option value="">Modalidad*</option>
					  <option value="Presencial">Presencial</option>
					  <option value="Online">Online</option>
					</select>
					<small id="paragraphMod" class="mod-warning u-color-white u-padding-left-xs u-padding-top-xs u-block">Únicamente podrán realizar pruebas de admisión online aquellos estudiantes que se encuentren estudiando en una provincia diferente donde ESIC tenga un campus o estudiantes que se encuentren estudiando fuera de España.</small>
				  </div>

				  <div class="material-input" id="carrera">
					<select name="IdA">
					</select>
				  </div>
				</section>

				<div class="material-input textarea">
				  <textarea name="comentarios" rows="4" placeholder="Mensaje "></textarea>
				</div>
			  </section>

			  <section class="c-form-university__foot">
				<div class="material-input material-check u-align-center check-politics">
				  <input type="checkbox" name="acepto" value="1" class="check" />
				  <p>He leído y acepto la <a class="modal__btn" href="#">política de protección de datos*</a></p>
				</div>

				<div class="c-form__paragraph--section">
				  <p class="c-form__paragraph">(*) Campos obligatorios</p>
				</div>

				<div class="">
				  <a href="javascript: validar(document.forms.form_admisiones)" class="c-button-round-filling c-button-round-filling--orange u-bold">Contactar</a>
				</div>
			  </section>


			</div>

		  </form>
		</div>
	</section>
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
export default {
    props: ['icon'],
    components: {
        section0,
    },
    data() { 
        return {       
        icons: [
            {
                clase: 'c-seleccion-content__item',
                picture: 'imagenes/mobile/university/becas-ayudas/icon-internacional.png',
                alt: 'Icono mundo',
                descripcion_: 'Proveniente de un <span>SISTEMA PREUNIVERSITARIO INTERNACIONAL o EXTRANJERO</span><span class="u-bold u-color-grado hidden-xs "> >> </span>',
                _descripcion: '<a href="grado/becas-ayudas/estudiante-internacional/" class="c-button-round-ghost-xl c-button-round-ghost-xl--orange">Informate <span>aquí</span></a>'
            },
            {
                clase: 'c-seleccion-content__item',
                picture: 'imagenes/mobile/university/becas-ayudas/icon-espanol.png',
                alt: 'Icono hombre hablando',
                descripcion_: 'Proveniente de un <span>SISTEMA PREUNIVERSITARIO ESPAÑOL :</span>',
                _descripcion: ''
            }
        ] 
        }       
    },
    methods: {
        Acordeon(Actvr, Clasificacion){
            switch(Actvr){
                case 0:
                    break;
                case 1:
                    var _Acordeon;
                    var Cuerpo;
                    var Panel;
                    var i;
                    switch(Clasificacion){
                        case 0:
                            
                        _Acordeon = document.getElementsByClassName("wrapper");
                            
                            //console.log("cantidad: "+_Acordeon.length);
                            for(var i = 0; i < _Acordeon.length; i++){                        
                                _Acordeon[i].addEventListener('click', function(Evento){
                                    //Evento.preventDefault();
                                    this.classList.toggle("active");
                                    Panel = this.nextElementSibling;
                                    if(Panel.style.display === "block"){
                                        Panel.style.display = "none"
                                        Panel.style.transition = "all 0.2s ease-out";
                                    }else{
                                        Panel.style.display = "block"
                                        Panel.style.transition = "all 0.2s ease-out";
                                    }
                                });
                            }
                            break;
                        default:
                            break;
                    }
                    break;
            }
        }
    }
}
</script>