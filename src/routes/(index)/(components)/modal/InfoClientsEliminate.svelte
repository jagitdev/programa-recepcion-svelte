<script lang="ts">
  import Icon from "$lib/components/objects/Icon.svelte";

  export let Data: any;

  let clients: any = [];

  async function obtenerHabitaciones(numHabitacion: any) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/clientes?numHabitacion=${numHabitacion}`
      );

      if (response.ok) {
        const data = await response.json();
        clients = data;
        console.log(clients);
      } else {
        console.error("Error al obtener las habitaciones:", response.status);
      }
    } catch (error) {
      console.error("Error de red al obtener las habitaciones:", error);
    }
  }
  obtenerHabitaciones(Data.numHabitacion);
</script>

<div class="container">
  <div class="list-clients">
    <p class="cliente-text">Clientes:</p>
    {#each clients as client}
      <div class="container-data">
        <p>
          -
          {client.nombreCliente}
          {client.apellidoUnoCliente}
          {client.apellidoDosCliente}
        </p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    margin-block: 1rem;
    margin-inline: 10px;
    gap: 10px;

    .list-clients {
      .cliente-text {
        color: #b3b3b3;
        font-size: 25px;
        font-weight: 500;
      }

      .container-data {
        p {
          display: flex;
          flex-direction: row;
          margin-block: 10px;
          font-size: 20px;
          color: #b3b3b3;
        }
      }

      .container-button {
        display: flex;
        justify-content: end;

        width: 3rem;
        button {
          border: none;
          height: 2rem;
          width: 2rem;
          background-color: #8c2222;
          border-radius: 10px;
        }
      }
    }
  }
</style>
