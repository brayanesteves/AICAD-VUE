<template>
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
</template>
<script>
export default {
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