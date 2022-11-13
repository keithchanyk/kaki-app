<script setup>
console.log(sessionStorage.getItem('isAuth'));

if (sessionStorage.getItem('isAuth') == 'true') {
  console.log('is authenticated!');
} else {
  console.log('not authenticated, redirecting');
  window.location.href = 'http://localhost:5173/';
}
</script>

<script>
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import Nav from '../../components/Nav.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    VueEasyLightbox,
  },
  data() {
    return {
      projectDetails: [],
      lat: 1.41518559,
      lng: 103.835153,
      center: { lat: this.lat, lng: this.lng },
      markerOptions: { position: { lat: this.lat, lng: this.lng } },
      imgs: [
        'https://unsplash.it/1200/768.jpg?image=251',
        'https://unsplash.it/1200/768.jpg?image=252',
        'https://unsplash.it/1200/768.jpg?image=253',
      ], // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
      selected: 'Select Roles',
      volunteerPositions: {
        0: {
          title: 'Cleaner Volunteer',
          skill: 'None Required',
          suitability: 'All are Welcome!',
          desc: 'Love to clean? Does it spark joy? Unleash your inner Marie Kondo and help out with the cleaning of venue. Through working with others and proper facilitaion, the area will be cleaned throughouly with work split amongst the volunteers. ',
        },
        1: {
          title: 'Coder Volunteer',
          skill: 'Coding Skills',
          suitability:
            'Mid-Level Coders, programming background is a must! No, Scratch does not count!',
          desc: 'Front End, Back End, Full Stack? We need them all! We are trying to shift our operations online and you will be tasked with using your coding skills to help the develoment of our online presence, join us now and use your tech skills for good!',
        },
        2: {
          title: 'Designer Volunteer',
          skill: 'Canva',
          suitability: 'As long as you are willing to learn!',
          desc: 'To help out with the creation of marketing material. Volunteers will use canva or equilivent toolset to genrate promotional material for the project. These materials will be used to attract new volunteers as well as to inform the public on our efforts ',
        },
        3: {
          title: 'illustrator Volunteer',
          skill: 'Adobe Illustrator',
          suitability: 'Basic skills in Adobe Suite Required!',
          desc: 'To help out with the cleaning of venue. Through working with others and proper facilitaion, the area will be cleaned throughouly with work split amongst the volunteers. ',
        },
      },
      roles: [],
    };
  },
  computed: {
    getId() {
      console.log(this.$route.query.id);
      return this.$route.query.id;
    },
  },
  methods: {
    getRole() {
      console.log(this.roleSelected);
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },

    tConvert(time) {
      const timeString = time;
      // Prepend any date. Use your birthday.
      const timeString12hr = new Date(
        '1970-01-01T' + timeString + 'Z'
      ).toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
      });

      return timeString12hr;
    },

    getProjectDetails() {
      const id = this.getId;

      axios
        .get('http://localhost:8888/kakidb/project/read_one.php?id=' + id)
        .then((response) => {
          console.log(response.data.records);
          this.projectDetails = response.data.records;
          console.log(this.volunteerPositions);
          //positions
          //create array of positions ordered as Cleaner, Coder, Designer, Illustrator
          var positions = [];
          var isCleaner = this.projectDetails[0].cleaner;
          var isCoder = this.projectDetails[0].coder;
          var isDesigner = this.projectDetails[0].designer;
          var isIllustrator = this.projectDetails[0].illustrator;
          console.log(isCleaner);
          positions.push(isCleaner);
          positions.push(isCoder);
          positions.push(isDesigner);
          positions.push(isIllustrator);

          for (var position in positions) {
            if (positions[position] == 1) {
              var haveIndex = position;
              var roleInfo = this.volunteerPositions[haveIndex];
              this.roles.push(roleInfo);
            }
          }

          //map
          var lat = this.projectDetails[0].lat;
          var lng = this.projectDetails[0].long;
          this.lat = parseFloat(lat);
          this.lng = parseFloat(lng);
          (this.center = { lat: this.lat, lng: this.lng }),
            (this.markerOptions = {
              position: { lat: this.lat, lng: this.lng },
            });
        })
        .catch((error) => alert(error));
    },
  },
  mounted: function () {
    console.log(this.getProjectDetails());
  },

  updated: function () {
    const exampleModal = document.getElementById('exampleModalToggle');
    exampleModal.addEventListener('show.bs.modal', (event) => {
      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      const roleTitle = button.getAttribute('data-bs-whatever');
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.

      const roleDisplay = exampleModal.querySelector('#roleDisplay');
      roleDisplay.value = roleTitle;

      const exampleModal2 = document.getElementById('exampleModalToggle2');

      const confirmDisplay = exampleModal2.querySelector('#confirmedRole');
      console.log(confirmDisplay);
      confirmDisplay.innerHTML =
        `You have confirmed your application for: ` + roleTitle;
    });
  },
});
</script>

