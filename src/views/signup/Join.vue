<!-- NOT IN USE -->

<template>
    <div class="container-fluid">
        <div class="row mx-auto">
            <div class="col d-flex justify-content-center">
                <div class="card border-light" style="width: 20rem;">
                    <div class="card-body text-center">
                        <img src="../../assets/login.png" />
                        <h1 class="h3">Join Now!</h1>

                        <button type="button" class="btn btn-primary">Continue with Google</button>
                        <p>Or</p>

                        <button type="button" class="btn btn-primary">Sign in with password</button>
                        <!-- <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> -->
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

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}
</style>

p {
    font-family: sans-serif;
    /* margin: 100px auto; */
    /* color: #228B22; */
    text-align: center;
    /* font-size: 30px; */
    /* max-width: 600px; */
    position: relative;
}

p:before,
p:after {
    content: "";
    /* display: block; */
    width: 200px;
    height: 1px;
    background: #191970;
    top: 50%;
    margin: 0px 40px;
    position: absolute;
}

p:before {
    left: 0;
}

p:after {
    right: 0;
}