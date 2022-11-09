<script setup>


console.log(sessionStorage.getItem("isAuth"))

if(sessionStorage.getItem("isAuth") == ""){
  sessionStorage.getItem("isAuth") == "false"
}

else if(sessionStorage.getItem("isAuth") == "true"){
  console.log('is authenticated!')

}else if(sessionStorage.getItem("isAuth") == "false"){
  console.log('fuck off!')
  window.location.href = "http://localhost:5173/"
}


</script>

<template>
  
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- jumbotron -->
        <div id="jumbotron-home" class="custom-jumbotron p-5">
          <!-- navbar -->
          <nav class="navbar navbar-expand-lg navbar rounded">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Kaki</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Organisation</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <router-link to="/signin" custom v-slot="{ navigate }">
                  <button class="btn btn-outline-primary" @click="navigate" role="link">
                    Sign In
                  </button>
                </router-link>
                  <!-- <button type="button" class="btn btn-outline-primary">
                    Sign In
                  </button> -->
                </div>
              </div>
            </div>
          </nav>
          <!-- text-landing -->
          <div class="text-landing col-6 p-5 m-5">
            <p class="fs-1">Ignite Your Volunteering Passion With Kaki Today</p>
            <button type="button" class="btn btn-outline-light">
              Join Kaki
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- about us -->

    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col mt-5">
            <h1>About Us</h1>
            <br />
            <p class="fs-2">We Make Volunteering Easy!</p>
          </div>
          <div class="col ms-2">
            <img src="../../assets/landingImg/landing/blue person.png" alt="" />
          </div>
        </div>
      </div>
      </div>

      <!-- Organisation -->

      <div class="container">
        <h2 class="pb-3">Organisation</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5"
            >
              <img src="../../assets/landingImg/landing/org1.png" class="card-img-top" />
            </div>
          </div>

          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org2.png" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org3.png" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org4.png" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org5.png" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org6.png" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org7.png" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img src="../../assets/landingImg/landing/org8.png" class="card-img" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->

      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <img src="../../assets/landingImg/landing/Saly-22.png" alt="" />
          </div>
          <div class="col">
            <p class="fs-1 fw-bold">
              What our users <br />
              say about us:
            </p>

            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-text">
                          Kaki helped me a lot in finding the most suitable
                          activity according to my interest. I remebered my
                          first volunteer project at an animal shelter centre
                          where I meet other individuals who share the same
                          passion in helping animals. Now this is my favourite
                          activity -
                        </p>
                        <h3 class="card-title">April Tan</h3>
                        <h6 class="text-muted">Active Volunteer</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-text">
                          Kaki helped me a lot in finding the most suitable
                          activity according to my interest. I remebered my
                          first volunteer project at an animal shelter centre
                          where I meet other individuals who share the same
                          passion in helping animals. Now this is my favourite
                          activity -
                        </p>
                        <h3 class="card-title">April Tan</h3>
                        <h6 class="text-muted">Active Volunteer</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-text">
                          Kaki helped me a lot in finding the most suitable
                          activity according to my interest. I remebered my
                          first volunteer project at an animal shelter centre
                          where I meet other individuals who share the same
                          passion in helping animals. Now this is my favourite
                          activity -
                        </p>
                        <h3 class="card-title">April Tan</h3>
                        <h6 class="text-muted">Active Volunteer</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- contact us -->

      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center text-center">
            <div class="card rounded-5 mt-5">
              <img
                src="../../assets/landingImg/landing/footer pill.png"
                class="card-img rounded-5"
                alt="..."
              />

              <div class="card-img-overlay mt-5">
                <h2 class="card-title fw-bold">Contact Us</h2>
                <p class="card-text">
                  Have queries? Feel free to drop us a message!
                </p>

                <!--send meesage input-->
                <div class="input-group mb-3 w-50 mx-auto mt-5">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    


<!-- Footer -->
<footer class="p-5 mt-5 bg-light text-dark">
  <!-- Grid container -->
  <div class="container p-4">
  
    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Kaki</h5>
          <p>Volunteer with us</p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Resources</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 4</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Users</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 4</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Get App</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 4</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->
</footer>
<!-- Footer -->
      
    <!-- </div>
    <footer>
      <div class="">
        <div class="col-6">
          <h4>Kaki</h4>
          <p class="fs-3">We Make Volunteer Fun</p>
        </div>
        <div class="col">test</div>
        <div class="col">test</div>
        <div class="col">test</div>
      </div>
    </footer> -->



    <!-- </div> -->

    <!-- carousel -->
    <!-- <div class="row justify-content-center mt-3">
      <div class="col-md-6">
        <div
          id="carouselExampleDark"
          class="carousel carousel-light slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../../assets/landingImg/carousel1.JPG" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../../assets/landingImg/carousel2.JPG" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../assets/landingImg/carousel3.JPG" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      intro text -->
    <!-- <div class="col-md-5">
        <div class="card w-100 h-100">
          <div class="card-body">
            <h3 class="card-title">
              Hi, I'm Xavier. A photographer from Singapore.
            </h3>
            <p class="card-text">
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec
              interdum, lectus in convallis pulvinar, enim elit porta sapien,
              vel finibus erat felis sed neque. Etiam aliquet neque sagittis
              erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis
              dolor at, blandit justo. Integer ac interdum purus. In placerat
              lorem non quam pulvinar molestie ac eget lacus. Proin mollis
              lobortis porttitor. Nam in fringilla felis.Maecenas justo quam,
              pretium id sapien in, varius vehicula sem. Pellentesque consequat
              mauris justo. Aenean rhoncus tempor volutpat. Donec nec ligula
              rhoncus, vulputate purus quis, pulvinar massa. Nulla placerat
              ullamcorper molestie. Maecenas feugiat mollis egestas. Proin
              vehicula lorem non turpis varius venenatis. Maecenas dapibus
              hendrerit diam, ac auctor est dignissim ac. Suspendisse tincidunt
              pulvinar ex. Etiam aliquet venenatis ultricies. Duis dignissim
              blandit eros.Nunc at felis pellentesque leo efficitur varius. Nam
              dui eros, maximus vitae tellus nec, finibus euismod ante.
              Vestibulum ac ex vel nisl faucibus dignissim et eu justo.
            </p>
            <a href="./gallery.html" class="btn btn-dark">See My Pictures</a>
          </div>
        </div>
      </div>
    </div> -->

  </div>

</template>

<style scoped>
body {
  background-color: #F0EEFE;
}


.custom-jumbotron {
  background-color: lightslategray;
  color: whitesmoke;
  background-size: cover;
  height: 800px;
  position: relative;
}

/* 
p{
  color: #D2DEFE;
} */

.text-landing{
  background-color: #4A60E8;
  opacity: 0.95;
  border: 1px solid #4A60E8;
  border-radius: 25px;
  bottom: 0;
  right: 0;
  position: absolute;
}

#jumbotron-home{
  background-image: url(../../assets/landingImg/volunteer.jpg);
}



.list-group, .list-group-item{
border-style: none;
}

.btn-apply{
background-color: #4A60E8
}

.bg-special{
  background-image: linear-gradient(#EAEDFF, #E2DEFE);
  /* background-color: #E2DEFE; */
}


.sidebar-item {
	top: 0;
	left: 0;
  padding: 0;
	width: 100%;
	height: 80%;

}

.carousel-indicators{
  bottom: -60px
}


.carousel-control-prev{
  bottom: -120px;
  left: 400px;
}

.carousel-control-next{
  bottom: -120px
}


</style>