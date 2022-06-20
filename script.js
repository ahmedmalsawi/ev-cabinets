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
let cabinets ;
if(localStorage.contracts != null){
	contracts=JSON.parse(localStorage.contracts);
	cabinets = JSON.parse(localStorage.cabinets);
}else{
	contracts = [];
	cabinets = [];
}

submit.onclick = function () {
	//adding contracts
	let newContract = {
		contractNo: contractNo.value,
		wallQn: wallQn.value,
		tallQn: tallQn.value,
		baseQn: baseQn.value,
	};
	
	console.log(newContract);
	contracts.push(newContract);
	
	//adding cabinets
	//adding wall cabinets
	for (let i = 0; i < newContract.wallQn; i++) {
		let cabinetName = newContract.contractNo + "(W-" + (i + 1) + ")";
		cabinets.push({
			contractNo: newContract.contractNo,
			cabinetName: cabinetName,
			cabinetHeight:76,
			cabinetDepth:35,
			cabinetWidth:0,
		});
	}
	//adding Tall cabinets
	for (let i = 0; i < newContract.tallQn; i++) {
		let cabinetName = newContract.contractNo + "(T-" + (i + 1) + ")";
		cabinets.push({
			contractNo: newContract.contractNo,
			cabinetName: cabinetName,
			cabinetHeight:213,
			cabinetDepth:58,
			cabinetWidth:0,
		});
	}
	//adding Base cabinets
	for (let i = 0; i < newContract.baseQn; i++) {
		let cabinetName = newContract.contractNo +"(B-" + (i + 1)+ ")";
		cabinets.push({
			contractNo: newContract.contractNo,
			cabinetName: cabinetName,
			cabinetHeight:76,
			cabinetDepth:58,
			cabinetWidth:0,
		});
	}
	
	// store data to local strage
	localStorage.setItem('contracts', JSON.stringify(contracts));
	localStorage.setItem("cabinets", JSON.stringify(cabinets));
	clearData();
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
	for(let i=0;i<cabinets.length;i++){
		updateTable += `
		<tr class="text-center">
            <td class="border border-slate-300">${i + 1}</td>
            <td class="border border-slate-300">
                <input type="text" disabled 
					class="text-cyan-800  text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full "
                    id="${cabinets[i].cabinetName}-Name" value=${
			cabinets[i].cabinetName
		}>
			</td>
			<td class="border border-slate-300">
				<input type="text" required class="text-cyan-800 text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full hover:bg-slate-50 focus:bg-slate-50"
					id="${cabinets[i].cabinetName}-Height" value=${cabinets[i].cabinetHeight}>
			</td>
			<td class="border border-slate-300">
				<input type="text" required	class="text-cyan-800 text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full hover:bg-slate-50 focus:bg-slate-50"
					id="${cabinets[i].cabinetName}-Depth" value=${cabinets[i].cabinetDepth} >
			</td>
			<td class="border border-slate-300">
				<input type="text" class="text-cyan-800 text-center flex-grow p-2 bg-transparent mr-4 max-w-92 w-full hover:bg-slate-50 focus:bg-slate-50"
					id="${cabinets[i].cabinetName}" value="" required>
            </td>
        </tr>
		`;
	}
	document.getElementById("updateTable").innerHTML = updateTable;
}

//set auto values to elemnts
// get update values
//create cladding
