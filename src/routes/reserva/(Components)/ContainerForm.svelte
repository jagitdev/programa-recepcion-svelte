<script lang="ts">
  import SecondButton from "$lib/components/buttons/SecondButton.svelte";
  import PrimaryInput from "$lib/components/input/text/PrimaryInput.svelte";
  import OneDiv from "$lib/components/structure/div/OneDiv.svelte";
  import TwoDiv from "$lib/components/structure/div/TwoDiv.svelte";
</script>

<div class="container-form">
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
</div>

<style lang="scss">
  .container-form {
    position: relative;
    height: 50rem;
    width: 75%;
    display: flex;
    justify-content: right;
    margin-right: 5rem;
    .one {
      width: 45rem;
      height: 3.5rem;
      margin-bottom: 20px;
      display: flex;
      justify-content: right;
      align-items: center;
    }
  }
</style>
