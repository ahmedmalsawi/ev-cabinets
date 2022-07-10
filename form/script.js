/** @format */

$(function () {
	$("li").click(function () {
		// remove classes from all
		$("li").removeClass("active");
		// add class to the one we clicked
		$(this).addClass("active");
	});
});


let data = document.getElementById("data");
let brwaz = document.getElementById("brwaz");
let tabData = document.getElementById("tab-data");
let tabBrwaz = document.getElementById("tab-brwaz");
let col4 = document.getElementById("col-4");


tabData.addEventListener("click", function () {
	brwaz.classList.add("hide");
	data.classList.remove("hide");
});
tabBrwaz.addEventListener("click", function () {
	data.classList.add("hide");
	brwaz.classList.remove("hide");
});
col4.addEventListener("click", function () {
	data.classList.add("hide");
	brwaz.classList.remove("hide");
});




// defining variables
var colName1    = document.getElementById('col-1-name'),
	colQnt1     = document.getElementById('col-1-qnt'),
	colPrice1   = document.getElementById('col-1-price'),
	colTotal1   = document.getElementById('col-1-total');
var colName2    = document.getElementById('col-2-name'),
	colQnt2    = document.getElementById('col-2-qnt'),
	colPrice2   = document.getElementById('col-2-price'),
	colTotal2   = document.getElementById('col-2-total');
var colName3    = document.getElementById('col-3-name'),
	colQnt3     = document.getElementById('col-3-qnt'),
	colPrice3   = document.getElementById('col-3-price'),
	colTotal3   = document.getElementById('col-3-total');
var colName4    = document.getElementById('col-4-name'),
	colQnt4     = document.getElementById('col-4-qnt'),
	colPrice4   = document.getElementById('col-4-price'),
	colTotal4   = document.getElementById('col-4-total');
var colName5    = document.getElementById('col-5-name'),
	colQnt5     = document.getElementById('col-5-qnt'),
	colPrice5   = document.getElementById('col-5-price'),
	colTotal5   = document.getElementById('col-5-total');
var colName6    = document.getElementById('col-6-name'),
	colQnt6    = document.getElementById('col-6-qnt'),
	colPrice6   = document.getElementById('col-6-price'),
	colTotal6   = document.getElementById('col-6-total');
var colName7    = document.getElementById('col-7-name'),
	colQnt7     = document.getElementById('col-7-qnt'),
	colPrice7   = document.getElementById('col-7-price'),
	colTotal7   = document.getElementById('col-7-total');
var colName8    = document.getElementById('col-8-name'),
	colQnt8     = document.getElementById('col-8-qnt'),
	colPrice8   = document.getElementById('col-8-price'),
	colTotal8   = document.getElementById('col-8-total');
var colName9    = document.getElementById('col-9-name'),
	colQnt9     = document.getElementById('col-9-qnt'),
	colPrice9   = document.getElementById('col-9-price'),
	colTotal9   = document.getElementById('col-9-total');
var colName10    = document.getElementById('col-10-name'),
	colQnt10     = document.getElementById('col-10-qnt'),
	colPrice10   = document.getElementById('col-10-price'),
	colTotal10   = document.getElementById('col-10-total');
var colName11    = document.getElementById('col-11-name'),
	colQnt11     = document.getElementById('col-11-qnt'),
	colPrice11   = document.getElementById('col-11-price'),
	colTotal11   = document.getElementById('col-11-total');
var colName12    = document.getElementById('col-12-name'),
	colQnt12     = document.getElementById('col-12-qnt'),
	colPrice12   = document.getElementById('col-12-price'),
	colTotal12   = document.getElementById('col-12-total');
var colName13    = document.getElementById('col-13-name'),
	colQnt13     = document.getElementById('col-13-qnt'),
	colPrice13   = document.getElementById('col-13-price'),
	colTotal13   = document.getElementById('col-13-total');
var colName14    = document.getElementById('col-14-name'),
	colQnt14     = document.getElementById('col-14-qnt'),
	colPrice14   = document.getElementById('col-14-price'),
	colTotal14   = document.getElementById('col-14-total');
var colName15    = document.getElementById('col-15-name'),
	colQnt15     = document.getElementById('col-15-qnt'),
	colPrice15   = document.getElementById('col-15-price'),
	colTotal15   = document.getElementById('col-15-total');
var colName16    = document.getElementById('col-16-name'),
	colQnt16     = document.getElementById('col-16-qnt'),
	colPrice16   = document.getElementById('col-16-price'),
	colTotal16   = document.getElementById('col-16-total');
