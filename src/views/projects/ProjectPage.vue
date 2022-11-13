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
      search: '',
      category: '',
      categories: ['Elderly', 'Children', 'Environment', 'Community'],
      categories_details: {
        Elderly: 'badge text-bg-primary',
        Children: 'badge text-bg-danger',
        Environment: 'badge text-bg-success',
        Community: 'badge text-bg-secondary',
      },

      categories_details: {
        Elderly: {
          badge: 'badge text-bg-primary',
        },
        Children: {
          badge: 'badge text-bg-danger',
        },
        Environment: {
          badge: 'badge text-bg-success',
        },
        Community: {
          badge: 'badge text-bg-secondary',
        },
      },
      regions: ['North', 'South', 'East', 'West', 'Central'],
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
    filteredList() {
      var categories = [];
      var regions = [];
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '/' + mm + '/' + dd;

      for (const category of this.categories) {
        categories.push(category.toLowerCase());
      }
      for (const region of this.regions) {
        regions.push(region.toLowerCase());
      }

      var dateList = this.project_details.filter((project) => {
        return project.proj_date > today;
      });

      var searchedList = dateList.filter((project) => {
        return (
          project.proj_name.toLowerCase().includes(this.search.toLowerCase()) ||
          project.org_name.toLowerCase().includes(this.search.toLowerCase())
        );
      });

      return Array.prototype.filter.call(searchedList, (project) => {
        return (
          categories.includes(project.category.toLowerCase()) &&
          regions.includes(project.region.toLowerCase())
        );
      });
    },
  },

  methods: {
    get_details() {
      axios
        .get('http://localhost/kakidb/project/read.php')
        .then((response) => {
          this.project_details = response.data.records;
        })
        .catch((error) => alert(error));
    },
    getImgUrl(path) {
      var str = 'src/assets/' + path;
      return str;
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
  },
  created: function () {
    this.get_details();
    this.getImgUrl();
  },
};
</script>

<template>
  <Nav style="z-index: 3" />

  <div class="container pb-5">
    <div class="row">
      <div class="col">
        <div class="searchFilter m-3 mx-auto">
          <div class="hstack gap-2">
            <input type="search" class="form-control" id="search" placeholder="What Are You Looking For?"
              v-model.trim="search" />

            <button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle ms-auto"
              data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter"
                viewBox="0 0 16 16">
                <path
                  d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>

              <span id="filterText">Filter</span>
            </button>

            <ul class="dropdown-menu">
              <li>
                <h6 class="dropdown-header">Voluntering Categories</h6>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="Elderly" id="elderly" v-model="categories" /><label class="w-100"
                  for="elderly">&nbsp;Elderly</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="Children" id="children" v-model="categories" /><label class="w-100"
                  for="children">&nbsp;Children</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="Environment" id="environment" v-model="categories" /><label class="w-100"
                  for="environment">&nbsp;Environment</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="Community" id="community" v-model="categories" /><label class="w-100"
                  for="community">&nbsp;Community</label>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <h6 class="dropdown-header">Region</h6>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="North" id="north" v-model="regions" /><label class="w-100"
                  for="north">&nbsp;North</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="South" id="south" v-model="regions" /><label class="w-100"
                  for="south">&nbsp;South</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="East" id="east" v-model="regions" /><label class="w-100"
                  for="east">&nbsp;East</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="West" id="west" v-model="regions" /><label class="w-100"
                  for="west">&nbsp;West</label>
              </li>
              <li class="dropdown-item">
                <input type="checkbox" value="Central" id="central" v-model="regions" /><label class="w-100"
                  for="central">&nbsp;Central</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--cards -->

    <div class="col col-sm-12">
      <h3 class="row fw-bold text-dark ms-4">Recommended For You</h3>
      <br />
      <div class="row mx-auto container">
        <div v-for="project in filteredList" :key="project.id" class="mt-4 col-12 col-sm-6 col-md-4">
          <div class="card glass">
            <a class="nav-link" :href="'/projectdetails?id=' + project.id">
              <div class="card-header card-image">
                <img id="card-img" class="mb-2 rounded" v-if="checkCat(project.category)"
                  :src="project_img[0][project.category]" />
              </div>
            </a>
            <div class="card-body mb-1">
              <h5 class="h3">{{ project.proj_name }}</h5>
              <h6 class="mt-5 fw-normal opacity-50">
                <a class="nav-link nav-link-org" :href="'/org?org_name=' + project.org_name">{{ project.org_name }}</a>
              </h6>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar"
                viewBox="0 0 16 16">
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <h6 class="fw-normal">&nbsp;&nbsp;{{ project.proj_date }}</h6>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm"
                viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
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
              <h6 class="fw-normal">&nbsp;&nbsp;{{ project.suitability }}</h6>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <h6 class="fw-normal">&nbsp;Located in: {{ project.region }}</h6>
              &nbsp;
              <h6 style="font-size: 12px" class="fw-light">
                &nbsp;{{ project.capacity }}
              </h6>

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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#bg_img {
  position: fixed;
  min-height: 100px;
  min-width: 1024px;
  width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.card {
  --padding: 0.8rem;
  border-radius: 0.25rem;
  overflow: hidden;
}

.card-header {
  font-size: 1.5rem;
  padding: var(--padding);
  padding-bottom: 0;
  margin-bottom: 0.5rem;
}

.card-header.card-image {
  padding: 4;
  overflow: hidden;
}

.card-header.card-image>img {
  display: block;
  width: 100%;
  max-height: 200px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
  transition: 200ms transform ease-in-out;
}

.card:hover>.card-header.card-image>img {
  transform: scale(1.025);
}

.card-body {
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

.searchFilter {
  width: 90%;
}

#filterText {
  display: none;
}

@media (min-width: 391px) {
  .searchFilter {
    width: 50%;
  }

  #filterText {
    display: inline-block;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

.btn:hover {
  background-color: gray !important;
}

.btn {
  background-color: transparent !important;
  border: 1px solid gray;
}
</style>
