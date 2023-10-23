<script lang="ts">
  import { datosHabitacion } from "$lib/components/stores/store";
  import Head from "$lib/components/structure/head/Head.svelte";

  let datos = $datosHabitacion;
  async function actualizarHabitacionId(datoss: any) {
    try {
      // Construye la URL para la creación de una nueva habitación
      const URL = `http://localhost:8080/api/v1/habitaciones/${datoss.id}`;

      // Define los datos que deseas enviar en el cuerpo de la solicitud POST
      let datoActualizar = {
        ocupacion: "libre",
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
</script>

<Head text={"Información Habitación"} />

<p>{datos.id}</p>
<p>{datos.numHabitacion}</p>

<button on:click={() => actualizarHabitacionId(datos)}>eliminar</button>
