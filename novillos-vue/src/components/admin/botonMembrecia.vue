<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable
        max-width="300px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary-dark"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Cambiar Membrecia
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Selecione en tipo de membrecia</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group
              v-model="dialogm1"
              column
            >
              <v-radio
                label="Platino"
                value="platino"
              ></v-radio>
              <v-radio
                label="Bronce"
                value="bronce"
              ></v-radio>
              <v-radio
                label="Oro"
                value="oro"
              ></v-radio>
              
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Cerrar
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
  data () {
    return {
      dialogm1: '',
      dialog: false,
    }
  },
}
</script>