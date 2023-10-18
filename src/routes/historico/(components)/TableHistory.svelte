<script lang="ts">
  import { onMount } from "svelte";

  let clientes: any = [];

  async function obtenerClientes() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/clientes");

      if (response.ok) {
        const data = await response.json();
        clientes = data;
      } else {
        console.error("Error al obtener los clientes:", response.status);
      }
    } catch (error) {
      console.error("Error de red al obtener los clientes:", error);
    }
  }

  onMount(obtenerClientes);
</script>

<table>
  <thead>
    <tr>
      <td>Nombre</td>
      <td>Apellido 1</td>
      <td>Apellido 2</td>
      <td>DNI</td>
      <td>Teléfono</td>
      <td>Dirección</td>
      <td>Correo Electrónico</td>
      <td>Fecha Llegada</td>
      <td>Fecha Finalización</td>
    </tr>
  </thead>
  <tbody>
    {#each clientes as cliente (cliente.id)}
      <tr>
        <td>{cliente.nombreCliente}</td>
        <td>{cliente.apellidoUnoCliente}</td>
        <td>{cliente.apellidoDosCliente}</td>
        <td>{cliente.dni}</td>
        <td>{cliente.telefonoCliente}</td>
        <td>{cliente.direccionCliente}</td>
        <td>{cliente.correoElectronicoCliente}</td>
        <td>{cliente.fechaLlegadaCliente}</td>
        <td>{cliente.fechaFinalizacionCliente}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  table {
    width: 80%;

    thead {
      tr {
        border-radius: 10px;
        background-color: #1e1e1e;
        text-align: center;
        font-size: 16px;
        font-weight: 600;

        td:first-child {
          border-top-left-radius: 10px;
        }

        td:last-child {
          border-top-right-radius: 10px;
        }

        td {
          padding: 20px 10px;
        }
      }
    }

    tbody {
      tr {
        border-radius: 10px;
        background-color: #222222;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;

        td {
          padding: 20px 10px;
        }
      }

      tr:hover {
        background-color: #1a1a1a;
      }
    }
  }
</style>
