<script lang="ts">
  export let value = "";
  export let placeholder = "falta placeholder";
</script>

<input type="text" {placeholder} class="form__input" id="nombre" bind:value />

<style lang="scss">
  input {
    padding: 15px;
    border: 2px solid #3d3d3d;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #7a7a7a;
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    border-radius: 15px;
    outline: none;
  }
</style>
