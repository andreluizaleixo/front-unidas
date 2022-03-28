<template>
<div>
  <div class="container">
    <div class=" card card-shadow p-5" style="background:#ECF6FC; border-radius: 8px; border: none; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
      <div class="card-body">
        <div class="row mx-2 ">
          <div class="col-md-6  mb-3">
            <p class="text-font-sm text-black fw-bold text-start mb-0">RETIRADA</p>
            <div class="input-group w-100">
              <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </span>
              <input type="text" class="form-control " placeholder="Digite Cidade, Aeroporto ou Loja" aria-label="Input group example" aria-describedby="basic-addon1">
            </div>
          </div>
            <div class="col-md-4  mb-3  ">
            <p class="text-font-sm text-black fw-bold text-start text-uppercase mb-0">data da reserva</p>
            <div class="input-group w-100">
              <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                    </svg>
                </span>
                 <input type="date" class="form-control w-25 " placeholder="Retirada" aria-label="Input group example" aria-describedby="basic-addon1" s>
                  <input class="form-control" type="hour" placeholder="Hora">
            </div>
          </div>
          <div class="col-md-2 mt-4">
               <button class="button-waring-sm">SIMULAR RESEVA</button>
            </div>

             <div class="col-md-5 " style="margin-left:-35px">
                      <div class="form-check form-switch mb-3" >
                  
                      <label class="form-check-label float-start switch-input" for="flexSwitchCheckChecked">tenho um cupom promocional</label>
                      <input class="form-check-input mx-0 mt-0 mb-4 switch-button" type="checkbox" id="flexSwitchCheckChecked" checked>
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
  name: "Retirada"
}
</script>

<style scoped>

.input-save{
  background: #FFFFFF!important;
  border: 1px solid #E5E5E5!important;
  box-sizing: border-box!important;
  border-radius: 4px!important;
  height: 50px!important;
  width: auto!important;
  border-left: 0px!important;
}

card-retirada{
  background: #ECF6FC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: red;
}
.input-group-text{
  background: white;
  border-right: 0px;
  color: #016EA7;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
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