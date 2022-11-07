<script setup>


console.log(sessionStorage.getItem("isAuth"))

if(sessionStorage.getItem("isAuth") == "true"){
  console.log('is authenticated!')

}else{
  console.log('fuck off!')
  window.location.href = "http://localhost:5173/"
}


</script>

<script>
import Nav from '../../components/Nav.vue'

export default {
    name: "App",
    components: {

        Nav
    }
}
</script>
<template>
    <Nav />
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="left_column glass">
                    <img src="src/assets/org_image.png" width="150" height="150">
                    <br><br>
                    <p class="fw-bold">Supported Causes</p>
                    <p>Children & Youth</p>
                    <p>Elderly</p>
                    <p>Families</p>
                    <p>Community</p>
                    <p class="fw-bold">Supported Causes</p>
                    <p>Total activities posted:</p>
                    <p class="fw-bold">Contact Us</p>
                    <p>Email:</p>
                    <p>Contact Number:</p>
                </div>
            </div>
            
            <div class="col-9 mt-3 pt-5">
                <div class="right_column mb-5">
                    <img src="src/assets/org_poster.png" width="980" height="200">
                </div>
            <!-- </div> -->

                <div class="tabs">
                    <input type="radio" name="tabs" id="tabone" checked>
                    <label for="tabone">About Us</label>
                    <div class="tab pt-4">
                        <p class="glass" id="about_us_info">
                            Vision <br>
                            Spreading kindness to everyone in society. Empowering every individual to contribute to society <br><br>
                            Mission <br>
                            Founded in 1958, SG Kindness Centre engages in various volunteering activities across the spectrum of society. It has organised more than 3000 activities...
                        </p>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo">
                    <label for="tabtwo">Our Posts</label>
                    <div class="tab">
                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
                        <div class="container pt-4 pb-4">
                            <div class="container pb-4">
                                <h4 class="fw-bold col-11">Recommended For You</h4>
                                <!-- <p id="see_all"><a id="see_all" class="fw-light col-1">See all</a></p> -->
                            </div>

                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div class="card glass">
                                        <img src="src/assets/pic1.jpg" class="rounded card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Activity 1</h5>
                                            <p>Date & Day of the Week</p>
                                            <p>Time</p>
                                            <p>Suitability</p>
                                            <p>Location</p>
                                            <p>Vacancies Left</p>
                                            <i class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;">See More</i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card glass">
                                        <img src="src/assets/pic1.jpg" class="rounded card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p>Date & Day of the Week</p>
                                            <p>Time</p>
                                            <p>Suitability</p>
                                            <p>Location</p>
                                            <p>Vacancies Left</p>
                                            <i class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;">See More</i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card glass">
                                        <img src="src/assets/pic1.jpg" class="rounded card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p>Date & Day of the Week</p>
                                            <p>Time</p>
                                            <p>Suitability</p>
                                            <p>Location</p>
                                            <p>Vacancies Left</p>
                                            <i class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;">See More</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="tabs" id="tabthree">
                    <label for="tabthree">Experience Sharing Forum</label>
                    <div class="tab">
                        <div  class="glass" id="sharing_forum">
                            <p style="font-weight: bold">House cleaning</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque accusantium minus
                                voluptatum, at sequi laudantium! Ea, quas porro. Doloremque vero, velit voluptate aperiam
                                perspiciatis ut hic dicta tempore dolor.</p>
                        </div>
                        <div class="glass" id="sharing_forum">
                            <p style="font-weight: bold">Elderly Home</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque accusantium minus
                                voluptatum, at sequi laudantium! Ea, quas porro. Doloremque vero, velit voluptate aperiam
                                perspiciatis ut hic dicta tempore dolor.</p>
                        </div>
                        <div class="glass" id="sharing_forum">
                            <p style="font-weight: bold">Beach Litter Picking</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque accusantium minus
                                voluptatum, at sequi laudantium! Ea, quas porro. Doloremque vero, velit voluptate aperiam
                                perspiciatis ut hic dicta tempore dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><br>

    </div>
    



</template>

<style scoped>
.column_left img {
    max-width: 100%;
    /* height: fit-content; */
}

.left_column,
#sharing_forum {
    /* background-color: rgb(226, 222, 254); */
    border: lightgrey inset 2px;
    border-radius: 8px;
    text-align: left;
    padding: 10px;
    /* width: 30%; */
    justify-content: center;
    /* position: relative; */
    margin: 4rem;
}

.right_column {
    /* width: 60%; */
    object-fit: cover;
    border-radius: "25px";
    /* height: 420px; */
}

#about_us_info {
    border: 0.01cm solid lightgray;
    border-radius: 15px;
    padding: 0.2cm;
    /* background-color: rgb(226, 222, 254); */
}

.glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.20);
}

.tabs {
    display: flex;
    flex-wrap: wrap;
}

.tabs label {
    border-bottom: 1px solid grey;
    border-radius: 8px;
    order: 1;
    display: flex;
    padding: 1rem 1rem;
    margin-left: 5.5rem;
    margin-right: 5rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: white;
    font-weight: bold;
    transition: background ease 0.1s;
}

.tabs .tab {
    order: 99;
    flex-grow: 1;
    width: 100%;
    display: none;
    padding: 0.1rem;
    /* background: white; */
}

.tabs input[type="radio"] {
    display: none;
}

.tabs input[type="radio"]:checked+label {
    background: #fff;
}

.tabs input[type="radio"]:checked+label+.tab {
    display: block;
}

@media (max-width: 45em) {

    .tabs .tab,
    .tabs label {
        order: initial;
    }

    .tabs label {
        width: 100%;
        margin-right: 0;
        margin-top: 0.2rem;
    }
}

body {
    /* background: #333; */
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 10vh;
    /* font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; */
    font-weight: 300;
    line-height: 1.5;
    max-width: 60rem;
    margin: 0 auto;
    font-size: 112%;
}
</style>