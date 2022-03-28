<template>
  <div class="home">

        <div class="mb-0">
         <NavBar></NavBar>
        </div>

        <div class="fundo-banner" style="z-index: 0">
          <BannerPrincipal></BannerPrincipal>
        </div>

        <div class="mb-5" style="z-index: 1; margin-top: -50px">
          <Retirada></Retirada>
        </div>

        <div>
          <EscolhaPlano></EscolhaPlano>
        </div>

        <div class="mb-5">
          <CardsCarrossel></CardsCarrossel>
        </div>

        <div class="mb-5">
          <UnidasDrive></UnidasDrive>
        </div>

        <div class="mb-5">
          <ComoFunciona></ComoFunciona>
        </div>

        <div class="mb-5">
          <AlugueAgora></AlugueAgora>
        </div>

        <div class="mb-5">
          <ParaAlugar></ParaAlugar>
        </div>

        <div class="mb-5">
          <ParaAlugarVocePrecisa></ParaAlugarVocePrecisa>
        </div>


        <div class="mt-5 mb-5">
          <NaUnidas></NaUnidas>
        </div>

        <div class="mb-5">
          <AlugueAgora></AlugueAgora>
        </div>

        <div class="mb-5 fundo">
          <DuvidasFrequentes></DuvidasFrequentes>
        </div>

        <div class="mt-5">
          <Depoimento></Depoimento>
        </div>

        <div class="mb-5">
          <OfertasExclusivas></OfertasExclusivas>
        </div>

        <div class="background-footer">
          <Footer></Footer>
        </div>




  </div>
</template>

<script>

import NavBar from '../components/NavBar'
import UnidasDrive from "@/components/UnidasDrive"
import CardsCarrossel from "../components/CardsCarrossel"
import AlugueAgora from "@/components/AlugueAgora";
import ParaAlugarVocePrecisa from "@/components/VantagensExclusivas";
import DuvidasFrequentes from "@/components/DuvidasFrequentes";
import OfertasExclusivas from "@/components/OfertasExclusivas";
import ComoFunciona from "@/components/ComoFunciona";
import BannerPrincipal from "@/components/BannerPrincipal";
import Retirada from "@/components/Retirada";
import EscolhaPlano from "@/components/EscolhaPlano";
import Footer from "@/components/Footer";
import Depoimento from "@/components/Depoimento";
import ParaAlugar from "@/components/ParaAlugar";
import NaUnidas from "@/components/NaUnidas";





export default {
  name: 'Home',
  components: {
    AlugueAgora,
    CardsCarrossel,
    NavBar,
    UnidasDrive,
    ParaAlugarVocePrecisa,
    DuvidasFrequentes,
    OfertasExclusivas,
    ComoFunciona,
    BannerPrincipal,
    Retirada,
    EscolhaPlano,
    Footer,
    Depoimento,
    ParaAlugar,
    NaUnidas,

  }
}
</script>

<style>

.fundo{
  background-image: url("../assets/img/DuvidasFrequentes/Ellipse 31 (Stroke).png");
  background-repeat: no-repeat;
  background-position: left top; /* Center the image */
}

.fundo-banner{
  background-image: url("../assets/img/Banner/Banner.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 400px;
  background-position: center;
}



.bg-blue{
  background: #016EA7!important;
}

.text-font-sm{
  font-family: Roboto;
  font-size: 16px;
  text-decoration: none;
  color: white;
}

.text-font-md{
  font-family: Roboto;
  font-size: 24px;
  text-decoration: none;
  color: white;
}

.text-font-lg{
  font-family: Roboto;
  font-size: 40px;
  text-decoration: none;
  color: white;
}

.text-color-waring{
  color: #FFDE00!important;
}

.text-color-black{
  color: #444444!important;
}

.text-color-blue{
  color:#016EA7!important;
}

.hr-blue{

  size: 5px;
  background: #016EA7;
  border-radius: 22px;
  opacity: 1;
}

.button-waring-sm{
  width: 155px;
  height: 40px;
  background: #FFDE00;
  border-radius: 50px;
  border: none;
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 16px;
  color: #016EA7;
  text-transform: uppercase;
}

.button-waring-md{
  width: 195px;
  height: 40px;
  background: #FFDE00;
  border-radius: 50px;
  border: none;
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 16px;
  color: #016EA7;
  text-transform: uppercase;
}

.button-waring-md{
  width: 265px;
  height: 40px;
  background: #FFDE00;
  border-radius: 50px;
  border: none;
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 16px;
  color: #016EA7;
  text-transform: uppercase;
}

.button-blue-more{
  width: 150px;
  height: 40px;
  background: #00AADB;
  border-radius: 50px;
  border: none;
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
}


.card-sm{
  width: 180px;
  height: 160px;
  background: #FFFFFF;
  border-radius: 12px;
  border: none;
  flex-direction: column;
  background-clip: border-box;
  margin-right: 3rem;
  align-items: center;
}

.seta{
  width: 162px;
  position: relative;
  left: 60%;
  top: -80%;

}

.card-border-none{
  width: 250px;
  height: 200px;
  flex-direction: column;
  background-clip: border-box;
  margin-right: 3rem;
  align-items: center;

}

.card-icon-sm{
  width: 61px;
  height: auto;
  position: relative;
  top: 15%;
}

.card-icon-md{
  width: 80px;
  height: auto;
  position: relative;
  top: 15%;
}

.card-icon-lg{
  width: 80px;
  height: auto;
}


.card-text{
  position: relative;
  top:25%;

}

.input-sm{
  width: 280px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;

}

body {
  overflow-x: hidden;
}

.button-blue-more{
  width: 195px;
  height: 40px;
  background: #00AADB;
  border-radius: 50px;
  border: none;
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
}

.text-font-xsm{
  text-align: start;
  font-size: 14px;
  font-style: italic;
  color: #535353;
  margin-left: 5.5rem;

}

.background-footer{
  background: rgba(1, 110, 167, 0.1);
}

</style>
