<template>
  <div class="bg-blue p-5">
    <div class="col-md-12 flex-column ">

      <p class="text-font-md fw-bold ">
        Vantagens exclusivas para você, motorista de aplicativo!
      </p>

      <div class="d-inline-flex justify-content-between p-3 row cars">

<!--        Sem gastos com manutenção-->
      <div class="card-sm col-md-4 mb-3">
        <img class="card-icon-sm" src="../assets/img/Icons/manutencao@2x-7.png" alt="">
        <p class="text-font-sm card-text text-black fw-bold">Sem gastos com
          manutenção</p>
      </div>

<!--        Assistência 24 horas-->
        <div class="card-sm col-md-4 mb-3">
          <img class="card-icon-sm" src="../assets/img/Icons/assistencia24h@2x.png" alt="">
          <p class="text-font-sm card-text text-black fw-bold">Assistência <br> 24 horas</p>
        </div>

<!--        Livre de IPVA e taxas-->
        <div class="card-sm col-md-4 mb-3 ">
          <img class="card-icon-sm" src="../assets/img/Icons/ipva@2x-1.png" alt="">
          <p class="text-font-sm card-text text-black fw-bold">Livre de IPVA e <br>taxas</p>
        </div>

        <div class="card-sm col-md-4 mb-3">
          <img class="card-icon-sm" src="../assets/img/Icons/protecao@2x-1.png" alt="">
          <p class="text-font-sm card-text text-black fw-bold">Condições <br>especiais</p>
        </div>

        <div class="card-sm col-md-4 mb-3">
          <img class="card-icon-sm" src="../assets/img/Icons/viagem.png" alt="">
          <p class="text-font-sm card-text text-black fw-bold">Proteção <br> completa</p>
        </div>

      </div>

      <div>

        <button class="button-waring-md mt-4">QUERO ESCOLHER MEU CARRO</button>

      </div>

  </div>
 </div>
</template>

<script>
export default {
  name: "ParaAlugarVocePrecisa"
}
</script>

<style scoped>
@media(max-width: 1000px) {
   .bg-blue{
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .cars{
     margin-left: 17%;
   }
}
@media(max-width: 800px) {
  .bg-blue{
     display: flex;
     justify-content: center;
     align-items: center;
   }
}
</style>