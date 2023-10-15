<script lang="ts">
  export let icon: string;
  export let size: number = 28;
  export let color: string;
  export let link: string = "";
</script>

<a
  href={link}
  class="material-symbols-outlined"
  style:font-size={size + "px"}
  style:color={"#" + color}
  >{icon}
</a>

<style lang="scss">
  a {
    cursor: pointer;
    text-decoration: none;
  }
</style>
