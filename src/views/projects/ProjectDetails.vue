<script setup>


console.log(sessionStorage.getItem("isAuth"))

if (sessionStorage.getItem("isAuth") == "true") {
  console.log('is authenticated!')

} else {
  console.log('not authenticated, redirecting')
  window.location.href = "http://localhost:5173/"
}

// function tConvert(time) {
//       const timeString = '18:00:00'
//       // Prepend any date. Use your birthday.
//       const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
//         .toLocaleTimeString('en-US',
//           { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
//         );

//       return timeString12hr
//     }

</script>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import Nav from '../../components/Nav.vue'

export default defineComponent({
  // components: { GoogleMap, Marker },
  // setup() {
  //   const center = { lat: 40.689247, lng: -74.044502 }
  //   const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }

  //   return { center, markerOptions }
  // },
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {
      projectDetails: [],
      lat: 1.41518559,
      lng: 103.835153,
      center: { lat: this.lat, lng: this.lng },
      markerOptions: { position: { lat: this.lat, lng: this.lng } }

      // center: { lat: this.projectDetails[0].lat, lng: this.projectDetails[0].lng }
      // lats: 1.41518559,
      // center: { lat: this.lats, lng: 103.835153 },
      // markerOptions : { position: { lat: 1.41518559, lng: 103.835153 }},
      // center: {  },
      // markerOptions : { },
    }
  },
  computed: {
    getId() {
      // console.log(this.$route.query.id)
      return this.$route.query.id
    }
  },
  methods: {
    tConvert(time) {
      const timeString = time
      // Prepend any date. Use your birthday.
      const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
        .toLocaleTimeString('en-US',
          { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
        );

      return timeString12hr
    },

    getProjectDetails() {
      const id = this.getId
      // console.log(id)
      const url = 'http://localhost/kakidb-2/project/read_one.php?id=' + id
      // console.log(url)

      // /Applications/MAMP/htdocs/is216/kaki-app/src/kakidb-2

      axios.get('http://localhost/kakidb-2/project/read_one.php?id=' + id)
        .then(response => {
          console.log(response.data.records)
          this.projectDetails = response.data.records;
          var lat = this.projectDetails[0].lat
          var lng = this.projectDetails[0].long
          this.lat = parseFloat(lat)
          this.lng = parseFloat(lng)
          this.center = { lat: this.lat, lng: this.lng },
            this.markerOptions = { position: { lat: this.lat, lng: this.lng } }


        })



        .catch(error => alert(error));
    },
  },
  mounted: function () {
    console.log(this.getProjectDetails())
  },
}
)
</script>

<style>
/* .container {
  border: 2px solid black;
}

.row {
  border: 2px solid red;
} */

.map {
  height: 500px;
}
</style>

<template >

  <!-- 
