<template>
  <div class="main-our">
    <div class="container-0">
      <div class="row">
        <div class="col-sm col-md">
          <div class="card text-center" style="width: 24rem;">
            <div class="card-header"><router-link to="/our/team/about-aicadjobs">AICAD Jobs, siempre a mejor</router-link></div>
            <div class="card-body">
              
              <p
                class="card-text"
              >AICAD Jobs es la plataforma líder para encontrar empleo y talento en España</p>              
            </div>
            <div class="card-footer text-muted"><span><router-link to="">Equipo</router-link></span> ·<span><router-link to="">Por 'Nombre de Persona'</router-link></span> ·<span><router-link to="">{{new Date().getFullYear()}}</router-link></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-0 {
  max-width: 96%;
  margin: 0 auto;
}
</style>