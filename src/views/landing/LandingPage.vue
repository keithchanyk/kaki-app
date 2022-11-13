<script setup>
console.log(sessionStorage.getItem('isAuth'));

if (sessionStorage.getItem('isAuth') == '') {
  sessionStorage.getItem('isAuth') == 'false';
} else if (sessionStorage.getItem('isAuth') == 'true') {
  console.log('is authenticated!');
} else if (sessionStorage.getItem('isAuth') == 'false') {
  window.location.href = 'http://localhost:5173/';
}
</script>

<template>
  <body>
    <div class="row" style="position: relative">
      <div class="col">
        <!-- jumbotron -->
        <div id="jumbotron-home" class="custom-jumbotron p-2">
          <!-- navbar -->
          <nav
            class="navbar navbar-expand-lg navbar-dark rounded p-3 m-2"
            style="background-color: #2a2e45"
          >
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
                    <a class="nav-link" href="#">Organisations</a>
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
                    <button
                      class="btn btn-primary"
                      @click="navigate"
                      role="link"
                    >
                      Sign In
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </nav>

          <!-- text-landing -->
        </div>
        <div class="container">
          <div class="text-landing col-12 col-sm-4 p-5 mb-5">
            <p class="fs-1 text-light">
              Ignite Your Volunteering Passion With Kaki Today
            </p>
            <router-link to="/signup">
              <button type="button" class="btn btn-primary border-5">
                Join Kaki
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- about us -->

      <div class="about row rounded px-5 py-2 mb-4 mt-3">
        <div class="col">
          <div class="row">
            <div class="aboutText col mt-5">
              <h1>About Us</h1>
              <br />
              <p class="fs-4">
                We are 5 students from SMU Information Systems with one dream:
                Make the volunteering experience tailored for every individual.
                We Make Volunteering Easy!
              </p>
            </div>
            <div class="aboutImg col ms-2">
              <img
                class="people"
                src="../../assets/landingImg/undraw_creative_thinking_re_9k71.svg"
                style="top: 2rem"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Organisation -->
      <div class="orgShow container">
        <h2 class="pb-3">Partner Organisations</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5"
            >
              <img
                src="../../assets/landingImg/landing/org1.png"
                class="card-img-top"
              />
            </div>
          </div>

          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org2.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org3.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org4.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org5.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org6.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org7.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 d-flex justify-content-center align-items-center-center rounded-5 p-4"
            >
              <img
                src="../../assets/landingImg/landing/org8.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->

      <div class="container mt-5 p-5 rounded bg-light">
        <div class="row">
          <div class="col">
            <img
              id="feedback"
              src="../../assets/landingImg/undraw_feedback_re_urmj.svg"
              alt=""
            />
          </div>
          <div class="col">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide mt-4"
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
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="col-lg-12">
                    <div class="carouCard card">
                      <div class="card-body">
                        <h2 class="card-title fw-bold">User Testimonies</h2>
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

                <div class="carousel-item" data-bs-interval="10000">
                  <div class="col-lg-12">
                    <div class="carouCard card">
                      <div class="card-body">
                        <h2 class="card-title fw-bold">User Testimonies</h2>
                        <p class="card-text">
                          Kaki helped me a lot in finding the most suitable
                          activity according to my interest. I remebered my
                          first volunteer project at an animal shelter centre
                          where I meet other individuals who share the same
                          passion in helping animals. Now this is my favourite
                          activity -
                        </p>
                        <h3 class="card-title">John Snow</h3>
                        <h6 class="text-muted">Active Volunteer</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <div class="col-lg-12">
                    <div class="carouCard card">
                      <div class="card-body">
                        <h2 class="card-title fw-bold">User Testimonies</h2>
                        <p class="card-text">
                          Kaki helped me a lot in finding the most suitable
                          activity according to my interest. I remebered my
                          first volunteer project at an animal shelter centre
                          where I meet other individuals who share the same
                          passion in helping animals. Now this is my favourite
                          activity -
                        </p>
                        <h3 class="card-title">Abignale See</h3>
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
          <div id="contactDiv">
            <div class="col-12 d-flex justify-content-center text-center">
              <div class="card rounded-5 mt-5">
                <img
                  src="../../assets/landingImg/landing/footer pill.png"
                  class="card-img rounded-5"
                  id="footerOverlayImg"
                  alt="..."
                />

                <div class="card-img-overlay">
                  <div id="contactTexts" class="text-center">
                    <h2 class="card-title fw-bold">Contact Us</h2>

                    <p id="contactQuestionDiv" class="card-text">
                      Have queries? Feel free to drop us a message!
                    </p>

                    <!--send meesage input-->
                    <form>
                      <div class="input-group w-75 mx-auto">
                        <input
                          type="text"
                          class="form-control border border-dark bg-light fw-bold"
                          placeholder="Talk To Us!"
                          aria-label="message"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn-primary"
                          type="button"
                          id="button-addon2"
                        >
                          Send!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
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
            <div class="col-12 text-center">
              <h5 class="text-uppercase">Kaki</h5>
              <p>Volunteer with us</p>
            </div>
            <!--Grid column-->

            <!--Grid column-->

            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->
  </body>
