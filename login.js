var inputTags=document.querySelectorAll("input")
function loginFun()
{
    var userEmail=inputTags[0].value 
    var userPass=inputTags[1].value 
    var storedEmail=localStorage.getItem("email");
    var storedPass=localStorage.getItem("pass");
    if(userEmail==storedEmail&&userPass==storedPass)
    {
        window.open("./html/index.html")
    }
    else{
        document.getElementById("message").innerHTML="User Id and Password is Wrong"
    }
}