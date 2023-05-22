function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fillQuery() {
	let url = new URL(document.location);
	let question = url.searchParams.get('question');

	if (!question) {
		return;
	}

	// await sleep(200); // Time to load page
	document.addEventListener('DOMContentLoaded', function () {
		var input = document.getElementsByTagName('textarea')[0];
		input.value = question;

		submit = document.getElementsByClassName(
			'mat-mdc-tooltip-trigger send-button mdc-icon-button mat-mdc-icon-button mat-primary mat-mdc-button-base gmat-mdc-button ng-star-inserted'
		)[0];
		input.dispatchEvent(new Event('input', { bubbles: true }));
		submit.click();
	});
}

fillQuery();
