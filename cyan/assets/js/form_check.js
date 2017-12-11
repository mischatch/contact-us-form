function nameCheck(){
	let name = document.getElementById('name');
  if (name.value === ""){
    $(".name").css({"background-color" : "#ff496a1a"});
    return false;
  } else {
    $(".name").css({"background-color" : "rgba(144, 144, 144, 0.075)"});
    return true;
  }
}

function emailCheck(mail){
  let email = document.getElementById("email");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    $(".email").css({"background-color" : "rgba(144, 144, 144, 0.075)"});
    return true;
  } else {
    $(".email").css({"background-color" : "#ff496a1a"});
    return false;
  }
}

function check(){
  let name = document.getElementById("name");
  if (name){
    name.addEventListener("focusout", nameCheck);
  }

  let email = document.getElementById("email");
  if (email){
    email.addEventListener("focusout", emailCheck);
  }

  let message = document.getElementById("message");
  if (message){
    message.addEventListener("focusout", messageCheck);
  }
}

function emptyCheck(el){
  if (el.value === ""){
    $(".email").css({
        "color" : "#609D29"
      });
  }
}




check();
