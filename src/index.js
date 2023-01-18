// Displays hidden pictures when the 'load more' button is clicked
function reveal() {
    var elements = document.getElementsByClassName('h')
    for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.add('picture-row');
        elements[i].classList.remove('hidden-pic');
    }
    document.getElementById('link').classList.add('link-hide');
}
// Changes sliding nav menu to visible when menu button is clicked 
function dropDown() {
    document.getElementById('dropDown').classList.toggle('show');
}
// Hides nav menu on page click
window.onclick = function(ev){
    if (ev.target.className !== 'button-box'){
        document.getElementById('dropDown').classList.remove('show');
    }
}
// Shows enlarged image when a picture is clicked on
document.querySelectorAll('.pic').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})
// Hides enlarged image on window click
document.querySelector('.popup-image').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
// Copy email on button click
var text_copy = document.getElementById("email").innerHTML;

function copy() {
    navigator.clipboard.writeText(text_copy);
}


