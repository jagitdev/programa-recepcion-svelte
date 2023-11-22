<script lang="ts">
  import { goto } from "$app/navigation";
  import { datosReserva, idHabitacion } from "$lib/components/stores/store";
  import { onMount } from "svelte";

  // En tu componente Svelte
  let reservas: any = [];

  async function obtenerReservas() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/reservas");

      if (response.ok) {
        const data = await response.json();
        reservas = data;
      } else {
        console.error("Error al obtener las reservas:", response.status);
      }
    } catch (error) {
      console.error("Error de red al obtener las reservas:", error);
    }
  }

  onMount(obtenerReservas);

  function handleClick(reserva: any) {
    goto("/checkin");
    console.log("reserva: " + reserva.numHabitacion);

    datosReserva.update((n: any) => (n = reserva));

    async function habitacionNumHabitacion(numHabitacion: any) {
      try {
        // Construye la URL para la creación de una nueva habitación
        const URL = `http://localhost:8080/api/v1/habitaciones?numHabitacion=${numHabitacion}`;

        // Realiza una solicitud POST utilizando fetch
        const response = await fetch(URL, {
          method: "GET",
        });

        if (response.ok) {
          // Si la respuesta es exitosa, puedes procesar la respuesta si es necesario
          let data = await response.json();

          $idHabitacion = data.id;

          console.log("habitación actualizar: " + $idHabitacion);
        } else {
          // Si la respuesta no es exitosa, muestra un mensaje de error
          console.error("Error al obtener habitacion:", response.status);
        }
      } catch (error) {
        // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
        console.error("Error de red al obtener habitacion:", error);
      }
    }

    habitacionNumHabitacion(reserva.numHabitacion);
  }
</script>

<table>
  <thead>
    <tr>
      <td>Nº habitación</td>
      <td>Nombre </td>
      <td>Apellido 1</td>
      <td>Apellido 2</td>
      <td>Dni</td>
      <td>Fecha Llegada</td>
      <td>Fecha Salida</td>
    </tr>
  </thead>
  <tbody>
    {#each reservas as reserva}
      <tr on:click={() => handleClick(reserva)}>
        <td>{reserva.numHabitacion}</td>
        <td>{reserva.nombre}</td>
        <td>{reserva.apellidoUno}</td>
        <td>{reserva.apellidoDos}</td>
        <td>{reserva.dni}</td>
        <td>{reserva.fechaLlegada}</td>
        <td>{reserva.fechaFinalizacion}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  table {
    width: 80%;

    thead {
      tr {
        border-radius: 10px;
        background-color: #1e1e1e;
        text-align: center;
        font-size: 16px;
        font-weight: 600;

        td:first-child {
          border-top-left-radius: 10px;
        }

        td:last-child {
          border-top-right-radius: 10px;
        }

        td {
          padding: 20px 10px;
        }
      }
    }

    tbody {
      tr {
        border-radius: 10px;
        background-color: #222222;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;

        td {
          padding: 20px 10px;
        }
      }

      tr:hover {
        background-color: #1a1a1a;
      }
    }
  }
</style>
