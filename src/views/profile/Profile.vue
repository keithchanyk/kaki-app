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
import * as Main from '../../main';

export default {
  name: 'App',
  components: {
    Nav,
  },
  data() {
    return {
      proj_name: '',
      org_name: '',
      proj_date: '',
      starttime: '',
      endtime: '',
      for_who: '',
      capacity: '',
      location: '',
      project_details: [],
      search: '',
    };
  },
  computed: {
    filteredList() {
      console.log(this.project_details);
      return this.project_details.filter((project) => {
        return (
          project.proj_name.toLowerCase().includes(this.search.toLowerCase()) ||
          project.org_name.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },

  methods: {
    get_details() {
      axios
        .get('http://localhost:8888/kakidb-2/project/read.php')
        .then((response) => {
          this.project_details = response.data.records;
          console.log(this.project_details);
        })
        .catch((error) => alert(error));
    },
    isDateOver() {
      console.log(new Date());
    },
  },
  created: function () {
    this.get_details();
    return true;
  },
};
</script>

<template>
  <Nav style="z-index: 3" />

  <!-- sidebar -->
  <div class="container">
    <div class="row sticky-top bg-white border-bottom mb-4" style="z-index: 2">
      <div class="col-12 text-start">
        <div class="card sidebar-item bg-special">
          <img
            class="sidebar-img m-4"
            src="../../assets/undraw_pic_profile_re_lxn6.svg"
          />
          <div class="card-body">
            <h5 class="card-title">Xavier</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Burning passion to help and volunteer
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="z-index: 0">
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
        <div
          class="tab-content"
          id="nav-tabContent"
          style="background-color: white"
        >
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <div class="container-fluid">
              <div class="row mx-auto container-fluid">
                <div
                  v-if="isDateOver"
                  v-for="project in filteredList"
                  :key="project.id"
                  class="mt-4 col d-flex justify-content-start"
                >
                  <a
                    class="nav-link"
                    :href="'/projectdetails?id=' + project.id"
                  >
                    <div class="card projCard glass">
                      <div
                        class="card-header projCard-header projCard-image card-image"
                      >
                        <img
                          id="card-img"
                          class="mb-2 rounded"
                          src="src/assets/pic1.jpg"
                        />
                      </div>
                      <div class="card-body projCard-body mb-1">
                        <h5 class="h3">{{ project.proj_name }}</h5>
                        <h6 class="mt-5 fw-normal opacity-50">
                          by {{ project.org_name }}
                        </h6>
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-calendar"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                          />
                        </svg>
                        <h6 class="fw-normal">&nbsp;{{ project.proj_date }}</h6>
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-alarm"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                          />
                          <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                          />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;{{ Main.tConvert(project.starttime) }} -
                          {{ Main.tConvert(project.endtime) }}
                        </h6>
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path
                            d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                          />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;{{ project.suitability }}
                        </h6>
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                          />
                        </svg>
                        <h6 class="fw-normal">
                          Located in: {{ project.region }}
                        </h6>
                        <br />
                        <!-- <h6 style="font-size: 12px" class="fw-light">
                          &nbsp;{{ project.total_capacity }}
                        </h6> -->
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- PROJECT DETAILS -->
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
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f0eefe;
}

#jumbotron-home {
  background-image: url(../../assets/landingImg/volunteer.jpg);
}

.list-group,
.list-group-item {
  border-style: none;
}

.bg-special {
  background-image: linear-gradient(#eaedff, #e2defe);
  /* background-color: #E2DEFE; */
}

.sidebar-item {
  height: 58%;
}

.sidebar-img {
  width: 10%;
}

#bg_img {
  position: fixed;
  min-height: 100px;
  min-width: 1024px;
  width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
}

.glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.2);
}

.projCard {
  --padding: 0.8rem;
  border-radius: 0.25rem;
  overflow: hidden;
  min-width: 300px;
  max-width: 400px;
}

.projCard-header {
  font-size: 1.5rem;
  padding: var(--padding);
  padding-bottom: 0;
  margin-bottom: 0.5rem;
}

.projCard-header.projCard-image {
  padding: 4;
  overflow: hidden;
}

.projCard-header.projCard-image > img {
  display: block;
  width: 100%;
  max-height: 200px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
  transition: 200ms transform ease-in-out;
}

.projCard:hover > .projCard-header.projCard-image > img {
  transform: scale(1.025);
}

.projCard-body {
  font-size: 0.9rem;
  padding: 0 1rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    linear-gradient(114.55deg, #dfe3fc 0%, #e2dffe 98.46%);
}

h6,
svg {
  display: inline;
}

h3 {
  position: absolute;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}
</style>