var colName17    = document.getElementById('col-17-name'),
	colQnt17     = document.getElementById('col-17-qnt'),
	colPrice17   = document.getElementById('col-17-price'),
	colTotal17   = document.getElementById('col-17-total');
var colName18    = document.getElementById('col-18-name'),
	colQnt18     = document.getElementById('col-18-qnt'),
	colPrice18   = document.getElementById('col-18-price'),
	colTotal18   = document.getElementById('col-18-total');
var colName19    = document.getElementById('col-19-name'),
	colQnt19     = document.getElementById('col-19-qnt'),
	colPrice19   = document.getElementById('col-19-price'),
	colTotal19   = document.getElementById('col-19-total');
var colName20    = document.getElementById('col-20-name'),
	colQnt20     = document.getElementById('col-20-qnt'),
	colPrice20   = document.getElementById('col-20-price'),
	colTotal20   = document.getElementById('col-20-total');
	
var footTotal = document.getElementById("foot-total"),
	footTax = document.getElementById("foot-tax"),
	footTotalTaxed = document.getElementById("foot-total-taxed"),
	footTotalResult = document.getElementById("foot-total-result"),
	footTotalContract = document.getElementById("foot-total-contract"),
	footResultName = document.getElementById("foot-result-name");
	
	
	
	
	
	
	
	
	
// defining variables
// Shelves
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