<GMapMap
      :center="{lat: 1.2983811, lng: 103.856409}"
      :zoom="12"
      map-type-id="terrain"
      style="width: 80vw; height: 300px; margin: auto;"
  >/drive/
  <GMapMarker
      :key="index"
      :position="m" 
      v-for="(m, index) in markers"
    />
  </GMapMap> -->
  <!-- <GMapMap
    :center="center"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap> -->

  <Nav />

  <div class="container main" v-for="project in projectDetails" :key="project.id">
    <!-- <div class="row"> -->
    <div id="gallery-box" class="row">
      <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery"
        class="col-sm-4 p-0">
        <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid" />
      </a>
      <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery"
        class="col-sm-4">
        <img src="https://unsplash.it/600.jpg?image=252" class="img-fluid" />
      </a>
      <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery"
        class="col-sm-4">
        <img src="https://unsplash.it/600.jpg?image=253" class="img-fluid" />
      </a>
    </div>
    <!-- </div> -->

    <!-- <div class="container" > -->
    <!-- project name header -->
    <!-- <div class="row">
        <div class="col text-center p-5 mb-4">
          <h1>Project Kaki</h1>
        </div>
      </div> -->

    <!-- project description -->
    <div class="row mt-3">
      <div class="col-xl-8 col-md-12 col-s-12">
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

        <div class="row mt-3 row-xs-12">
          <div class="card">
            <div class="card-body">
              <p class="h2 fw-bold">Volunteer Position</p>
              <div class="card text-bg-light mb-3">
                <div class="card-header">Cleaning Volunteer</div>
                <div class="card-body">
                  <p class="card-text">
                    Skills required: No Specific Skills required
                  </p>
                  <p class="card-text">Suitable for: All, First Timers</p>
                  <p class="card-text">
                    Objective: Conduct and assist to coordinate the Art and Craft
                    session to engage seniors. And through the facilitation,
                    befriend and provide companionship to seniors. - Conduct and
                    coordinate art and craft session for 10 - 15 seniors - Guide
                    seniors on the pre-planned activity - Mark attendance of
                    seniors, and assist with SafeEntry and safe distancing
                    measures
                  </p>

                  <div class="d-grid gap-2 d-md-flex justify-content-md-end align-items-center">
                    <p class="fw-bold m-0">{{ project.total_capacity }} Opening Left</p>


                    <button class="btn btn-primary btn-apply btn-lg me-md-2 px-5" type="button">
                      Apply Now
                    </button>


                    <div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel"
                      tabindex="-1" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Please select your preferred role
                            </h1>
                          </div>
                          <div class="modal-body">
                            <form>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select Roles</option>
                                <option value="1">Role 1</option>
                                <option value="2">Role 2</option>
                                <option value="3">Role 3</option>
                              </select><br>=<br>
                              <textarea class="form-control" placeholder="Write comments here"></textarea><br><br>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                              data-bs-toggle="modal">Confirm application</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2"
                      tabindex="-1" aria-hidden="true" style="display: none;">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Your application</h1>
                          </div>
                          <div class="modal-body">
                            You have confirmed your application for the selected role.
                          </div>
                          <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-dismiss="modal">Back to home page</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Apply
                      Now</a>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <!-- <div class="col-8">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="#"
                    >Description</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Timeline</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Roles</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Description
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Saepe qui vero quod exercitationem, a
                      molestias repellat pariatur? Ipsum sint nostrum asperiores
                      maxime obcaecati rem quaerat molestias magnam commodi
                      ratione? Tempore! Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Officia natus atque ipsam consectetur
                      placeat mollitia quo dolorem deleniti nemo nam.
                      Consequatur repellat ad numquam ut odio? Vero magni illum
                      odio! Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Magni earum esse, nemo reprehenderit eos reiciendis
                      vel corporis sed, ipsam ipsum tempore laudantium obcaecati
                      distinctio. Reprehenderit reiciendis veniam architecto
                      nobis magni!
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Project Timeline
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Project Roles
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->



      <!-- sticky sign up -->

      <div id="sign-up" class="sticky-xl-top col-xl-4 col-xs-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title ">House Cleaning for Elderly</h3>
            <h6 class="card-subtitle mb-2 text-muted">
              by {{ project.org_name }}
            </h6>

            <!-- information sticky -->
            <div class="card">
              <div class="row pt-3 ps-3">
                <ul>
                  <li class="list-group-item mt-2">
                    <img src="../../assets/landingImg/icons/pdicons/Timesheet.png" />
                    &nbsp; {{ project.proj_date }}
                  </li>
                  <li class="list-group-item mt-2">
                    <img src="../../assets/landingImg/icons/pdicons/Clock.png" />
                    &nbsp; {{ tConvert(project.starttime) }} - {{ tConvert(project.endtime) }}
                  </li>
                  <li class="list-group-item mt-2">
                    <img src="../../assets/landingImg/icons/pdicons/Group.png" /> &nbsp;
                    Suitable for: All, First-timers
                  </li>
                  <li class="list-group-item mt-2">
                    <img src="../../assets/landingImg/icons/pdicons/Location.png" /> &nbsp;

                    Geylang
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
                    <button type="button" class="btn btn-secondary rounded-circle btn-icon">
                      <!-- <font-awesome-icon icon="fa-solid fa-link" /> -->
                      <font-awesome-icon icon="fa-solid fa-lock" />

                    </button>
                  </div>
                  <div class="col">
                    <button type="button" class="btn btn-secondary rounded-circle btn-icon">
                      <font-awesome-icon icon="fa-solid fa-share" />
                      <!-- <font-awesome-icon icon="fa-solid fa-share" /> -->
                    </button>
                  </div>

                  <div class="col">
                    <button type="button" class="btn btn-secondary rounded-circle btn-icon">
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
                    <img src="../../assets/landingImg/icons/pdicons/User.png" />
                    &nbsp; Mon, 3 Oct 2022
                  </li>
                  <li class="list-group-item">
                    <img src="../../assets/landingImg/icons/pdicons/Mail.png" />
                    &nbsp; kaki_tgt123@gmail.com
                  </li>
                  <li class="list-group-item">
                    <img src="../../assets/landingImg/icons/pdicons/Phone.png" /> &nbsp; +65
                    1234 5678
                  </li>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <!-- <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> -->

            <!-- dropdown -->
            <!-- <div class="dropdown-center">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply For...
                </button>
                <ul class="dropdown-menu mb-4">
                  <li><a class="dropdown-item" href="#">Designer</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Photographer</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Leader</a></li>
                </ul>
              </div> -->
          </div>
        </div>
      </div>

      <!-- map -->
      <div class="col-8 mt-3 p-0">
        <div class="card">
          <div class="card-body">
            <GoogleMap :key="componentKey" api-key="AIzaSyDCBtObBDUy_E5GwV4iWad9G7I3EhMNjt4" class="map" :center=center
              :zoom="15">
              <Marker :options="markerOptions" />
            </GoogleMap>
          </div>
        </div>
      </div>

    </div>
    <!-- </div> -->
  </div>
</template>



<!-- <script>


export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }

    return { center }
  },
})
</script> -->




<style scoped>
body {
  background-color: #EDEDED;
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

/* 
p{
  color: #D2DEFE;
} */

.text-landing {
  background-color: #4A60E8;
  opacity: 0.95;
  border: 1px solid #4A60E8;
  border-radius: 25px;
  bottom: 0;
  right: 0;
  position: absolute;
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
  background-color: #4A60E8
}

.bg-special {
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
</style>