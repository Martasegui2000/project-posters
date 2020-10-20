import PosterAPI from "./PosterAPI.js;"
import Order from "./Order.js";

function init() {
    PosterAPI.getJSONPoster();

    const btnSearch = document.querySelector('#btn-seacrh');
    btnSearch.addEventListener('click', function (e) {
        e.preventDefault();
        PosterAPI.searchPosterFilms();
    });

    const btnOrder = querySelector('#btn-order');
    btnOrder.addEventListener('click', function (e) {
        saveOrderInStorage();
    });
}