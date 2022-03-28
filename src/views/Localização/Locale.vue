<template>
  <div >
      <NavBar />
      <div class="col-md-12 steps shadow position-absolute p-1 mt-3 mb-5">
        <img src="../../assets/img/step.svg" alt="" srcset="" class="d-flex justify-content-center p-3 img-fluid">
      </div>
      <div class="container mt-5 mb-5">
          <div class="row ">
              <div class="col-md-12 mt-5 mb-5 text-center ">
                  <h5 class="titulo float-start">Selecione localização e data </h5>
                  <h6 class="subtitulo float-start">Graphical user interface pitch partner network branding MVP bootstrapping buzz interaction design. User experience social media focus </h6>
                  <h6 class="subtitulo float-start my-1 ">MVP supply chain equity learning curve customer twitter value proposition.</h6>
             </div>
             <div class="col-12 card card-shadow p-5  mb-5 g-2" style="background:#ECF6FC; border-radius: 8px; border: none; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
            <div class="card-body">
                <div class="row float-start">
                <div class="col-md-4  mb-3">
                    <p class="text-font-sm text-black fw-bold text-start mb-0">RETIRADA</p>
                    <div class="input-group w-100">
                    <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#016EA7" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                        </svg>
                    </span>
                    <input type="text" class="form-control input-locale" placeholder="Digite Cidade, Aeroporto ou Loja" aria-label="Input group example" aria-describedby="basic-addon1">
                    <input class="form-control input-devolucao" type="hour" placeholder="Devolução">
                    </div>
                </div>
                    <div class="col-md-3  mb-3  ">
                    <p class="text-font-sm text-black fw-bold text-start text-uppercase mb-0">data da reserva</p>
                    <div class="input-group w-100">
                    <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#016EA7" class="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            </svg>
                        </span>
                        <input type="date" class="form-control input-locale" placeholder="Retirada" aria-label="Input group example" aria-describedby="basic-addon1" s>
                        <input class="form-control input-devolucao" type="hour" placeholder="Hora">
                       
                    </div>
                </div>
                <div class="col-md-3">
                    <p class="text-font-sm text-black fw-bold text-start text-uppercase mb-0">Devolução</p>
                    <div class="input-group w-100">
                    <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#016EA7" class="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            </svg>
                        </span>
                        <input type="date" class="form-control w-25 input-locale" placeholder="Retirada" aria-label="Input group example" aria-describedby="basic-addon1" s>
                        <input class="form-control input-devolucao" type="hour" placeholder="Hora">
                     </div>
                </div>
                <div class="col-md-2 mt-4 mb-4">
                  <router-link to="/resume"><button class="button-waring-sm">SIMULAR RESEVA</button></router-link>

                    </div>
                </div>
                <div class="col-md-3 " style="margin-left:-35px">
                      <div class="form-check form-switch mb-3" >
                  
                      <label class="form-check-label float-start switch-input" for="flexSwitchCheckChecked">tenho um cupom promocional</label>
                      <input class="form-check-input mx-0 mt-0 mb-4 switch-button" type="checkbox" id="flexSwitchCheckChecked" checked>
                     </div>
                </div>

                <div class="col-md-3">
                      <div class="input-group w-100">
                        <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#016EA7" class="bi bi-ticket-fill" viewBox="0 0 16 16">
                             <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13Z"/>
                            </svg>
                        </span>
                        <input type="text" class="form-control input-locale" placeholder="Inserir cupom promocional" aria-label="Input group example" aria-describedby="basic-addon1" s>
                        
                       
                    </div>
                </div>
              
            </div>
           </div>
          
          </div>
          
      </div>
          <div class="mb-0">
          <OfertasExclusivas></OfertasExclusivas>
        </div>

        <div class="background-footer">
          <Footer></Footer>
        </div>

      
  </div>
</template>

<script>
import NavBar from "../../components/NavBar"
import OfertasExclusivas from "../../components/OfertasExclusivas"
import Footer  from '../../components/Footer'

export default {
    components: {
        NavBar,
        OfertasExclusivas,
        Footer
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


color: #016EA7;
}
.subtitulo{

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */


color: #444444;

}
.input-locale{


height: 50px;

background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 4px;
}
.input-devolucao{

height: 50px;
top: 17.71%;
bottom: 56.25%;

background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 4px;
}
.slide-text{


font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
/* identical to box height */

color: #444444;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
.switch-input{

width: 195px;
height: 14px;
left: 10px;
top: 95px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: uppercase;

color: #222121;

}



</style>