function getTotals(){
	// Shelves
	var shelf1total = shelfheight1.value * shelfwidth1.value * shelfQnt1.value;
	shelfTotal1.value = Math.round(shelf1total * 100) / 100;
	var shelf2total = shelfheight2.value * shelfwidth2.value * shelfQnt2.value;
	shelfTotal2.value = Math.round(shelf2total * 100) / 100;
	var shelf3total = shelfheight3.value * shelfwidth3.value * shelfQnt3.value;
	shelfTotal3.value = Math.round(shelf3total * 100) / 100;
	var shelf4total = shelfheight4.value * shelfwidth4.value * shelfQnt4.value;
	shelfTotal4.value = Math.round(shelf4total * 100) / 100;
	var shelf5total = shelfheight5.value * shelfwidth5.value * shelfQnt5.value;
	shelfTotal5.value = Math.round(shelf5total * 100) / 100;
	var shelf6total = shelfheight6.value * shelfwidth6.value * shelfQnt6.value;
	shelfTotal6.value = Math.round(shelf6total * 100) / 100;
	var shelf7total = shelfheight7.value * shelfwidth7.value * shelfQnt7.value;
	shelfTotal7.value = Math.round(shelf7total * 100) / 100;
	var shelf8total = shelfheight8.value * shelfwidth8.value * shelfQnt8.value;
	shelfTotal8.value = Math.round(shelf8total * 100) / 100;
	var shelf9total = shelfheight9.value * shelfwidth9.value * shelfQnt9.value;
	shelfTotal9.value = Math.round(shelf9total * 100) / 100;
	var shelf10total =
		shelfheight10.value * shelfwidth10.value * shelfQnt10.value;
	shelfTotal10.value = Math.round(shelf10total * 100) / 100;
	var shelf11total =
		shelfheight11.value * shelfwidth11.value * shelfQnt11.value;
	shelfTotal11.value = Math.round(shelf11total * 100) / 100;
	var shelf12total =
		shelfheight12.value * shelfwidth12.value * shelfQnt12.value;
	shelfTotal12.value = Math.round(shelf12total * 100) / 100;
	var shelf13total =
		shelfheight13.value * shelfwidth13.value * shelfQnt13.value;
	shelfTotal13.value = Math.round(shelf13total * 100) / 100;
	var shelf14total =
		shelfheight14.value * shelfwidth14.value * shelfQnt14.value;
	shelfTotal14.value = Math.round(shelf14total * 100) / 100;
	var shelf15total =
		shelfheight15.value * shelfwidth15.value * shelfQnt15.value;
	shelfTotal15.value = Math.round(shelf15total * 100) / 100;
	var shelf16total =
		shelfheight16.value * shelfwidth16.value * shelfQnt16.value;
	shelfTotal16.value = Math.round(shelf16total * 100) / 100;
	var shelf17total =
		shelfheight17.value * shelfwidth17.value * shelfQnt17.value;
	shelfTotal17.value = Math.round(shelf17total * 100) / 100;
	var shelf18total =
		shelfheight18.value * shelfwidth18.value * shelfQnt18.value;
	shelfTotal18.value = Math.round(shelf18total * 100) / 100;
	var shelf19total =
		shelfheight19.value * shelfwidth19.value * shelfQnt19.value;
	shelfTotal19.value = Math.round(shelf19total * 100) / 100;
	var shelf20total =
		shelfheight20.value * shelfwidth20.value * shelfQnt20.value;
	shelfTotal20.value = Math.round(shelf20total * 100) / 100;

	shelffootTotal.value =
		Math.round(
			parseFloat(
				shelf1total +
					shelf2total +
					shelf3total +
					shelf4total +
					shelf5total +
					shelf6total +
					shelf7total +
					shelf8total +
					shelf9total +
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
			)
		) / 10000;
	colQnt4.value = shelffootTotal.value; 
//calc items
	var col1total = colPrice1.value * colQnt1.value;
	colTotal1.value = Math.round(col1total * 100) / 100;
	var col2total = colPrice2.value * colQnt2.value;
	colTotal2.value = Math.round(col2total * 100) / 100;
	var col3total = colPrice3.value * colQnt3.value;
	colTotal3.value = Math.round(col3total * 100) / 100;
	var col4total = colPrice4.value * shelffootTotal.value;
	colTotal4.value = Math.round(col4total * 100) / 100;
	var col5total = colPrice5.value * colQnt5.value;
	colTotal5.value = Math.round(col5total * 100) / 100;
	var col6total = colPrice6.value * colQnt6.value;
	colTotal6.value = Math.round(col6total * 100) / 100;
	var col7total = colPrice7.value * colQnt7.value;
	colTotal7.value = Math.round(col7total * 100) / 100;
	var col8total = colPrice8.value * colQnt8.value;
	colTotal8.value = Math.round(col8total * 100) / 100;
	var col9total = colPrice9.value * colQnt9.value;
	colTotal9.value = Math.round(col9total * 100) / 100;
	var col10total = colPrice10.value * colQnt10.value;
	colTotal10.value = Math.round(col10total * 100) / 100;
	var col11total = colPrice11.value * colQnt11.value;
	colTotal11.value = Math.round(col11total * 100) / 100;
	var col12total = colPrice12.value * colQnt12.value;
	colTotal12.value = Math.round(col12total * 100) / 100;
	var col13total = colPrice13.value * colQnt13.value;
	colTotal13.value = Math.round(col13total * 100) / 100;
	var col14total = colPrice14.value * colQnt14.value;
	colTotal14.value = Math.round(col14total * 100) / 100;
	var col15total = colPrice15.value * colQnt15.value;
	colTotal15.value = Math.round(col15total * 100) / 100;
	var col16total = colPrice16.value * colQnt16.value;
	colTotal16.value = Math.round(col16total * 100) / 100;
	var col17total = colPrice17.value * colQnt17.value;
	colTotal17.value = Math.round(col17total * 100) / 100;
	var col18total = colPrice18.value * colQnt18.value;
	colTotal18.value = Math.round(col18total * 100) / 100;
	var col19total = colPrice19.value * colQnt19.value;
	colTotal19.value = Math.round(col19total * 100) / 100;
	var col20total = colPrice20.value * colQnt20.value;
	colTotal20.value = Math.round(col20total * 100) / 100;

	var preTotals = parseFloat(
		col1total +
			col2total +
			col3total +
			col4total +
			col5total +
			col6total +
			col7total +
			col8total +
			col9total +
			col10total +
			col11total +
			col12total +
			col13total +
			col14total +
			col15total +
			col16total +
			col17total +
			col18total +
			col19total +
			col20total
	);
	footTotal.value = preTotals;
	var tax = preTotals * 0.15;
	footTax.value = Math.round(tax * 100) / 100;
	var taxedTotal = preTotals * 1.15;
	footTotalTaxed.value = Math.round(taxedTotal * 100) / 100;
	var differenceTotal = footTotalContract.value - taxedTotal;
	footTotalResult.value = Math.round(differenceTotal * 100) / 100;
	if (footTotalContract.value > Math.round(taxedTotal * 100) / 100) {
		footResultName.value = "يوجد زيادة";
	} else if (
		Math.round(footTotalContract.value * 100) / 100 ==
		Math.round(taxedTotal * 100) / 100
	) {
		footResultName.value = "العقد متوازن";
	} else if (
		Math.round(footTotalContract.value * 100) / 100 <
		Math.round(taxedTotal * 100) / 100
	) {
		footResultName.value = "يوجد عجز";
	}
}
