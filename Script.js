let buttons = document.getElementsByClassName("changeButtons")
let texts = document.getElementsByClassName("text")
let head = document.head
let contentOffset = document.getElementsByClassName("content")[0].offsetTop;
let pos4 = document.getElementById("paragraph6").offsetTop
let para = [] 
let extra;
let diff;
let parag;
for(let i = 0; i < document.getElementsByClassName("paragraph").length; i++){
    para[i] = "paragraph" + (i+1) 
}
addEventListener("scroll", function(event){
    
    for(let i = 0; i < para.length; i++){
        parag = document.getElementById(para[i]);
        extra = 100
        diff =  this.scrollY + this.window.innerHeight - parag.offsetTop - contentOffset;
        if(scrollY + this.window.innerHeight > parag.offsetTop + extra - parag.offsetHeight + contentOffset && this.scrollY + this.window.innerHeight < parag.offsetTop + extra + contentOffset){
            parag.style.opacity = (((extra)/(diff))**-1)
        }
        else if(scrollY + this.window.innerHeight > parag.offsetTop + extra - parag.offsetHeight + contentOffset)
        {
            parag.style.opacity = 1
        }
        else
        {
            parag.style.opacity = 0
        }
    }
        // console.log("scroll: " + scrollY);
        
        // console.log("top to para: " + (parag.offsetTop + contentOffset));
        // console.log(scrollY + this.window.innerHeight);
        // if(scrollY + this.window.innerHeight > parag.offsetTop - parag.offsetHeight + contentOffset + 100){
        //     document.getElementById(para[5]).style.opacity = 1;
        // }
        // else
        // {
        //     document.getElementById(para[5]).style.opacity = 0
        // }
});



function clicke(c){
    if(c === 'deepPurple'){
        head.innerHTML = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='Style1.css'><script defer src='homepagescript.js' ></script><title>BadPedia</title>"
    } else if(c === 'lightSimple'){
        head.innerHTML = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='Style2.css'><script defer src='homepagescript.js' ></script><title>BadPedia</title>"
    } else if (c === 'gray'){
        head.innerHTML = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='Style3.css'><script defer src='homepagescript.js' ></script><title>BadPedia</title>"
    }
    
}