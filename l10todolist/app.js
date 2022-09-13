var getform = document.getElementById('form');
var getinput = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit', function(e) {
    // console.log('i am working');


    // console.log();
    addnew();

    e.preventDefault();
});


var gettodos = JSON.parse(localStorage.getItem('todos'));

function addnew(todo) {
    let gettext = getinput.value;

    if (todo) {
        gettext = todo.text;
    }

    if (gettext) {

        let newli = document.createElement('li');
        newli.appendChild(document.createTextNode(gettext));
        getul.appendChild(newli);
        getinput.value = '';

        if (todo && todo.done) {
            newli.classList.add('done');
        }

        updatelocalstorage();

        // left click
        newli.addEventListener('click', function() {
            newli.classList.toggle('done');
            updatelocalstorage();
        });


        // right click
        newli.addEventListener('contextmenu', function() {
            newli.remove();
            updatelocalstorage();
        })
    };
};


function updatelocalstorage() {
    let getlis = document.querySelectorAll('li')

    const todos = [];

    getlis.forEach(function(li) {
        todos.push({
            text: li.textContent,
            done: li.classList.contains('done')
        });
    });

    // console.log(todos);

    localStorage.setItem('todos', JSON.stringify(todos));

};





if (gettodos) {
    gettodos.forEach(function(getlitodo) {
        addnew(getlitodo)
    });
};