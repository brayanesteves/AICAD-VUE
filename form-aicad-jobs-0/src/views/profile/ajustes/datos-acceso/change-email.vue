<template>
  <div id="change-email">
    <b-container>
      <b-row>
        <b-col sm="12" md="12">
          <div id="section-0" class="section-0">
            <div class="section-header">
              <h2>Cambiar email</h2>
            </div>

            <div class="section-body">
              <div id="form-0" class="form-0">
                <b-form>
                  <b-form-group id="label-group-0" label="Email actual:" class="text-left"></b-form-group>
                  <b-form-group
                      id="input-group-1"
                      label="Nuevo email:"
                      label-for="input-1"
                      class="text-left"
                    >
                      <b-form-input id="input-1" type="email" required></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-2"
                      class="text-left"
                      label="Contraseña actual:"
                      label-for="input-2"
                    >
                      <b-form-input id="input-2" required></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-3"
                      class="text-left"
                      label-for="input-3"
                    >
                      <b-link href="#foo">¿Has olvidado tu contraseña?</b-link>
                    </b-form-group>

                    <b-form-group id="input-group-4" class="text-left" label-for="input-4">
                      <b-button type="submit" variant="primary" class="btn-incrscn" @click="iniciar_sesion">GUARDAR</b-button>
                      <b-button type="submit" variant="outline-primary" class="btn-incrscn" @click="iniciar_sesion">CANCELAR</b-button>
                    </b-form-group>
                    
                </b-form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "change-email"
};
</script>
<style scoped>
#change-email #section-0 { background-color: #fff; margin: 5px 0; padding: 20px; border-radius: 16px; }
#change-email #section-0 .row div:nth-child(1) { align-items: center; }
#change-email #section-0 .section-body .form-0 .btn { margin:0 0 0 10px; }
/* ----------------------- <RESPONSIVE> ----------------------- */
@media only screen and (min-width: 769px) {
  #change-email #section-0 .section-body { padding: 20px 180px; }
}
/* ----------------------- </RESPONSIVE> ----------------------- */

</style>