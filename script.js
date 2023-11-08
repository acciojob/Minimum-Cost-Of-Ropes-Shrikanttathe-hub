function calculateMinCost() {
  //your code here
	const input = document.getElementById("ropes-lengths").value;
    const ropeLengths = input.split(",").map(Number);
	if(ropeLengths.length < 2){
		document.getByElementId("result").innerTest = "Please enter atleast two rope lengths.";
		return;
	}

	function minCostOfRopes(ropes){
		let totalcost = 0;
		while(ropes.length > 1){
			ropes.sort((a, b) => a - b);
			cost.combinedLength = ropes[0] + ropes[1];
			totalcost += combinedLength;
			ropes = [cobinedLength, ...ropes.slice(2)];
		}
	  return totalcost;
	}
  cost minCost = minCostOfRopes(ropeLengths);
	document.getElementById(
		"result"
	).innerText = 'Minimum cost of connecting ropes : ${minCost'}
  
}  
