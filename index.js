var pageAudio=new Audio()
pageAudio.src="../asset/audio/audio.mp3"
function playAudio()
{
    pageAudio.play()
    document.getElementById("loadingpage").style.display="none"
    document.getElementById("audioIcon").setAttribute("class","fa-solid fa-volume-xmark fa-bounce")
    document.getElementById("main").style.display="block"
}
function pauseAudio()
{
    document.getElementById("audioIcon").setAttribute("class","fa-solid fa-volume-off fa-bounce")
    pageAudio.pause()
}
function buttonLoad()
{
    document.getElementById("entertowebpage").style.display="block"
}
setTimeout(buttonLoad,10000)

function login()
{
    window.open("../loginpage.html")
}