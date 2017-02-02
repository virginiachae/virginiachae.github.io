// sanity check
console.log("app.js linked.");
$(function(){
    var box = document.getElementsByClassName('box')

    // $box.mouseover(function() {
    // 	box.addClass('blur');
    // });

    var $box = $('.box');

    console.log("jquery box is ", $box);
    console.log("box is ", box);

    var container = $('.container')
    console.log(container);
});
