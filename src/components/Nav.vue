<script>
import { googleLogout } from 'vue3-google-login';
export default {
  methods: {
    logout() {
      sessionStorage.setItem('isAuth', '');
      console.log('logout start');
      googleLogout();
      window.location.href = 'http://localhost:5173/';
      console.log('logout ends');
    },
  },
};
</script>

<template>
  <nav class="glass navbar navbar-expand-lg">
    <div class="mx-5 container-fluid">
      <a class="navbar-brand" href="#"
        ><span class="fw-bold text-success">Kaki</span></a
      >
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/project">Explore</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/projectdetails"
              >Project Details</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/org">Organisation</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>

          <!-- <li class="nav-item">
            <button
              @click="logout"
              type="button"
              class="btn btn-danger"
              style="
                --bs-btn-padding-y: 0.1rem;
                --bs-btn-padding-x: 0.7rem;
                --bs-btn-font-size: 0.85rem;
              "
            >
              <router-link class="nav-link" to="/signin">Log Out</router-link>
            </button>
          </li> -->

          <!-- <li class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Admin</a
            >
            <div class="dropdown-menu dropdown-menu-end">
              <a href="#" class="dropdown-item">Reports</a>
              <a href="#" class="dropdown-item">Settings</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Logout</a>
            </div>
          </li> -->

          <div class="nav-link" data-bs-toggle="dropdown">
            <li class="nav-item">
              <button id="imgButton" class="btn btn-default">
                <img
                  src="../assets/xavier.JPG"
                  width="50"
                  height="50"
                  class="rounded-circle"
                />
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item">Reports</a></li>
                <li><a class="dropdown-item">Settings</a></li>
                <div class="dropdown-divider"></div>
                <li @click="logout">
                  <a class="dropdown-item"> Log Out</a>
                </li>
              </div>
            </li>
          </div>
          <!-- <div class="dropdown">
            <img
              class="rounded-circle"
              alt="avatar1"
              src="../assets/xavier.JPG"
              style="width: 50px; height: 50px"
            />
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div> -->

          <!-- <div class="dropdown">
            <button
              class="btn btn-floating dropdown-toggle rounded-circle"
              type="button"
              id="menu1"
              data-toggle="dropdown"
              style="width: 100px"
            >
              <img
                src="../assets/xavier.JPG"
                class="rounded-circle"
                style="width: 100px"
              />
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">Menu item 1</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">Menu item 2</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">Menu item 3</a>
              </li>
              <li role="presentation" class="divider"></li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">Menu item 4</a>
              </li>
            </ul>
          </div> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* .nav-link:active {
  color: #dce775;
} */

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

#imgButton {
  font-size: 24px;
  border: none;
  cursor: pointer;
  outline: none;
  margin: auto;
  display: block;
}

nav {
  z-index: 9999999999999;
}
</style>
