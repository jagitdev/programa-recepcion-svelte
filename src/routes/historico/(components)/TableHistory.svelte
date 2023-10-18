<table>
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
</table>

<style lang="scss">
  table {
    width: 80%;

    tr {
      border-radius: 10px;
      background-color: #222222;
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
</style>
