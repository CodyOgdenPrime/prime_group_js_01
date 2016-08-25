var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];


// Function to redo employee arrays 


// Function for switch -Jazzy
var getRate = function ( rating ){
	switch ( rating ) {
		case 2: 
			return 0;
			break; 
		case 3:
			return 0.04;
			break;
		case 4:
			return 0.06;
			break;
		case 5:
			return 0.10;
			break;
		default: 
			return false;
	}
}

// Function (master)- Johanna

var calculateBonus = function (emp){
		var bonusRate = getRate();
		if(bonusRate){
			if (emp[1] >=4){
				bonusRate += 0.05;
			}
			if (emp[2] > 65000){
				bonusRate -= 0.01;
			}

			if (emp[3] > 0.13){
				bonusRate = 0.13;
			}	
		}
		return bonusRate;
}	


// theLoop - Justin O'Connor

