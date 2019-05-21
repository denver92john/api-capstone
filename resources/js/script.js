'use strict';
/*    var searchEx = [ 'Want some suggestions?', 'artificial intelligence', 'speech recognition', 'virtual reality', 'augmented reality', 'biometrics', 'nanotechnology', 'sustainability', 'sensationalism', 'gentrification', 'socialization', 'benchmarking', 'brick and mortar', 'best practice', 'syllogism', 'paradigm shift', 'semantics', 'responsive web design' ];
  setInterval(function() {
    $("input#searchfield").attr("placeholder", searchEx[searchEx.push(searchEx.shift())-1]);
  }, 3000);
*/





function handleHomePage() {
    $('.js-home-page').hide();
}

function handleHomeForm() {
    $('.js-home-form').on('submit', event => {
        event.preventDefault();
        handleHomePage();
    });
}

$(function() {
    console.log('App ready');
    handleHomeForm();
});