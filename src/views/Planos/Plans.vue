<template>
  <div id="plano">
      <NavBar/>
    <div class="col-md-12 steps shadow position-absolute p-1 mt-3 mb-5">
        <img src="../../assets/img/step.svg" alt="" srcset="" class="d-flex justify-content-center p-3 img-fluid">
      </div>
      <div class="container mt-5 ">
         <div class="row">
             <div class="col-md-12 mt-5 mb-5 text-center">
                  <h5 class="titulo">Escolha um plano e veja os grupos de veículos </h5>
                  <h6 class="subtitulo float-start text-wrap">A retirada diretamente nas lojas está sujeita à disponibilidade de veículos no local escolhido.
                        Todos os grupos incluem proteção completa.       </h6>
             </div>
       
            <div class="row d-flex justify-content-center mx-1 mb-5">
                <div class="  col-md-5 mb-3 d-flex" >
                    <button type="button" class="btn p-3  btnSemanal "  @click.prevent="cardSemanal()" >Plano semanal</button><br >
                </div>
               <div class=" col-md-5  mb-3 d-flex">
                    <button type="button" class="btn p-3  btnMensal  "  >Plano mensal</button>
               </div>
            </div>
            <CardPlano v-if="cardS "/>
        </div>
       
      </div>
  </div>
    <div class="mt-5">
      <OfertasExclusivas></OfertasExclusivas>
    </div>

    <div>
      <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import CardPlano from '../../components/CardPlano'
import OfertasExclusivas from "@/components/OfertasExclusivas";
import Footer from "@/components/Footer";


export default {

    components: {
        NavBar,
        CardPlano,
      OfertasExclusivas,
      Footer,
    },
    data(){
        return{
            cardS : false,
            cardM : false
        }
        
    },
    methods: {
        cardSemanal(){
            this.cardS = true
            
        }
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
.titulo{


font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 47px;
/* identical to box height */

display: flex;
align-items: center;

color: #016EA7;

}
.subtitulo{


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 120%;
/* or 19px */


color: #444444;

}
.botoes{
 display:inline-block;
}
.btnSemanal{
width: 479px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
}

.btnSemanal:hover{
    background: #005B9E;
    color:#FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}
.btnMensal{
width: 479px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
}
.btnMensal:hover{
    background: #005B9E;
    color:#FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}

</style>