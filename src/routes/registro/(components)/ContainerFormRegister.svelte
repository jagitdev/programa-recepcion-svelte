<script lang="ts">
  import SecondButton from "$lib/components/buttons/SecondButton.svelte";
  import PrimaryInput from "$lib/components/input/text/PrimaryInput.svelte";
  import OneDiv from "$lib/components/structure/div/OneDiv.svelte";
  import TwoDiv from "$lib/components/structure/div/TwoDiv.svelte";
</script>

<form>
  <OneDiv>
    <PrimaryInput />
  </OneDiv>
  <OneDiv>
    <PrimaryInput />
  </OneDiv>
  <OneDiv>
    <PrimaryInput />
  </OneDiv>
  <TwoDiv>
    <PrimaryInput slot="one" />
    <PrimaryInput slot="two" />
  </TwoDiv>
  <OneDiv>
    <PrimaryInput />
  </OneDiv>
  <TwoDiv>
    <PrimaryInput slot="one" />
    <PrimaryInput slot="two" />
  </TwoDiv>
  <TwoDiv>
    <PrimaryInput slot="one" />
    <PrimaryInput slot="two" />
  </TwoDiv>
  <TwoDiv>
    <PrimaryInput slot="one" />
    <PrimaryInput slot="two" />
  </TwoDiv>
  <div class="one">
    <SecondButton>Aceptar</SecondButton>
  </div>
</form>

<style lang="scss">
  .one {
    display: flex;
    justify-content: right;
  }
</style>
