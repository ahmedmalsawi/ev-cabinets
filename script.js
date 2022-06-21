/** @format */

//get cabinets count
let contractNo  = document.getElementById("contractNo");
let wallQn      = document.getElementById("wallQn");
let tallQn      = document.getElementById("tallQn");
let baseQn      = document.getElementById("baseQn");
let submit = document.getElementById("submit");
let update = document.getElementById("update");

function getCabinetsCount() {
	// console.log(contractNo, wallQn, tallQn, baseQn, submit, update);
}

//create contract
let contracts ;
// let cabinets ;
if(localStorage.contracts != null){
	contracts=JSON.parse(localStorage.contracts);
	// cabinets = JSON.parse(localStorage.cabinets);
}else{
	contracts = [];
	// cabinets = [];
}



// let cab = {
// 	name:"Cab-1",
// 	h:10,
// 	w:15,
// 	d:20,
// };

// console.log(cab);

// let all=[];

// let test1 = new Array(cab);
// test1.h = 10;
// test1.w = 10;
// test1.d = 10;
// let test2 = new Array(cab);
// let test3 = new Array(cab);

// test1[test1.length - 1].h = 80;
// console.log(test1);

// all.push(test1);
// all.push(test2);
// all.push(test3);
// test1[test1.length - 1].h = 90;

// // console.log(JSON.stringify(all));
// // let zero = 0;
// // all[all.length - 1].name = "changed";


// console.log(all)

// console.log(modelCab);
// console.log(modelCab.type);
// console.log(modelCab.d());
// console.log(modelCab.h());
// console.log(modelCab.w);


// let test1 = Object.create(modelCab);
// test1.type = "T";
// console.log(test1);
// console.log(test1.type);
// console.log(test1.d());
// console.log(test1.h());
// console.log(test1.w);

// let test2 = Object.create(modelCab);
// test2.type = "B";
// console.log(test2);
// console.log(test2.type);
// console.log(test2.d());
// console.log(test2.h());
// console.log(test2.w);
let collect={};
let modelCab = {
	type:"",
	cabName:"",
	d: function () { if (this.type == "T") { return 35; } else { return 58; } },
	h: function () { if (this.type == "W") { return 213; } else { return 76; } },
	w:0,
	};
	
	
	let wallCabs = 5;
	for (let i = 0; i < wallCabs; i++) {
		let cabID = "W"+(i+1);
		collect[cabID] = Object.create(modelCab);
		// let cab = Object.create(modelCab);
		collect[cabID].type = "W";
		collect[cabID].cabName =cabID;
		// collect.push(cabID);
	}
	// console.log(collect);
	// console.log(collect.W1.type);
	// console.log(collect.W1.h());
	// console.log(collect.W1.d());



let tallCabs = 5;
for (let i = 0; i < tallCabs; i++) {
	let cabID = "T"+(i+1);
	collect[cabID] = Object.create(modelCab);
	// let cab = Object.create(modelCab);
	collect[cabID].type = "T";
	collect[cabID].cabName = collect[cabID].type + (i + 1);
	// collect.push(cabID);
}
// console.log(collect);
// console.log(collect.T1.type);
// console.log(collect.T1.h());
// console.log(collect.T1.d());


let baseCabs = 5;
for (let i = 0; i < baseCabs; i++) {
	let cabID = "B"+(i+1);
	collect[cabID] = Object.create(modelCab);
	// let cab = Object.create(modelCab);
	collect[cabID].type = "B";
	collect[cabID].cabName = collect[cabID].type + (i + 1);
	// collect.push(cabID);
}
// console.log(collect);
// console.log(collect.B1.type);
// console.log(collect.B1.h());
// console.log(collect.B1.d());






// let newCon = {
// 	contractNo: 5500,
// 	wallQn: wallQn.value,
// 	tallQn: tallQn.value,
// 	baseQn: baseQn.value,
// 	cabinets: {
// 		"w-1": {
// 			cabinetName: "w-1",
// 			cabinetHeight: 0,
// 			cabinetDepth: 0,
// 			cabinetWidth: 0,
// 		},
// 		"w-2": {
// 			cabinetName: "w-2",
// 			cabinetHeight: 0,
// 			cabinetDepth: 0,
// 			cabinetWidth: 0,
// 		},
// 		"b-1": {
// 			cabinetName: "b-1",
// 			cabinetHeight: 0,
// 			cabinetDepth: 0,
// 			cabinetWidth: 0,
// 		},
// 	},
// };
// console.log(newCon);










