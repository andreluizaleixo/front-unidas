<template>
<div class="container">
  <div class="row d-flex justify-content-center">
    <div class="col-md-8 mt-5 ">
      <p class="text-font-md text-color-black fw-bold mb-4">Dúvidas Frequentes</p>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item ">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>O que preciso para alugar um carro como motorista de aplicativo?</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body text-start">
              Você precisa ter 21 anos ou mais, cartão de crédito próprio ou de terceiros com limite disponível e fazer um reserva aqui em nosso site.
               </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>O aluguel mensal já inclui alguma proteção?</strong>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Quais as vantagens em ser um Cliente Unidas Driver? </strong>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="button-blue-more mt-5">SAIBA MAIS</button>
</div>
</template>


<script>
export default {
name: "DuvidasFrequentes"

}

</script>

<style scoped>

.accordion-button{

  height: 60px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 8px;
}


</style>