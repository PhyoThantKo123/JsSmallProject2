// console.log('hello world');


var gettablinks = document.getElementsByClassName('tab-links');
var gettabpanes = document.getElementsByClassName('tab-pane');
var getbtnclose = document.querySelectorAll('.btn-close');
var tabpanes = Array.from(gettabpanes); // change to array

function gettab(evn, linkid) {

    // console.log(evn.target);
    // console.log(evn.currentTarget);

    for (let i = 0; i < gettabpanes.length; i++) {
        gettabpanes[i].style.display = 'none';
        gettablinks[i].classList.remove('active');

        // getbtnclose[i].addEventListener('click', function() {
        //     this.parentElement.style.display = 'none';
        // });

        // gettablinks[i].className = gettablinks[i].className.replace(' active', '');
    }

    // tabpanes.forEach(function(tabpane) {
    //     tabpane.style.display = 'none';
    // });

    document.getElementById(linkid).style.display = 'block';

    evn.target.classList.add('active');
    // evn.target.className += ' active';
    // evn.target.className = evn.target.className.replace('tab-links', 'tab-links active');

};

for (let i = 0; i < getbtnclose.length; i++) {
    getbtnclose[i].addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
};

gettablinks[0].click();