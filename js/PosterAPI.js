class PosterAPI {

    static sumary(synopsis) {}

    static printCast(listCast) {}

    static getJSONPoster() {
        fetch('./data/poster.json')
            .then(result => result.json())
            .then(data => {
                let posterJSON = data.poster;
                PosterAPI.populateFilms(posterJSON.films);
                PosterAPI.populateSeries(posterJSON.series);

            });
    }

    static populateFilms(listFilms) {
        document.querySelector('#list-films').innerHTML = "";

        listFilms.forEach(oFilm => {
            console.log("info:" + oFilm.id + "" + oFilm.name);
            let card = `
            <div class="card mb-4 shadow-sm" style="width: 14rem;">
				<img src="./img/film/${oFilm.cover}" class="card-img-top" alt="...">
				<div class="card-body">
				<h5 class="card-title">${oFilm.name}</h5>
                <p class="card-text">${PosterAPI.sumary(oFilm.synopsis)}</p>
                <p class="card-text"><span class="text-info">Duración:</span>${oFilm.duration}</p>
                <p class="card-text"><span class="text-info">Director:</span>${oFilm.director}</p>
                <p class="card-text"><span class="text-info">Género:</span>${oFilm.genre}</p> 
				</div>
				<div class="card-header">Cast</div>
                <ul class="list-group list-group-flush">
                ${PosterAPI.printCast(oFilm.cast)}
				</ul>
				<div class="text-center container" data-toggle="modal" data-target="#pedido">
                    <button type="button" class="btn btn-primary"
                        data-toggle="tooltip"
                        data-placement="top" 
                        title="Pago sólo con paypal" 
                        onclick="newOrderPoster(${oFilm.id}, '${oFilm.name}', '${oFilm.price}')">
                        Comprar
				    </button>
				</div>
			</div>`;
        })
    }

    static populateSeries(listSeries) {}

    static searchFilm() {
        fetch('./data/poster.json')
            .then(result => result.json())
            .then(data => {
                let txtSearch = document.querySelector("#txt-search").value;
                txtSearch = txtSearch.toLowercase();
                let listFilms = data.poster.films;
                let films = listFilms.filter(
                    (item) => (item.name.toLowercase().indexOf(txtSearch) >-1)    
                );
                if (films.length > 0) {
                    PosterAPI.populateFilms(films);
                } else {
                    document.querySelector("#list-films").innerHTML = `
                        <p>Ninguna película coincide con los datos de la búsqueda</p>
                    `;
                }
            });
    }
    
}