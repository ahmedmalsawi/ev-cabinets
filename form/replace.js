/** @format */

// defining variables
var shelfwidth1 = document.getElementById("shelf-1-width"),
	shelfQnt1 = document.getElementById("shelf-1-qnt"),
	shelfheight1 = document.getElementById("shelf-1-height"),
	shelfTotal1 = document.getElementById("shelf-1-total");
var shelfwidth2 = document.getElementById("shelf-2-width"),
	shelfQnt2 = document.getElementById("shelf-2-qnt"),
	shelfheight2 = document.getElementById("shelf-2-height"),
	shelfTotal2 = document.getElementById("shelf-2-total");
var shelfwidth3 = document.getElementById("shelf-3-width"),
	shelfQnt3 = document.getElementById("shelf-3-qnt"),
	shelfheight3 = document.getElementById("shelf-3-height"),
	shelfTotal3 = document.getElementById("shelf-3-total");
var shelfwidth4 = document.getElementById("shelf-4-width"),
	shelfQnt4 = document.getElementById("shelf-4-qnt"),
	shelfheight4 = document.getElementById("shelf-4-height"),
	shelfTotal4 = document.getElementById("shelf-4-total");
var shelfwidth5 = document.getElementById("shelf-5-width"),
	shelfQnt5 = document.getElementById("shelf-5-qnt"),
	shelfheight5 = document.getElementById("shelf-5-height"),
	shelfTotal5 = document.getElementById("shelf-5-total");
var shelfwidth6 = document.getElementById("shelf-6-width"),
	shelfQnt6 = document.getElementById("shelf-6-qnt"),
	shelfheight6 = document.getElementById("shelf-6-height"),
	shelfTotal6 = document.getElementById("shelf-6-total");
var shelfwidth7 = document.getElementById("shelf-7-width"),
	shelfQnt7 = document.getElementById("shelf-7-qnt"),
	shelfheight7 = document.getElementById("shelf-7-height"),
	shelfTotal7 = document.getElementById("shelf-7-total");
var shelfwidth8 = document.getElementById("shelf-8-width"),
	shelfQnt8 = document.getElementById("shelf-8-qnt"),
	shelfheight8 = document.getElementById("shelf-8-height"),
	shelfTotal8 = document.getElementById("shelf-8-total");
var shelfwidth9 = document.getElementById("shelf-9-width"),
	shelfQnt9 = document.getElementById("shelf-9-qnt"),
	shelfheight9 = document.getElementById("shelf-9-height"),
	shelfTotal9 = document.getElementById("shelf-9-total");
var shelfwidth10 = document.getElementById("shelf-10-width"),
	shelfQnt10 = document.getElementById("shelf-10-qnt"),
	shelfheight10 = document.getElementById("shelf-10-height"),
	shelfTotal10 = document.getElementById("shelf-10-total");
var shelfwidth11 = document.getElementById("shelf-11-width"),
	shelfQnt11 = document.getElementById("shelf-11-qnt"),
	shelfheight11 = document.getElementById("shelf-11-height"),
	shelfTotal11 = document.getElementById("shelf-11-total");
var shelfwidth12 = document.getElementById("shelf-12-width"),
	shelfQnt12 = document.getElementById("shelf-12-qnt"),
	shelfheight12 = document.getElementById("shelf-12-height"),
	shelfTotal12 = document.getElementById("shelf-12-total");
var shelfwidth13 = document.getElementById("shelf-13-width"),
	shelfQnt13 = document.getElementById("shelf-13-qnt"),
	shelfheight13 = document.getElementById("shelf-13-height"),
	shelfTotal13 = document.getElementById("shelf-13-total");
var shelfwidth14 = document.getElementById("shelf-14-width"),
	shelfQnt14 = document.getElementById("shelf-14-qnt"),
	shelfheight14 = document.getElementById("shelf-14-height"),
	shelfTotal14 = document.getElementById("shelf-14-total");
var shelfwidth15 = document.getElementById("shelf-15-width"),
	shelfQnt15 = document.getElementById("shelf-15-qnt"),
	shelfheight15 = document.getElementById("shelf-15-height"),
	shelfTotal15 = document.getElementById("shelf-15-total");
var shelfwidth16 = document.getElementById("shelf-16-width"),
	shelfQnt16 = document.getElementById("shelf-16-qnt"),
	shelfheight16 = document.getElementById("shelf-16-height"),
	shelfTotal16 = document.getElementById("shelf-16-total");
