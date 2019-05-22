'use strict';
/*    var searchEx = [ 'Want some suggestions?', 'artificial intelligence', 'speech recognition', 'virtual reality', 'augmented reality', 'biometrics', 'nanotechnology', 'sustainability', 'sensationalism', 'gentrification', 'socialization', 'benchmarking', 'brick and mortar', 'best practice', 'syllogism', 'paradigm shift', 'semantics', 'responsive web design' ];
  setInterval(function() {
    $("input#searchfield").attr("placeholder", searchEx[searchEx.push(searchEx.shift())-1]);
  }, 3000);
*/





function formatQueryString(paramsObj) {
  const queryItems = Object.keys(paramsObj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`);
  return queryItems.join('&');
}

function renderResults(responseJson) {
  console.log(responseJson);
}

function fetchResults(url) {
  const options = {
    headers: new Headers({
      "Accept": "*/*",
      "Host": "tastedive.com"
    })
  };
  
  fetch(url)
    .then(response => {
      //if (response.ok) {
        return response.json();
      //}
      //throw new Error(response.statusText);
    })
    .then(responseJson => {
      console.log(responseJson);
      renderResults(responseJson);
    })
    .catch(err => {
      $('#js-error-message').text(`There was an issue: ${err}`);
    });
}

/* ERROR RECEIVING WHEN TRYING TO RUN - TRY PASSING AN OPTIONS HEADER

Access to fetch at 'https://tastedive.com/api/similar?k=336543-APIProje-JJTIQCTB&info=1&q=vikings&limit=20' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled. */



function getResults(userInput, category) {
  const params = {
    k: "336543-APIProje-JJTIQCTB",
    info: "1",
    q: userInput,
    type: category,
    limit: "20"
  };

  console.log(params);

  const baseUrl = "https://tastedive.com/api/similar";
  const queryString = formatQueryString(params);
  const url = `${baseUrl}?${queryString}`;

  console.log(`url is ${url}`);

  fetchResults(url);
}

function handleHomeForm() {
  $('.js-home-form').on('submit', event => {
    event.preventDefault();
    $('.js-home-page').hide();

    const userInput = $('.search-term').val();
    const userCategory = $('.category-selector').val();
    $('.search-term').val('');

    console.log(`userInput is: ${userInput} and userCategory is: ${userCategory}`);

    getResults(userInput, userCategory);
  });
}

$(function() {
  console.log('App ready');
  handleHomeForm();
});



/*  code snippet for JS jquery ajax in postman
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://tastedive.com/api/similar?k=336543-APIProje-JJTIQCTB&q=vikings&info=1&limit=20",
  "method": "GET",
  "headers": {
    "User-Agent": "PostmanRuntime/7.13.0",
    "Accept": "* / *",  (no space b/w these characters)
    "Cache-Control": "no-cache",
    "Postman-Token": "6463a4f2-d718-4f2d-85c7-773ae7c887a5,6f42d611-9676-411d-b9d6-c768692e6880",
    "Host": "tastedive.com",
    "cookie": "__cfduid=d8ddd8c3d1005fe8d40b5052a995263bf1558230940",
    "accept-encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/