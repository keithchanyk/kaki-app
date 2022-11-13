<script setup>
console.log(sessionStorage.getItem('isAuth'));

if (sessionStorage.getItem('isAuth') == 'true') {
  console.log('is authenticated!');
} else {
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
      categories: ['Elderly', 'Children', 'Environment', 'Community'],
      project_img: [
        {
          Elderly: 'src/assets/projectimg/pic2.jpg',
          Children: 'src/assets/projectimg/pic4.jpg',
          Environment: 'src/assets/projectimg/pic6.jpg',
          Community: 'src/assets/projectimg/pic3.jpg',
        },
      ],
      search: '',
      message: '',
      id: '',
    };
  },
  computed: {
    filteredList() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '/' + mm + '/' + dd;
      var result = this.project_details.filter((project) => {
        return project.proj_date > today;
      });

      return result;
    },
    pastEvents() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = yyyy + '/' + mm + '/' + dd;
      var result = this.project_details.filter((project) => {
        return project.proj_date < today;
      });
      return result;
    },
  },

  methods: {
    get_details() {
      axios
        .get('http://localhost/kakidb/project/read.php')
        .then((response) => {
          this.project_details = response.data.records;
        })
        .catch((error) => console.log(error));
    },
    isDateOver() {
      console.log(new Date());
    },
    getId(id) {
      this.id = id;
    },

    checkCat(cardCat) {
      for (const category of this.categories) {
        if (category != cardCat) {
          // console.log(category + ' ' + cardCat + ' there is no match');
          continue;
        } else {
          // console.log(category + ' ' + cardCat + ' there is a match');
          return true;
        }
      }
    },

    submitForm() {
      const id = this.id - 1;
      const project = this.project_details[id];
      const vol_name = 'Xavier';

      const url =
        'http://localhost/kakidb/review/send.php?org_name=' +
        project.org_name +
        '&proj_name=' +
        project.proj_name +
        '&vol_name=' +
        vol_name +
        '&review_text=' +
        this.message;
      axios
        .get(url, {
          org_name: project.org_name,
          proj_name: project.proj_name,
          vol_name: vol_name,
          review_text: this.message,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  created: function () {
    this.get_details();
    return true;
  },
};
</script>

<template>
  <!-- modal content start -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="z-index: 3">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New Review</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Your Review:</label>
              <textarea v-model="message" class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" @click="submitForm" data-bs-dismiss="modal" class="btn btn-primary">
            Submit Review
          </button>
        </div>
      </div>
    </div>
    <!-- end here -->
  </div>
  <!-- modal content ends -->
  <Nav style="z-index: 2" />

  <!-- sidebar -->
  <div class="container">
    <div class="row sticky-top bg-white border-bottom mb-4" style="z-index: 1">
      <div class="col-12 text-start">
        <div class="card sidebar-item bg-special">
          <img class="sidebar-img m-4" src="../../assets/undraw_pic_profile_re_lxn6.svg" />
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
        <!-- tabs -->
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
              type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Upcoming Acitvities
            </button>
            <button class="nav-link" id="nav-complete-tab" data-bs-toggle="tab" data-bs-target="#nav-complete"
              type="button" role="tab" aria-controls="nav-complete" aria-selected="false">
              Completed Activities
            </button>

          </div>
        </nav>

        <!-- main tab content -->
        <div class="tab-content" id="nav-tabContent" style="background-color: white">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
            tabindex="0">
            <div class="container-fluid pb-4">
              <div class="row mx-auto container-fluid">
                <div v-if="isDateOver" v-for="project in filteredList" :key="project.id"
                  class="mt-4 col-12 col-md-6 col-lg-4">
                  <a class="nav-link" :href="'/projectdetails?id=' + project.id">
                    <div class="card projCard glass h-100">
                      <div class="card-header projCard-header projCard-image card-image">
                        <img id="card-img" class="mb-2 rounded" v-if="checkCat(project.category)"
                          :src="project_img[0][project.category]" />
                      </div>
                      <div class="card-body projCard-body mb-1">
                        <h5 class="h3">{{ project.proj_name }}</h5>
                        <h6 class="mt-5 fw-normal opacity-50">
                          <a class="nav-link nav-link-org" :href="'/org?org_name=' + project.org_name">{{
                              project.org_name
                          }}</a>
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-calendar" viewBox="0 0 16 16">
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;&nbsp;{{ project.proj_date }}
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-alarm" viewBox="0 0 16 16">
                          <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                          <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;{{ Main.tConvert(project.starttime) }} -
                          {{ Main.tConvert(project.endtime) }}
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-people-fill" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;&nbsp;{{ project.suitability }}
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <h6 class="fw-normal">
                          Located in: {{ project.region }}
                        </h6>
                        <br />
                        <div v-if="project.category == 'Elderly'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-primary">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                        <div v-if="project.category == 'Children'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-danger">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                        <div v-if="project.category == 'Environment'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-success">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                        <div v-if="project.category == 'Community'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-secondary">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- PROJECT DETAILS -->
          </div>

          <div class="tab-pane fade" id="nav-complete" role="tabpanel" aria-labelledby="nav-complete-tab" tabindex="0">
            <div class="container-fluid pb-4">
              <div class="row mx-auto container-fluid">
                <div v-if="isDateOver" v-for="project in pastEvents" :key="project.id"
                  class="mt-4 col-12 col-md-6 col-lg-4">
                  <div class="card projCard glass h-100">
                    <a class="nav-link" :href="'/projectdetails?id=' + project.id">
                      <div class="card-header projCard-header projCard-image card-image">
                        <img id="card-img" class="mb-2 rounded" v-if="checkCat(project.category)"
                          :src="project_img[0][project.category]" />
                      </div>
                      <div class="card-body projCard-body mb-1">
                        <h5 class="h3">{{ project.proj_name }}</h5>
                        <h6 class="mt-5 fw-normal opacity-50">
                          <a class="nav-link nav-link-org" :href="'/org?org_name=' + project.org_name">{{
                              project.org_name
                          }}</a>
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-calendar" viewBox="0 0 16 16">
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;&nbsp;{{ project.proj_date }}
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-alarm" viewBox="0 0 16 16">
                          <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                          <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;{{ Main.tConvert(project.starttime) }} -
                          {{ Main.tConvert(project.endtime) }}
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-people-fill" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path fill-rule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        <h6 class="fw-normal">
                          &nbsp;&nbsp;{{ project.suitability }}
                        </h6>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <h6 class="fw-normal">
                          Located in: {{ project.region }}
                        </h6>
                        <br />
                        <div v-if="project.category == 'Elderly'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-primary">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                        <div v-if="project.category == 'Children'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-danger">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                        <div v-if="project.category == 'Environment'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-success">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                        <div v-if="project.category == 'Community'" class="d-flex justify-content-end">
                          <h5>
                            <span class="badge text-bg-secondary">
                              {{ project.category }}</span>
                          </h5>
                        </div>
                      </div>

                      <!-- MARKED -->
                    </a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo" @click="getId(project.id)">
                      Leave a Review
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- PROJECT DETAILS -->
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4"></div>
  </div>
</template>

<style scoped>
/* modal */
modal-backdrop {
  z-index: 3;
}

body {
  background-color: #f0eefe;
}

#jumbotron-home {
  background-image: url(../../assets/landingImg/volunteer.jpg);
}

.bg-special {
  background-image: linear-gradient(#eaedff, #e2defe);
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

.projCard-header.projCard-image>img {
  display: block;
  width: 100%;
  max-height: 200px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
  transition: 200ms transform ease-in-out;
}

.projCard:hover>.projCard-header.projCard-image>img {
  transform: scale(1.025);
}

.projCard-body {
  font-size: 0.9rem;
  padding: 0 1rem;
  background: linear-gradient(0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)),
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
