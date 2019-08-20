<template>
  <!--<CONTENEDOR HIJO Nº0>-->    
			<div class="container container-expanded">
				<header class="global-nav">
					<a id="home-nologged-menu" class="js-open-menu nav-bar-toggle iconfont-BurguerMenu">
						<span>Menú</span>
					</a>
					<nav id="nav-mobile" class="nav-mobile">
						<!--<LISTA Nº0>-->
						<ul class="nav-bar-menu clearfix">
							<li>								
								<a id="hdrLinkToHome" class="active logo" href="/">
									<img id="logo-header" alt="" src="img/logo-svg/ij-logo-default_primary.svg" />
									<span>Inicio</span>
								</a>								
							</li>							
							<li>
								<a href="" id="menu_tab_32" title="Blog empresas">Blog empresas</a>
							</li>
							<li>
								<a href="" id="menu_tab_31" title="Ver zona candidatos">Zona candidatos</a>
							</li>						
						</ul>
						<!--</LISTA Nº0>-->

						<!--<LISTA Nº1>-->
						<ul class="nav-bar-access">
							<li>
								<a id="employee_login" href="employer-login.html" class="btn-small btn-default-contrast js-access-button js-access-button-contrast" title="Accede a tu área de empresa">
								Accede <span id="userReconizedName"></span>
								</a>
							</li>
							<li> 
								<a id="sign_in_prueba_gratis" href="registration-access-data.html" class="btn-small btn-primary js-copy-device js-access-button" title="Date de alta">Date de alta</a>
							</li>
						</ul>
						<!--</LISTA Nº1>-->            
					</nav>
				</header>
			</div>
			<!--</CONTENEDOR HIJO Nº0>-->  
</template>

<script>
export default {
  name: 'containerh0',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>