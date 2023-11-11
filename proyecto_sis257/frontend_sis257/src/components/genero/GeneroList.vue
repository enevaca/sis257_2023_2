<script setup lang="ts">
import type { Genero } from '@/models/genero'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var generos = ref<Genero[]>([])

async function getGeneros() {
  generos.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/generos/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Género Musical?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getGeneros())
  }
}

onMounted(() => {
  getGeneros()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Géneros</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Géneros Musicales</h2>
      <div class="col-12">
        <RouterLink to="/generos/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(genero, index) in generos" :key="genero.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ genero.descripcion }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(genero.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn text-danger" @click="toDelete(genero.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
