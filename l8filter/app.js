var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
var getsortbtn = document.getElementById('sort');
var getsortbtn1 = document.getElementById('sort1');
var getsortbtn2 = document.getElementById('sort2');
var getsortbtn3 = document.getElementById('sort3');

console.log(getli); // HTML COLLECTION

getinput.addEventListener('keyup', filter);
getsortbtn.addEventListener('click', sortfun);
getsortbtn2.addEventListener('click', sortfunm2);
getsortbtn3.addEventListener('click', sortfun1m2)


// method 1 

// a to z
function sortfun() {
    // console.log('hey i am working!');

    var lis = [];

    for (let i = 0; i < getli.length; i++) {
        lis.push(getli[i].textContent);
    };

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse());

    var getsorts = lis.sort();
    getul.innerHTML = '';

    getsorts.forEach(function(sort) {
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = 'javascript:void(0)';
        newlink.appendChild(document.createTextNode(sort));

        newli.appendChild(newlink);
        // console.log(newli);
        getul.appendChild(newli);


    });

    filter();

};


// z to a

getsortbtn1.addEventListener('click', function() {
    var lis = [];

    for (let i = 0; i < getli.length; i++) {
        lis.push(getli[i].textContent)
    };

    // console.log(lis)
    var getsort = lis.sort().reverse();
    getul.innerHTML = '';

    for (let i = 0; i < getsort.length; i++) {
        var newlink = document.createElement('a');
        var newli = document.createElement('li');
        newlink.href = 'javascript:void(0)';
        newlink.appendChild(document.createTextNode(getsort[i]));

        newli.appendChild(newlink)
        getul.appendChild(newli)

    };

    filter();

});


// method 2

// a to z
function sortfunm2() {
    // console.log('hey i am working!');

    var shouldswitch = true;
    var switching = true;

    do {
        switching = false;

        var i = 0;

        for (i; i < getli.length - 1; i++) {
            shouldswitch = false;

            if (getli[i].textContent.toLowerCase() > getli[i + 1].textContent.toLowerCase()) {
                shouldswitch = true
                break;
            }
        }

        if (shouldswitch) {

            // Element.insertBefore(new,existing)
            // Node.insertBefore(new,existing)

            getul.insertBefore(getli[i + 1], getli[i]);

            switching = true;
        }

    } while (switching);


}

// z to a

function sortfun1m2() {
    // console.log('hay i am working')

    var switching = true;
    var shouldswitching = true

    while (switching) {
        switching = false;

        let i = 0;
        for (i; i < getli.length - 1; i++) {
            shouldswitching = false;

            if (getli[i].textContent.toLowerCase() < getli[i + 1].textContent.toLowerCase()) {
                shouldswitching = true;
                break;
            };
        };

        if (shouldswitching) {
            getli[i].parentElement.insertBefore(getli[i + 1], getli[i])
            switching = true;
        };

    };
}


console.log(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase())
    // m > a



// filter

function filter() {
    // console.log('abc');
    var inputfilter = getinput.value.toLowerCase();
    // console.log(inputfilter);

    for (var x = 0; x < getli.length; x++) {
        // console.log(getli[x]);
        // console.log(getli[x].querySelector('a').textContent);
        var getatext = getli[x].querySelector('a').textContent.toLowerCase();

        if (getatext.indexOf(inputfilter) > -1) {
            getli[x].style.display = '';
        } else {
            getli[x].style.display = 'none';
        };


    };


}