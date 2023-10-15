<script lang="ts">
  export let href: string;
</script>

<a {href}>
  <slot />
</a>

<style lang="scss">
  a {
    height: 3rem;
    width: 5rem;
    border-radius: 10px;
    border: none;
    background-color: #1b1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
</style>
