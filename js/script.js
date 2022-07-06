console.log("welcome to my portfolio site")
function menuToggle(){
    console.log('wtf')
    var x = document.getElementById('myNavToggle')
    if(x.className === 'navtoggle' && $(window).width() < 640){
        x.className += ' responsive'
    } else {
        x.className = 'navtoggle'
    }
}