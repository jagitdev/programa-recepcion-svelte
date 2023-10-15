<script>
  import MainMarginContainer from "$lib/components/structure/containers/MainMarginContainer.svelte";
</script>

<div class="quadrate">
  <div class="info-container">
    <div class="container-uno">
      <div class="uno" />
      <div class="dos" />
      <div class="tres" />
      <div class="cuadro" />
      <div class="cinco" />
      <div class="seis" />
    </div>
    <div class="container-dos">
      <div class="uno" />
      <div class="dos" />
      <div class="tres" />
      <div class="cuadro" />
      <div class="cinco" />
      <div class="seis" />
    </div>
    <div class="container-tres">
      <div class="uno" />
      <div class="dos" />
      <div class="tres" />
      <div class="cuadro" />
      <div class="cinco" />
      <div class="seis" />
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
      top: 10rem;

      .container-uno {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(1, 1fr);
        gap: 0% 7%;
        height: 26%;

        div {
          background-color: #0d5f00;
          border-radius: 20px;
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

        div {
          background-color: #0d5f00;
          border-radius: 20px;
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

        div {
          background-color: #0d5f00;
          border-radius: 20px;
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
