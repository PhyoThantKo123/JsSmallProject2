var getmap = document.querySelector('.map-container');
var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');


var circleindex = 0;

getmap.addEventListener('click', function(e) {
    // console.log('hey i am working!');
    if (e.target.classList.contains('map-container')) {
        circleindex++;

        const cx = e.clientX;
        const cy = e.clientY;

        const mapleft = e.target.offsetLeft;
        const maptop = e.target.offsetTop;

        // console.log(cx, cy);
        // console.log(mapleft, maptop);

        const curx = cx - mapleft;
        const cury = cy - maptop;

        // console.log(curx, cury);

        const newcircle = document.createElement('span');
        newcircle.id = circleindex;
        newcircle.classList.add('circle');
        // console.log(newcircle);

        newcircle.style.left = `${curx}px`;
        newcircle.style.top = `${cury}px`;

        if (getsmallcolor.selectedIndex && getmediumcolor.selectedIndex && getlargecolor.selectedIndex) {
            newcircle.style.setProperty('--small', getsmallcolor.value);
            newcircle.style.setProperty('--medium', getmediumcolor.value);
            newcircle.style.setProperty('--large', getlargecolor.value);
        }

        e.target.appendChild(newcircle);
    };

    removePointer(e);

});


function removePointer(e) {
    // console.log(e.target.id);
    // console.log(e.target.id);

    if (e.target.id) {
        e.target.remove();
    };
};