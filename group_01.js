
//global variables/arrays
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];


// Function for switch -Jazzy
var getRate = function ( rating ){

	// Switch through employees to get correct bonus rate
	switch ( rating ) {
		// if rating equals 2, no bonus
		case 2: 
			return 0;
			break; 
		// if rating equals 3, 4% bonus
		case 3:
			return 0.04;
			break;
		// if rating equals 4, 6% bonus
		case 4:
			return 0.06;
			break;
		// if rating equals 5, 10% bonus
		case 5:
			return 0.10;
			break;
		default: 
			return false;
	}
}

// Function (master)- Johanna
//function to apply the bonus rate found in the switch above named getRate
var calculateBonus = function ( emp ){
		// Get the bonus rate based on the employee rating
		var bonusRate = getRate( emp[3] );
		// Bonus rate checks
		if(bonusRate){
			// If the rating is >= 4, add 0.05 to bonus rate.
			if ( emp[1].length >= 4){
				bonusRate += 0.05;
			}
			// if salary is greater than 650000
			if (emp[2] > 65000){
				bonusRate -= 0.01;
			}
			// If rate is > 13%, max is 13%, set it to 13%
			if ( bonusRate > 0.13){
				bonusRate = 0.13;
			}	
		}
		// Send that rate packing
		return bonusRate;
}


// Function to redo employee arrays - Cody & Justin
// for each of the employees array
for ( var i = 0; i < employees.length; i++ ) {
	var newEmployeeArr = [];
	var oldEmployeeArr = employees[i];
	// get the bonus % from calculateBonus
	var bonusRate = calculateBonus( oldEmployeeArr );
	// multiply original salary by bonus rate, then add to bonus to get total of salary + bonus
	var newSalary = parseInt( oldEmployeeArr[2] ) + ( oldEmployeeArr[2] * bonusRate );

	// create new array in order: Employee Name, calculated bonus rate, new salary, rounded new salary
	newEmployeeArr[0] = oldEmployeeArr[0];
	newEmployeeArr[1] = bonusRate;
	newEmployeeArr[2] = newSalary;
	newEmployeeArr[3] = Math.round( newSalary );

	console.log( newEmployeeArr );

}