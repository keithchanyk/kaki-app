<script setup>
console.log(sessionStorage.getItem('isAuth'));

if (sessionStorage.getItem('isAuth') == 'true') {
  console.log('is authenticated!');
} else {
  console.log('fuck off!');
  window.location.href = 'http://localhost:5173/';
}
</script>

<script>
import Nav from '../../components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>

<template>
  <Nav />

  <!-- sidebar -->
  <div class="container">
    <div class="row sticky-top bg-white border-bottom mb-4">
      <div class="col-12 text-center">
        <div class="card sidebar-item bg-special">
          <img
            class="sidebar-img m-auto"
            src="../../assets/undraw_pic_profile_re_lxn6.svg"
          />
          <div class="card-body">
            <h5 class="card-title">Kaki</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Burning passion to help and volunteer
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h1>Your Profile</h1>
      <!-- nav -->
      <div class="col p-0">
        <!-- <nav class="bg-special nav p-5">
          <a class="nav-link active" aria-current="page" href="#">Explore</a>
          <a class="nav-link" href="#">Organisation</a>
        </nav> -->

        <!-- tabs -->
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Upcoming Acitvities
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Pending Activities
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Completed Activities
            </button>
            <!-- <button
          class="nav-link"
          id="nav-disabled-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-disabled"
          type="button"
          role="tab"
          aria-controls="nav-disabled"
          aria-selected="false"
          disabled
        >
          Disabled
        </button> -->
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-disabled"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>

        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="bg-special card h-100">
                <div class="card-body">
                  <h3 class="card-title">House Cleaning for Elderly</h3>
                  <h6 class="card-subtitle mb-2 text-muted">
                    by SG Cares Volunteer Centers
                  </h6>
                  <ul>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Timesheet.png"
                      />
                      &nbsp; Mon, 3 Oct 2022
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Clock.png"
                      />
                      &nbsp; 10.00 AM- 12.00PM
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Group.png"
                      />
                      &nbsp; Suitable for: All, First-timers
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Location.png"
                      />
                      &nbsp; Geylang
                      <p class="text-muted">
                        3 EUNOS CRESCENT Singapore 400003
                      </p>
                    </li>
                  </ul>
                  <div class="d-flex justify-content-end">
                    <a href="#">Details ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="bg-special card h-100">
                <div class="card-body">
                  <h3 class="card-title">House Cleaning for Elderly</h3>
                  <h6 class="card-subtitle mb-2 text-muted">
                    by SG Cares Volunteer Centers
                  </h6>
                  <ul>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Timesheet.png"
                      />
                      &nbsp; Mon, 3 Oct 2022
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Clock.png"
                      />
                      &nbsp; 10.00 AM- 12.00PM
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Group.png"
                      />
                      &nbsp; Suitable for: All, First-timers
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Location.png"
                      />
                      &nbsp; Geylang
                      <p class="text-muted">
                        3 EUNOS CRESCENT Singapore 400003
                      </p>
                    </li>
                  </ul>
                  <div class="d-flex justify-content-end">
                    <a href="#">Details ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="bg-special card h-100">
                <div class="card-body">
                  <h3 class="card-title">House Cleaning for Elderly</h3>
                  <h6 class="card-subtitle mb-2 text-muted">
                    by SG Cares Volunteer Centers
                  </h6>
                  <ul>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Timesheet.png"
                      />
                      &nbsp; Mon, 3 Oct 2022
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Clock.png"
                      />
                      &nbsp; 10.00 AM- 12.00PM
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Group.png"
                      />
                      &nbsp; Suitable for: All, First-timers
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Location.png"
                      />
                      &nbsp; Geylang
                      <p class="text-muted">
                        3 EUNOS CRESCENT Singapore 400003
                      </p>
                    </li>
                  </ul>
                  <div class="d-flex justify-content-end">
                    <a href="#">Details ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="bg-special card h-100">
                <div class="card-body">
                  <h3 class="card-title">House Cleaning for Elderly</h3>
                  <h6 class="card-subtitle mb-2 text-muted">
                    by SG Cares Volunteer Centers
                  </h6>
                  <ul>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Timesheet.png"
                      />
                      &nbsp; Mon, 3 Oct 2022
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Clock.png"
                      />
                      &nbsp; 10.00 AM- 12.00PM
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Group.png"
                      />
                      &nbsp; Suitable for: All, First-timers
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Location.png"
                      />
                      &nbsp; Geylang
                      <p class="text-muted">
                        3 EUNOS CRESCENT Singapore 400003
                      </p>
                    </li>
                  </ul>
                  <div class="d-flex justify-content-end">
                    <a href="#">Details ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f0eefe;
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

.text-landing {
  background-color: #4a60e8;
  opacity: 0.95;
  border: 1px solid #4a60e8;
  border-radius: 25px;
  bottom: 0;
  right: 0;
  position: absolute;
}

#jumbotron-home {
  background-image: url(../../assets/landingImg/volunteer.jpg);
}

.list-group,
.list-group-item {
  border-style: none;
}

.btn-apply {
  background-color: #4a60e8;
}

.bg-special {
  background-image: linear-gradient(#eaedff, #e2defe);
  /* background-color: #E2DEFE; */
}

.sidebar-item {
  height: 40%;
}

.sidebar-img {
  width: 10%;
}

.carousel-indicators {
  bottom: -60px;
}

.carousel-control-prev {
  bottom: -120px;
  left: 400px;
}

.carousel-control-next {
  bottom: -120px;
}
</style>
