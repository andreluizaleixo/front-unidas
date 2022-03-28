<template>
  <div>
      <navBar />
        <div class="col-md-12 steps shadow position-absolute p-1 mt-3 mb-5">
        <img src="../../assets/img/step.svg" alt="" srcset="" class="d-flex justify-content-center p-3 img-fluid">
        </div>
         <div class="container mt-5">
             <div class="row grid">
                 <div class="col-md-8 mt-5 mb-5">
                     <h5 class="titulo">Identificação</h5>
                     <h6 class="subtitulo float-start">Acesse sua conta para dar continuidade a realização da reserva </h6>
                 </div>
                  
                    <div class="card shadow-sm w-100 col-sm-6">
                        <div class="card-body">
                             <div class="hstack gap-3 d-flex justify-content-between">
                             
                                 <div class="col-md-4 offset-md-1">
                                            <h5 class="card-title mt-3 ">Já sou cliente!</h5>
                                            <p class="text-center mb-5 sub ">Se você já é cliente Unidas Driver, digite seus dados abaixo:</p>
                                        <div class=" col-md-12 mb-5 d-inline-center p-3">
                                   
                                            <div class="mb-3">
                                            <label for="formGroupExampleInput" class="form-label float-start label-text ">CPF*</label>
                                            <input type="text" class="form-control input-modal " id="formGroupExampleInput " v-model="cpf">
                                            </div>
                                            <div class="mb-3">
                                            <label for="formGroupExampleInput2" class="form-label float-start label-text">Senha*</label>
                                            <input type="password" class="form-control input-modal input" id="formGroupExampleInput2"  v-model="password">
                                            </div>

                                            <div class="mb-3 d-flex justify-content-center mt-4">
                                                <router-link to="/finalizar_reserva"><input type="button" class="form-control btn-go button-waring-sm" id="formGroupExampleInput2 "  value="CONTINUAR"></router-link>
                                            </div>
                                        
                                    </div>
                            </div>
                            <div class="vr my-auto" style="height: 500px;width:1px"></div>
                            <div class="col-md-4 mt-2 lado-r">
                                 <div class=" col-md-12 mb-2">
                                     <h5 class="card-title d-flex  mx-5">Ainda não sou cliente</h5>
                                 </div>
                                 <div class="col-md-12">
                                     <p class="card-text mb-3">Para ser cliente Unidas Driver é necessário que você tenha um cadastro na Uber</p>
                                 </div>
                                 <div class="col-md-8 d-flex justify-content-center mb-2 ">
                                      <a href="http://"><img src="../../assets/img/logo-uber.svg" alt="" srcset="" ></a> 
                                      <p class="texto mt-2 w-50 mx-2 fs-7">Clique no ícone ao lado e continue seu cadastro na Unidas.</p>
                                </div>
                                <div class="col-md-12">
                                   <hr class="w-75" >
                                    <p class="w-75 clicar">Se você não é cliente Uber, <a href="http://" class="link" style="color:
                                     #016EA7"><strong>clique aqui</strong></a> e entre em contato conosco. Temos planos especiais para você!</p>
                                </div>
                                <div class="col-md-12">
                                   <hr class="w-75 mb-1" >

                                 <p class="info">Ao continuar você aceita compartilhar suas informações do aplciativo com a Unidas de acordo com as nossas <br></p>
                                  <a href="http://" class="link d-flex justify-content-center ">Políticas de Privacidade</a>
                                </div>
                            </div>
                            </div>
                        </div>
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
    components: {
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
.vr{ 
  
margin-left:5px;
 margin-right:5px;
 width:1px;
 height:5%;
 border-left:1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
        
}
.vr::-ms-ticks-after{
    display:none;
   
}
.cliente{

position: absolute;
width: 226px;
height: 22px;
left: 8em;
float:center;
top: 5em;
display:flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding:10px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 22px;
/* identical to box height, or 92% */


color: #444444;
}
.sub{

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* or 143% */



color: #444444;

}
.cpf{
    position: absolute;
width: 157.71px;
height: 24px;
left: 297px;
top: 529px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 24px;
/* identical to box height, or 200% */

display: flex;
align-items: center;

color: #444444;
}
.texto{
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* or 143% */



color: #444444;
}

.card .card-text{
width: 270px;
height: 69px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 20px;
/* or 143% */



color: #444444;

}
.card .clicar{
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* or 143% */



color: #444444;
}
.card .info{
width: 326px;
height: 50px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 18px;
/* or 150% */

display: flex;
align-items: center;
text-align: center;

color: #444444;

}
.link{
width: 326px;
height: 50px;
text-decoration: none;
color:#005B9E;

}
.container {
  display: flex;
  flex: 1;
}

hr {
  flex-grow: 1;
  /* width: 100%; */ /* or this */
}
@media(max-width: 1000px) {
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        flex-direction: column;
        width: 100%;
        height: auto;
    }
    .vr{
      display: none;
    }
    
}
/* @media(max-width: 800px) {
    .container{
      display: flex;
    }
    .card {
        display: grid;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        flex-direction: column;
        width: 100%;
        height: auto;
    }
     .vr{
      display: none;
    }
    .lado-r{
      position: absolute;
      
    }
} */
 
</style>