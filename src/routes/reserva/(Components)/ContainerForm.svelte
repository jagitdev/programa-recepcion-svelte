<script lang="ts">
  import SecondButton from "$lib/components/buttons/SecondButton.svelte";
  import PrimarySelect from "$lib/components/input/select/PrimarySelect.svelte";
  import PrimaryInput from "$lib/components/input/text/PrimaryInput.svelte";
  import {
    listClientsReserva,
    valueFumador,
    valueMascota,
  } from "$lib/components/stores/store";
  import OneDiv from "$lib/components/structure/div/OneDiv.svelte";
  import TwoDiv from "$lib/components/structure/div/TwoDiv.svelte";

  let textoError = "";

  type typeCreateClientReserva = {
    nombre: string;
    apellidoUno: string;
    apellidoDos: string;
    dni: string;
    fechaLlegada: string;
    fechaFinalizacion: string;
  };

  let createCliente: typeCreateClientReserva = {
    nombre: "",
    apellidoUno: "",
    apellidoDos: "",
    dni: "",
    fechaLlegada: "",
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

    let newClient: typeCreateClientReserva = {
      nombre: createCliente.nombre,
      apellidoUno: createCliente.apellidoUno,
      apellidoDos: createCliente.apellidoDos,
      dni: createCliente.dni,
      fechaLlegada: createCliente.fechaLlegada,
      fechaFinalizacion: createCliente.fechaFinalizacion,
    };

    if (
      createCliente.nombre == "" ||
      createCliente.apellidoUno == "" ||
      createCliente.apellidoDos == "" ||
      createCliente.dni == "" ||
      !isValidDateFormat(createCliente.fechaLlegada) ||
      !isValidDateFormat(createCliente.fechaFinalizacion)
    ) {
      textoError = "Faltan campos el formato de fecha no es correcto";
    } else {
      createCliente.nombre = "";
      createCliente.apellidoUno = "";
      createCliente.apellidoDos = "";
      createCliente.dni = "";

      listClientsReserva.set(newClient);

      console.log(newClient);
      console.log($listClientsReserva.nombre);
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

<div class="container-form">
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
    <OneDiv>
      <PrimaryInput placeholder={"Dni"} bind:value={createCliente.dni} />
    </OneDiv>
    <TwoDiv>
      <PrimaryInput
        slot="one"
        placeholder={"Fecha de Llegada (yyyy-mm-dd)"}
        bind:value={createCliente.fechaLlegada}
      />
      <PrimaryInput
        slot="two"
        placeholder={"Fecha de Salida (yyyy-mm-dd)"}
        bind:value={createCliente.fechaFinalizacion}
      />
    </TwoDiv>
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

    <div class="one">
      <p>{textoError}</p>
      <SecondButton on:click={newCreateClient}>Aceptar</SecondButton>
    </div>
  </form>
</div>

<style lang="scss">
  .container-form {
    position: relative;
    height: 40rem;
    width: 75%;
    display: flex;
    justify-content: right;
    margin-right: 5rem;
    .one {
      width: 45rem;
      height: 3.5rem;
      margin-bottom: 20px;
      display: flex;
      justify-content: right;
      align-items: center;
      gap: 15%;

      p {
        color: rgb(145, 8, 8);
      }
    }
  }
</style>
