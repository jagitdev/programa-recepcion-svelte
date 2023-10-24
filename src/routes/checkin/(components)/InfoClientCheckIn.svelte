<script lang="ts">
  import { listClientsCheckIn } from "$lib/components/stores/store";
</script>

{#each $listClientsCheckIn as client}
  <div class="container-data">
    <p>{client.nombre} {client.apellidoUno} {client.apellidoDos}</p>
  </div>
{/each}

<style lang="scss">
  .container-data {
    background-color: #222222;
    padding: 10px;
    border-radius: 15px;
    max-width: 150px;
    min-width: 70px;
    margin-left: 10px;
    animation: fade 0.5s ease-out;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
