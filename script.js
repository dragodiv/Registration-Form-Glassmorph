let Rname = document.getElementById("name");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let cpassword = document.getElementById("c-password");
let submit = document.getElementById("submit");
var credits = document.getElementsByCId("credits");

submit.addEventListener('click', (e) =>{
    e.preventDefault;
    var flag="true";

    if(Rname.value.trim==""){
        flag="false";
    }else if(phone.value.length>10 || phone.value.length<10){
        flag="false";
    }else if(password.value!==cpassword.value){
        flag="false";
    }

    return flag;
});

// credits.innerHTML = "<p>Made with<i class="fa fa-heart" aria-hidden="true"></i>by DIVANSHU SONI</p>";