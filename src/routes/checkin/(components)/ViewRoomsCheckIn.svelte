<script lang="ts">
</script>

<div class="container-room">
  <div class="container-text">
    <p>Habitación asignada</p>
  </div>
</div>

<style lang="scss">
  .container-room {
    background-color: #222222;
    position: relative;
    height: 40rem;
    width: 100%;
    border-radius: 15px;

    .container-text {
      height: 3rem;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: end;

      p {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
      }
    }

    .container-data {
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      p {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
</style>
