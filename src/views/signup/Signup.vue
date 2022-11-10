<template>
    <div class="body">

        <section class="vh-100">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-8">
                        <div class="card-login">
                            <div class="row d-flex align-items-center justify-content-center g-0 ">
                                <div class="col-md-6 col-lg-5 d-none d-md-block items-align-center">
                                    <img src="../../assets/login.png" alt="login form" class="" />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form>

                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                
                                                <span class="h3 fw-bold mb-0">Join Kaki Now!</span>
                                            </div>

                                            <div class="form-outline mb-4 content-justify-center">

                                                <!-- new -->
                                                <font-awesome-icon icon="fa-solid fa-envelope fa-lg"
                                                    class="icon icon-pw" />
                                                <input type="email" class="form-control form-control-lg" id="emailInput"
                                                    placeholder="Email">
                                            </div>

                                            <div class="form-outline mb-4 content-justify-center">
                                                <font-awesome-icon icon="fa-solid fa-lock fa-lg" class="icon icon-pw" />
                                                <input type="password" class="form-control form-control-lg pw-input"
                                                    id="passwordInput" placeholder="Password">
                                            </div>
                                            <div class="d-grid gap-2 text-center">

                                                <router-link to="/register" custom v-slot="{ navigate }">
                                                    <button class="btn btn-dark btn-signup btn-outline-light fs-4" @click="navigate"
                                                        role="link">
                                                        Sign Up
                                                    </button>
                                                </router-link>
                                            </div>
                                        </form>
                                        <div class="text-center mt-4">
                                            <p class="text-center fs-6">Already have an account? <router-link to="/signin">Sign In
                                                </router-link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</template>

<style scoped>
.body {
    background-image: url("../../../src/assets/bg_plain.png");
}

img {
    display: flex;
    align-items: center;
    margin: auto;
    /* height: 100%; */
    width: 100%;
    justify-content: center;
}

.card-login {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

}

input {
    padding: 5px 10px 5px 50px;
    display: block;
    width: 100%;

}

.icon {
    position: absolute;
    left: 15px;
    top: 10px;
    font-size: 25px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.gButton {
    /* display: inline-block;
    vertical-align: middle;
    padding-left: 42px;
    padding-right: 42px;
    font-size: 14px;
    font-weight: bold; */
}

.btn-signup {
    background-color: #3B4F7D;
    border-radius: 10px;
    padding: 10px 0;
    /* box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.25); */
}

.btn:hover {
    color: white;
    background-color: rgb(68, 88, 141);
    box-shadow: -2px -1px 2px rgba(0, 0, 0, 0.25);
    /* border:  rgb(68, 88, 141) */
}

a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}
</style>