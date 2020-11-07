import PosterAPI from "./PosterAPI.js";
import {saveOrderInStorage} from "./order.js";

function init() {
    PosterAPI.getPosterJSON();

    const btnSearch = document.querySelector('#btn-search');
    btnSearch.addEventListener('click', function (e) {
        e.preventDefault();
        PosterAPI.searchFilm();
    });

    const btnOrder = document.querySelector('#btn-order');
    btnOrder.addEventListener('click', function (e) {
        e.preventDefault();
        saveOrderInStorage();
    });

    const fieldQuatity = document.querySelector('#order_quantity');
    fieldQuatity.addEventListener('change', function (e) {
        let postPrice = document.querySelector("#order_price");
        let priceTotal = parseInt(this.value,10) * parseFloat(postPrice.getAttribute("data-price"),10);
        postPrice.value=priceTotal;
    });
}

init();