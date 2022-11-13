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
      error_msg: '',
      error_activity_msg: '',
      project_details: [],
      review_details: [],
      search: '',
      categories: ['Elderly', 'Children', 'Environment', 'Community'],
      project_img: [
        {
          Elderly: 'src/assets/projectimg/pic2.jpg',
          Children: 'src/assets/projectimg/pic4.jpg',
          Environment: 'src/assets/projectimg/pic6.jpg',
          Community: 'src/assets/projectimg/pic3.jpg',
        },
      ],
    };
  },
  computed: {
    getOrgName() {
      return this.$route.query.org_name;
    },
    filteredList() {
      this.error_activity_msg = '';
      // var org_name = 'amk community club';
      var org_name = this.getOrgName;
      org_name = org_name.toLowerCase();
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '/' + mm + '/' + dd;

      var dateList = this.project_details.filter((project) => {
        return project.proj_date > today;
      });

      var returnArray = Array.prototype.filter.call(dateList, (project) => {
        return org_name.includes(project.org_name.toLowerCase());
      });

      if (returnArray.length == 0) {
        this.error_activity_msg = 'No Upcoming Projects';
      }
      return returnArray;
    },
  },

  methods: {
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
    get_details() {
      axios
        .get('http://localhost:8888/kakidb/project/read.php')
        .then((response) => {
          this.project_details = response.data.records;
        })
        .catch(
          (error) => (this.error_activity_msg = 'No Upcoming projects...')
        );
    },
    theFormat(number) {
      return number.toFixed(0);
    },
    completed() {
      console.log('Animation ends!');
    },
    playAnimation() {
      this.$refs.number2.play();
    },
    getReviews() {
      const org_name = this.getOrgName;
      axios
        .get(
          'http://localhost:8888/kakidb/review/search.php?org_name=' + org_name
        )
        .then((response) => {
          this.review_details = response.data.records;
        })
        .catch((error) => (this.error_msg = 'No reviews yet...'));
    },
  },
  mounted: function () {
    this.getReviews()
  },
  created: function () {
    this.get_details();
    return true;
  },
};
</script>

