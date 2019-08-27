<template>
    <footer>
		<section class="c-footer-campus">
			<div class="wrapper">
				<p class="c-title__blue c-title__blue--white">Campus AICAD</p>

				<nav class="c-footer-campus__nav" id="footerNavSedesUniversity">
					<a href="madrid/">Madrid</a>
					<a href="barcelona/">Barcelona</a>
					<a href="valencia/">Valencia</a>
					<a href="sevilla/">Sevilla</a>
					<a href="zaragoza/">Zaragoza</a>
					<a href="malaga/">M laga</a>
					<a href="navarra/">Pamplona</a>
					<a href="granada/">Granada</a>
				</nav>
			</div>
		</section>
		<section class="c-footer-rrss">
			<div class="wrapper">
				<p class="c-title__blue c-title__blue--white u-font-weight-400">Síguenos</p>
				<nav class="c-footer-rrss__nav">
					<a v-for="rdntwrkng in redessociales" :key="rdntwrkng" :href="rdntwrkng.href" :target="rdntwrkng.target"><img :src="rdntwrkng.img" :alt="rdntwrkng.alt"></a>					
				</nav>
			</div>
		</section>
		<div class="u-background-blue-dark-footer">
			<div class="wrapper u-position-relative">
				<section class="c-footer-nav ">
					<a href="institucion/faculty-research/">Faculty&amp;Research</a>
					<a href="institucion/biblioteca/">Biblioteca</a>
					<a class="modal__btn" href="#" data-modal="#popup__buzon">Buzón de sugerencias</a>
					<a class="modal__btn" href="#" data-modal="#popup__contacto" >Contacto</a>
				</section>
			</div>
		</div>
		<div class="u-background-blue-dark">
			<div class="wrapper">
				<section class="c-footer-legal">
					<div>
						<p>&copy; {{new Date().getFullYear()}} AICAD Business & Marketing School. CIF: R2800828B. </p>
						<span>
								<p>Avenida de Valdenigrales s/n, Pozuelo de Alarcón. 28223 Madrid, España. 91 452 41 00</p>
								<p><a class="modal__btn" href="#" data-modal="#popup__legales">Aspectos legales</a></p>
						</span>
					</div>
					<div >
						<a href="#" class="scrollToTop" >
							<svg version="1.1" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
								<g>
									<path d="M33.053,12.436L21.16,0.544c-0.726-0.726-1.903-0.726-2.628,0L6.64,12.437
										c-0.726,0.726-0.726,1.902,0,2.627c0.363,0.363,0.839,0.544,1.315,0.544c0.475,0,0.95-0.182,1.313-0.544l8.72-8.72v31.762
										c0,1.025,0.832,1.857,1.859,1.857c1.025,0,1.857-0.832,1.857-1.857V6.344l8.721,8.72c0.726,0.726,1.903,0.726,2.628,0
										C33.777,14.339,33.777,13.162,33.053,12.436z"/>
								</g>
								<g>
									<g display="none">
										<path d="M35.904,35.342c0.88,0,1.64-0.29,2.287-0.861L27.113,23.4c-0.266,0.189-0.522,0.375-0.766,0.552
											c-0.83,0.61-1.502,1.088-2.02,1.43c-0.516,0.343-1.202,0.69-2.063,1.048c-0.857,0.356-1.658,0.534-2.401,0.534h-0.021h-0.022
											c-0.742,0-1.542-0.178-2.4-0.534s-1.545-0.705-2.061-1.048c-0.518-0.342-1.19-0.817-2.02-1.43
											c-0.231-0.17-0.488-0.354-0.765-0.554l-11.08,11.08c0.648,0.572,1.41,0.862,2.288,0.862L35.904,35.342L35.904,35.342z"/>
										<path d="M2.5,16.426c-0.83-0.553-1.564-1.186-2.205-1.899v16.854l9.764-9.765
											C8.107,20.254,5.589,18.524,2.5,16.426z"/>
										<path d="M37.214,16.426c-2.973,2.011-5.498,3.741-7.579,5.194l9.762,9.761V14.527
											C38.77,15.226,38.043,15.858,37.214,16.426z"/>
										<path d="M35.904,4.622H3.787c-1.12,0-1.981,0.378-2.584,1.134C0.598,6.512,0.296,7.458,0.296,8.592
											c0,0.917,0.401,1.909,1.201,2.978c0.799,1.07,1.65,1.909,2.552,2.521c0.494,0.349,1.985,1.386,4.473,3.108
											c1.344,0.931,2.511,1.743,3.515,2.443c0.855,0.595,1.593,1.111,2.201,1.538c0.07,0.053,0.181,0.131,0.327,0.233
											c0.158,0.112,0.355,0.256,0.602,0.435c0.473,0.342,0.865,0.617,1.178,0.828s0.69,0.447,1.135,0.71
											c0.443,0.263,0.861,0.458,1.254,0.587c0.394,0.133,0.757,0.198,1.091,0.198h0.022h0.021c0.335,0,0.698-0.065,1.092-0.198
											c0.392-0.129,0.81-0.324,1.254-0.587c0.443-0.263,0.821-0.499,1.136-0.71c0.313-0.211,0.703-0.486,1.178-0.828
											c0.244-0.179,0.443-0.32,0.601-0.433c0.147-0.104,0.257-0.185,0.328-0.235c0.474-0.328,1.213-0.841,2.207-1.533
											c1.81-1.258,4.474-3.106,8.003-5.557c1.063-0.743,1.947-1.637,2.662-2.685c0.712-1.046,1.068-2.145,1.068-3.293
											c0-0.96-0.347-1.782-1.037-2.466C37.668,4.963,36.85,4.622,35.904,4.622z"/>
									</g>
								</g>
								</svg>
						</a>

					</div>
				</section>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	props: ['rdntwrkng'],
	data() {
		return {
			redessociales: [
				{
					href:'https://www.facebook.com/AICADBUSINESSSCHOOL',
					target: '_blank',
					img:'../imagenes/mobile/icon-facebook-footer.png',
					alt:'icono facebook'
				},
				{
					href:'https://twitter.com/ABusinessSchool',
					target: '_blank',
					img:'../imagenes/mobile/icon-twitter-footer.png',
					alt:'icono twitter'
				},
				{
					href:'https://www.linkedin.com/school/aicad-business-school/',
					target: '_blank',
					img:'../imagenes/mobile/icon-linkedn-footer.png',
					alt:'icono linkedin'
				},
				{
					href:'https://www.instagram.com/aicad/',
					target: '_blank',
					img:'../imagenes/mobile/icon-instagram-footer.png',
					alt:'icono instagram'
				},
				{
					href:'https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw',
					target: '_blank',
					img:'../imagenes/mobile/icon-youtube-footer.png',
					alt:'icono youtube'
				},
			]
		}
	}
}
</script>