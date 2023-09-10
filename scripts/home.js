
// Exhibition Like Actions
var likeButton1 = document.getElementById('like-1');
var likeButton2 = document.getElementById('like-2');
var likeButton3 = document.getElementById('like-3');


const Like1 = () => {
    if(likeButton1.style.color == 'var(--bright)') {
        likeButton1.style.color = 'rgb(227, 75, 75)';
    } else {
        likeButton1.style.color = 'var(--bright)';
    }

}
const Like2 = () => {
    if(likeButton2.style.color == 'var(--bright)') {
        likeButton2.style.color = 'rgb(227, 75, 75)';
    } else {
        likeButton2.style.color = 'var(--bright)';
    }

}
const Like3 = () => {
    if(likeButton3.style.color == 'var(--bright)') {
        likeButton3.style.color = 'rgb(227, 75, 75)';
    } else {
        likeButton3.style.color = 'var(--bright)';
    }

}



likeButton1.addEventListener('click', Like1);
likeButton2.addEventListener('click', Like2);
likeButton3.addEventListener('click', Like3);
likeButton1.addEventListener('mousedown', () => {
    likeButton1.style.fontSize = '1.7rem';
})
likeButton1.addEventListener('mouseup', () => {
    likeButton1.style.fontSize = '2rem';
})
likeButton2.addEventListener('mousedown', () => {
    likeButton2.style.fontSize = '1.7rem';
})
likeButton2.addEventListener('mouseup', () => {
    likeButton2.style.fontSize = '2rem';
})
likeButton3.addEventListener('mousedown', () => {
    likeButton3.style.fontSize = '1.7rem';
})
likeButton3.addEventListener('mouseup', () => {
    likeButton3.style.fontSize = '2rem';
})




//Hamburger Toggle Action
let navBar = document.getElementById("navBar");


function togglebtn(){
    navBar.classList.toggle("hidemenu")
}
