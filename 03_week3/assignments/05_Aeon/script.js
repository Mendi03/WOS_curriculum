
/**
 * 
 * @param {HTMLElement} elem 
 */
function hide(elem){
    elem.remove();
}

function newsletter(){
    let email = document.querySelector("#email");
    console.log(email);
    
    alert(`Preorder Complete: ${email.value}`)
}

/**
 * 
 * @param {HTMLElement} elem 
 */
function increment(button){
    let amps = button.parentElement.querySelector("label > span");
    amps.innerText++;
}