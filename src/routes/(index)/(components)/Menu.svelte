<script>
  import ActionsButton from "$lib/components/buttons/ActionsButton.svelte";
  import CloseButton from "$lib/components/buttons/CloseButton.svelte";
  import PrimaryButton from "$lib/components/buttons/PrimaryButton.svelte";
  import Icon from "$lib/components/objects/Icon.svelte";
  import IconButton from "$lib/components/objects/IconButton.svelte";

  let value = true;

  function toggle() {
    value = !value;
  }
</script>

<div class="container-menu">
  <div class="menu">
    <div class="text-menu">
      <p>Menu</p>
    </div>
    <hr class="vertical-line-uno" />
    <div class="icons-botons">
      <Icon icon="settings" color="B3B3B3" link="configuracion" />
      <Icon icon="toc" color="B3B3B3" link="historico" />
      <Icon icon="flip" color="B3B3B3" link="reservas" />
    </div>
    <hr class="vertical-line-dos" />
    <div class="plantas">
      <p>Planta 1</p>
      <p>Planta 2</p>
      <p>Planta 3</p>
    </div>
    <hr class="vertical-line-tres" />

    <div class="container-boton">
      {#if value}
        <PrimaryButton on:click={toggle}>Nuevo cliente</PrimaryButton>
      {/if}
      {#if !value}
        <ActionsButton href="/reserva">
          <IconButton icon="calendar_add_on" color="B3B3B3" />
        </ActionsButton>
        <CloseButton on:click={toggle}>
          <Icon icon="close" color="B3B3B3" size={15} />
        </CloseButton>
        <ActionsButton href="/registro">
          <IconButton icon="person_add" color="B3B3B3" />
        </ActionsButton>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  div {
    width: 100vw;
    height: 20vh;
    position: absolute;
    display: flex;
    justify-content: center;

    .menu {
      background-color: #222222;
      height: 60px;
      width: 800px;
      border-radius: 15px;
      top: 80px;
      position: relative;

      .text-menu {
        width: 12%;
        height: 100%;
        float: left;
        left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: #5b5b5b;
          font-weight: 700;
          font-size: 17px;
        }
      }

      .vertical-line-uno {
        border: 1px solid #3a3939;
        height: auto;
        top: 20%;
        bottom: 20%;
        position: absolute;
        left: 12%;
      }

      .icons-botons {
        width: 19%;
        height: 100%;
        float: left;
        left: 12.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
      }

      .vertical-line-dos {
        border: 1px solid #3a3939;
        height: auto;
        top: 20%;
        bottom: 20%;
        position: absolute;
        left: 32%;
      }

      .plantas {
        width: 45%;
        height: 100%;
        float: left;
        left: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        p {
          font-size: 16px;
          font-weight: 600;
        }
      }

      .vertical-line-tres {
        border: 1px solid #3a3939;
        height: auto;
        top: 20%;
        bottom: 20%;
        position: absolute;
        left: 73%;
      }

      .container-boton {
        width: 23.5%;
        height: 100%;
        float: left;
        left: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 6px;
        gap: 10px;
      }
    }
  }
</style>
