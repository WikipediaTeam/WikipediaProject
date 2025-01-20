let buttons = document.getElementsByClassName("changeButtons")
let texts = document.getElementsByClassName("text")
let head = document.head


function clicke(c){
    if(c === 'deepPurple'){
        head.innerHTML = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='Style1.css'><script defer src='homepagescript.js' ></script><title>BadPedia</title>"
    } else if(c === 'lightSimple'){
        head.innerHTML = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='Style2.css'><script defer src='homepagescript.js' ></script><title>BadPedia</title>"
    }
}