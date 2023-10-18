<script lang="ts">
  import { onMount } from "svelte";

  // En tu componente Svelte
  let habitaciones: any = [];
  let habitacionesUno: any = [];
  let habitacionesDos: any = [];
  let habitacionesTres: any = [];

  // Esta función realiza una solicitud GET a la API Spring
  async function obtenerHabitaciones() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/habitaciones");

      if (response.ok) {
        const data = await response.json();
        habitaciones = data;

        //Dividimos el array principal en tres arrays
        //101-106
        habitacionesUno = habitaciones.filter(
          (h: { numHabitacion: number }) =>
            h.numHabitacion >= 101 && h.numHabitacion <= 106
        );

        //201-206
        habitacionesDos = habitaciones.filter(
          (h: { numHabitacion: number }) =>
            h.numHabitacion >= 201 && h.numHabitacion <= 206
        );
        //301-306
        habitacionesTres = habitaciones.filter(
          (h: { numHabitacion: number }) =>
            h.numHabitacion >= 301 && h.numHabitacion <= 306
        );

        console.log(habitaciones);
        console.log(habitacionesUno);
      } else {
        console.error("Error al obtener las habitaciones:", response.status);
      }
    } catch (error) {
      console.error("Error de red al obtener las habitaciones:", error);
    }
  }

  // Llamar a la función para obtener las habitaciones cuando sea necesario
  onMount(obtenerHabitaciones);
</script>

<div class="quadrate">
  <div class="info-container">
    <div class="container-uno">
      {#each habitacionesUno as habitacion (habitacion.id)}
        <div class={habitacion.ocupacion === "libre" ? "libre" : "ocupado"}>
          <p>{habitacion.numHabitacion}</p>
        </div>
      {/each}
    </div>
    <div class="container-dos">
      {#each habitacionesDos as habitacion (habitacion.id)}
        <div class={habitacion.ocupacion === "libre" ? "libre" : "ocupado"}>
          <p>{habitacion.numHabitacion}</p>
        </div>
      {/each}
    </div>
    <div class="container-tres">
      {#each habitacionesTres as habitacion (habitacion.id)}
        <div class={habitacion.ocupacion === "libre" ? "libre" : "ocupado"}>
          <p>{habitacion.numHabitacion}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .quadrate {
    width: 100vw;
    height: 80vh;

    .info-container {
      width: auto;
      height: 38rem;
      position: absolute;
      left: 15rem;
      right: 15rem;
      top: 8rem;

      .container-uno {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(1, 1fr);
        gap: 0% 7%;
        height: 26%;

        .libre {
          background-color: #0d5f00;
          box-shadow: 0px 0px 10px 0px #0d5f00;
          -webkit-box-shadow: 0px 0px 10px 0px #0d5f00;
          -moz-box-shadow: 0px 0px 10px 0px #0d5f00;
        }

        .ocupado {
          background-color: #820000;
          box-shadow: 0px 0px 10px 0px #820000;
          -webkit-box-shadow: 0px 0px 10px 0px #820000;
          -moz-box-shadow: 0px 0px 10px 0px #820000;
        }

        div {
          background-color: #0d5f00;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 30px;
          }
        }

        .uno {
          grid-area: 1 / 1 / 2 / 2;
        }

        .dos {
          grid-area: 1 / 2 / 2 / 3;
        }

        .tres {
          grid-area: 1 / 3 / 2 / 4;
        }

        .cuadro {
          grid-area: 1 / 4 / 2 / 5;
        }

        .cinco {
          grid-area: 1 / 5 / 2 / 6;
        }

        .seis {
          grid-area: 1 / 6 / 2 / 7;
        }
      }

      .container-dos {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(1, 1fr);
        gap: 0% 7%;
        height: 26%;
        margin-top: 5%;

        .libre {
          background-color: #0d5f00;
          box-shadow: 0px 0px 10px 0px #0d5f00;
          -webkit-box-shadow: 0px 0px 10px 0px #0d5f00;
          -moz-box-shadow: 0px 0px 10px 0px #0d5f00;
        }

        .ocupado {
          background-color: #820000;
          box-shadow: 0px 0px 10px 0px #820000;
          -webkit-box-shadow: 0px 0px 10px 0px #820000;
          -moz-box-shadow: 0px 0px 10px 0px #820000;
        }

        div {
          background-color: #0d5f00;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 30px;
          }
        }

        .uno {
          grid-area: 1 / 1 / 2 / 2;
        }

        .dos {
          grid-area: 1 / 2 / 2 / 3;
        }

        .tres {
          grid-area: 1 / 3 / 2 / 4;
        }

        .cuadro {
          grid-area: 1 / 4 / 2 / 5;
        }

        .cinco {
          grid-area: 1 / 5 / 2 / 6;
        }

        .seis {
          grid-area: 1 / 6 / 2 / 7;
        }
      }

      .container-tres {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(1, 1fr);
        gap: 0% 7%;
        height: 26%;
        margin-top: 5%;

        .libre {
          background-color: #0d5f00;
          box-shadow: 0px 0px 10px 0px #0d5f00;
          -webkit-box-shadow: 0px 0px 10px 0px #0d5f00;
          -moz-box-shadow: 0px 0px 10px 0px #0d5f00;
        }

        .ocupado {
          background-color: #820000;
          box-shadow: 0px 0px 10px 0px #820000;
          -webkit-box-shadow: 0px 0px 10px 0px #820000;
          -moz-box-shadow: 0px 0px 10px 0px #820000;
        }

        div {
          background-color: #0d5f00;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 30px;
          }
        }

        .uno {
          grid-area: 1 / 1 / 2 / 2;
        }

        .dos {
          grid-area: 1 / 2 / 2 / 3;
        }

        .tres {
          grid-area: 1 / 3 / 2 / 4;
        }

        .cuadro {
          grid-area: 1 / 4 / 2 / 5;
        }

        .cinco {
          grid-area: 1 / 5 / 2 / 6;
        }

        .seis {
          grid-area: 1 / 6 / 2 / 7;
        }
      }
    }
  }
</style>
