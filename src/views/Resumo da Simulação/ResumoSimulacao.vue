<template>
  <div>
      <navBar />
      <div class="col-md-12 steps shadow position-absolute p-1 mt-3 mb-5">
        <img src="../../assets/img/step.svg" alt="" srcset="" class="d-flex justify-content-center p-3 img-fluid">
      </div>
      <div class="container mt-5">
          <div class="row">
              <div class="col-md-12 mt-5 mb-5  ">
                  <h5 class="titulo d-flex">Resumo da simulação </h5>
                  <h6 class="subtitulo  float-start text-wrap">Confira os dados da sua simulação! </h6>
             </div>
                <div class="col-sm-6 mb-3">
                    <div class="card shadow-sm">
                    <div class="card-body">
                      <div class="row">
                          <div class="col-md-12">
                           <h5 class="card-title float-start ">Hatch Médio 1.0</h5>
                          </div>
                          <div class="col-md-12">
                            <h6 class="group float-start">Grupo B</h6>
                          </div>
                          <div class="col-md-12">
                                <p class="card-text float-start">Fiat Argo | Chevrolet Onix | Renault Sandero | ou similares</p>
                          </div>
                      </div>
                      <div class="col-md-12 mt-4">
                             <img src="../../assets/img/carro1.svg" alt="UberX" class="img-fluid carro ">
                      </div>
                    </div>
                    <div class="card-footer bg-transparent border-1 d-flex justify-content-between">
                        <a href="http://" class="link1">Mais detalhes</a>
                         <a href="http://" class="link1">Alterar</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 ">
                    <div class="card shadow-sm">
                   <div class="card-body">
                       <div class="row">
                           <div class="col-md-12 mb-3 ">
                                <h5 class="card-title float-start titulo ">Tipo de Plano</h5>
                           </div>
                           <div class="col-md-12 d-flex justify-content-between">
                               <div class="row ">
                                    <h5 class="text ">Semanal<br><span>1000Km/semana</span></h5>
                               </div>
                               <div >
                                  <h5>R$416,90</h5>
                                </div>
                           </div>
                           <div class="col-md-12 ">
                                <p class="texto mt-2 fs-7">O plano semanal lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
                           </div>
                           <div class="col-md-12 d-flex justify-content-between">
                                <p class="texto">Valor total</p>
                                <p class="valor">R$ 416,90</p>
                           </div>
                       </div>
                    </div>
                    <div class="card-footer bg-transparent border-1 d-flex justify-content-between">
                        <a href="http://" class="link1">Mais detalhes</a>
                         <a href="http://" class="link1">Alterar</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-12 mt-3">

             <router-link to="/identify"><button class="button-waring-sm botao-1 mb-2 ">REALIZAR RESERVA</button></router-link>
                </div>
                  <div class="col-md-12 ">
                    <button class="button-waring-sm botao-2">SALVAR SIMULAÇÃO</button>
                </div>
          </div>
      </div>
      <div class="mt-5">
        <OfertasExclusivas></OfertasExclusivas>
      </div>

    <div class="background-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import navBar  from '../../components/NavBar.vue'
import OfertasExclusivas from "@/components/OfertasExclusivas";
import Footer from "@/components/Footer";
export default {
    components:{
        navBar,
          OfertasExclusivas,
      Footer,
    }
}
</script>

<style scoped>
.steps{
width: 100%;
height: 66px;
left: 0px;
top: 90px;
background: #FFFFFF;
}

.card-title {

width: 331px;
height: 21px;
left: 106px;
top: 334px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;

color: #444444;

}
.card-text{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* or 137% */


color: #444444;
}
.carro{

width: 42%;
height: 50%;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* or 137% */


color: #444444;

}
.card.card-footer.link1{

width: 88px;
height: 17px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 120%;
/* identical to box height, or 17px */

text-decoration-line: underline;

color: #005B9E;
}
.text{

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 137% */


color: #444444;
}
.texto{


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
 line-height: 1.5;
 text-align: justify;
/* or 137% */


color: #444444;

}
.valor{
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
/* identical to box height, or 122% */

text-align: right;

color: #016EA7;

}
.botao-1{
width: 207px;
height: 40px;
}
.botao-2{
width: 207px;
height: 40px;
background: #FAFAFA;
border: 1px #005B9E solid;
}
</style>