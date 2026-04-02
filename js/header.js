document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("site-header").innerHTML = `

<header class="main-header fixed-top bg-white shadow-sm">
  <nav class="navbar navbar-expand-lg">
    <div class="container">

      <!-- Logo -->
      <a class="navbar-brand" href="index.html">
        <img src="img/logo.png" height="45" alt="A1 Pest Control Service ">
      <span class="taglineHead" style="color: #272b97;">
            Radhakrishna Birla School
      </span>
      </a>

      <!-- CUSTOM TOGGLE -->
      <button class="custom-toggler d-lg-none" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#mainNavbar"
              aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse justify-content-center" id="mainNavbar">
        <ul class="navbar-nav align-items-lg-center gap-lg-4">

          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <i class="fa-solid fa-house"></i> Home
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#ss-about-section">
              <i class="fa-solid fa-circle-info"></i> About
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="index.html#gallery">
              <i class="fa-solid fa-images"></i> Gallery
            </a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="index.html#contact">
              <i class="fa-solid fa-phone"></i> Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#registration">
              <i class="fa-solid fa-user-plus"></i> Registration
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#career">
              <i class="fa-solid fa-briefcase"></i> Career
            </a>
          </li>
        </ul>
      </div>



    </div>
  </nav>
</header>

  `;
});
document.addEventListener("click", function (e) {
  const toggler = document.querySelector(".custom-toggler");
  if (!toggler) return;

  if (toggler.contains(e.target)) {
    toggler.classList.toggle("active");
  }
});
