import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import {
  Bikes
} from "./BikeAPI.js";

$(document).ready(function () {
  $('#buttonStolen').click(function () {
    let city = $('#city').val();
    $('#city').val("");

    let proximity = $('#proximity').val();
    $('#proximity').val("");

    let bikesShowing = new Bikes();
    let promise = bikesShowing.getBikesByProximity(city, proximity);

    promise.then(function (response) {
      console.log(promise);
      
      let body = JSON.parse(response);
      $('.bikeTitle').text(`Bike: ${body.bike.title}`);
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
});