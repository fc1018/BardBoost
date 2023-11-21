async function queryEntry(question) {
	// console.log("running queryEntry", question);
	//Find text field and insert query
	let input = document.querySelector("rich-textarea > * > p");
	// console.log("Printing target element:");
	// console.log(input);
	input.textContent = question;
	//Find button and click
	setTimeout(() => {
		let submit = document.querySelector("input-area > div > div:nth-child(3) > button");
		// console.log("Printing button element:");
		// console.log(submit);
		// console.log("Clicking button...");
		submit.click();
		// console.log("Button clicked.");
	}, 50);
}

async function fillQuery() {
	//Fetch query from url
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	let question = params.question;
	// console.log("Printing Query:");
	// console.log(question);
	if (!question) {
		return;
	}
	//Document load status check
	window.onload = (event) => {
		setTimeout(() => queryEntry(question), 100)
	};
}
fillQuery();
