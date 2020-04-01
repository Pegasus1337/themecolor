var button = document.getElementById("toggle-inside") ;
var body = document.getElementById("main-body") ;
console.log(button) ;
var lightlist = document.getElementsByClassName('light-mode') ;
var h1 = document.getElementById('h1') ;
var paragraph = document.getElementById('paragraph') ;
console.log(lightlist) ;
var circle = document.getElementById('circle') ;
var footer = document.getElementById('footer') ;




if (button){
button.addEventListener('click' ,function (){
    if ( button.style.marginLeft != '97px' ){
    button.style.transitionDuration ='0.5s' ;
    button.style.transitionProperty ='all' ;
    button.style.transitionTimingFunction ='ease-in-out' ;
    button.classList.add("animation") ;
    button.style.marginLeft ='97px' ; 
    body.classList.add("darkmode");
    button.textContent ='Dark' ;
    button.style.color = '#fffeb8' ;
    h1.style.color = '#574b90' ;
    paragraph.style.color = '#f3558e' ;
    circle.style.backgroundColor ='#c03546';
    footer.style.color ='white' ;
}
    
    else {
    body.style.transitionDuration = '0.5s' ;
    body.style.transitionDuration ='0.5s' ;
    body.style.transitionProperty ='all' ;
    body.style.transitionDuration ='0.5s' ;
    button.style.transitionProperty ='all' ;
    button.style.transitionTimingFunction ='ease-in-out' ;
    button.style.marginLeft ='3px' ;
    button.textContent ='Light' ;
    body.classList.remove("darkmode") ;
    body.classList.add("light-mode");
    button.style.color = 'white' ;
    h1.style.color = '#9c1de7' ;
    paragraph.style.color = '#9e579d' ;
    circle.style.backgroundColor = '#fc85ae' ;
    footer.style.color ='rgb(11, 11, 68)' ;
    
}


    



}) ;
}



