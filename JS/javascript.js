

let hidentext_btn = document.getElementById('hidetext_btn');

let hidetext = document.getElementById('hideText');

hidentext_btn.addEventListener('click', toggletText);

function toggletText() {
    hidetext.classList.toggle('show');
}
    