</template>

<style scoped>
#footerOverlayImg {
  max-height: 280px;
}

.about {
  margin: 1px;
}

.orgShow {
  padding: 0;
}

.carouCard {
  background-color: #96a2ec;
}

h1 {
  margin-left: 0;
}

body {
  background-color: rgb(255, 218, 154);
}

.about {
  background-color: white;
}

.custom-jumbotron {
  background-color: rgb(255, 218, 154);
  color: rgb(77, 77, 77);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 800px;
  position: relative;
}

.people {
  max-width: 500px;
}

.text-landing {
  background-color: #96a2ec;
  border: 1px solid #4a60e8;
  border-radius: 25px;
  bottom: 0;
  right: 30px !important;
  position: absolute;
}

#jumbotron-home {
  background-image: url(../../assets/landingImg/undraw_coffee_with_friends_3cbj.svg);
  background-size: 800px;
  background-position: 10% 62%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

@media (min-width: 290px) {
  .carousel-indicators {
    bottom: -3rem;
  }

  .carousel-control-prev {
    bottom: -16rem;
    left: 12rem;
  }

  .carousel-control-next {
    bottom: -16rem;
  }

  .aboutImg {
    display: none;
  }

  .aboutText {
    margin-bottom: 48px;
  }

  .orgShow {
    display: none;
  }

  #feedback {
    width: 300px;
  }

  #contactQuestionDiv {
    display: none;
  }

  .text-landing {
    right: 25px !important;
    width: 85%;
  }
}

@media (min-width: 768px) {
  .text-landing {
    right: 25px !important;
    width: 45%;
  }

  .carousel-indicators {
    bottom: -4rem;
  }

  .carousel-control-prev {
    bottom: -9rem;
    left: 20rem;
  }

  .carousel-control-next {
    bottom: -9rem;
  }

  .people {
    width: 350px;
  }

  #contactQuestionDiv {
    display: inline-block;
    right: 240px;
  }
}

@media (min-width: 992px) {
  .carousel-indicators {
    bottom: -4rem;
  }

  .carousel-control-prev {
    bottom: -9rem;
    left: 18rem;
  }

  .carousel-control-next {
    bottom: -9rem;
  }

  #contactDiv {
    position: relative;
  }

  #contactQuestionDiv {
    position: absolute;
    top: 40%;
    left: 28%;
  }

  .orgShow {
    display: block;
  }

  .aboutImg {
    display: block;
  }

  .people {
    width: 400px;
  }
}

@media (min-width: 1200px) {
  .carousel-indicators {
    /* bottom: -60px; */
    bottom: -4rem;
  }

  .carousel-control-prev {
    bottom: -9rem;
    left: 24rem;
  }

  .carousel-control-next {
    bottom: -9rem;
  }

  #contactDiv {
    position: relative;
  }

  #contactQuestionDiv {
    position: absolute;
    top: 40%;
    left: 35%;
  }

  .input-group {
    width: 70% !important;
  }

  .people {
    width: 800px;
  }

  .text-landing {
    right: 0;
  }
}
</style>
