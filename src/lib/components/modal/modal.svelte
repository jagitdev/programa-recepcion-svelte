<script lang="ts">
  import SecondButton from "../buttons/SecondButton.svelte";

  export let showModal: any; // boolean
  export let Data: any = null;

  let dialog: any; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();

  function closeModal() {
    showModal = false;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={closeModal}
  on:click|self={() => dialog.close()}
>
  <div class="wrapper">
    <p>Habitación {Data.numHabitacion}</p>
    <slot />
    <div class="wrapper-button">
      <SecondButton
        on:click={() => {
          showModal = false;
        }}>Aceptar</SecondButton
      >
    </div>
  </div>
</dialog>

<style lang="scss">
  dialog {
    max-width: 60rem;
    max-height: 40rem;
    border-radius: 10px;
    border: none;
    padding: 0;
    z-index: 1;
    margin: auto;
    background-color: #141414;

    .wrapper {
      padding: 1em;

      p {
        font-size: 40px;
        font-weight: 700;
        color: #b3b3b3;
      }
    }

    .wrapper-button {
      display: flex;
      justify-content: right;
      align-items: center;
    }
  }

  dialog > dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 0.2);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
    background: rgba(0, 0, 0, 0.4);
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
