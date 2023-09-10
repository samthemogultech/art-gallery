// Like Action For Exhibition page

var likeBtn1 = document.getElementById('lke-1');
var likeBtn2 = document.getElementById('lke-2');
var likeBtn3 = document.getElementById('lke-3');


const LikeButton1 = () => {
    if(likeBtn1.style.color == 'var(--bright)') {
        likeBtn1.style.color = 'rgb(227, 75, 75)';
    } else {
        likeBtn1.style.color = 'var(--bright)';
    }

}
const LikeButton2 = () => {
    if(likeBtn2.style.color == 'var(--bright)') {
        likeBtn2.style.color = 'rgb(227, 75, 75)';
    } else {
        likeBtn2.style.color = 'var(--bright)';
    }

}
const LikeButton3 = () => {
    if(likeBtn3.style.color == 'var(--bright)') {
        likeBtn3.style.color = 'rgb(227, 75, 75)';
    } else {
        likeBtn3.style.color = 'var(--bright)';
    }

}



likeBtn1.addEventListener('click', LikeButton1);
likeBtn2.addEventListener('click', LikeButton2);
likeBtn3.addEventListener('click', LikeButton3);
likeBtn1.addEventListener('mousedown', () => {
    likeBtn1.style.fontSize = '1.7rem';
})
likeBtn1.addEventListener('mouseup', () => {
    likeBtn1.style.fontSize = '2rem';
})
likeBtn2.addEventListener('mousedown', () => {
    likeBtn2.style.fontSize = '1.7rem';
})
likeBtn2.addEventListener('mouseup', () => {
    likeBtn2.style.fontSize = '2rem';
})
likeBtn3.addEventListener('mousedown', () => {
    likeBtn3.style.fontSize = '1.7rem';
})
likeBtn3.addEventListener('mouseup', () => {
    likeBtn3.style.fontSize = '2rem';
})


//Hamburger Toggle Action
let navBar2 = document.getElementById("navBar2");


function togglebtn(){
    navBar2.classList.toggle("hidemenu")
}

