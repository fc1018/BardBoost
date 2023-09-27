function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function fillQuery() {
	//Fetch query from url
	let url = new URL(document.location);
	let question = url.searchParams.get('question');

	if (!question) {
		return;
	}
	//Document load status check
	document.addEventListener("readystatechange", (event) => {
		if (document.readyState === "interactive" || document.readyState === "complete") {
			//Find text field and insert query
			var input = document.querySelector(
				"body > chat-app > side-navigation > mat-sidenav-container > mat-sidenav-content > main > chat-window > div.chat-container.ng-tns-c1925132332-2.ng-star-inserted > div.bottom-container.ng-tns-c1925132332-2.ng-star-inserted > div.input-area-container.ng-tns-c1925132332-2 > input-area > div > div.text-input-field.ng-star-inserted > div > div > rich-textarea > div.ql-editor.textarea > p"
			);
			console.log(input);
			input.textContent = question;
			//Find button and click
			document.querySelector(
				"body > chat-app > side-navigation > mat-sidenav-container > mat-sidenav-content > main > chat-window > div.chat-container.ng-tns-c1925132332-2.ng-star-inserted > div.bottom-container.ng-tns-c1925132332-2.ng-star-inserted > div.input-area-container.ng-tns-c1925132332-2 > input-area > div > div.send-button-container.outer.ng-star-inserted > button > span.mat-mdc-button-touch-target"
			).click();
		}
	});
}
fillQuery();
// For some reason running the function a second time achieves the intended target
fillQuery();