<template>
  <Nav style="z-index: 3" />

  <div class="container main d-flex flex-nowrap">
    <!-- <div class="row"> -->
    <div v-for="project in projectDetails" :key="project.id">
      <div class="row gallery">
        <div
          v-for="(img, idx) in imgs"
          :key="idx"
          :id="'image' + idx"
          class="col pic"
          @click="() => show(idx)"
        >
          <img :src="img.src ? img.src : img" style="width: 100%" />
        </div>
      </div>

      <div>
        <!-- all props & events -->

        <vue-easy-lightbox
          escDisabled
          moveDisabled
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
          class="proj_lightbox"
        ></vue-easy-lightbox>
      </div>

      <!-- project description -->
      <div class="row mt-3">
        <div class="col-xl-8 col-md-12 col-s-12 order-3 order-md-2">
          <!-- <div class="row pt-3"> -->
          <div class="row">
            <div class="card">
              <div class="card-body">
                <p class="h2 fw-bold">About the Activity</p>
                <p>
                  {{ project.proj_desc }}
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-3 order-4 p-2">
            <div class="card">
              <div class="card-body">
                <p class="h2 fw-bold">Volunteer Positions</p>

                <div v-for="role of roles" class="card text-bg-light mb-3">
                  <div class="card-header">{{ role.title }}</div>
                  <div class="card-body">
                    <p class="card-text">Skills required: {{ role.skill }}</p>
                    <p class="card-text">
                      Suitable for: {{ role.suitability }}
                    </p>
                    <p class="card-text">
                      {{ role.desc }}
                    </p>

                    <div
                      class="d-grid gap-2 d-md-flex justify-content-md-end align-items-center"
                    >
                      <p class="fw-bold m-0">
                        {{ project.total_capacity }} Opening Left
                      </p>

                      <button
                        class="btn btn-primary btn-apply btn-lg me-md-2 px-5"
                        type="button"
                        data-bs-toggle="modal"
                        href="#exampleModalToggle"
                        :data-bs-whatever="role.title"
                      >
                        Apply Now
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModalToggle"
                        aria-labelledby="exampleModalToggleLabel"
                        tabindex="-1"
                        aria-hidden="true"
                        style="display: none"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalToggleLabel"
                              >
                                Apply Now!
                              </h1>
                            </div>
                            <div class="modal-body">
                              <form>
                                <label for="roleDisplay" class="form-label"
                                  >Role you are applying for....</label
                                >
                                <input
                                  class="form-control"
                                  disabled
                                  readonly
                                  id="roleDisplay"
                                  aria-label="Disabled input"
                                />
                                <!-- <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  v-model="selected"
                                >
                                  <option selected>Select Roles</option>
                                  <option value="Cleaner Volunteer">
                                    Cleaner Volunteer
                                  </option>
                                  <option value="Designer">Designer</option>
                                  <option value="Coder">Coder</option>
                                  <option value="Manager">
                                    Manager
                                  </option></select> -->
                                <br /><br />
                                <label for="applyText" class="form-label"
                                  >Tell
                                  <strong>{{ project.org_name }}</strong> about
                                  yourself!</label
                                >
                                <textarea
                                  class="form-control"
                                  placeholder="I am..."
                                  id="applyText"
                                ></textarea
                                ><br /><br />
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button
                                class="btn btn-primary"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                              >
                                Confirm application
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="modal fade"
                        id="exampleModalToggle2"
                        aria-labelledby="exampleModalToggleLabel2"
                        tabindex="-1"
                        aria-hidden="true"
                        style="display: none"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalToggleLabel2"
                              >
                                Your application
                              </h1>
                            </div>
                            <div class="modal-body" id="confirmedRole">a</div>
                            <div class="modal-footer">
                              <button
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Back to home page
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- </div> -->
        </div>

        <!-- sticky sign up -->
        <div
          id="details-page"
          class="sticky-xl-top col-xl-4 col-xs-12 p-2 order-2 order-md-3"
        >
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">{{ project.proj_name }}</h3>
              <h6 class="card-subtitle mb-2 text-muted">
                <a
                  class="nav-link nav-link-org"
                  :href="'/org?org_name=' + project.org_name"
                  >{{ project.org_name }}</a
                >
              </h6>

              <!-- information sticky -->
              <div class="card">
                <div class="row pt-3 ps-3">
                  <ul>
                    <li class="list-group-item mt-2">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Timesheet.png"
                      />
                      &nbsp; {{ project.proj_date }}
                    </li>
                    <li class="list-group-item mt-2">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Clock.png"
                      />
                      &nbsp; {{ tConvert(project.starttime) }} -
                      {{ tConvert(project.endtime) }}
                    </li>
                    <li class="list-group-item mt-2">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Group.png"
                      />
                      &nbsp; Suitable for: All, First-timers
                    </li>
                    <li class="list-group-item mt-2">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Location.png"
                      />
                      &nbsp; Geylang
                      <p class="text-muted mt-2">
                        3 EUNOS CRESCENT Singapore 400003
                      </p>
                    </li>
                  </ul>
                </div>
                <!-- buttons -->
                <div class="d-flex justify-content-around">
                  <div class="row">
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-secondary rounded-circle btn-icon"
                      >
                        <!-- <font-awesome-icon icon="fa-solid fa-link" /> -->
                        <font-awesome-icon icon="fa-solid fa-lock" />
                      </button>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-secondary rounded-circle btn-icon"
                      >
                        <font-awesome-icon icon="fa-solid fa-share" />
                        <!-- <font-awesome-icon icon="fa-solid fa-share" /> -->
                      </button>
                    </div>

                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-secondary rounded-circle btn-icon"
                      >
                        <i class="fa-solid fa-bookmark" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="row pt-3 ps-3">
                  <!-- contact us -->
                  <h4>Contact Us</h4>
                  <ul>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/User.png"
                      />
                      &nbsp; {{ project.contact_person }}
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Mail.png"
                      />
                      &nbsp; {{ project.email }}
                    </li>
                    <li class="list-group-item">
                      <img
                        src="../../assets/landingImg/icons/pdicons/Phone.png"
                      />
                      &nbsp; {{ project.contact_num }}
                    </li>
                  </ul>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>

        <!-- map -->

        <div class="col col-lg-8 col-sm-12 mt-3 p-0 order-5">
          <div class="card">
            <div class="card-body">
              <p class="h2 fw-bold">Location</p>
              <GoogleMap
                :key="componentKey"
                api-key="AIzaSyDCBtObBDUy_E5GwV4iWad9G7I3EhMNjt4"
                class="map"
                :center="center"
                :zoom="15"
              >
                <Marker :options="markerOptions" />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
body {
  background-color: #ededed;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.custom-jumbotron {
  background-color: lightslategray;
  color: whitesmoke;
  background-size: cover;
  height: 800px;
  position: relative;
}

h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 5px;
}

#jumbotron-home {
  background-image: url(./img/volunteer.jpg);
}

.list-group,
.list-group-item {
  border-style: none;
}

.btn-apply {
  background-color: #4a60e8;
}

@media (max-width: 576px) {
  #details-page {
    padding: 0;
    margin-bottom: 1rem;
  }
}
</style>

<style>
@media (max-width: 600px) {
  #image1 {
    display: none;
  }

  #image2 {
    display: none;
  }
}

@media (min-width: 600px) {
  #image1 {
    display: block;
  }

  #image2 {
    display: block;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: static;
  font-weight: normal;
}

.map {
  height: 500px;
}
</style>