submit.onclick = function () {


	//adding contracts
	// contractNo = contractNo.value;
	
	// contracts.push(contractNo);
	contracts[0] = {
		contractNo: contractNo.value,
		wallQn: wallQn.value,
		tallQn: tallQn.value,
		baseQn: baseQn.value,
		cabinets: {},
	};
	// contracts.push(newContract);
	// //adding contracts
	// let newContract = {
	// 	contractNo: contractNo.value,
	// 	wallQn: wallQn.value,
	// 	tallQn: tallQn.value,
	// 	baseQn: baseQn.value,
	// 	cabinets:{},
	// };
	
	// contracts.push(newContract);
	// console.log(contracts);
	// contracts.push(newContract);
	
	let rules = {
		cutRules: {
			acpH: 44,
			acpD: 36,
			acpShelfW: 62,
			acpShelfD: 67,
			acpBackH: 26,
			acpBackW: 26,
			shelfTubeW: 50,
			shelfTubeD: 55,
			omgD: 48,
		},
		measures: {
			front: 5800,
			back: 5800,
			depth: 5800,
			cladding: 3640,
			claddingH: 2800,
			claddingW: 1300,
		},
	}
		
	
	
	
	
	
	//adding cabinets
	//adding wall cabinets
	// newContract["cabinets"].push({ "cabinetName": "w-1" })
	let modelCabinet = {
		contractNo: contractNo.value,
		type: "",
		cabinetName: "",
		cabinetDepth: 0,
		cabinetHeight: 0,
		cabinetWidth: 0,
		claddingSideQn: 2,
		claddingSideWidth: function () {return this.cabinetDepth - rules.cutRules.acpD;},
		claddingSideHeight: function () {return this.cabinetHeight - rules.cutRules.acpH;},
		claddingTaBQn: function () {if (this.type == "B") {	return 1;} else {return 2;}	},
		claddingTaBHeight: function () {return this.cabinetDepth - rules.cutRules.acpD;},
		claddingTaBWidth: function () {return this.cabinetWidth - rules.cutRules.acpH;},
		claddingBackQn: 1,
		claddingBackHeight: function () {return this.cabinetHeight - rules.cutRules.acpBackH;},
		claddingBackWidth: function () {return this.cabinetWidth - rules.cutRules.acpBackW;},
		claddingShelfQn: 2,
		claddingShelfWidth: function () {return this.cabinetWidth - rules.cutRules.acpShelfW;},
		claddingShelfHeight: function () {return this.cabinetDepth - rules.cutRules.acpShelfD;},
	};
	
	
	// let getNames = {};
	for (let i = 0; i < wallQn.value; i++) {
		let cabinetName = "W_" + (i + 1);
		contracts[0].cabinets[Object.keys(contracts[0]["cabinets"]).length] =Object.create(modelCabinet);
		contracts[0].cabinets[Object.keys(contracts[0]["cabinets"]).length-1].type ="W";
		contracts[0].cabinets[Object.keys(contracts[0]["cabinets"]).length-1].cabinetName = cabinetName;
		// if (getNames.length == "NaN") { getNamesLength = 0 }else{ getNamesLength = getNames.length};
		// getNames[getNamesLength] = cabinetName;
	}
	for (let i = 0; i < tallQn.value; i++) {
		let cabinetName = "T_" + (i + 1);
		contracts[0].cabinets[Object.keys(contracts[0]['cabinets']).length] = Object.create(modelCabinet);
		contracts[0].cabinets[Object.keys(contracts[0]['cabinets']).length-1].type = "T";
		contracts[0].cabinets[Object.keys(contracts[0]['cabinets']).length-1].cabinetName = cabinetName;
		// getNames[getNames.length] = cabinetName;
	}
	for (let i = 0; i < baseQn.value; i++) {
		let cabinetName = "B_" + (i + 1);
		contracts[0].cabinets[Object.keys(contracts[0]['cabinets']).length] = Object.create(modelCabinet);
		contracts[0].cabinets[Object.keys(contracts[0]['cabinets']).length-1].type = "B";
		contracts[0].cabinets[Object.keys(contracts[0]['cabinets']).length-1].cabinetName = cabinetName;
		// getNames[getNames.length] = cabinetName;
		}
	// console.log(getNames);
	
	
	
	// for (let i = 0; i < contracts[0].contractData.wallQn; i++) {
	// 	// let cabinetName = "W-" + (i + 1);
	// 	contracts[contracts.length - 1].contractData.cabinets={
	// 		contractNo: contractNo,
	// 		cabinetName: "W-" + (i + 1),
	// 		cabinetHeight: 76,
	// 		cabinetDepth: 35,
	// 		cabinetWidth: 0,
	// 	};
	// }
	// console.log(contracts);
	// newContract.push(cabinets);
	// 	let cabinetName = "W-" + (i + 1);
	// 	cabinets.push({
	// 		contractNo: newContract.contractNo,
	// 		cabinetName: cabinetName,
	// 		cabinetHeight:76,
	// 		cabinetDepth:35,
	// 		cabinetWidth:0,
	// 	});
	// }
	
	
	
	
	
	
	
	
	
	
	
	// //adding Tall cabinets
	// for (let i = 0; i < newContract.tallQn; i++) {
	// 	cabinets.push({
	// 		contractNo: newContract.contractNo,
	// 		cabinetName: "T-" + (i + 1),
	// 		cabinetHeight: 213,
	// 		cabinetDepth: 58,
	// 		cabinetWidth: 0,
	// 	});
	// }
	// //adding Base cabinets
	// for (let i = 0; i < newContract.baseQn; i++) {
	// 	cabinets.push({
	// 		contractNo: newContract.contractNo,
	// 		cabinetName: "B-" + (i + 1),
	// 		cabinetHeight:76,
	// 		cabinetDepth:58,
	// 		cabinetWidth:0,
	// 	});
	// }
	
	
	
	
	
	
	
	
	
	// store data to local strage
	console.log(contracts);
	localStorage.setItem('contracts', JSON.stringify(contracts));
	console.log("Contract has been stored.");
	// localStorage.setItem("cabinets", JSON.stringify(cabinets));
	
	
	
	
	
	
	
	
	// clearData();
		autoHide("inputs-mian", "none");
		autoHide("update-mian", "");
		autoHide("outputs-mian", "none");
		spreadData();
	// console.log(newContract);
	// console.log(contracts);
};
// clear after input
function clearData(){
	contractNo.value    = '';
	wallQn.value        = '';
	tallQn.value        = '';
	baseQn.value        = '';    
}

