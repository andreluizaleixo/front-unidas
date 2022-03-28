<template>
  <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-8 ">
      <div class="justify-content-center d-inline-flex flex-column">
        <p class="text-font-lg text-color-blue d-flex justify-content-center mb-0 fw-bold">Escolha seu plano</p>
        <div class="d-flex justify-content-center ">
          <hr class="hr-blue w-50 d-flex">
        </div>
        <p class="text-font-md text-color-black ">Com o Unidas Driver você trabalha tranquilo! Carro novo, livre de IPVA e taxas, sem gastos com manutenção e atendimento exclusivo!
</p>
        <div class="row d-flex mt-3 justify-content-center mx-5">
                <div class=" col-md-4  d-flex mb-3" >
                    <button type="button" class="btn p-3  btnSemanal text-font-md text-black fw-bolder"  @click.prevent="cardSemanal()" >Plano semanal</button><br >
                </div>
               <div class="col-md-4   d-flex mb-3">
                    <button type="button" class="btn p-3  btnMensal text-font-md text-black fw-bolder "  >Plano mensal</button>
               </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "EscolhaPlano"
}
</script>

<style scoped>

.btnSemanal{
width: 235px;
box-sizing: border-box;
background: #FFFFFF;
border: none;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
}

.btnSemanal:hover{
    background: #005B9E;
    color:#FFFFFF;
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  color: white!important;
}
.btnMensal{
  width: 235px;
  background: #FFFFFF;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.btnMensal:hover{
    background: #005B9E;
    color:#FFFFFF;
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  color: white!important;
}
</style>