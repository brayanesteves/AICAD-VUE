<template>
    <section class="c-content-convalidaciones intro">
			<div class="wrapper">

				<p class="subtitle"><strong>¿Estás pensando cursar una carrera universitaria tras terminar tu Ciclo Formativo de Grado Superior o simplemente quieres cambiarte de Centro Universitario?</strong> En ESIC tenemos un plan para ti. Te facilitamos un plan de convalidaciones basado en los estudios que hayas cursado y los que quieres estudiar.
				</p>
				<div class="icon-list-container">
					<div v-for="infor in info" :key="infor" class="u-display-flex ">
						<div class="u-flex-shrink-null u-margin-right-xs">
							<img :src="infor.img" :alt="infor.alt" class="u-flex-shrink-null">
						</div>
						<p>{{infor.parr}}</p>
					</div>
				</div> <!-- icon-list-wrapper -->
			</div>
		</section>
</template>
<script>

export default {
    name:'section0',
    props: ['infor'],
    data(){
        return {
            info: [
                {
                    img:'../imagenes/mobile/university/ico-group.png',
                    alt:'Icono grupo',
                    parr:'Para solicitar el estudio de convalidaciones no es necesario realizar las pruebas de admisión ni tampoco que hayas finalizado tus estudios.'
                },
                {
                    img:'../imagenes/mobile/university/ico-ask.png',
                    alt:'icono llamada',
                    parr:'Ponemos a tu disposición a un equipo de orientadores para ayudarte.'
                },
                {
                    img:'../imagenes/mobile/university/ico-payment.png',
                    alt:'Icono pago',
                    parr:'El estudio de convalidaciones es totalmente gratuito.'
                }
            ]
        }
    }
}
</script>