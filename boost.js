async function fillQuery() {
	//Fetch query from url
	let url = new URL(document.location);
	let question = url.searchParams.get('question');
  
	if(!question) {
	  return;
	}
	//Document load status check
	document.addEventListener("readystatechange", (event) => {
	  if (document.readyState === "interactive" || document.readyState === "complete") {
		//Find text field and insert query
		var input = document.getElementsByTagName("textarea")[0];
		input.value = question;
		//Find button
		submit = document.getElementsByClassName(
		"mat-mdc-tooltip-trigger send-button mdc-icon-button mat-mdc-icon-button mat-primary mat-mdc-button-base gmat-mdc-button ng-star-inserted")[0];
		//Trigger button
		input.dispatchEvent(new Event('input', {bubbles:true}));
		submit.click();
	  }
	});
  }

  fillQuery();
