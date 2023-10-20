<script lang="ts">
  import { listClients } from "$lib/components/stores/store";
</script>

{#each $listClients as client}
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

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
