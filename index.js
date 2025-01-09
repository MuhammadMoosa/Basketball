let homeNo = 0
let guestNo = 0
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")



function add1pointhome(){
   homeNo += 1; 
    homeEl.innerText = homeNo
}


function add2pointhome(){
    homeNo += 2
    homeEl.innerText = homeNo
}



function add3pointhome(){
    homeNo+= 3
    homeEl.innerText = homeNo
}

function add1pointguest(){
     guestNo+= 1
     guestEl.innerText = guestNo
}


function add2pointguest(){
     guestNo+= 2
     guestEl.innerText = guestNo
}



function add3pointguest(){
     guestNo+= 3
     guestEl.innerText = guestNo
}


function reset(){
    homeNo= 0
    guestNo=0
    homeEl.innerText = 0
    guestEl.innerText = 0
}