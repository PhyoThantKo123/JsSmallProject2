var getimgs = document.querySelectorAll('.img');


var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtn = document.querySelector('.btn-close');

for (let i = 0; i < getimgs.length; i++) {
	getimgs[i].addEventListener('click',function(){
		showThis(this);
	});
};



function showThis(ele){
	// console.log(ele);

	getmodal.style.display = 'block';
	getmodalimg.src = ele.src;
	getcaption.textContent = ele.alt;
}



getbtn.addEventListener('click',function(){
	getmodal.style.display = 'none';
});


window.onclick = function(e){
    if(e.target == getmodal){
    	getmodal.style.display = 'none';
    };	
};

document.addEventListener('click',function(e){
	if(e.target == getmodal){
		getmodal.style.display = 'none';
	};
});