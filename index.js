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
	if (b > 0) return a / b;
}

function main() {
	const operations = { add, sub, mult, div };
	const opArg = process.argv[2];
	const operand1 = Number(process.argv[3] ?? 0);
	const operand2 = Number(process.argv[4] ?? 0);

	if (operations[opArg]) {
		const result = operations[opArg](operand1, operand2);
		console.log(result);
	}
}

main();
