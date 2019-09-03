<template>
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
			<!-- <a href="https://api.whatsapp.com/send?phone=34664457707" class="whatsapp" target="_blank"><img :src="img_2 alt="Icono whatsapp"></a> -->
			<a class="modal__btn" href="#" ><img :src="img_5" alt="Icono teléfono"></a>
			<a href="#" id="lupa" class="icon-lupa"><img :src="img_6" alt="Icono buscador" ></a>
			<a href="#" id="menuIcon" class="content-lines">
				<span class="lines line-top"></span>
				<span class="lines line-mid"></span>
				<span class="lines line-bottom"></span>
			</a>
		</div>
	</section>
</template>
<script>
export default {
    data(){
		return {
			
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