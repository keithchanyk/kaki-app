<template>
    <div class="container-fluid">
        <div class="row mx-auto">
            <div class="col d-flex justify-content-center">
                <div class="card border-light" style="width: 25rem;">
                    <div class="card-body text-center">
                        <h1 class="h3">Create New Account</h1>


                        <!-- Email -->
                        <form>
                            <div class="mb-3 text-start form-floating">
                                <i class="icon fa-regular fa-envelope fa-lg"></i>
                                <input type="email" class="form-control" id="emailInput" placeholder="Email">
                                <label for="emailInput">Email</label>
                            </div>

                            <!-- Password -->
                            <div class="form-floating mb-3 text-start">
                                <font-awesome-icon icon="fa-solid fa-lock" />
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password">
                                <label for="passwordInput">Password</label>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="button" class="btn-signup btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p>Or</p>
                        <div class="d-grid gap-2">
                            <button type="button" class="btn btn-google btn-primary text-dark">
                                <!-- <img src="../../assets/g-logo.png" width="20"/> -->
                                Continue with Google
                            </button>
                        </div>

                        <p>Already have an account? <router-link to="/">Sign In</router-link>
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