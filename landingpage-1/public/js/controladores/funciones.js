/*---------------------------<JAVASCRIPT  NATIVO>---------------------------*/
var Actvr = 1;
function Acordeon(Actvr, Clasificacion){
    switch(Actvr){
        case 0:
            break;
        case 1:
            var _Acordeon;
            var Cuerpo;
			var Panel;
			var i;
            switch(Clasificacion){
                case 0:
                    
				_Acordeon = document.getElementsByClassName("wrapper");
                    
                    //console.log("cantidad: "+_Acordeon.length);
                    for(var i = 0; i < _Acordeon.length; i++){                        
                        _Acordeon[i].addEventListener('click', function(){
                            this.classList.toggle("active");
                            Panel = this.nextElementSibling;
                            if(Panel.style.display === "block"){
                                Panel.style.display = "none"
                                Panel.style.transition = "all 0.2s ease-out";
                            }else{
                                Panel.style.display = "block"
                                Panel.style.transition = "all 0.2s ease-out";
                            }
                        });
                    }
                    break;
                default:
                    break;
            }
            break;
    }
}
Acordeon(1, 0);
/*---------------------------</JAVASCRIPT  NATIVO>---------------------------*/