let contenedorDiv = document.getElementById("mainLista")
let selectOrden = document.getElementById("selectSort")
let arrayAux = listaSeries.slice();

function cargarSeries(array){
    array.forEach(serie => {
        contenedorDiv.innerHTML += `
        <div class="cardContainer">
        <div class="card">
        <div class="cardSerie">
            <h2>${serie.premio}    ${serie.name}</h2>
        </div>
        <div class="cardInfo">
            <h3>Año: ${serie.año}</h3>
            <h3>Temporadas: ${serie.temporadas}</h3>
            <h3>Calificacion: ${serie.calificacion}</h3>
        </div>
    </div>
    </div>
        `
    });
}

cargarSeries(listaSeries)

function ordenar(e) {
    if (selectOrden.value === "1") {
        contenedorDiv.innerHTML = ""
        cargarSeries(listaSeries.reverse())
    }
    else if (selectOrden.value === "2") {
        contenedorDiv.innerHTML = ""
        cargarSeries(listaSeries.reverse())
    }
    else if (selectOrden.value === "3") {
        function tempMenorMayor(x, y){
            if (x.temporadas < y.temporadas) {return -1;}
            if (x.temporadas > y.temporadas) {return 1;}
            return 0;
        }
        arrayAux.sort(tempMenorMayor)
        contenedorDiv.innerHTML = ""
        cargarSeries(arrayAux.sort(tempMenorMayor))
    }
    else if (selectOrden.value === "4") {
        function tempMayorMenor(x, y){
            if (x.temporadas > y.temporadas) {return -1;}
            if (x.temporadas < y.temporadas) {return 1;}
            return 0;
        }
        arrayAux.sort(tempMayorMenor)
        contenedorDiv.innerHTML = ""
        cargarSeries(arrayAux.sort(tempMayorMenor))
    }
    else if (selectOrden.value === "5") {
        function añoMenorMayor(x, y){
            if (x.año < y.año) {return -1;}
            if (x.año > y.año) {return 1;}
            return 0;
        }
        arrayAux.sort(añoMenorMayor)
        contenedorDiv.innerHTML = ""
        cargarSeries(arrayAux.sort(añoMenorMayor))
    }
    else if (selectOrden.value === "6") {
        function añoMayorMenor(x, y){
            if (x.año > y.año) {return -1;}
            if (x.año < y.año) {return 1;}
            return 0;
        }
        arrayAux.sort(añoMayorMenor)
        contenedorDiv.innerHTML = ""
        cargarSeries(arrayAux.sort(añoMayorMenor))
    }
}










/* function filtrar(e){
    let btn = e.target
    let categoria = btn.innerText
    let productosFiltrados = productosStock.filter(producto => producto.category === (categoria.toLowerCase()))
    catalogoDiv.innerHTML = ""
    cargarCatalogo(productosFiltrados)
}

let btnFiltro = document.getElementsByClassName("filtrar")
for (btn of btnFiltro){
    btn.addEventListener("click", filtrar)
}

const mostrarTodo = document.querySelector(".todo")
mostrarTodo.addEventListener("click", () => {
    catalogoDiv.innerHTML = ""
    cargarCatalogo(productosStock)
})

let btnAgregar = document.getElementsByClassName("agregar")

function agregarCompra(e){
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = productosStock.find(producto => producto.id === idBoton)
    carroDeCompras.push(productoSeleccionado)
    localStorage.setItem("carroDeCompras", JSON.stringify(carroDeCompras))
    swal("Se agrego el producto correctamente!", "", "success");
}

for (boton of btnAgregar){
    boton.addEventListener("click",agregarCompra)
} */