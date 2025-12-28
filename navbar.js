document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Reci-Spize</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Recipes
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="indian.html">Indian</a></li>
                            <li><a class="dropdown-item" href="chinese.html">Chinese</a></li>
                            <li><a class="dropdown-item" href="sweets.html">Sweets</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;
});