// spread data
function spreadData(){
	let updateTable='';
	let cabinets = contracts[0].cabinets;
	for (let i = 0; i < Object.keys(contracts[0]["cabinets"]).length; i++) {
		let height, depth;
		if (cabinets[i].type == "W") {depth = 350;}else{depth = 580;}
		if (cabinets[i].type == "T") {height = 2130;}else{height = 760;}
		updateTable += `
		<tr class="text-center">
            <td class="border border-slate-300">${i + 1}</td>
            <td class="border border-slate-300">
                <input type="text" disabled 
					class="text-cyan-800  text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full "
                    id="${cabinets[i].cabinetName}_Name" value=${cabinets[i].cabinetName}>
			</td>
			<td class="border border-slate-300">
				<input type="number" required class="text-cyan-800 text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full hover:bg-slate-50 focus:bg-slate-50"
					id="${cabinets[i].cabinetName}_Height" value=${height}>
			</td>
			<td class="border border-slate-300">
				<input type="number" required	class="text-cyan-800 text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full hover:bg-slate-50 focus:bg-slate-50"
					id="${cabinets[i].cabinetName}_Depth" value=${depth} >
			</td>
			<td class="border border-slate-300">
				<input type="number" class="text-cyan-800 text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full hover:bg-slate-50 focus:bg-slate-50"
					id="${cabinets[i].cabinetName}_Width" value="0" required>
            </td>
        </tr>
		`;
	}
	document.getElementById("updateTable").innerHTML = updateTable;
}
//Start Testing copy array ====================================================================================
// const object = {
	// a: 5,
	// b: 6,
	// c: 7,
	// a:8,
	// };
	// const picked = (({ a }) => ({a}))(object);
	
	// console.log(cabinets); // { a: 5, c: 7 }
	
	//End Testing copy array ====================================================================================
	//Start Testing add object array ====================================================================================
	let obj = {
		id: 23,
		name: "Jacob",
		link: {
			rel: "self",
			link: "www.abc.com",
		},
		company: {
			data: {
				id: 1,
				ref: 324,
			},
		},
	};
	
	// console.log(Object.entries(obj).map((item) => ({ [item[0]]: item[1] })));
	

// console.log(contracts);
	
	
	
	
	
	
	
	
	//End Testing add object array ====================================================================================

// get update values
update.onclick = function (){ 
	updateCell();
	autoHide("inputs-mian", "none");
	autoHide("update-mian", "none");
	autoHide("outputs-mian", "");
	spreadCladding();
	spreadCladdingTB();
	spreadCladdingB();
	spreadCladdingSh();
}



