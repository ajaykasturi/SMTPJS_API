api_key = "AB80573ACC3BCF038A54351BEE872346FBB30ED6C71643923542E5DF1670E52739AC47E0A2D51E8DD73EE4B6BC8C9C58";
document.getElementById("emailsubmit").addEventListener("click",function(){
    let email = document.getElementById("email").value;
    if(email===""){
        alert("Enter Email correctly");
    } else{
    document.getElementById("emailsubmit").style.display="none";
    document.getElementById("spanotp").style.display="block";
    document.getElementById("otp").style.display="block";
    document.getElementById("otpsubmit").style.display="block";
    document.getElementById("reset").style.display="block";
    //4 digit otp generation
    let otp="" ;
    for(let i=0;i<4;i++){
        otp+=Math.floor(Math.random()*9);
    }

    console.log(email,otp);
    window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "b18software@gmail.com",
        Password : "32A5172F54894BFEAB63134A59DBA68EEBDD",
        To : email,
        From : "b18software@gmail.com",
        Subject : "B18SOFTWARE TESTING",
        Body : "Your OTP is : "+otp
    }).then(
      message => {
        if(message=="OK"){
            console.log(message+"success");
        } else {
            console.log(message +" unsuccess");
        }
    }
    );
    document.getElementById("otpsubmit").addEventListener("click",function(){
        let iotp = document.getElementById("otp").value;
        if(iotp===""){
            alert("Enter OTP correctly");
        } else if(iotp==otp){
            alert("congrats your OTP verified successfully")
        } else {
            alert("Bad luck OTP not verified");
        }
    });
    }
});
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("emailsubmit").style.display="block";
    document.getElementById("spanotp").style.display="none";
    document.getElementById("otp").style.display="none";
    document.getElementById("otpsubmit").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("otp").value="";
    document.getElementById("email").value="";
});

