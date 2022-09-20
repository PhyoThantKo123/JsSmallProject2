const database = [{
        question: "Choose Ace ?",
        a: './img/ace.jpg',
        b: './img/boa1.jpg',
        c: './img/law.jpg',
        d: './img/namiwallpaper1.jpg',
        correctanswer: 'a'
    },
    {
        question: "Choose Boa ?",
        d: './img/ace.jpg',
        c: './img/boa1.jpg',
        b: './img/law.jpg',
        a: './img/namiwallpaper1.jpg',
        correctanswer: 'c'
    },
    {
        question: "Choose Law ?",
        b: './img/ace.jpg',
        a: './img/boa1.jpg',
        d: './img/law.jpg',
        c: './img/namiwallpaper1.jpg',
        correctanswer: 'd'
    },
    {
        question: "Choose Nami ?",
        c: './img/ace.jpg',
        d: './img/boa1.jpg',
        a: './img/law.jpg',
        b: './img/namiwallpaper1.jpg',
        correctanswer: 'b'
    }
];

// console.log(database);


const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');
const getbtn = document.querySelector('.btn');

const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');


let current_index = 0;
let score = 0;
startquz()

function startquz() {
    removecheck();
    const currentquz = database[current_index];
    getquestion.textContent = currentquz.question;
    geta_img.src = currentquz.a;
    getb_img.src = currentquz.b;
    getc_img.src = currentquz.c;
    getd_img.src = currentquz.d;
}

function getsingleans() {
    let answer;

    getanswers.forEach(function(getanswer) {

        if (getanswer.checked) {
            answer = getanswer.id;
        };

    });

    return answer;
};

getbtn.addEventListener('click', function() {
    const answer = getsingleans();

    if (answer) {
        // console.log(answer);

        if (answer == database[current_index].correctanswer) {
            score++;
        };

        current_index++;

        if (current_index < database.length) {
            startquz();

        } else {
            getcontainer.innerHTML = `
            <h3>Total Score : ${score * 25}</h3>
            <h4>You answered correctly at ${score} / ${database.length} questions.</h4>
            <button type="button" class="btn" onclick="dblclick()">Click to reload</button>`;
        };

    } else {
        window.alert('Choose One Anwer');
    };

});


function removecheck() {
    getanswers.forEach(function(getanswer) {
        return getanswer.checked = false;
    });
};


let clicktimes = 0;

function dblclick() {
    // console.log('hay i am working!');

    if (clicktimes == 0) {
        clicktimes = new Date().getTime();
        // console.log(clicktimes);
    } else {

        if ((new Date().getTime() - clicktimes) <= 1000) {
            // console.log('hello');
            location.reload();
            clicktimes = 0;
        } else {
            clicktimes = new Date().getTime();
            // console.log('hii');
        };
    };

};