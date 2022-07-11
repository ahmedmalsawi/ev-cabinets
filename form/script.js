/** @format */

$(function () {
	$("li").click(function () {
		// remove classes from all
		$("li").removeClass("active");
		// add class to the one we clicked
		$(this).addClass("active");
	});
});


let tabGeneral      = document.getElementById("tab-general");
let tabKitchen      = document.getElementById("tab-kitchen");
let tabDevices      = document.getElementById("tab-devices");
let tabAccessories  = document.getElementById("tab-accessories");
let tabAddons       = document.getElementById("tab-addons");
let divGeneral      = document.getElementById("div-general");
let divKitchen      = document.getElementById("div-kitchen");
let divDevices      = document.getElementById("div-devices");
let divAccessories  = document.getElementById("div-accessories");


// tabData.addEventListener("click", function () {
// 	brwaz.classList.add("hide");
// 	data.classList.remove("hide");
// });
// tabBrwaz.addEventListener("click", function () {
// 	data.classList.add("hide");
// 	brwaz.classList.remove("hide");
// });
// col4.addEventListener("click", function () {
// 	data.classList.add("hide");
// 	brwaz.classList.remove("hide");
// });


var kitchenCheckbox     = document.querySelector("input[cat=kitchen]");
var devicesCheckbox     = document.querySelector("input[cat=devices]");
var accessoriesCheckbox = document.querySelector("input[cat=accessories]");
var addonsCheckbox      = document.querySelector("input[cat=addons]");

kitchenCheckbox.addEventListener("change", function () {
	if (this.checked) {
		tabKitchen.classList.remove("hide");
		// divKitchen.classList.remove("hide");
	} else {
		tabKitchen.classList.add("hide");
		// divKitchen.classList.add("hide");
	}
});
devicesCheckbox.addEventListener("change", function () {
	if (this.checked) {
		tabDevices.classList.remove("hide");
		// divDevices.classList.remove("hide");
	} else {
		tabDevices.classList.add("hide");
		// divDevices.classList.add("hide");
	}
});
accessoriesCheckbox.addEventListener("change", function () {
	if (this.checked) {
		tabAccessories.classList.remove("hide");
		// divAccessories.classList.remove("hide");
	} else {
		tabAccessories.classList.add("hide");
		// divAccessories.classList.add("hide");
	}
});
addonsCheckbox.addEventListener("change", function () {
	if (this.checked) {
		tabAddons.classList.remove("hide");
		// divAddons.classList.remove("hide");
	} else {
		tabAddons.classList.add("hide");
		// divAddons.classList.add("hide");
	}
});

	
	
