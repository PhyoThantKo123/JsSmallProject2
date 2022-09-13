const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemailcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup', function() {
    createemaillist(this.value);
});


function createemaillist(inputtext) {
    var eitems = inputtext.split(',').filter(item => item.trim() != '').map(item => item.trim());
    // console.log(eitems)
    getemailcontainer.innerHTML = '';

    eitems.forEach(function(eitem) {
        var newspan = document.createElement('span');
        newspan.className += 'email-items';
        newspan.appendChild(document.createTextNode(eitem));
        getemailcontainer.appendChild(newspan);
    });
};


getbtn.addEventListener('click', function(e) {
    sendemail();
    e.preventDefault();
});

function sendemail() {
    // console.log('i am working!');

    var gettxtval = gettextarea.value;
    var getaddresses = document.querySelectorAll('.email-items');
    // console.log(getaddresses)
    // console.log(gettxtval.length)

    if (getaddresses.length > -1 && gettxtval.length > 0) {
        var persons = [];

        getaddresses.forEach(function(getaddress) {
            persons.push({
                email: getaddress.textContent,
                message: gettxtval
            });
        });

        console.log(persons);
    } else {
        console.log('No message !');
        gettextarea.focus();
    };
};