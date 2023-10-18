<script lang="ts">
  import SecondButton from "$lib/components/buttons/SecondButton.svelte";
  import PrimaryInput from "$lib/components/input/text/PrimaryInput.svelte";
  import OneDiv from "$lib/components/structure/div/OneDiv.svelte";
  import TwoDiv from "$lib/components/structure/div/TwoDiv.svelte";
</script>

<OneDiv>
  <PrimaryInput />
</OneDiv>
<OneDiv>
  <PrimaryInput />
</OneDiv>
<OneDiv>
  <PrimaryInput />
</OneDiv>
<OneDiv>
  <PrimaryInput />
</OneDiv>
<div class="one">
  <SecondButton>Aceptar</SecondButton>
</div>

<style lang="scss">
  .one {
    display: flex;
    justify-content: right;
  }
</style>
