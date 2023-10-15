<script lang="ts">
  import IconButton from "../objects/IconButton.svelte";
  export let href: string = "/";
</script>

<a {href}>
  <IconButton icon="navigate_before" color="B3B3B3" />
</a>

<style lang="scss">
  a {
    height: 80%;
    width: 80%;
    border-radius: 10px;
    border: none;
    background-color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
</style>