function updateCell(){
	let cabinets = contracts[0].cabinets;
	for (let i = 0; i < Object.keys(contracts[0]["cabinets"]).length; i++) {
		let updatedCellHeight   =document.getElementById(cabinets[i].cabinetName+'_Height').value;
		let updatedCellWidth    =document.getElementById(cabinets[i].cabinetName+'_Width').value;
		let updatedCellDepth    =document.getElementById(cabinets[i].cabinetName+'_Depth').value;
		cabinets[i].cabinetDepth=updatedCellHeight;
		cabinets[i].cabinetHeight=updatedCellDepth ;
		cabinets[i].cabinetWidth=updatedCellWidth ;
	}
	localStorage.setItem("contracts", JSON.stringify(contracts));
	console.log("Contract has been stored.");
	console.log(contracts);
}
//create cladding
function spreadCladding() {
	let updateTable = "";
	let cabinets = contracts[0].cabinets;
	for (let i = 0; i < Object.keys(contracts[0]["cabinets"]).length; i++) {
		updateTable += `
		<tr class="text-center">
            <td style="display: none" class="border border-slate-300"   >${i + 1}</td>
            <td style="display: none" class="border border-slate-300"   >${cabinets[i].cabinetName}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingSideHeight()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingSideWidth()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingSideQn}</td>
			<th class="border border-slate-300"                         >K</th>
            <th class="border border-slate-300"                         ></th>
			<td class="border border-slate-300"                         >${cabinets[i].cabinetName}_Side_${contracts[0].contractNo}</td>
        </tr>
		`;
	}
	document.getElementById("claddingSide").innerHTML = updateTable;
}
function spreadCladdingTB() {
	let updateTable = "";
	let cabinets = contracts[0].cabinets;
	for (let i = 0; i < Object.keys(contracts[0]["cabinets"]).length; i++) {
		updateTable += `
		<tr class="text-center">
            <td style="display: none" class="border border-slate-300"   >${i + 1}</td>
            <td style="display: none" class="border border-slate-300"   >${cabinets[i].cabinetName}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingTaBHeight()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingTaBWidth()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingTaBQn()}</td>
			<th class="border border-slate-300"                         >K</th>
            <th class="border border-slate-300"                         ></th>
			<td class="border border-slate-300"                         >${cabinets[i].cabinetName}_Side_${contracts[0].contractNo}</td>
        </tr>
		`;
	}
	document.getElementById("table-cladding-tb").innerHTML = updateTable;
}
function spreadCladdingB() {
	let updateTable = "";
	let cabinets = contracts[0].cabinets;
	for (let i = 0; i < Object.keys(contracts[0]["cabinets"]).length; i++) {
		updateTable += `
		<tr class="text-center">
            <td style="display: none" class="border border-slate-300"   >${i + 1}</td>
            <td style="display: none" class="border border-slate-300"   >${cabinets[i].cabinetName}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingBackHeight()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingBackWidth()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingBackQn}</td>
			<th class="border border-slate-300"                         >K</th>
            <th class="border border-slate-300"                         ></th>
			<td class="border border-slate-300"                         >${cabinets[i].cabinetName}_Side_${contracts[0].contractNo}</td>
        </tr>
		`;
	}
	document.getElementById("table-cladding-b").innerHTML = updateTable;
}
function spreadCladdingSh() {
	let updateTable = "";
	let cabinets = contracts[0].cabinets;
	for (let i = 0; i < Object.keys(contracts[0]["cabinets"]).length; i++) {
		updateTable += `
		<tr class="text-center">
            <td style="display: none" class="border border-slate-300"   >${i + 1}</td>
            <td style="display: none" class="border border-slate-300"   >${cabinets[i].cabinetName}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingShelfHeight()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingShelfWidth()}</td>
			<td class="border border-slate-300"                         >${cabinets[i].claddingShelfQn}</td>
			<th class="border border-slate-300"                         >R</th>
            <th class="border border-slate-300"                         ></th>
			<td class="border border-slate-300"                         >${cabinets[i].cabinetName}_Side_${contracts[0].contractNo}</td>
        </tr>
		`;
	}
	document.getElementById("table-cladding-sh").innerHTML = updateTable;
}
function autoHide(className,effect){
	let fileds = document.getElementsByClassName(className);
	for (let i = 0; i < fileds.length; i++) {
		fileds[i].style.display = effect;
	}

}

// autoHide("outputs-mian", "none");
// autoHide("inputs-mian", "none");
// autoHide("update-mian", "none");

// autoHide("outputs-mian", "");
// autoHide("inputs-mian", "");
// autoHide("update-mian", "");

