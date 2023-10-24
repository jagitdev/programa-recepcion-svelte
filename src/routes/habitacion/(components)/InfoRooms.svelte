<script lang="ts">
  import { datosHabitacion } from "$lib/components/stores/store";
  let datos = $datosHabitacion;
  async function actualizarHabitacionId(datoss: any) {
    try {
      // Construye la URL para la creación de una nueva habitación
      const URL = `http://localhost:8080/api/v1/habitaciones/${datoss.id}`;

      // Define los datos que deseas enviar en el cuerpo de la solicitud POST
      let datoActualizar = {
        ocupacion: "libre",
      };

      // Realiza una solicitud POST utilizando fetch
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Indica que estás enviando datos en formato JSON
        },
        body: JSON.stringify(datoActualizar), // Convierte los datos a formato JSON antes de enviarlos
      });

      if (response.ok) {
        // Si la respuesta es exitosa, puedes procesar la respuesta si es necesario
        const data = await response.json();
        console.log("Habitación actualizada exitosamente:", data);
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al crear la habitación:", response.status);
      }
    } catch (error) {
      // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
      console.error("Error de red al crear la habitación:", error);
    }
  }

  async function eliminarClientes(numHabitacion: any) {
    try {
      const URL = `http://localhost:8080/api/v1/clientes/eliminar?numHabitacion=${numHabitacion}`;

      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Si la respuesta es exitosa, puedes procesar la respuesta si es necesario
        const data = await response.json();
        console.log("Clientes eliminados exitosamente:", data);
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al eliminar los clientes:", response.status);
      }
    } catch (error) {
      console.error("Error de red a eliminar la habitación:", error);
    }
  }

  function actulizarHabitacionBorrarClientes(datos: any) {
    actualizarHabitacionId($datosHabitacion);
    eliminarClientes($datosHabitacion.numHabitacion);
  }

  let clientes: any = [];
  async function obtenerClientesHabitacion(numHabitacion: any) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/clientes?numHabitacion=${numHabitacion}`
      );

      if (response.ok) {
        const data = await response.json();
        clientes = data;
        console.log(clientes);
      } else {
        console.error("Error al obtener los clientes:", response.status);
      }
    } catch (error) {
      console.error("Error de red al obtener los clientes:", error);
    }
  }

  obtenerClientesHabitacion($datosHabitacion.numHabitacion);
</script>

<div class="container">
  <div class="container-header">
    <p>Número Habitación: {datos.numHabitacion}</p>
    <button on:click={() => actulizarHabitacionBorrarClientes(datos)}>
      eliminar clientes
    </button>
  </div>
  <div class="container-clients">
    {#each clientes as cliente}
      <div class="container-info">
        <p>{cliente.nombreCliente}</p>
        <p>{cliente.apellidoUnoCliente}</p>
        <p>{cliente.apellidoDosCliente}</p>
        <p>{cliente.dni}</p>
        <p>{cliente.telefonoCliente}</p>
        <p>{cliente.direccionCliente}</p>
        <p>{cliente.correoElectronicoCliente}</p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    background-color: #222222;
    padding-inline: 2rem;
    padding-block: 2rem;
    margin-inline: 10rem;
    margin-block: 2rem;
    height: 35rem;
    border-radius: 15px;

    .container-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 25px;
      }
    }

    .container-clients {
      height: 31rem;
      padding: 10px;
      display: flex;
      justify-content: center;

      .container-info {
        background-color: #141414;
        height: 26rem;
        width: 18rem;
        margin: 10px;
        padding: 20px;
        border-radius: 15px;
        line-height: 3;

        p {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }

    button {
      padding: 10px;
      width: 14rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: #bd6363;
      color: #642929;
      font-size: 18px;
      font-weight: 600;
    }
  }
</style>
