<script setup>
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  
  console.log("Handle the response", response)
  window.location.href = "http://localhost:5173/project"
  sessionStorage.setItem("isAuth", "true");

}




</script>
<template>
    <div class="container-fluid">
        <div class="row mx-auto">
            <div class="col d-flex justify-content-center">
                <div class="card border-light" style="width: 25rem;">
                    <div class="card-body text-center">
                        <p class="h3 mt-4 mb-4">Login to Your Account</p>
                        <img class="mb-4" src="../../assets/login.png" />


                        <!-- Email -->
                        <form>
                            <div class="mb-3 text-start form-floating">
                                <font-awesome-icon icon="fa-solid fa-envelope fa-lg" class="icon" />
                                <input type="email" class="form-control" id="emailInput" placeholder="Email">
                                <label for="emailInput">Email</label>
                            </div>

                            <!-- Password -->
                            <div class="form-floating mb-3 text-start">
                                <font-awesome-icon icon="fa-solid fa-lock fa-lg" class="icon" />
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password">
                                <label for="passwordInput">Password</label>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-primary btn-signup">Sign In</button>
                                <p>Forget Password?</p>
                            </div>
                        </form>
                        <p>Or</p>
                        <div class="d-grid gap-2">
                            <GoogleLogin :callback="callback"/>
                            
                            <!-- <button type="button" class="btn btn-primary btn-google">Continue with Google</button> -->
                        </div>
                        <p>Do not have an account? <router-link to="/signup">Sign Up</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    display: flex;
    align-items: center;
    margin: auto
}

.card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

}
</style>