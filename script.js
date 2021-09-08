let $data = document.querySelector(".count");



$data.addEventListener("click", function (event) {
	event.preventDefault();
	$data.innerText = 10;

	setTimeout(function () {
		$data.innerText = 9;

		setTimeout(function () {
			$data.innerText = 8;

			setTimeout(function () {
				$data.innerText = 7;

				setTimeout(function () {
					$data.innerText = 6;

					setTimeout(function () {
						$data.innerText = 5;

						setTimeout(function () {
							$data.innerText = 4;

							setTimeout(function () {
								$data.innerText = 3;

								setTimeout(function () {
									$data.innerText = 2;

									setTimeout(function () {
										$data.innerText = 1;

										setTimeout(function () {
											$data.classList.add("colorChange");

											$data.innerText =
												" Happy   Independence   Day  ";
										}, 2000);
									}, 2000);
								}, 2000);
							}, 2000);
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
});