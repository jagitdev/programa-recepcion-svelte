<script lang="ts">
  import SecondButton from "$lib/components/buttons/SecondButton.svelte";
  import PrimarySelect from "$lib/components/input/select/PrimarySelect.svelte";
  import PrimaryInput from "$lib/components/input/text/PrimaryInput.svelte";
  import {
    listClients,
    valueFumador,
    valueMascota,
  } from "$lib/components/stores/store";
  import OneDiv from "$lib/components/structure/div/OneDiv.svelte";
  import TwoDiv from "$lib/components/structure/div/TwoDiv.svelte";

  let textoError = "";

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

  let fechaActual = new Date();
  let year = fechaActual.getFullYear();
  let month = fechaActual.getMonth() + 1;
  let day = fechaActual.getDate();

  let createCliente: typeCreateClient = {
    nombre: "",
    apellidoUno: "",
    apellidoDos: "",
    dni: "",
    telefono: "",
    correoElectronico: "",
    direccion: "",
    fechaLlegada: `${year}-${month}-${day}`,
    fechaFinalizacion: "",
  };

  let valuesSelectMascota = [
    { value: 0, text: "No permite Mascota" },
    { value: 1, text: "Permite Mascota" },
  ];

  let valuesSelectFumador = [
    { value: 0, text: "No permite Fumador" },
    { value: 1, text: "Permite Fumador" },
  ];

  let selectedValuesMascota: string = "Permite Mascota";
  let selectedValuesFumador: string = "Permite Fumador";

  function handleSelectedValuesMascota(event: any) {
    selectedValuesMascota = event.detail;
  }

  function handleSelectedValuesFumador(event: any) {
    selectedValuesFumador = event.detail;
  }

  function newCreateClient() {
    function isValidDateFormat(dateString: any) {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      return regex.test(dateString);
    }

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
      fechaLlegada: createCliente.fechaLlegada,
      fechaFinalizacion: createCliente.fechaFinalizacion,
    };

    if (
      createCliente.nombre === "" ||
      createCliente.apellidoUno === "" ||
      createCliente.apellidoDos === "" ||
      createCliente.dni === "" ||
      createCliente.telefono === "" ||
      !isValidPhoneNumberFormat(createCliente.telefono) ||
      createCliente.correoElectronico === "" ||
      createCliente.direccion === "" ||
      !isValidDateFormat(createCliente.fechaLlegada)
    ) {
      textoError =
        "Faltan campos o el formato de teléfono o fecha no es correcto";
    } else {
      createCliente.nombre = "";
      createCliente.apellidoUno = "";
      createCliente.apellidoDos = "";
      createCliente.dni = "";
      createCliente.telefono = "";
      createCliente.correoElectronico = "";
      createCliente.direccion = "";

      listClients.update((clients: any) => (clients = [...clients, newClient]));

      console.log(newClient);
      console.log("metodo aceptar " + selectedValuesMascota);

      //saber si permite mascota o no permite mascota

      if (selectedValuesMascota == "Permite Mascota") {
        valueMascota.update((n: any) => (n = 1));
      } else {
        valueMascota.update((n: any) => (n = 0));
      }

      console.log("$value Mascota " + $valueMascota);

      //saber si permite fumador o no permite fumador

      if (selectedValuesFumador == "Permite Fumador") {
        valueFumador.update((n: any) => (n = 1));
      } else {
        valueFumador.update((n: any) => (n = 0));
      }

      console.log("$value Fumador " + $valueFumador);

      textoError = "";
    }
  }
</script>

<form>
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
    <PrimaryInput
      slot="one"
      placeholder={"Dni"}
      bind:value={createCliente.dni}
    />
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
  <TwoDiv>
    <PrimaryInput
      slot="one"
      placeholder={"Dirección"}
      bind:value={createCliente.direccion}
    />
    <PrimaryInput
      slot="two"
      placeholder={"Fecha de Salida (yyyy-mm-dd)"}
      bind:value={createCliente.fechaFinalizacion}
    />
  </TwoDiv>
  {#if $listClients.length == 0}
    <TwoDiv>
      <PrimarySelect
        slot="one"
        valuesSelect={valuesSelectFumador}
        bind:values={selectedValuesFumador}
        on:selected={handleSelectedValuesFumador}
      />
      <PrimarySelect
        slot="two"
        valuesSelect={valuesSelectMascota}
        bind:values={selectedValuesMascota}
        on:selected={handleSelectedValuesMascota}
      />
    </TwoDiv>
  {/if}

  <div class="one">
    <p>{textoError}</p>
    <SecondButton on:click={newCreateClient}>Aceptar</SecondButton>
  </div>
</form>

<style lang="scss">
  .one {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 15%;

    p {
      color: rgb(145, 8, 8);
    }
  }
</style>
