// Search Action
var submitButton = document.getElementById('sub-btn');

function Search() {
    let searchField = document.getElementById('search').value.toUpperCase();
    let item = document.querySelectorAll('.image-item');
    let li = document.getElementsByTagName('span');

    for(i = 0; i < li.length; i++){
        let a = item[i].getElementsByClassName('overlay')[0].getElementsByTagName('span')[0];
        let value = a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(searchField) > -1 ){
            item[i].style.display = "flex";
        }else {
            item[i].style.display = "none";
        }
    }
}

submitButton.addEventListener('click', Search)

//Hamburger Toggle Action
let navBar1 = document.getElementById("navBar1");


function togglebtn(){
    navBar1.classList.toggle("hidemenu")
}
