<script lang="ts">
  import OneDiv from "./OneDiv.svelte";
</script>

<div>
  <div class="one">
    <slot name="one" />
  </div>
  <div class="one">
    <slot name="two" />
  </div>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 13px;
    .one {
      width: 50%;
      height: 3rem;
    }
  }
</style>
