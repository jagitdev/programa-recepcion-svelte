<script lang="ts">
  import Head from "$lib/components/structure/head/Head.svelte";
  import ContainerForm from "./(Components)/ContainerForm.svelte";
  import ViewRooms from "./(Components)/ViewRooms.svelte";
</script>

<Head text="Reserva Habitación" />
<div class="container-main">
  <ContainerForm />
  <ViewRooms />
</div>

<style lang="scss">
  .container-main {
    display: flex;
    justify-content: center;
    margin-inline: 8rem;
  }
</style>
