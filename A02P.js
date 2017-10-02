	function sal() {
			var hour = parseFloat(document.getElementById('hour').value);
		var wage = parseFloat(document.getElementById('wage').value);
			if (hour < 0) {
				alert("Hour cannot be negative!!!");
			}
			else if (wage < 0) {
				alert("Wage cannot be negative!!!");
			}
			else if (wage > 50) {
				alert("Wage cannot be greater than 50 dollar!!!");
			}
			else if (hour > 100) {
				alert("Hour cannot be greater than 100 hours!!!");
			}
			else if(isNaN(hour)){
				alert("hour must be number");
			}
			else if (isNaN(wage)){
				alert("wage must be number");

			}
			else {
				$("#result").html("Your weekly salary is " + salary(hour,wage));
			}
		}

function salary(hour,wage) {
			return hour * wage;

		}