// immediate invoked function expression

(function() {
	const pictures = [
		'contBcg-0',
		'contBcg-1',
		'contBcg-2',
		'contBcg-3',
		'contBcg-4',
	];

	//setupt the counter
	let counter = 0;

	//select buttons
	const btn = document.querySelectorAll('.btn');
	//	console.log(btn);

	btn.forEach(function(btn) {
		btn.addEventListener('click', function(event) {
			//get target
			let value = event.target;
			//	console.log(value);

			if (value.classList.contains('btn-left')) {
				counter--;
				//conter less than 0
				if (counter < 0) {
					counter = pictures.length - 1; //array starts from 0 and start from last val
				}
				//using templatestring to assign a variable
				document.querySelector(
					'.img-container',
				).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
				//console.log(counter);
			}

			if (value.classList.contains('btn-right')) {
				counter++;
				//conter exceed more than array
				if (counter > pictures.length - 1) {
					counter = 0; //make the conter 0
				}
				//using templatestring to assign a variable
				document.querySelector(
					'.img-container',
				).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
				//console.log(counter);
			}
		});
	});
})();
