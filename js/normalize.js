var linkWrite=document.querySelector(".btn-write"),popupWrite=document.querySelector(".write-us"),closeWrite=popupWrite.querySelector(".close"),formWrite=popupWrite.querySelector(".form-write-us"),login=popupWrite.querySelector("[name=yourName]"),email=popupWrite.querySelector("[name=yourEmail]");console.log(login),console.log(email);var isStorageSupport=!0,storage="",linkMap=document.querySelector(".link-map"),popupMap=document.querySelector(".map"),closeMap=popupMap.querySelector(".close");try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}linkWrite.addEventListener("click",function(e){e.preventDefault(),popupWrite.classList.add("popup-show"),storage?(login.value=storage,email.focus()):login.focus()}),closeWrite.addEventListener("click",function(e){e.preventDefault(),popupWrite.classList.remove("popup-show"),popupWrite.classList.remove("popup-error")}),formWrite.addEventListener("submit",function(e){login.value&&email.value?isStorageSupport&&localStorage.setItem("name",login.value):(e.preventDefault(),popupWrite.classList.remove("popup-error"),popupWrite.offsetWidth=popupWrite.offsetWidth,popupWrite.classList.add("popup-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupWrite.classList.contains("popup-show")&&(popupWrite.classList.remove("popup-show"),popupWrite.classList.remove("popup-error")),popupMap.classList.contains("popup-show")&&popupMap.classList.remove("popup-show"))}),linkMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("popup-show")}),closeMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("popup-show")});