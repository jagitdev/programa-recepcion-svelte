<script lang="ts">
  import Icon from "$lib/components/objects/Icon.svelte";
  import {
    listClientsReserva,
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

  async function crearClienteFumadorMascota(
    listClientsReserva: any,
    numHabitacion: any
  ) {
    try {
      // Construye la URL para la creación de una nueva habitación
      const URL = "http://localhost:8080/api/v1/reservas/guardar";

      let dataReserva: any = listClientsReserva;
      console.log("funcion crear reserva: " + dataReserva.nombre);

      // Define los datos que deseas enviar en el cuerpo de la solicitud POST
      const reserva = (numHabitacion: any, listClientsReserva: any) => {
        return {
          numHabitacion: numHabitacion,
          nombre: listClientsReserva.nombre,
          apellidoUno: listClientsReserva.apellidoUno,
          apellidoDos: listClientsReserva.apellidoDos,
          dni: listClientsReserva.dni,
          fechaLlegada: listClientsReserva.fechaLlegada,
          fechaFinalizacion: listClientsReserva.fechaFinalizacion,
        };
      };

      // Realiza una solicitud POST utilizando fetch
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva(numHabitacion, dataReserva)),
      });

      if (response.ok) {
        // Si la respuesta es exitosa, puedes procesar la respuesta si es necesario
        const data = await response.json();
        console.log("Reserva creada exitosamente:", data);
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al crear la reserva:", response.status);
      }
    } catch (error) {
      // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
      console.error("Error de red al crear la reserva:", error);
    }
  }
</script>

<div class="container-room">
  <div class="container-button-search">
    <button
      class="button-search"
      on:click={() =>
        obtenerHabitacionesFumadorMascota($valueFumador, $valueMascota)}
    >
      <Icon icon="search" size={24} color="B3B3B3" />
    </button>
  </div>
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
          class="button-check"
          on:click={() =>
            crearClienteFumadorMascota(
              $listClientsReserva,
              habitacion.numHabitacion
            )}
        >
          <Icon icon="check" size={24} color="222222" />
        </button>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container-room {
    background-color: #222222;
    position: relative;
    height: 40rem;
    width: 25%;
    border-radius: 15px;

    .container-button-search {
      padding: 10px;
      .button-search {
        background-color: #141414;
        border: none;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
      }
    }

    .container-text {
      height: 3rem;
      margin-top: 20px;

      p {
        font-size: 28px;
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
        gap: 20px;

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
