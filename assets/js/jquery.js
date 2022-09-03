$(document).ready(function(){

    //Variables globales

    let nombre = "";
    let provincia = "";
    let cuidad = "";
    let sector = "";
    let calle = "";
    let carrera = "";
    
    //Variables para la confirmacion
    
    let asignatura1 = "";
    let asignatura2 = "";
    let asignatura3 = "";
    let asignatura4 = "";
    let asignatura5 = "";
    let asignatura6 = "";
    let asignatura7 = "";
    let asignatura8 = "";
    let asignatura9 = "";
    let asignatura10 = "";
    let asignatura11 = "";
    let asignatura12 = "";
    let asignatura13= "";
    let asignatura14 = "";
    let asignatura15 = "";
    let horario1 = "";
    let horario2 = "";
    let horario3 = "";
    let horario4 = "";
    let horario5 = "";
    let horario6 = "";
    let horario7 = "";
    let horario8 = "";
    let horario9 = "";
    let horario10 = "";
    let horario11 = "";
    let horario12 = "";
    let horario13 = "";
    let horario14 = "";
    let horario15 = "";
    
    //Eventos

    $("#main-container").on("click","#btn-save",function(){

        GuardarDatos();

    });

    $("#main-container").on("click","#btn-clear",function(){

        Limpiar();

    });

    $("#main-container").on("click","#btn-end",function(){

        Limpiar();
        GenerarHTMLFormulario();

    });

    $("#main-container").on("click","#btn-look",function(){

        GenerarHTMLConfirmacion();

    });

    $("#main-container").on("click","#Datos",function(){

        LimpiarSeleccion();
        GenerarHTMLFormulario();

    });

    $("#main-container").on("click","#fundamentosprog",function(){

      asignatura1 = "Fundamentos de programación";
      horario1 = $("input[name='fundamentos']:checked").val();

    });

    $("#main-container").on("click","#prog1",function(){

      asignatura2 = "Programación 1";
      horario2 = $("input[name='prog1']:checked").val();

    });

    $("#main-container").on("click","#prog2",function(){

      asignatura3 = "Programación 2";
      horario3 = $("input[name='prog2']:checked").val();

    });

    $("#main-container").on("click","#prog3",function(){

      asignatura4 = "Programación 3";
      horario4 = $("input[name='prog3']:checked").val();

    });

    $("#main-container").on("click","#bd",function(){

      asignatura5 = "Introducción a las bases de datos";
      horario5 = $("input[name='bd']:checked").val();

    });

    $("#main-container").on("click","#fundamentoscom",function(){

      asignatura6 = "Fundamentos del computador";
      horario6 = $("input[name='fundamentoscom']:checked").val();

    });

    $("#main-container").on("click","#redesina",function(){

      asignatura7 = "Redes Inalámbricas";
      horario7 = $("input[name='redesina']:checked").val();

    });

    $("#main-container").on("click","#sistemasoperativos",function(){

      asignatura8 = "Sistemas Operativos";
      horario8 = $("input[name='sistemasoperativos']:checked").val();

    });

    $("#main-container").on("click","#fundamentosenr",function(){

      asignatura9 = "Fundamentos de enrutamiento";
      horario9 = $("input[name='fundamentosenr']:checked").val();

    });

    $("#main-container").on("click","#WAN",function(){

      asignatura10 = "Tecnologías WAN";
      horario10 = $("input[name='WAN']:checked").val();

    });

    $("#main-container").on("click","#fundamentoscom",function(){

      asignatura11 = "Fundamentos del computador";
      horario11 = $("input[name='fundamentoscom']:checked").val();

    });

    $("#main-container").on("click","#intromulti",function(){

      asignatura12 = "Introducción a la multimedia";
      horario12 = $("input[name='intromulti']:checked").val();

    });

    $("#main-container").on("click","#graficos",function(){

      asignatura13 = "Gráficos de mapas de bits";
      horario13 = $("input[name='graficos']:checked").val();

    });

    $("#main-container").on("click","#ilustracion",function(){

      asignatura14 = "Ilustración digital";
      horario14 = $("input[name='ilustracion']:checked").val();

    });

    $("#main-container").on("click","#animacion",function(){

      asignatura15 = "Animación 2D";
      horario15 = $("input[name='animacion']:checked").val();

    });

    $("#main-container").on("click","#Seleccion",function(){
      
      LimpiarSeleccion();

        switch(carrera){
            case "software":
                GenerarHTMLSoftware();
                break;
            case "redes":
                GenerarHTMLRedes();
                break;
            case "multimedia":
                GenerarHTMLMultimedia();
                break;
        }

    });

    //Funciones

    function Validar(){
        let valido = true;
        const checkedRadio = $("#radio-container input[type='radio']:checked");

        if(nombre == null || nombre == undefined || nombre == ""){
            valido = false;
            $("#nombre").addClass("input-error");
        }
        else{
            $("#nombre").removeClass("input-error");
        }

        if(provincia == null || provincia == undefined || provincia == ""){
            valido = false;
            $("#provincia").addClass("input-error");
        }
        else{
            $("#provincia").removeClass("input-error");
        }

        if(cuidad == null || cuidad == undefined || cuidad == ""){
            valido = false;
            $("#cuidad").addClass("input-error");
        }
        else{
            $("#cuidad").removeClass("input-error");
        }

        if(sector == null || sector == undefined || sector == ""){
            valido = false;
            $("#sector").addClass("input-error");
        }
        else{
            $("#sector").removeClass("input-error");
        }

        if(calle == null || calle == undefined || calle == ""){
            valido = false;
            $("#calle").addClass("input-error");
        }
        else{
            $("#calle").removeClass("input-error");
        }

        if (checkedRadio.length <= 0) {
            isValid = false;
            $("#radio-container").addClass("input-error");
        } 
        else {
            $("#radio-container").removeClass("input-error");
        }

        return valido;

    }

    function Limpiar(){
        $("#nombre").val("").removeClass("input-error").focus();
        $("#provincia").val("").removeClass("input-error");
        $("#cuidad").val("").removeClass("input-error");
        $("#sector").val("").removeClass("input-error");
        $("#calle").val("").removeClass("input-error");
        $("#radio-container").removeClass("input-error");
        $("#radio-container input[type='radio']:checked").prop("checked", false);

        
        nombre = "";
        provincia = "";
        cuidad = "";
        sector = "";
        calle = "";
        carrera = "";
    }

    function LimpiarSeleccion(){
      asignatura1 = "";
      asignatura2 = "";
      asignatura3 = "";
      asignatura4 = "";
      asignatura5 = "";
      asignatura6 = "";
      asignatura7 = "";
      asignatura8 = "";
      asignatura9 = "";
      asignatura10 = "";
      asignatura11 = "";
      asignatura12 = "";
      asignatura13= "";
      asignatura14 = "";
      asignatura15 = "";
      horario1 = "";
      horario2 = "";
      horario3 = "";
      horario4 = "";
      horario5 = "";
      horario6 = "";
      horario7 = "";
      horario8 = "";
      horario9 = "";
      horario10 = "";
      horario11 = "";
      horario12 = "";
      horario13 = "";
      horario14 = "";
      horario15 = "";
    }

    function GuardarDatos(){
        nombre = $("#nombre").val();
        provincia = $("#provincia").val();
        cuidad = $("#cuidad").val();
        sector = $("#sector").val();
        calle = $("#calle").val();
        carrera = $("#radio-container input[type='radio']:checked").val();

        if(Validar()){

            toastr.success("Perfecto, sigamos", "Excelente", {
            TimeOut: 500,
            positionClass: "toast-top-center",
            });

            switch(carrera){
                case "software":
                    GenerarHTMLSoftware();
                    break;
                case "redes":
                    GenerarHTMLRedes();
                    break;
                case "multimedia":
                    GenerarHTMLMultimedia();
                    break;
            }
        }
        else{
                toastr.error("No puede dejar campos vacios", "Error", {
                TimeOut: 500,
                positionClass: "toast-top-center",
                });
        }
        
    }

    function GenerarHTMLConfirmacion(){ 
      const html = 
        `
        
        <div class="card mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 p-2">
              <li class="breadcrumb-item"><a id="Datos" href="#">Datos</a></li>
              <li class="breadcrumb-item"><a id="Seleccion" href="#">Seleccion</a></li>
              <li class="breadcrumb-item active" aria-current="page">Confirmacion</li>
            </ol>
        </nav>
    </div>
        <div class="card mt-2">
        <div class="card-header bg-success text-white">
          <h4 class="text-center">Confirmacion</h4>
        </div>
        <div class="card-body">
          <div class="card-title">
            <h4 class="text-center">Sus datos</h4>
            </div>
          <ul class="list-group">
            <li class="list-group-item">Nombre: ${nombre}</li>
            <li class="list-group-item">Provincia: ${provincia}</li>
            <li class="list-group-item">Cuidad: ${cuidad}</li>
            <li class="list-group-item">Sector: ${sector}</li>
            <li class="list-group-item">Calle: ${calle}</li>
            <li class="list-group-item">Carrera: ${carrera}</li>
          </ul>
          <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col">Asignaturas</th>
                <th scope="col">Lu</th>
                <th scope="col">Ma</th>
                <th scope="col">Mi</th>
                <th scope="col">Ju</th>
                <th scope="col">Vi</th>
                <th scope="col">Sa</th>
              </tr>
            </thead>
            <tbody id="cuerpo">
              
            </tbody>
          </table>
          <button type="button" class="btn btn-outline-success mt-2" id="btn-end">Finalizar</button>
        </div>
      </div>

        `;

        let htmlHorario = 
        `
  
        `;

        //Software

        if(asignatura1 == "" && horario1 == "" && asignatura2 == "" && horario2 == "" && asignatura3 == "" && horario3 == "" && asignatura4 == "" && horario4 == "" && asignatura5 == "" && horario5 == "" && asignatura6 == "" && horario6 == "" && asignatura7 == "" && horario7 == "" && asignatura8 == "" && horario8 == "" && asignatura9 == "" && horario9 == "" && asignatura10 == "" && horario10 == "" && asignatura11 == "" && horario11 == "" && asignatura12 == "" && horario12 == "" && asignatura13 == "" && horario13 == "" && asignatura14 == "" && horario14 == "" && asignatura15 == "" && horario15 == ""){

          htmlHorario = 
          `
    
          <tr>
          <td class="text-center" colspan="7">No selecciono datos</td>
          </tr>
  
          `;

        }

        if(asignatura1 == "Fundamentos de programación" && horario1 == "Lu 18:00 - 20:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura1}</td>
            <td>${horario1}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura1 == "Fundamentos de programación" && horario1 == "Ma 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura1}</td>
            <td></td>
            <td>${horario1}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura1 == "Fundamentos de programación" && horario1 == "Mi 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura1}</td>
            <td></td>
            <td></td>
            <td>${horario1}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura2 == "Programación 1" && horario2 == "Ju 18:00 - 20:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura2}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${horario2}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura2 == "Programación 1" && horario2 == "Vi 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura2}</td>
            <td></td>                    
            <td></td>
            <td></td>
            <td></td>
            <td>${horario2}</td>
            <td></td>
          </tr>
  
          `;

         

        }

        if(asignatura2 == "Programación 1" && horario2 == "Sa 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura2}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
            <td>${horario2}</td>
          </tr>
  
          `;

          

        }

        if(asignatura3 == "Programación 2" && horario3 == "Lu 09:00 - 11:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura3}</td>
            <td>${horario3}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura3 == "Programación 2" && horario3 == "Mi 03:00 - 06:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura3}</td>
            <td></td>
            <td></td> 
            <td>${horario3}</td>                     
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura3 == "Programación 2" && horario3 == "Vi 14:00 - 17:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura3}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td>${horario3}</td>
            <td></td>
          </tr>
  
          `;

          

        }
       
        if(asignatura4 == "Programación 3" && horario4 == "Ma 18:00 - 22:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura4}</td>
            <td></td>
            <td>${horario4}</td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura4 == "Programación 3" && horario4 == "Ju 10:00 - 12:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura4}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td>${horario4}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura4 == "Programación 3" && horario4 == "Sa 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura4}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
            <td>${horario4}</td>
          </tr>
  
          `;

          

        }

        if(asignatura5 == "Introducción a las bases de datos" && horario5 == "Lu 15:00 - 18:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura5}</td>
            <td>${horario5}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura5 == "Introducción a las bases de datos" && horario5 == "Ma 10:00 - 12:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura5}</td>
            <td></td>
            <td>${horario5}</td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura5 == "Introducción a las bases de datos" && horario5 == "Ju 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura5}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td>${horario5}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }
      
        //Redes

        if(asignatura6 == "Fundamentos del computador" && horario6 == "Lu 18:00 - 20:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura6}</td>
            <td>${horario6}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura6 == "Fundamentos del computador" && horario6 == "Ma 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura6}</td>
            <td></td>
            <td>${horario6}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura6 == "Fundamentos del computador" && horario6 == "Mi 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura6}</td>
            <td></td>
            <td></td>
            <td>${horario6}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura7 == "Redes Inalámbricas" && horario7 == "Ju 18:00 - 20:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura7}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${horario7}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura7 == "Redes Inalámbricas" && horario7 == "Vi 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura7}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td>${horario7}</td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura7 == "Redes Inalámbricas" && horario7 == "Sa 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura7}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
            <td>${horario7}</td>
          </tr>
  
          `;

          

        }

        if(asignatura8 == "Sistemas Operativos" && horario8 == "Lu 09:00 - 11:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura8}</td>
            <td>${horario8}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura8 == "Sistemas Operativos" && horario8 == "Mi 03:00 - 06:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura8}</td>
            <td></td>
            <td></td> 
            <td>${horario8}</td>                     
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura8 == "Sistemas Operativos" && horario8 == "Vi 14:00 - 17:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura8}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td>${horario8}</td>
            <td></td>
          </tr>
  
          `;

          

        }
       
        if(asignatura9 == "Fundamentos de enrutamiento" && horario9 == "Ma 18:00 - 22:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura9}</td>
            <td></td>
            <td>${horario9}</td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura9 == "Fundamentos de enrutamiento" && horario9 == "Ju 10:00 - 12:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura9}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td>${horario9}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura9 == "Fundamentos de enrutamiento" && horario9 == "Sa 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura9}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
            <td>${horario9}</td>
          </tr>
  
          `;

          

        }

        if(asignatura10 == "Tecnologías WAN" && horario10 == "Lu 15:00 - 18:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura10}</td>
            <td>${horario10}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura10 == "Tecnologías WAN" && horario10 == "Ma 10:00 - 12:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura10}</td>
            <td></td>
            <td>${horario10}</td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura10 == "Tecnologías WAN" && horario10 == "Ju 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura10}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td>${horario10}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        //Multimedia

        if(asignatura11 == "Fundamentos del computador" && horario11 == "Lu 18:00 - 20:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura11}</td>
            <td>${horario11}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura11 == "Fundamentos del computador" && horario11 == "Ma 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura11}</td>
            <td></td>
            <td>${horario11}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura11 == "Fundamentos del computador" && horario11 == "Mi 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura11}</td>
            <td></td>
            <td></td>
            <td>${horario11}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura12 == "Introducción a la multimedia" && horario12 == "Ju 18:00 - 20:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura12}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${horario12}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura12 == "Introducción a la multimedia" && horario12 == "Vi 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura12}</td>
            <td></td>                    
            <td></td>
            <td></td>
            <td></td>
            <td>${horario12}</td>
            <td></td>
          </tr>
  
          `;

         

        }

        if(asignatura12 == "Introducción a la multimedia" && horario12 == "Vi 08:00 - 10:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura12}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td>${horario12}</td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura13 == "Gráficos de mapas de bits" && horario13 == "Sa 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura13}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
            <td>${horario13}</td>
          </tr>
  
          `;

          

        }

        if(asignatura13 == "Gráficos de mapas de bits" && horario13 == "Lu 09:00 - 11:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura13}</td>
            <td>${horario13}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura13 == "Gráficos de mapas de bits" && horario13 == "Mi 03:00 - 06:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura13}</td>
            <td></td>
            <td></td> 
            <td>${horario13}</td>                     
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura14 == "Ilustración digital" && horario14 == "Vi 14:00 - 17:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura14}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td>${horario14}</td>
            <td></td>
          </tr>
  
          `;

          

        }
       
        if(asignatura14 == "Ilustración digital" && horario14 == "Ma 18:00 - 22:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura4}</td>
            <td></td>
            <td>${horario14}</td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura14 == "Ilustración digital" && horario14 == "Ju 10:00 - 12:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura14}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td>${horario14}</td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura15 == "Animación 2D" && horario15 == "Sa 14:00 - 16:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura15}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
            <td>${horario15}</td>
          </tr>
  
          `;

          

        }

        if(asignatura15 == "Animación 2D" && horario15 == "Lu 15:00 - 18:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura15}</td>
            <td>${horario15}</td>
            <td></td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }

        if(asignatura15 == "Animación 2D" && horario15 == "Ma 10:00 - 12:00"){

          htmlHorario += 
          `
    
          <tr>
            <td>${asignatura15}</td>
            <td></td>
            <td>${horario15}</td>
            <td></td>                      
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          `;

          

        }
        
        $("#main-container").html(html);
        $("#cuerpo").append(htmlHorario);
        
        
    }

    function GenerarHTMLSoftware(){
        const html = 
        `
        
        <div class="card mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 p-2">
              <li class="breadcrumb-item"><a id="Datos" href="#">Datos</a></li>
              <li class="breadcrumb-item active" aria-current="page">Seleccion</li>
            </ol>
        </nav>
    </div>
        <div class="card mt-2">
        <div class="card-header text-white bg-primary">
          <h4 class="text-center">Seleccione sus materias</h4>
        </div>
        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Fundamentos de programación
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="fundamentosprog">

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos_lu" value="Lu 18:00 - 20:00"/>
                    <label class="form-check-label" for="fundamentos_lu" >Lu 18:00 - 20:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos_ma" value="Ma 08:00 - 10:00"/>
                    <label class="form-check-label" for="fundamentos_ma">Ma 08:00 - 10:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos_mi" value="Mi 14:00 - 16:00"/>
                    <label class="form-check-label" for="fundamentos_mi">Mi 14:00 - 16:00</label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Programación 1
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="prog1">
                  
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prog1" id="prog1_lu" value="Ju 18:00 - 20:00"/>
                    <label class="form-check-label" for="prog1_lu" >Ju 18:00 - 20:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prog1" id="prog1_ma" value="Vi 08:00 - 10:00"/>
                    <label class="form-check-label" for="prog1_ma">Vi 08:00 - 10:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prog1" id="prog1_mi" value="Sa 14:00 - 16:00"/>
                    <label class="form-check-label" for="prog1_mi">Sa 14:00 - 16:00</label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Programación 2
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="prog2">
                
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prog2" id="prog2_lu" value="Lu 09:00 - 11:00"/>
                    <label class="form-check-label" for="prog2_lu" >Lu 09:00 - 11:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prog2" id="prog2_ma" value="Mi 03:00 - 06:00"/>
                    <label class="form-check-label" for="prog2_ma">Mi 03:00 - 06:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prog2" id="prog2_mi" value="Vi 14:00 - 17:00"/>
                    <label class="form-check-label" for="prog2_mi">Vi 14:00 - 17:00</label>
                  </div>
               
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Programación 3
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body" id="prog3">
                    
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="prog3" id="prog3_lu" value="Ma 18:00 - 22:00"/>
                      <label class="form-check-label" for="prog3_lu" >Ma 18:00 - 22:00</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="prog3" id="prog3_ma" value="Ju 10:00 - 12:00"/>
                      <label class="form-check-label" for="prog3_ma">Ju 10:00 - 12:00</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="prog3" id="prog3_mi" value="Sa 14:00 - 16:00"/>
                      <label class="form-check-label" for="prog3_mi">Sa 14:00 - 16:00</label>
                    </div>

                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Introducción a las bases de datos
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="bd">
                      
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="bd" id="bd_lu" value="Lu 15:00 - 18:00"/>
                        <label class="form-check-label" for="bd_lu" >Lu 15:00 - 18:00</label>
                      </div>
  
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="bd" id="bd_ma" value="Ma 10:00 - 12:00"/>
                        <label class="form-check-label" for="bd_ma">Ma 10:00 - 12:00</label>
                      </div>
  
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="bd" id="bd_mi" value="Ju 14:00 - 16:00"/>
                        <label class="form-check-label" for="bd_mi">Ju 14:00 - 16:00</label>
                      </div>

                    </div>
                  </div>
            </div>
          </div>
              <br>
              <button type="button" class="btn btn-outline-primary" id="btn-look">Ver seleccion</button>
        </div>
      </div>

        `;
        $("#main-container").html(html);

    }

    function GenerarHTMLRedes(){
        const html = 
        `
        
        <div class="card mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 p-2">
              <li class="breadcrumb-item"><a id="Datos" href="#">Datos</a></li>
              <li class="breadcrumb-item active" aria-current="page">Seleccion</li>
            </ol>
        </nav>
    </div>
        <div class="card mt-2">
        <div class="card-header text-white bg-primary">
          <h4 class="text-center">Seleccione sus materias</h4>
        </div>
        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Fundamentos del computador
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="fundamentoscom">

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentoscom" id="fundamentoscom_lu" value="Lu 18:00 - 20:00"/>
                    <label class="form-check-label" for="fundamentoscom_lu" >Lu 18:00 - 20:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentoscom" id="fundamentoscom_ma" value="Ma 08:00 - 10:00"/>
                    <label class="form-check-label" for="fundamentoscom_ma">Ma 08:00 - 10:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentoscom" id="fundamentoscom_mi" value="Mi 14:00 - 16:00"/>
                    <label class="form-check-label" for="fundamentoscom_mi">Mi 14:00 - 16:00</label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Redes Inalámbricas  
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="redesina">
                  
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="redesina" id="redesina_lu" value="Ju 18:00 - 20:00"/>
                    <label class="form-check-label" for="redesina_lu" >Ju 18:00 - 20:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="redesina" id="redesina_ma" value="Vi 08:00 - 10:00"/>
                    <label class="form-check-label" for="redesina_ma">Vi 08:00 - 10:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="redesina" id="redesina_mi" value="Sa 14:00 - 16:00"/>
                    <label class="form-check-label" for="redesina_mi">Sa 14:00 - 16:00</label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Sistemas Operativos
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="redesina">
                  
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sistemasoperativos" id="sistemasoperativos_lu" value="Lu 09:00 - 11:00"/>
                    <label class="form-check-label" for="sistemasoperativos_lu" >Lu 09:00 - 11:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sistemasoperativos" id="sistemasoperativos_ma" value="Mi 03:00 - 06:00"/>
                    <label class="form-check-label" for="sistemasoperativos_ma">Mi 03:00 - 06:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sistemasoperativos" id="sistemasoperativos_mi" value="Vi 14:00 - 17:00"/>
                    <label class="form-check-label" for="sistemasoperativos_mi">Vi 14:00 - 17:00</label>
                  </div>

                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Fundamentos de enrutamiento
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body" id="fundamentosenr">
                    
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="fundamentosenr" id="fundamentosenr_lu" value="Ma 18:00 - 22:00"/>
                      <label class="form-check-label" for="fundamentosenr_lu" >Ma 18:00 - 22:00</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="fundamentosenr" id="fundamentosenr_ma" value="Ju 10:00 - 12:00"/>
                      <label class="form-check-label" for="fundamentosenr_ma">Ju 10:00 - 12:00</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="fundamentosenr" id="fundamentosenr_mi" value="Sa 14:00 - 16:00"/>
                      <label class="form-check-label" for="fundamentosenr_mi">Sa 14:00 - 16:00</label>
                    </div>

                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Tecnologías WAN
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="WAN">
                      
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="WAN" id="WAN_lu" value="Lu 15:00 - 18:00"/>
                        <label class="form-check-label" for="WAN_lu" >Lu 15:00 - 18:00</label>
                      </div>
  
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="WAN" id="WAN_ma" value="Ma 10:00 - 12:00"/>
                        <label class="form-check-label" for="WAN_ma">Ma 10:00 - 12:00</label>
                      </div>
  
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="WAN" id="WAN_mi" value="Ju 14:00 - 16:00"/>
                        <label class="form-check-label" for="WAN_mi">Ju 14:00 - 16:00</label>
                      </div>

                    </div>
                  </div>
            </div>
          </div>
              <br>
              <button type="button" class="btn btn-outline-primary" id="btn-look">Ver seleccion</button>
        </div>
      </div>

        `;
        $("#main-container").html(html);
    }

    function GenerarHTMLMultimedia(){
        const html = 
        `
        
        <div class="card mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 p-2">
              <li class="breadcrumb-item"><a id="Datos" href="#">Datos</a></li>
              <li class="breadcrumb-item active" aria-current="page">Seleccion</li>
            </ol>
        </nav>
    </div>
        <div class="card mt-2">
        <div class="card-header text-white bg-primary">
          <h4 class="text-center">Seleccione sus materias</h4>
        </div>
        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Fundamentos del computador
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="fundamentoscom">
                  
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentoscom" id="fundamentoscom_lu" value="Lu 18:00 - 20:00"/>
                    <label class="form-check-label" for="fundamentoscom_lu" >Lu 18:00 - 20:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentoscom" id="fundamentoscom_ma" value="Ma 08:00 - 10:00"/>
                    <label class="form-check-label" for="fundamentoscom_ma">Ma 08:00 - 10:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fundamentoscom" id="fundamentoscom_mi" value="Mi 14:00 - 16:00"/>
                    <label class="form-check-label" for="fundamentoscom_mi">Mi 14:00 - 16:00</label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Introducción a la multimedia
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="intromulti">
                  
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="intromulti" id="intromulti_lu" value="Ju 18:00 - 20:00"/>
                    <label class="form-check-label" for="intromulti_lu" >Ju 18:00 - 20:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="intromulti" id="intromulti_ma" value="Vi 08:00 - 10:00"/>
                    <label class="form-check-label" for="intromulti_ma">Vi 08:00 - 10:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="intromulti" id="intromulti_mi" value="Sa 14:00 - 16:00"/>
                    <label class="form-check-label" for="intromulti_mi">Sa 14:00 - 16:00</label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Gráficos de mapas de bits
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="graficos">
                  
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="graficos" id="graficos_lu" value="Lu 09:00 - 11:00"/>
                    <label class="form-check-label" for="graficos_lu" >Lu 09:00 - 11:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="graficos" id="graficos_ma" value="Mi 03:00 - 06:00"/>
                    <label class="form-check-label" for="graficos_ma">Mi 03:00 - 06:00</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="graficos" id="graficos_mi" value="Vi 14:00 - 17:00"/>
                    <label class="form-check-label" for="graficos_mi">Vi 14:00 - 17:00</label>
                  </div>

                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Ilustración digital
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body" id="ilustracion">
                    
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="ilustracion" id="ilustracion_lu" value="Ma 18:00 - 22:00"/>
                      <label class="form-check-label" for="ilustracion_lu" >Ma 18:00 - 22:00</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="ilustracion" id="ilustracion_ma" value="Ju 10:00 - 12:00"/>
                      <label class="form-check-label" for="ilustracion_ma">Ju 10:00 - 12:00</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="ilustracion" id="ilustracion_mi" value="Sa 14:00 - 16:00"/>
                      <label class="form-check-label" for="ilustracion_mi">Sa 14:00 - 16:00</label>
                    </div>

                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Animación 2D
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="animacion">
                      
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="animacion" id="animacion_lu" value="Lu 15:00 - 18:00"/>
                        <label class="form-check-label" for="animacion_lu" >Lu 15:00 - 18:00</label>
                      </div>
  
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="animacion" id="animacion_ma" value="Ma 10:00 - 12:00"/>
                        <label class="form-check-label" for="animacion_ma">Ma 10:00 - 12:00</label>
                      </div>
  
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="animacion" id="animacion_mi" value="Ju 14:00 - 16:00"/>
                        <label class="form-check-label" for="animacion_mi">Ju 14:00 - 16:00</label>
                      </div>

                    </div>
                  </div>
            </div>
          </div>
              <br>
              <button type="button" class="btn btn-outline-primary" id="btn-look">Ver seleccion</button>
        </div>
      </div>

        `;
        $("#main-container").html(html);
    }

    function GenerarHTMLFormulario(){
        const html = 
        `
        
        <div class="card mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 p-2">
              <li class="breadcrumb-item active" aria-current="page">Datos</li>

            </ol>
        </nav>
    </div>
    <div class="card mt-2">
        <div class="card-header text-white bg-dark">
            <h4 class="text-center">Realice su selección</h4>
        </div>
        <div class="card-body">
            <div class="card-title">
            <h4 class="text-center">Complete toda la informacion</h4>
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" value="${nombre}" />
            </div>
            <div class="mb-3">
                <label for="provincia" class="form-label">Provincia:</label>
                <input type="text" class="form-control" id="provincia" value="${provincia}" />
            </div>
            <div class="mb-3">
                <label for="cuidad" class="form-label">Cuidad:</label>
                <input type="text" class="form-control" id="cuidad" value="${cuidad}" />
            </div>
            <div class="mb-3">
                <label for="sector" class="form-label">Sector:</label>
                <input type="text" class="form-control" id="sector" value="${sector}" />
            </div>
            <div class="mb-3">
                <label for="calle" class="form-label">Calle:</label>
                <input type="text" class="form-control" id="calle" value="${calle}" />
            </div>
            <div id="radio-container" class="mb-3">
                <label for="Carrera" class="form-label">Carrera:</label>
                
                <br>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Carrera" id="radio-multimedia" value="multimedia"/>
                    <label class="form-check-label" for="radio-multimedia" >Multimedia</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Carrera" id="radio-software" value="software"/>
                    <label class="form-check-label" for="radio-software">Software</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Carrera" id="radio-redes" value="redes"/>
                    <label class="form-check-label" for="radio-redes">Redes</label>
                </div>
            </div>
            <button type="button" class="btn btn-outline-primary" id="btn-save">Guardar</button>
            <button type="button" class="btn btn-outline-warning" id="btn-clear">Limpiar</button>
        </div>
    </div>

        `;

        $("#main-container").html(html);
        
    }

});