<template>
  <Nav style="z-index: 3" />

  <div class="container">
    <div class="h-50 w-100 d-inline-block">
      <div class="row bg-white rounded my-3">
        <div class="col-12 text-center col-md-3">
          <img src="../../assets/landingImg/org_generic.png" style="max-width: 120px" />
        </div>
        <div class="col my-auto">
          <h1 id="orgTitle">{{ this.getOrgName }}</h1>
        </div>
      </div>
    </div>

    <!-- carousel -->
    <div class="row">
      <div class="col-md-8 mb-3">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src="../../assets/orgImg/pexels-rodnae-productions-6646918.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../../assets/orgImg/pexels-rodnae-productions-6646981.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../../assets/orgImg/pexels-rodnae-productions-6646990.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="col mb-3">
        <div class="card border-0 mb-3 h-100">
          <div class="card-header fs-3">Our Impact In Numbers</div>
          <div class="card-body text-primary">
            <div id="rollingNumbers">
              <h2 class="fw-bold">Events Organised</h2>
              <h1>
                <number ref="number1" :from="0" :to="50" :format="theFormat" :duration="2" :delay="1"
                  easing="Power1.easeOut" />
              </h1>

              <h2 class="fw-bold">Total Volunteers</h2>
              <h1>
                <number ref="number1" :from="0" :to="2000" :format="theFormat" :duration="2" :delay="1"
                  easing="Power1.easeOut" />
              </h1>
              <h2 class="fw-bold">Lives Impacted</h2>
              <h1>
                <number ref="number1" :from="0" :to="10000" :format="theFormat" :duration="2" :delay="1"
                  easing="Power1.easeOut" />
              </h1>
            </div>

          </div>
        </div>
      </div>
    </div>

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
          type="button" role="tab" aria-controls="nav-about" aria-selected="true">
          About Us
        </button>
        <button class="nav-link" id="nav-post-tab" data-bs-toggle="tab" data-bs-target="#nav-post" type="button"
          role="tab" aria-controls="nav-post" aria-selected="false">
          Upcoming
        </button>
        <button class="nav-link" id="nav-forum-tab" data-bs-toggle="tab" data-bs-target="#nav-forum" type="button"
          role="tab" aria-controls="nav-forum" aria-selected="false">
          Sharing Forum
        </button>
      </div>
    </nav>
    <div class="tab-content pb-2" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab"
        tabindex="0">
        <div class="container-fluid mb-4 rounded-0">
          <div class="row mx-auto container-fluid">
            <p class="h4 mt-4">Vision</p>
            <p>
              Spreading kindness to everyone in society. Empowering every
              individual to contribute to society
            </p>
            <p class="h4 mt-2">Mission</p>
            <p>
              Founded in 1958, SG Kindness Centre engages in various
              volunteering activities across the spectrum of society. It has
              organised more than 3000 activities catering to various causes.
            </p>
          </div>
        </div>
      </div>

      <div class="tab-pane fade show" id="nav-post" role="tabpanel" aria-labelledby="nav-post-tab" tabindex="0">
        <div class="container mb-4">
          <div class="row">
            <div v-if="filteredList.length > 0" v-for="project in filteredList" :key="project.id"
              class="col-12 col-sm-6 col-md-4 mt-4">
              <a class="nav-link" :href="'/projectdetails?id=' + project.id">
                <div class="card projCard glass">
                  <div class="card-header projCard-header projCard-image card-image">
                    <img id="card-img" class="mb-2" v-if="checkCat(project.category)"
                      :src="project_img[0][project.category]" />
                  </div>
                  <div class="card-body projCard-body mb-1">
                    <h5 class="h3">{{ project.proj_name }}</h5>
                    <h6 class="mt-5 fw-normal opacity-50">
                      <a class="nav-link nav-link-org" :href="'/org?org_name=' + project.org_name">{{ project.org_name
                      }}</a>
                    </h6>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-calendar" viewBox="0 0 16 16">
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    <h6 class="fw-normal">&nbsp;{{ project.proj_date }}</h6>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-alarm" viewBox="0 0 16 16">
                      <path
                        d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                      <path d="M6.5 0a.5.5 0 0 0 0
                        1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0
                        0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0
                        0 0 3.422-.892l.746.746a.5.5 0 0 0
                        .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5
                        0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0
                        1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035
                        0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753
                        0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5
                        2.5 0 0 0 13.5 1z" />
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
                    <h6 class="fw-normal">&nbsp;{{ project.suitability }}</h6>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <h6 class="fw-normal">Located in: {{ project.region }}</h6>
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
            <div v-else class="container-fluid mx-auto">
              <div class="container-fluid">
                <h1 class="fs-3 mt-4">{{ this.error_activity_msg }}</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade show" id="nav-forum" role="tabpanel" aria-labelledby="nav-forum-tab" tabindex="0">
        <div class="container-fluid mb-4 row mx-auto ">
          <div class="mt-4">
            <p class="h4 fw-light">Recent shares</p>
          </div>
          <div v-if="this.error_msg != ''">
            <h1 class="fs-3">{{ this.error_msg }}</h1>
          </div>
          <div class="row">
            <div v-if="this.error_msg == ''" v-for="review in this.review_details"
              class="col-12 mt-2 border border-dark rounded-3 border-opacity-25">
              <div class="ms-2">
                <p class="fw-bold h4 mt-3 mt-2">{{ review.proj_name }}</p>
                <p>
                  {{ review.review_text }}
                </p>
                <p class="h6 me-2 mb-3">
                  {{ review.vol_name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4"></div>
  </div>
</template>

<style scoped>
#rollingNumbers {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.banner {
  overflow: hidden;
  max-height: 400px;
}

@media (min-width: 100px) {
  #orgTitle {
    display: none;
  }
}

@media (min-width: 400px) {
  #orgTitle {
    display: block;
  }
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

#nav-tabContent {
  background-color: white;
}
</style>
