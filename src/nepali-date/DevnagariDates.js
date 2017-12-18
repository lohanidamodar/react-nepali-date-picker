const DevnagariDates = {
	zeroFill(num, targetLength, forceSign) {
		var absNumber = '' + Math.abs(num), zerosToFill = targetLength - absNumber.length, sign = num >= 0;
		return (sign ? (forceSign ? '+' : '') : '-') +
		Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	},
	getNeYear (digit) {
		var nDigits = ['०','१','२','३','४','५','६','७','८','९'];
		var digits = digit.toString().split('');
		var output = [];
		if(digits.length > 4) {
			output = "This method doesn't support more than 4 strings.";
			digits.length = 4;
		}
		for(var i=0; i < digits.length; i++) {
			var ii = parseInt(digits[i], 10);
			for(var _i=0; _i < 10; _i++) {
				if (_i === ii) {
					output.push(nDigits[_i])
				}
			}
		}
		return output.join('');
	},
	getNeMonthName (digit) {
		var nMonths = ['बैशाख','जेठ','असार','साउन','भदौ','असोज','कार्तिक','मङि्सर','पुष','माघ','फागुन','चैत'];
		digit = parseInt(digit, 10) - 1;
		var output = '';
		if(digit > 11) {
			output = "Month digit can't be more than 12. Falliing back to 1.";
			digit = 0;
		}
		for (var i = 0; i < nMonths.length; i++) {
			if(i === digit){ 
				output = nMonths[i];
				break;
			}
		};
		return output;
	},
	getNeWeekName (digit) {
		var nWeeks = ['आइतबार','सोमबार','मङ्गलबार','बुधबार','बिहिबार','शुक्रबार','शनिबार'];
		digit = parseInt(digit, 10) - 1;
		var output = '';
		if(digit > 6) {
			output = "Week digit can't be more than 7. Falliing back to 1.";
			digit = 0;
		}
		for (var i = 0; i < nWeeks.length; i++) {
			if(i === digit) {
				output = nWeeks[i];
				break;
			}
		};
		return output;
	}
}

export default DevnagariDates;