<script lang="ts">
  import { createEventDispatcher } from "svelte";

  type SelectArrowType = {
    value: any;
    text: any;
  }[];

  export let values: any;
  export let valuesSelect: SelectArrowType = [];

  const dispatch = createEventDispatcher();

  function handleChange(event: any) {
    const selectedValue = event.target.value;

    dispatch("selected", selectedValue);
  }
</script>

<div class="custom-select">
  <select
    name="select"
    class="select"
    bind:value={values}
    on:change={handleChange}
  >
    {#each valuesSelect as service}
      <option value={service.text}>
        {service.text}
      </option>
    {/each}
  </select>
</div>

<style lang="scss">
  select {
    width: 21.5rem;
    height: 100%;
    padding: 10px;
    border: 2px solid #3d3d3d;
    border-radius: 15px;
    font-size: 16px;
    background-color: transparent;
    color: #7a7a7a;
    font-size: 16px;
    font-weight: 600;
  }
</style>
