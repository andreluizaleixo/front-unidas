<template>
<div >
  <div class="col-md-12 ">
    <div class="justify-content-center d-inline-flex flex-column">
      <p class="text-font-lg text-color-blue d-flex justify-content-center mb-0 fw-bold">Como funciona</p>
      <div class="d-flex justify-content-center ">
        <hr class="hr-blue w-50 d-flex">
      </div>
      
           <p class="text-font-md text-color-black text-start  parceiro">Seja um motorista parceiro. É simples e rápido.</p>
      
    </div>

 <div class="d-flex justify-content-center p-3 row car">

<!--        Sem gastos com manutenção-->
      <div class="card-border-none col-md-8">
        <img class="card-icon-sm" src="../assets/img/Icons/manutencao@2x-5.png" alt="">
        <p class="text-font-sm card-text text-black fw-bold">Escolha um plano</p>
        <p class="text-font-sm card-text text-black fst-normal"> Escolha o plano de km de acordo com a sua necessidade e o grupo de carro que deseja </p>
          <img class="seta" src="../assets/img/ComoFunciona/SetaPontilhada.png" alt="" >
      </div>


<!--       Conecte-se com a Uber-->
      <div class="card-border-none col-md-8">
        <img class="card-icon-sm" src="../assets/img/Icons/Group_999.png" alt="">
        <p class="text-font-sm card-text text-black fw-bold">Conecte-se com a Uber</p>
        <p class="text-font-sm card-text text-black fst-normal"> Conecte-se com a sua conta Uber. Tudo online de forma rápida e fácil.</p>
          <img class="seta" src="../assets/img/ComoFunciona/SetaPontilhada.png" alt="">
      </div>



<!--        Retire seu veículo-->
      <div class="card-border-none col-md-8">
        <img class="card-icon-sm" src="../assets/img/Icons/manutencao-9.png" alt="">
        <p class="text-font-sm card-text text-black fw-bold">Retire seu veículo</p>
        <p class="text-font-sm card-text text-black fst-normal"> Vá até a loja escolhida e retire seu veículo.<br>.</p>
          <img class="seta" src="../assets/img/ComoFunciona/SetaPontilhada.png" alt="">
      </div>

      <!--Área exclusiva-->
      <div class="card-border-none col-md-8">
        <img class="card-icon-sm" src="../assets/img/Icons/manutencao@2x-19.png" alt="">
        <p class="text-font-sm card-text text-black fw-bold">Área exclusiva</p>
        <p class="text-font-sm card-text text-black fst-normal"> Acesse sua área exclusiva e tenha informações sobre locações faturas e outros.</p>

      </div>
    </div>


  </div>
    <div class="mt-5">
      <button class="button-blue-more">SAIBA MAIS</button>
    </div>
</div>
</template>

<script>
export default {
  name: "ComoFunciona"
}
</script>

<style scoped>
@media(max-width: 1000px) {
    .seta {
        display: block;
    }
    .car {
      display: flex;
      box-sizing: border-box;
      padding: 20px;
       margin-left: 17%;
    }
    .parceiro{
      font-size: 16px;
      text-align: center;
      word-wrap: wrap;
    }
}
@media(max-width: 800px) {
    .seta {
        display: none;
    }
    .car {
      display: flex;
      box-sizing: border-box;
      padding: 20px;
      margin-left: 17%;
    }
    .parceiro{
      font-size: 16px;
      text-align: center;
      word-wrap: wrap;
    }
}
</style>