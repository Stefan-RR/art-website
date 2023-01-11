function reveal() {
    var elements = document.getElementsByClassName('h')
    for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.add('picture-row');
        elements[i].classList.remove('hidden-pic');
    }
    document.getElementById('link').classList.add('link-hide');
}
function dropDown() {
    document.getElementById('dropDown').classList.toggle('show');
}
window.onclick = function(ev){
    if (ev.target.className !== 'button-box'){
        document.getElementById('dropDown').classList.remove('show');
    }
}