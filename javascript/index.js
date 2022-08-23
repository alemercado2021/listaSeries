let contenedorDiv = document.getElementById("mainLista")


function cargarSeries(array){

    array.forEach(serie => {
        contenedorDiv.innerHTML += `<div class="cardContainer">
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