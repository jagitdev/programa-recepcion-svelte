<script lang="ts">
  import Head from "$lib/components/structure/head/Head.svelte";
  import ContainerFormRegister from "./(components)/ContainerFormRegister.svelte";
  import InfoClientsRegister from "./(components)/InfoClientsRegister.svelte";
  import ViewRoomsRegister from "./(components)/ViewRoomsRegister.svelte";

  let listHabitaciones: any = [];
</script>

<Head text="Registro Cliente" />
<div class="container-main">
  <div class="container-left">
    <div class="container-info-client">
      <InfoClientsRegister />
    </div>
    <div class="container-form">
      <ContainerFormRegister />
    </div>
  </div>
  <div class="container-view-room">
    <ViewRoomsRegister />
  </div>
</div>

<style lang="scss">
  .container-main {
    display: flex;
    justify-content: center;
    margin-inline: 8rem;

    .container-left {
      height: 50rem;
      width: 75%;
      margin-right: 5rem;
      display: flex;
      justify-content: right;
      position: relative;

      .container-info-client {
        height: 5rem;
        width: 60%;
        position: absolute;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container-form {
        height: 45rem;
        width: 60%;
        margin-top: 5rem;
        position: relative;
      }
    }

    .container-view-room {
      width: 25%;
      height: 50rem;
    }
  }
</style>
