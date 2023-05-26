const helado = 230

var topping="oreo";
var precio;

var preciofinal;                                                                

if (topping == "oreo") {precio=10
    
}

else if (topping=="kinder") {precio=25} 
else if (topping== "kitkat") {precio=15}
else {console.log("No tenemos este topping")}

preciofinal= helado + precio; {console.log("el helado cuesta $"+[preciofinal])}

var menu= "carne"

switch (menu) {
    case "carne":
        console.log("si pide carne se le ofrecera como bebida vino tinto")
        
        break;
    case "pescado":
        console.log("si pide pescado se le ofrecera como bebida vino blanco") 
        break;
    case "verdura":
        console.log("si pide verduras se le ofrecera como bebida agua")
        break
     default:console.log("elegi carne pescado o verdura") 
    break  }        

var productos = ["carne","pesado","verduras"]
var cantidaddeproductos;
for (let cantidaddeproductos = 0; cantidaddeproductos <productos.length; cantidaddeproductos++){
    console.log("los productos son " + productos[cantidaddeproductos])
}


var numero=["12"]
while (numero >"11") {console.log("el numero es mas chico que 11"),numero=numero-1
    
}