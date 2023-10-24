<script lang="ts">
  import Icon from "$lib/components/objects/Icon.svelte";
  import {
    datosReserva,
    listClientsCheckIn,
    idHabitacion,
  } from "$lib/components/stores/store";

  async function crearCliente() {
    try {
      // Construye la URL para la creación de una nueva habitación
      const URL = "http://localhost:8080/api/v1/clientes/guardar/lista";

      // Define los datos que deseas enviar en el cuerpo de la solicitud POST
      const listaClientes = $listClientsCheckIn.map((cliente: any) => {
        return {
          numHabitacion: $datosReserva.numHabitacion,
          nombreCliente: cliente.nombre,
          apellidoUnoCliente: cliente.apellidoUno,
          apellidoDosCliente: cliente.apellidoDos,
          telefonoCliente: cliente.telefono,
          direccionCliente: cliente.direccion,
          correoElectronicoCliente: cliente.correoElectronico,
          fechaLlegadaCliente: cliente.fechaLlegada,
          fechaFinalizacionCliente: cliente.fechaFinalizacion,
          dni: cliente.dni,
        };
      });

      // Realiza una solicitud POST utilizando fetch
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indica que estás enviando datos en formato JSON
        },
        body: JSON.stringify(listaClientes), // Convierte los datos a formato JSON antes de enviarlos
      });

      if (response.ok) {
        // Si la respuesta es exitosa, puedes procesar la respuesta si es necesario
        await response.json();
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al crear la cliente:", response.status);
      }
    } catch (error) {
      // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
      console.error("Error de red al crear la cliente:", error);
    }
  }

  async function actualizarHabitacionId(id: any) {
    try {
      // Construye la URL para la creación de una nueva habitación
      const URL = `http://localhost:8080/api/v1/habitaciones/${id}`;

      // Define los datos que deseas enviar en el cuerpo de la solicitud POST
      let datoActualizar = {
        ocupacion: "ocupado",
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

  async function eliminarReservas(idReserva: any) {
    try {
      const URL = `http://localhost:8080/api/v1/reservas/eliminar/${idReserva}`;

      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Si la respuesta es exitosa, puedes procesar la respuesta si es necesario
        const data = await response.json();
        console.log("Reserva eliminados exitosamente:", data);
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al eliminar las reserva:", response.status);
      }
    } catch (error) {
      console.error("Error de red a eliminar la reserva:", error);
    }
  }

  function MandarClientesActualizarEstadoHabitacion(habitacion: any) {
    //crear Clientes---------------------------------------------------------------------------------------------
    crearCliente();
    //--------------------------------------------------------------------------------------------

    //eliminar ------------------------------------------------------------------------------------------------------
    eliminarReservas($datosReserva.id);
    //--------------------------------------------------------------------------------------------------------

    //actualizar-----------------------------------------------------------------------
    actualizarHabitacionId($idHabitacion);
    //-------------------------------------------------------------------

    $listClientsCheckIn = [];
  }
</script>

<div class="container-room">
  <div class="container-text">
    <p>Habitación asignada</p>
  </div>
  <div class="container-data">
    <div class="container-data-button">
      <p>habitación Nº {$datosReserva.numHabitacion}</p>
      <button
        class="button-check"
        on:click={() => MandarClientesActualizarEstadoHabitacion($datosReserva)}
      >
        <Icon icon="check" size={24} color="222222" />
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .container-room {
    background-color: #222222;
    position: relative;
    height: 40rem;
    width: 100%;
    border-radius: 15px;

    .container-text {
      height: 3rem;
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
