var getcheckbox = document.getElementById('toggle-checkbox');
var getchecklabel = document.getElementById('toggle-label');
var getbasic = document.getElementById('basic');
var getpro = document.getElementById('pro');
var getmaster = document.getElementById('master');

console.log(getcheckbox, getchecklabel, getbasic, getpro, getmaster);

getchecklabel.addEventListener('click', function() {
    if (getcheckbox.checked) {
        getbasic.textContent = 10;
        getpro.textContent = 20;
        getmaster.textContent = 30

        getcheckbox.checked = false;
    } else {
        [getbasic.textContent, getpro.textContent, getmaster.textContent] = [100, 220, 340];
        getcheckbox.checked = true;
    }
})

// 5PS