var shelfwidth17 = document.getElementById("shelf-17-width"),
	shelfQnt17 = document.getElementById("shelf-17-qnt"),
	shelfheight17 = document.getElementById("shelf-17-height"),
	shelfTotal17 = document.getElementById("shelf-17-total");
var shelfwidth18 = document.getElementById("shelf-18-width"),
	shelfQnt18 = document.getElementById("shelf-18-qnt"),
	shelfheight18 = document.getElementById("shelf-18-height"),
	shelfTotal18 = document.getElementById("shelf-18-total");
var shelfwidth19 = document.getElementById("shelf-19-width"),
	shelfQnt19 = document.getElementById("shelf-19-qnt"),
	shelfheight19 = document.getElementById("shelf-19-height"),
	shelfTotal19 = document.getElementById("shelf-19-total");
var shelfwidth20 = document.getElementById("shelf-20-width"),
	shelfQnt20 = document.getElementById("shelf-20-qnt"),
	shelfheight20 = document.getElementById("shelf-20-height"),
	shelfTotal20 = document.getElementById("shelf-20-total");

var shelffootTotal = document.getElementById("shelf-foot-total");

// sum totals
	var shelf1total = shelfheight1.value * shelfQnt1.value;
	shelfTotal1.value = Math.round(shelf1total * 100) / 100;
	var shelf2total = shelfheight2.value * shelfQnt2.value;
	shelfTotal2.value = Math.round(shelf2total * 100) / 100;
	var shelf3total = shelfheight3.value * shelfQnt3.value;
	shelfTotal3.value = Math.round(shelf3total * 100) / 100;
	var shelf4total = shelfheight4.value;
	shelfTotal4.value = Math.round(shelf4total * 100) / 100;
	var shelf5total = shelfheight5.value * shelfQnt5.value;
	shelfTotal5.value = Math.round(shelf5total * 100) / 100;
	var shelf6total = shelfheight6.value * shelfQnt6.value;
	shelfTotal6.value = Math.round(shelf6total * 100) / 100;
	var shelf7total = shelfheight7.value * shelfQnt7.value;
	shelfTotal7.value = Math.round(shelf7total * 100) / 100;
	var shelf8total = shelfheight8.value * shelfQnt8.value;
	shelfTotal8.value = Math.round(shelf8total * 100) / 100;
	var shelf9total = shelfheight9.value * shelfQnt9.value;
	shelfTotal9.value = Math.round(shelf9total * 100) / 100;
	var shelf10total = shelfheight10.value * shelfQnt10.value;
	shelfTotal10.value = Math.round(shelf10total * 100) / 100;
	var shelf11total = shelfheight11.value * shelfQnt11.value;
	shelfTotal11.value = Math.round(shelf11total * 100) / 100;
	var shelf12total = shelfheight12.value * shelfQnt12.value;
	shelfTotal12.value = Math.round(shelf12total * 100) / 100;
	var shelf13total = shelfheight13.value * shelfQnt13.value;
	shelfTotal13.value = Math.round(shelf13total * 100) / 100;
	var shelf14total = shelfheight14.value * shelfQnt14.value;
	shelfTotal14.value = Math.round(shelf14total * 100) / 100;
	var shelf15total = shelfheight15.value * shelfQnt15.value;
	shelfTotal15.value = Math.round(shelf15total * 100) / 100;
	var shelf16total = shelfheight16.value * shelfQnt16.value;
	shelfTotal16.value = Math.round(shelf16total * 100) / 100;
	var shelf17total = shelfheight17.value * shelfQnt17.value;
	shelfTotal17.value = Math.round(shelf17total * 100) / 100;
	var shelf18total = shelfheight18.value * shelfQnt18.value;
	shelfTotal18.value = Math.round(shelf18total * 100) / 100;
	var shelf19total = shelfheight19.value * shelfQnt19.value;
	shelfTotal19.value = Math.round(shelf19total * 100) / 100;
	var shelf20total = shelfheight20.value * shelfQnt20.value;
	shelfTotal20.value = Math.round(shelf20total * 100) / 100;

	shelffootTotal.value = parseFloat(
	        shelf1total  +
			shelf2total  +
			shelf3total  +
			shelf4total  +
			shelf5total  +
			shelf6total  +
			shelf7total  +
			shelf8total  +
			shelf9total  +
			shelf10total +
			shelf11total +
			shelf12total +
			shelf13total +
			shelf14total +
			shelf15total +
			shelf16total +
			shelf17total +
			shelf18total +
			shelf19total +
			shelf20total 
                                	)/100;
}
