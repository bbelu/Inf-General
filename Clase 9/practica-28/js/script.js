function organizarCena (){
    let contPasta = 0 ;
    let contPollo =  0 ;   
    let contEnsalada= 0 ;

    const totalInvitados = 12;

    for (let i = 1; i<=totalInvitados; i++){
        let eleccion = prompt("Invitado" + i+"¿Que menu elige?(pasta / pollo / ensalada)");

    }
    If ( eleccion=== null){
        eleccion="";
    }
    while(eleccion!=="pasta" && eleccion !=="pollo" && eleccion !="ensalada"){
        eleccion = prompt("Opción inválida. Invitado " + i + ": Elija únicamente entre 'pasta', 'pollo' o 'ensalada':");
            if (eleccion === null) {
                eleccion = "";}    
            
            }

    if (eleccion=== "pasta"){
        contPasta++;
        
    }else if(eleccion=== "pollo"){
        contPollo++
    }else if (eleccion === "ensalada"){
        contEnsalada++
    }


}