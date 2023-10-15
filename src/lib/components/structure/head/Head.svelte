<script lang="ts">
  export let text: string;
  import ArrowButton from "../../buttons/ArrowButton.svelte";
</script>

<div class="container-head">
  <div class="structure-head">
    <div class="container-button">
      <ArrowButton />
    </div>
    <div class="container-text">
      <p>{text}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .container-head {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .structure-head {
      width: 90%;
      height: 50%;
      position: absolute;
      left: 2%;

      .container-button {
        width: 5rem;
        height: 5rem;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container-text {
        width: 40rem;
        height: 5rem;
        position: absolute;
        left: 10rem;
        display: flex;
        justify-content: left;
        align-items: center;

        p {
          font-size: 35px;
          font-weight: 600;
        }
      }
    }
  }
</style>
