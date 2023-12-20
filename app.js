

    function openeye(){
        var password=document.getElementById("passwd");
        var openeye=document.getElementById("open-eye");
        var closed=document.getElementById("close-eye");
        if(password.type==="password")
        {
            password.type="text";
            closed.style.visibility="hidden";
            openeye.style.visibility="visible";
    
        }
        else{
            password.type="password";
            openeye.style.visibility="hidden";
            closed.style.visibility="visible";
        }
    } 

