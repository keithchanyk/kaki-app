<template>
    <nav class="glass navbar navbar-expand-lg">
        <div class="mx-5 container-fluid">
          <a class="navbar-brand" href="#"><span class="fw-bold text-success">Kaki</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <router-link class="nav-link" to="/project">Explore</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/projectdetails">Project Details</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/org">Organisation</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>

            </ul>
          </div>
        </div>
    </nav>
</template>

<style scoped>

.nav-link:active {
    color: #dce775;
}

</style>