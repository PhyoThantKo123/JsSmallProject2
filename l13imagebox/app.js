// console.log('hay i am working!');

const getimageboxes = document.querySelectorAll('.imgbox');

getimageboxes.forEach(function(getimgbox, index) {
    getimgbox.addEventListener('click', function() {
        // this.className += ' show';
        showbox(index);
    });
});

function showbox(id) {
    getimageboxes.forEach(function(getimagebox, index) {
        // console.log('current ', index);
        // console.log('first ', id);

        if (id === index) {
            getimagebox.className += ' show';

            getimagebox.addEventListener('click', function(e) {
                // console.log(e.target);
                if (e.target.className === 'btn-close') {
                    getimagebox.classList.remove('show');
                };

                if (e.target.className === 'btn') {
                    // e.target.textContent = 'Subscribed';

                    // subbtn = getimagebox.querySelector('.btn');
                    subbtn = getimageboxes[id].querySelector('.btn');
                    subbtn.textContent = 'Subscribed';
                };


            });
        } else {
            getimagebox.classList.remove('show');
        };

    });
};