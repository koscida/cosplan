$(document).ready(function () {
	$("header").html(`
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="./index.html">Cosplays</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./images.html">Images</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./closet.html">Closet</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./schedule.html">Schedule</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		`);
});
