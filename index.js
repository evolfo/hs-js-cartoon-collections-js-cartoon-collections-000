function dwarfRollCall(dwarves) {
	var dwarfList = [];
	for (var i = 0; i < dwarves.length; i++) {
		dwarfList.push(`${i+1}. ${dwarves[i]}`);
	}
	var joinedDwarves = [dwarfList.join(' ')];
	return `${joinedDwarves.toString()} `;
}

function summonCaptainPlanet(planeteerCalls){
	var elements = [];
	for (var i = 0; i < planeteerCalls.length; i++) {
		elements.push(`${planeteerCalls[i]}!`);
	}
	var toUpperCase = elements.map(function(x) {return x.toUpperCase(); });
	return toUpperCase;
}

function longPlaneteerCalls(words) {
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > 4) {
			return true;
		}
	} return false;
}

function findTheCheese (foods) {
	var cheeses = ['gouda', 'cheddar', 'camembert'];
	for (var i = 0; i < foods.length; i++) {
		var foodIncludes = foods.includes(cheeses[i])
			if (foodIncludes === true) {
			return cheeses[i];
			}
		} return 'no cheese!';
}
