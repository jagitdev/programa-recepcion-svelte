<script lang="ts">
  import Modal from "$lib/components/modal/modal.svelte";
  import { onMount } from "svelte";
  import { storeShowModal } from "$lib/components/stores/store";

  // En tu componente Svelte
  let habitaciones: any = [];

  async function obtenerHabitaciones() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/habitaciones");

      if (response.ok) {
        const data = await response.json();
        habitaciones = data;
      } else {
        console.error("Error al obtener las habitaciones:", response.status);
      }
    } catch (error) {
      console.error("Error de red al obtener las habitaciones:", error);
    }
  }

  onMount(obtenerHabitaciones);

  //si cambia el estado de storeShowModal volvera a llamar a la api
  $: if (!$storeShowModal) {
    obtenerHabitaciones();
  }

  let showModal = false;
  let modalContent;
  let Data: any;

  function handleRowClick(id: number, component: any, data: any) {
    console.log(`id: ${id}`);
    showModal = true;
    modalContent = component;
    Data = data;
    storeShowModal.update((n) => (n = true));
  }
</script>

<table>
  <thead>
    <tr>
      <td>Nº habitación</td>
      <td>Precio </td>
      <td>Permite Animal</td>
      <td>Fumador</td>
      <td>Nº de Camas</td>
      <td>Ocupación</td>
    </tr>
  </thead>
  <tbody>
    {#if showModal}
      <Modal bind:showModal {Data} />
    {/if}

    {#each habitaciones as habitacion (habitacion.id)}
      <tr on:click={() => handleRowClick(habitacion.id, Modal, habitacion)}>
        <td>{habitacion.numHabitacion}</td>
        <td>{habitacion.precio}</td>
        <td
          >{habitacion.permiteAnimal === 0
            ? "no permite animal"
            : "permite animal"}</td
        >
        <td
          >{habitacion.fumador === 0
            ? "no permite fumador"
            : "permite fumador"}</td
        >
        <td>{habitacion.numCamas}</td>
        <td>{habitacion.ocupacion}</td>
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
