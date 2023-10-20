<script lang="ts">
  import Icon from "$lib/components/objects/Icon.svelte";
  import {
    listClients,
    valueFumador,
    valueMascota,
  } from "$lib/components/stores/store";

  let habitaciones: any = [];
  async function obtenerHabitacionesFumadorMascota(
    fumador: any,
    permiteAnimal: any
  ) {
    try {
      // Construye la URL con los parámetros variables
      const URL = `http://localhost:8080/api/v1/habitaciones?fumador=${fumador}&permiteAnimal=${permiteAnimal}`;

      // Realiza una solicitud GET utilizando fetch
      const response = await fetch(URL, {
        method: "GET",
        mode: "cors",
        cache: "default",
      });

      if (response.ok) {
        // Si la respuesta es exitosa, obtén los datos JSON y almacénalos en una variable
        const data = await response.json();
        habitaciones = data;
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al obtener las habitaciones:", response.status);
      }
    } catch (error) {
      // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
      console.error("Error de red al obtener las habitaciones:", error);
    }
  }
</script>

<div class="container-room">
  <div class="container-text">
    <p>Habitaciones disponibles</p>
  </div>
  <div class="container-data">
    {#each habitaciones as habitacion (habitacion.id)}
      <div class="container-data-button">
        <p>
          habitación {habitacion.numHabitacion} Nº Camas {habitacion.numCamas}
        </p>
        <button
          on:click={() => {
            console.log("numero habitacion " + habitacion.id);
            console.log($listClients);
            $listClients = [];
          }}><Icon icon="check" size={24} color="222222" /></button
        >
      </div>
    {/each}
  </div>
  <button
    on:click={() => {
      obtenerHabitacionesFumadorMascota($valueFumador, $valueMascota);
    }}>buscar</button
  >
</div>

<style lang="scss">
  .container-room {
    background-color: #222222;
    position: relative;
    height: 40rem;
    width: 100%;
    border-radius: 15px;

    .container-text {
      height: 10%;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: end;

      p {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
      }
    }

    .container-data {
      height: 90%;
      display: flex;
      flex-direction: column;

      .container-data-button {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;

        p {
          font-size: 20px;
          font-weight: 500;
        }

        button {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          background-color: #949494;
        }
      }
    }
  }
</style>
