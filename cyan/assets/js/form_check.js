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

function emailCheck(){
  let email = document.getElementById("email");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    $(".email").css({"background-color" : "rgba(144, 144, 144, 0.075)"});
    return true;
  } else {
    $(".email").css({"background-color" : "#ff496a1a"});
    return false;
  }
}

function messageCheck(){
  let message = document.getElementById('message');
  if (message.value === ""){
    $(".message").css({"background-color" : "#ff496a1a"});
    return false;
  } else {
    $(".message").css({"background-color" : "rgba(144, 144, 144, 0.075)"});
    return true;
  }
}

function hiddenInputCheck(){
  if ($(".captcha").value === ""){
    return true;
  } else {
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

function sendMessage(){
  nameCheck();
  emailCheck();
  messageCheck();
  hiddenInputCheck();
  console.log("message send");

  $.post("mail.php", {
    name: $(".name").val(),
    email: $(".email").val(),
    message:$(".message").val()
    });
}


// let sub = document.getElementById(".button-submit");
//   sub.document.addEventListener("onsubmit", sendMessage);


check();
