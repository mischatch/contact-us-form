

function Check(){
	// let el = document.getElementById('name');
  if (name.value === ""){
    alert("empty");
  }

}

function check(){
  let el = document.activeElement;

  if (el){
    el.addEventListener("focusout", Check);
  }
}

check();
