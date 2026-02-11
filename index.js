function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

function main() {
	const operations = { add, sub, mult, div };
	const opArg = process.argv[2];
	const operand1 = Number(process.argv[3]);
	const operand2 = Number(process.argv[4]);

	if (operand1 && operand2) {
		let result = 0;

		for (const operation in operations) {
			if (opArg === operation) {
				result = operations[opArg](operand1, operand2);
			}
		}

		console.log(result);
	}
}

main();
