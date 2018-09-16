	var linkWrite=document.querySelector(".btn-write");
	var popupWrite=document.querySelector(".write-us");
	var closeWrite=popupWrite.querySelector(".close");
	var formWrite=popupWrite.querySelector(".form-write-us");

	var login = popupWrite.querySelector("[name=yourName]");
	var email = popupWrite.querySelector("[name=yourEmail]");
	console.log(login);

	console.log(email);
	var isStorageSupport=true;
	var storage="";

	var linkMap=document.querySelector(".link-map");
	var popupMap= document.querySelector(".map");
	var closeMap=popupMap.querySelector(".close");

	try {
	storage = localStorage.getItem("name");
	} catch (err) {
	isStorageSupport = false;
	}

	linkWrite.addEventListener("click",function(evt){
		evt.preventDefault();
		popupWrite.classList.add("popup-show");

		if (storage) {
			login.value = storage;
			email.focus();
		} else {
			login.focus();
		}
	});
	closeWrite.addEventListener("click",function(evt){
		evt.preventDefault();
		popupWrite.classList.remove("popup-show");
		popupWrite.classList.remove("popup-error");
	});

	formWrite.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popupWrite.classList.remove("popup-error");
		popupWrite.offsetWidth = popupWrite.offsetWidth;
		popupWrite.classList.add("popup-error");
	} else if (isStorageSupport) {
		localStorage.setItem("name", login.value);
		}
	});

	window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupWrite.classList.contains("popup-show")) {
			popupWrite.classList.remove("popup-show");
			popupWrite.classList.remove("popup-error");
		}
		if(popupMap.classList.contains("popup-show")){
			popupMap.classList.remove("popup-show");
		}
	}
});

	linkMap.addEventListener("click",function(evt){
		evt.preventDefault();
		popupMap.classList.add("popup-show");
	});
	closeMap.addEventListener("click",function(evt){
		evt.preventDefault();
		popupMap.classList.remove("popup-show");
	});