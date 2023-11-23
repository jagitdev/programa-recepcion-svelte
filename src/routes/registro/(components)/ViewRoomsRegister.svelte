<script lang="ts">
  import Icon from "$lib/components/objects/Icon.svelte";
  import {
    listClients,
    valueFumador,
    valueMascota,
  } from "$lib/components/stores/store";

  let textoHabitacionesDisponibles = "Habitaciones disponibles";

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

  function MandarClientesActualizarEstadoHabitacion(habitacion: any) {
    console.log(habitacion);
    let listClientss = $listClients;
    console.log(listClientss);

    async function crearClienteFumadorMascota(
      listClients: any[],
      numHabitacion: any
    ) {
      try {
        // Construye la URL para la creación de una nueva habitación
        const URL = "http://localhost:8080/api/v1/clientes/guardar/lista";

        // Define los datos que deseas enviar en el cuerpo de la solicitud POST
        const listaClientes = listClients.map((cliente) => {
          return {
            numHabitacion: numHabitacion,
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
          const data = await response.json();
          console.log("Cliente creado exitosamente:", data);
        } else {
          // Si la respuesta no es exitosa, muestra un mensaje de error
          console.error("Error al crear la cliente:", response.status);
        }
      } catch (error) {
        // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
        console.error("Error de red al crear la cliente:", error);
      }

      textoHabitacionesDisponibles = "Habitación asignada correctamente";
    }

    async function actualizarHabitacionId(habitacion: any) {
      try {
        // Construye la URL para la creación de una nueva habitación
        const URL = `http://localhost:8080/api/v1/habitaciones/${habitacion.id}`;

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

    crearClienteFumadorMascota(listClientss, habitacion.numHabitacion);
    actualizarHabitacionId(habitacion);
    $listClients = [];
  }
</script>

<div class="container-room">
  <div class="container-button-search">
    <button
      class="button-search"
      on:click={() => {
        obtenerHabitacionesFumadorMascota($valueFumador, $valueMascota);
      }}><Icon icon="search" size={24} color="B3B3B3" /></button
    >
  </div>
  <div class="container-text">
    <p>{textoHabitacionesDisponibles}</p>
  </div>
  <div class="container-data">
    {#each habitaciones as habitacion (habitacion.id)}
      <div class="container-data-button">
        <p>
          habitación {habitacion.numHabitacion} Nº Camas {habitacion.numCamas}
        </p>
        <button
          class="button-check"
          on:click={() => MandarClientesActualizarEstadoHabitacion(habitacion)}
          ><Icon icon="check" size={24} color="222222" /></button
        >
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container-room {
    background-color: #222222;
    position: relative;
    height: 40rem;
    width: 100%;
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
      height: 8%;
      display: flex;
      justify-content: center;
      align-items: end;
      margin-bottom: 10px;

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
