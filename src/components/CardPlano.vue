<template>
  <div class="container">
     
           <div class="card shadow-sm w-50" >
               <div class="card-body">
                   <div class="row">
                       <div class="col-md-6">
                           <h5 class="d-flex justify-content-start text-font-title">Hatch Compacto 1.0</h5>
                             <h6 class="float-start group">GRUPO E  <img src="../assets/img/Uberx.svg" class="img-fluid position-relative mx-2 mb-2" width="90em" alt="..."></h6>
                               
                       </div>
                        <div class="col-md-6">
                           <div class="card-title ">Fiat Argo | Chevrolet Onix | Renault Sandero | ou similares <br><small class="detalhes mt-2">Mais detalhes</small></div>
                          
                       </div>
                   </div>
                   <div class="row ">
                        <div class="col-md-5 " >
                             <div class="d-flex ">   
                            <img src="../assets/img/pradronização_carro.svg" class="img-fluid rounded-start mt-3" alt="...">
                             </div>
                        </div>
                          <div class="col-md-5 p-5" >
                           
                            <div class="card-text  mb-5 " style="margin-top:-40px;"><small class="text">A partir de</small><br><h5 class="" style="color:#016EA7;" >R$ 112,90/Diária</h5></div>
                             <div class="d-flex justify-content-center">   
                                 <button type="button" class="btn  simula " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                 SIMULAR
                            </button></div>
                        </div>
                      
                   </div>
                    
                  
               </div>
         
       </div>
        <div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
            <div class="modal-content rounded-3">
                 <div class="container-fluid">
                     <div class="row">
                         <div class="mt-3 mb-1 d-flex justify-content-center ">
                             <div class="col-md-12 d-flex justify-content-center">
                                 <p class="header " >  Preencha seus dados para dar continuidade a reserva</p >
                             </div>
                             <div class="col-2">
                                 <button type="button" class="btn-close p-1 btn-close-opacity:" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                         </div>
                           <div class="mt-3 mb-3 ">
                       
                            <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label float-start ">Nome completo*</label>
                            <input type="text" class="form-control input-modal" id="formGroupExampleInput ">
                            </div>
                            <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label float-start">E-mail*</label>
                            <input type="text" class="form-control input-modal" id="formGroupExampleInput2" >
                            </div>

                            <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label float-start">Telefone ou celular*</label>
                            <input type="text" class="form-control input-modal" id="formGroupExampleInput2" >
                            </div>

                            <div class="mb-3 d-flex justify-content-center">
                             <input type="button" @click="locale()" class="form-control btn-go btn-close-opacity:" data-bs-dismiss="modal" id="formGroupExampleInput2 "  value="CONTINUAR">
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>



export default {
   
    components: {
        // Modal
    },
    data(){
        return{
            showModal: false
        }
    },
    methods:{
        abre(){
            this.showModal = true
        },
        closeModal() {
        this.showModal = false;
      },
        locale(){
          this.showModal = false,
          this.$router.push('locale')
        }
    }

}
</script>

<style scoped>
.card{
width: 100%;
height: auto;
background: #FFFFFF;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
border-radius: 8px;
}
.card .card-title{


left: 57.02%;
right: 5.99%;
top: 9.64%;
bottom: 71.08%;

/* TEXTO */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
word-wrap: wrap;


color: #535353;
}
.card .detalhes{



/* LINK */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;

/* identical to box height, or 17px */

text-decoration-line: underline;

color: #005B9E;
}
.card .card-text .text{

width: 149px;



/* TEXTO PEQUENO */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */


color: #535353;

}

.simula{
/* display: inline-block;
flex-direction: column;
align-items: center; */
padding: 10px 42px;

width: 164px;
height: 39px;
left: 333px;
top: 177px;

background: #FFDE00;
border-radius: 50px;
}
.header{
width: 334.72px;
height: 63px;


font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
/* or 117% */



color: #444444;
}
.btn-go{

width: 191.15px;
height: 45.74px;
left: calc(50% - 191.15px/2 - 0.43px);
top: calc(50% - 45.74px/2 - 21.13px);


background: #FFDE00;
border-radius: 50px;
color: #016EA7;
}
.form-label{
 width: 150px;
height: 24px;
left: 521px;
top: 422px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 200% */

display: flex;
align-items: center;

color: #444444;
}
  .btn-close {
 
        /* float: right; */
        color: #e7deaa;
        font-size: 34px;
        height: 40px;
        line-height: 1;
        margin: 0px 1px;
        opacity: 1;
        text-align: center;
        text-shadow: none;
        -webkit-transition: background 0.2s ease-in-out;
        transition: background 0.2s ease-in-out;
        vertical-align: top;
        width: 10px;
    }

.modal .modal-content{
width: 405px;
height: 466px;
background: #FFFFFF;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);


}
</style>