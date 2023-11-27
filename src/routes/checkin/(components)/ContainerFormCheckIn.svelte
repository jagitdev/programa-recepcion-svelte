<script lang="ts">
  import SecondButton from "$lib/components/buttons/SecondButton.svelte";
  import PrimaryInput from "$lib/components/input/text/PrimaryInput.svelte";
  import {
    datosReserva,
    listClientsCheckIn,
  } from "$lib/components/stores/store";

  import OneDiv from "$lib/components/structure/div/OneDiv.svelte";
  import TwoDiv from "$lib/components/structure/div/TwoDiv.svelte";

  let textoBotonBorrarReserva = "Borrar Reserva";
  let textoError = "";

  // llamada para buscar la reserva ----------------------
  function buscarReservas(reservaData: any) {
    let reserva: any;

    async function obtenerHabitacionesFumadorMascota(dni: any) {
      try {
        // Construye la URL con los parámetros variables
        const URL = `http://localhost:8080/api/v1/reservas?dni=${dni}`;

        // Realiza una solicitud GET utilizando fetch
        const response = await fetch(URL, {
          method: "GET",
          mode: "cors",
          cache: "default",
        });

        if (response.ok) {
          // Si la respuesta es exitosa, obtén los datos JSON y almacénalos en una variable
          const data = await response.json();
          reserva = data;

          console.log("reserva encontrada: " + reserva.nombre);
          console.log("numero habitacion reserva: " + reserva.numHabitacion);
        } else {
          // Si la respuesta no es exitosa, muestra un mensaje de error
          console.error("Error al obtener la reserva:", response.status);
        }
      } catch (error) {
        // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
        console.error("Error de red al obtener la reserva:", error);
      }
    }

    obtenerHabitacionesFumadorMascota(reservaData.dni);
  }

  console.log($datosReserva);
  buscarReservas($datosReserva);
  //-------------------------------------------

  //crear cliente ---------------------------
  type typeCreateClient = {
    nombre: string;
    apellidoUno: string;
    apellidoDos: string;
    dni: string;
    telefono: string;
    correoElectronico: string;
    direccion: string;
    fechaLlegada: string;
    fechaFinalizacion: string;
  };

  let createCliente: typeCreateClient = {
    nombre: "",
    apellidoUno: "",
    apellidoDos: "",
    dni: "",
    telefono: "",
    correoElectronico: "",
    direccion: "",
    fechaLlegada: "",
    fechaFinalizacion: "",
  };

  //----------------------------

  //llamada para crear el cliente ---------------------------

  function nuevoCliente() {
    function isValidPhoneNumberFormat(phoneNumber: any) {
      const regex = /^\d{3}-\d{3}-\d{3}$/;
      return regex.test(phoneNumber);
    }

    let newClient: typeCreateClient = {
      nombre: createCliente.nombre,
      apellidoUno: createCliente.apellidoUno,
      apellidoDos: createCliente.apellidoDos,
      dni: createCliente.dni,
      telefono: createCliente.telefono,
      correoElectronico: createCliente.correoElectronico,
      direccion: createCliente.direccion,
      fechaLlegada: $datosReserva.fechaLlegada,
      fechaFinalizacion: $datosReserva.fechaFinalizacion,
    };

    if (
      createCliente.nombre === "" ||
      createCliente.apellidoUno === "" ||
      createCliente.apellidoDos === "" ||
      createCliente.dni === "" ||
      createCliente.telefono === "" ||
      !isValidPhoneNumberFormat(createCliente.telefono) ||
      createCliente.correoElectronico === "" ||
      createCliente.direccion === ""
    ) {
      textoError = "Faltan campos o el formato de teléfono no es correcto";
    } else {
      createCliente.nombre = "";
      createCliente.apellidoUno = "";
      createCliente.apellidoDos = "";
      createCliente.dni = "";
      createCliente.telefono = "";
      createCliente.correoElectronico = "";
      createCliente.direccion = "";

      console.log(newClient);

      listClientsCheckIn.update(
        (clients: any) => (clients = [...clients, newClient])
      );

      console.log($listClientsCheckIn);

      textoError = "";
    }
  }

  //----------------------------------------------------------

  function borrarReserva() {
    let reservaID = $datosReserva.id;

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

    eliminarReservas(reservaID);

    textoBotonBorrarReserva = "Reserva Borrada...";
  }
</script>

<OneDiv>
  <PrimaryInput placeholder={"Nombre"} bind:value={createCliente.nombre} />
</OneDiv>
<OneDiv>
  <PrimaryInput
    placeholder={"Apellido 1"}
    bind:value={createCliente.apellidoUno}
  />
</OneDiv>
<OneDiv>
  <PrimaryInput
    placeholder={"Apellido 2"}
    bind:value={createCliente.apellidoDos}
  />
</OneDiv>
<TwoDiv>
  <PrimaryInput slot="one" placeholder={"Dni"} bind:value={createCliente.dni} />
  <PrimaryInput
    slot="two"
    placeholder={"Teléfono (nnn-nnn-nnn)"}
    bind:value={createCliente.telefono}
  />
</TwoDiv>
<OneDiv>
  <PrimaryInput
    placeholder={"Correo Electrónico"}
    bind:value={createCliente.correoElectronico}
  />
</OneDiv>
<OneDiv>
  <PrimaryInput
    placeholder={"Dirección"}
    bind:value={createCliente.direccion}
  />
</OneDiv>
<div class="one">
  <p>{textoError}</p>
  <SecondButton on:click={borrarReserva}>
    {textoBotonBorrarReserva}
  </SecondButton>
  <SecondButton on:click={nuevoCliente}>Aceptar</SecondButton>
</div>

<style lang="scss">
  .one {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 3%;

    p {
      color: rgb(145, 8, 8);
    }
  }
</style>
