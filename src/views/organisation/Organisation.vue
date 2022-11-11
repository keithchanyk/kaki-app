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
        <div class="mt-2 row">
            <div class="border border-dark d-flex justify-content-center">
                <img class="img-fluid banner" src="src/assets/projectimg/pic1.jpg">
            </div>
        </div>
        <div class="mt-2 row">
            <div class="col-2 border border-dark"></div>
            <div class="col-8 border border-dark">
                
                <!-- <div class="row mx-auto container-fluid"> -->
                    <div class="mt-4 col-xl-3 d-flex justify-content-start">
                        <div class="text-center border border-dark p-2 mb-2 rounded-3 border-opacity-25">
                            <span class="fw-bold">Supported Causes</span><br>
                            <span>Children & Youth</span>
                            <span>&nbsp;| Elderly</span>
                            <span>&nbsp;| Families</span>
                            <span>&nbsp;| Community</span>
                        </div>
                        <div class="text-center border border-dark p-2 mb-2 rounded-3 border-opacity-25">
                            <span class="fw-bold">Our Engagements</span><br>
                            <span class="">Total posts: 20</span><br>
                            <span>Total posts: 20</span>
                        </div>
                        <div class="text-center border border-dark p-2 mb-2 rounded-3 border-opacity-25">
                            <span class="fw-bold">Find us here</span><br>
                            <span>Instagram</span><br>
                            <span>Twitter</span><br>
                            <span>Facebook</span>
                        </div>
                    </div>
                <!-- </div> -->
                
            </div>
            <div class="col-2 border border-dark"></div>
        </div>




        <div class="row mt-5">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                    class="nav-link active"
                    id="nav-about-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-about"
                    type="button"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="true"
                    >
                    About us
                    </button>
                    <button
                    class="nav-link"
                    id="nav-post-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-post"
                    type="button"
                    role="tab"
                    aria-controls="nav-post"
                    aria-selected="false"
                    >
                    Our Posts
                    </button>
                    <button
                    class="nav-link"
                    id="nav-forum-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-forum"
                    type="button"
                    role="tab"
                    aria-controls="nav-forum"
                    aria-selected="false"
                    >
                    Sharing Forum
                    </button>
                </div>
            </nav>
            <div
            class="tab-content"
            id="nav-tabContent"
            style="background-color: white; border-radius: 10px;"
            >
                <div
                    class="tab-pane fade show active"
                    id="nav-about"
                    role="tabpanel"
                    aria-labelledby="nav-about-tab"
                    tabindex="0"
                >
                    <div class="container-fluid">
                        <div class="row mx-auto container-fluid">
                            <p class="h4 mt-4">Vision</p>
                            <p>Spreading kindness to everyone in society. 
                                Empowering every individual to contribute to society
                            </p>
                            <p class="h4 mt-2">Mission</p>
                            <p>Founded in 1958, SG Kindness Centre 
                                engages in various volunteering activities across 
                                the spectrum of society. It has organised more than 3000 
                                activities catering to various causes.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div
            class="tab-content"
            id="nav-tabContent"
            style="background-color: white; border-radius: 10px;"
            >
                <div
                    class="tab-pane fade show active"
                    id="nav-post"
                    role="tabpanel"
                    aria-labelledby="nav-post-tab"
                    tabindex="0"
                >
                    <div class="container-fluid">
                        <div class="row mx-auto container-fluid">
                            <h1>HI</h1>
                            <div
                            v-if="isDateOver"
                            v-for="project in filteredList"
                            :key="project.id"
                            class="mt-4 col d-flex justify-content-start"
                            >
                            <a
                                class="nav-link"
                                :href="'/projectdetails?id=' + project.id"
                            >
                                <div class="card projCard glass">
                                <div
                                    class="card-header projCard-header projCard-image card-image"
                                >
                                    <img
                                    id="card-img"
                                    class="mb-2 rounded"
                                    src="src/assets/pic1.jpg"
                                    />
                                </div>
                                <div class="card-body projCard-body mb-1">
                                    <h5 class="h3">{{ project.proj_name }}</h5>
                                    <h6 class="mt-5 fw-normal opacity-50">
                                    by {{ project.org_name }}
                                    </h6>
                                    <br />
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-calendar"
                                    viewBox="0 0 16 16"
                                    >
                                    <path
                                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                                    />
                                    </svg>
                                    <h6 class="fw-normal">&nbsp;{{ project.proj_date }}</h6>
                                    <br />
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-alarm"
                                    viewBox="0 0 16 16"
                                    >
                                    <path
                                        d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                                    />
                                    <path
                                        d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                                    />
                                    </svg>
                                    <h6 class="fw-normal">
                                    &nbsp;{{ Main.tConvert(project.starttime) }} - {{ Main.tConvert(project.endtime) }}
                                    </h6>
                                    <br />
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-people-fill"
                                    viewBox="0 0 16 16"
                                    >
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                                    />
                                    <path
                                        d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                                    />
                                    </svg>
                                    <h6 class="fw-normal">&nbsp;{{ project.suitability }}</h6>
                                    <br />
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                    >
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                    />
                                    </svg>
                                    <h6 class="fw-normal">
                                    Located in: {{ project.region }}
                                    </h6>
                                    <br />
                                    <!-- <h6 style="font-size: 12px" class="fw-light">
                                    &nbsp;{{ project.total_capacity }}
                                    </h6> -->
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div
            class="tab-content"
            id="nav-tabContent"
            style="background-color: white; border-radius: 10px;"
            >
                <div
                    class="tab-pane fade show active"
                    id="nav-forum"
                    role="tabpanel"
                    aria-labelledby="nav-forum-tab"
                    tabindex="0"
                >
                    <div class="container-fluid">
                        <div class="row mx-auto container-fluid">
                            <div class="mt-4">
                                <p class="h4 fw-light">Recent shares</p>
                            </div>
                            <div class="mt-2 border border-dark rounded-3 border-opacity-25">
                                <div class="ms-2">
                                    <p class="fw-bold h4 mt-3 mt-2">House cleaning</p>
                                    <p>The activity is engaging and I learnt many things than I could otherwise imagine. 
                                        The facilitators were friendly and they will guide us when we are unsure. Will definitely recommend it to others who have not tried it.</p>
                                    <p class="h6 d-flex justify-content-end me-2 mb-3">Kim Lee</p>

                                </div>
                            </div>
                            <div class="mt-2 border border-dark rounded-3 border-opacity-25">
                                <div class="ms-2">
                                    <p class="fw-bold h4 mt-3 mt-2">Elderly Home</p>
                                    <p>An eye-opening experience and we had loads of fun whille doing something meaningful for a few hours.
                                    I wished there were more activities and opportunities to interact with the elderly, but other than that, it was great!</p>
                                    <p class="h6 d-flex justify-content-end me-2 mb-3">Brendan Tan</p>

                                </div>
                            </div>
                            <div class="mt-2 mb-5 border border-dark rounded-3 border-opacity-25">
                                <div class="ms-2">
                                    <p class="fw-bold h4 mt-3 mt-2">Beach Litter Picking</p>
                                    <p>Only went for this activity because my friend dragged me along but it was an enriching experience with other volunteers.
                                    The facilitators were superb and spontaneous which made the whole event lively. Will definitely recommend it to others who have not tried it.</p>
                                    <p class="h6 d-flex justify-content-end me-2 mb-3">Thomas Gan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
            
           
        
    </div>
    <!-- version 1 -->
    <!-- <div class="container-fluid">
        <div class="row">
            <div class="col-xl-3">
                <div class="left_column glass">
                    <div class="img">
                        <img src="src/assets/org_image.png" width="150" height="150">
                    </div>
                    <br><br>
                    <p class="fw-bold">Supported Causes</p>
                    <p>Children & Youth</p>
                    <p>Elderly</p>
                    <p>Families</p>
                    <p>Community</p>
                    <p class="fw-bold">Activities</p>
                    <p>Total submissions posted</p>
                    <p class="fw-bold">Contact Us</p>
                    <p>Email</p>
                    <p>Contact Us</p>
                </div>
            </div>
            
            <div class="col-xl-9">
                <div class="right_column mb-5 align-items-center">
                    <img src="src/assets/org_poster.png" class="img-fluid" >
                </div>

                <div class="tabs right_column">
                    <input type="radio" name="tabs" id="tabone" checked>
                    <label for="tabone">About Us</label>
                    <div class="tab pt-4">
                        <p class="glass" id="about_us_info">
                            Vision <br>
                            Spreading kindness to everyone in society. Empowering every individual to contribute to society <br><br>
                            Mission <br>
                            Founded in 1958, SG Kindness Centre engages in various volunteering activities across the spectrum of society. It has organised more than 3000 activities catering to various causes.
                        </p>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo">
                    <label for="tabtwo" >Our Posts</label>
                    <div class="tab pt-4">
                        <div class="container pt-4 pb-4">
                            <div class="container pb-4">
                                <h4 class="fw-bold col-11">Recommended For You</h4>
                            </div>

                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div class="card glass">
                                        <div class="card-header card-image">
                                            <img src="src/assets/pic1.jpg" class="mb-2 rounded">
                                        </div>
                                        <div class="card-body mb-1">
                                            <h5>House Cleaning for Elderly</h5>
                                            <h6 class="mt-5 fw-normal opacity-50">by Sg Cares Volunteer Centre</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <h6 class="fw-normal">Mon, 3 Oct 2022</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            <h6 class="fw-normal">10:00AM - 12:00PM</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd"
                                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h6 class="fw-normal">Suitable for: All, First-timers, Families, Friends,
                                                Large-Groups
                                            </h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                            <h6 class="fw-normal">Ang Mio Kio</h6>
                                            <br>
                                            <h6 style="font-size: 12px;" class="fw-light">3 openings left</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card glass">
                                        <div class="card-header card-image">
                                            <img src="src/assets/pic1.jpg" class="mb-2 rounded">
                                        </div>
                                        <div class="card-body mb-1">
                                            <h5>House Cleaning for Elderly</h5>
                                            <h6 class="mt-5 fw-normal opacity-50">by Sg Cares Volunteer Centre</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <h6 class="fw-normal">Mon, 3 Oct 2022</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            <h6 class="fw-normal">10:00AM - 12:00PM</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd"
                                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h6 class="fw-normal">Suitable for: All, First-timers, Families, Friends,
                                                Large-Groups
                                            </h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                            <h6 class="fw-normal">Ang Mio Kio</h6>
                                            <br>
                                            <h6 style="font-size: 12px;" class="fw-light">3 openings left</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card glass">
                                        <div class="card-header card-image">
                                            <img src="src/assets/pic1.jpg" class="mb-2 rounded">
                                        </div>
                                        <div class="card-body mb-1">
                                            <h5>House Cleaning for Elderly</h5>
                                            <h6 class="mt-5 fw-normal opacity-50">by Sg Cares Volunteer Centre</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <h6 class="fw-normal">Mon, 3 Oct 2022</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            <h6 class="fw-normal">10:00AM - 12:00PM</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd"
                                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h6 class="fw-normal">Suitable for: All, First-timers, Families, Friends,
                                                Large-Groups
                                            </h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                            <h6 class="fw-normal">Ang Mio Kio</h6>
                                            <br>
                                            <h6 style="font-size: 12px;" class="fw-light">3 openings left</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="tabs" id="tabthree">
                    <label for="tabthree">Experience Sharing Forum</label>
                    <div class="tab pt-4">
                        <div  class="glass" id="sharing_forum">
                            <p style="font-weight: bold">House cleaning</p>
                            <p>The activity is engaging and I learnt many things than I could otherwise imagine. 
                                The facilitators were friendly and they will guide us when we are unsure. Will definitely recommend it to others who have not tried it.</p>
                            <p style="font-weight: bold">Kim Lee</p>
                        </div>
                        <div class="glass" id="sharing_forum">
                            <p style="font-weight: bold">Elderly Home</p>
                            <p>An eye-opening experience and we had loads of fun whille doing something meaningful for a few hours.
                                I wished there were more activities and opportunities to interact with the elderly, but other than that, it was great!</p>
                            <p style="font-weight: bold">Brendan Tan</p>
                        </div>
                        <div class="glass" id="sharing_forum">
                            <p style="font-weight: bold">Beach Litter Picking</p>
                            <p>Only went for this activity because my friend dragged me along but it was an enriching experience with other volunteers.
                                The facilitators were superb and spontaneous which made the whole event lively. Will definitely recommend it to others who have not tried it.</p>
                            <p style="font-weight: bold">Thomas Gan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    

    <!-- version 2 -->
    <div class="container-fluid">
        <div class="row">
                <div class="right_column mb-5 align-items-center">
                    <img src="src/assets/org_poster.png" class="img-fluid" >
                </div>
        </div>

        <div class="row">
            <div class="col-2"></div>

            <div class="col-xl-3">
                <div class="left_column glass">
                    <p class="fw-bold">Supported Causes</p>
                    <p>Children & Youth | Elderly</p>
                    <p>Families | Community</p>
                </div>
            </div>

            <div class="col-xl-2">
                <div class="left_column glass">
                    <p class="fw-bold">Activities</p>
                    <p>This month: 3</p>
                    <p>Next month: 2</p>
                </div>
            </div>

            <div class="col-xl-3">
                <div class="left_column glass">
                    <p class="fw-bold">Contact Us</p>
                    <p>Email: st_sg_volunteer@gmail.com</p>
                    <p>Contact Us: 65 9715 2048</p>
                </div>
            </div>

            <div class="col-2"></div>
        </div>
            
        <div class="row">
            <div class="col-xl-2"></div>
            <div class="col-xl-8">

                <div class="tabs right_column">
                    <input type="radio" name="tabs" id="tabone" checked>
                    <label for="tabone">About Us</label>
                    <div class="tab pt-4">
                        <p class="glass" id="about_us_info">
                            Vision <br>
                            Spreading kindness to everyone in society. Empowering every individual to contribute to society <br><br>
                            Mission <br>
                            Founded in 1958, SG Kindness Centre engages in various volunteering activities across the spectrum of society. It has organised more than 3000 activities catering to various causes.
                        </p>
                    </div>

                    <input type="radio" name="tabs" id="tabtwo">
                    <label for="tabtwo" >Our Posts</label>
                    <div class="tab pt-4">
                        <div class="container pt-4 pb-4">
                            <div class="container pb-4">
                                <h4 class="fw-bold col-11">Recommended For You</h4>
                            </div>

                            <div class="row row-cols-1 row-cols-md-3 g-3">
                                <div class="col">
                                    <div class="card glass">
                                        <div class="card-header card-image">
                                            <img src="src/assets/pic1.jpg" class="mb-2 rounded">
                                        </div>
                                        <div class="card-body mb-1">
                                            <h5>House Cleaning for Elderly</h5>
                                            <h6 class="mt-5 fw-normal opacity-50">by Sg Cares Volunteer Centre</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <h6 class="fw-normal">Mon, 3 Oct 2022</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            <h6 class="fw-normal">10:00AM - 12:00PM</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd"
                                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h6 class="fw-normal">Suitable for: All, First-timers, Families, Friends,
                                                Large-Groups
                                            </h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                            <h6 class="fw-normal">Ang Mio Kio</h6>
                                            <br>
                                            <h6 style="font-size: 12px;" class="fw-light">3 openings left</h6>
                                        </div>
                                        <!-- <div class="card-body">
                                            <h5 class="card-title">Activity 1</h5>
                                            <p>Date & Day of the Week</p>
                                            <p>Time</p>
                                            <p>Suitability</p>
                                            <p>Location</p>
                                            <p>Vacancies Left</p>
                                            <i class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;">See More</i>
                                        </div> -->
                                        
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card glass">
                                        <div class="card-header card-image">
                                            <img src="src/assets/pic1.jpg" class="mb-2 rounded">
                                        </div>
                                        <div class="card-body mb-1">
                                            <h5>House Cleaning for Elderly</h5>
                                            <h6 class="mt-5 fw-normal opacity-50">by Sg Cares Volunteer Centre</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <h6 class="fw-normal">Mon, 3 Oct 2022</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            <h6 class="fw-normal">10:00AM - 12:00PM</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd"
                                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h6 class="fw-normal">Suitable for: All, First-timers, Families, Friends,
                                                Large-Groups
                                            </h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                            <h6 class="fw-normal">Ang Mio Kio</h6>
                                            <br>
                                            <h6 style="font-size: 12px;" class="fw-light">3 openings left</h6>
                                        </div>
                                        <!-- <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p>Date & Day of the Week</p>
                                            <p>Time</p>
                                            <p>Suitability</p>
                                            <p>Location</p>
                                            <p>Vacancies Left</p>
                                            <i class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;">See More</i>
                                        </div> -->
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card glass">
                                        <div class="card-header card-image">
                                            <img src="src/assets/pic1.jpg" class="mb-2 rounded">
                                        </div>
                                        <div class="card-body mb-1">
                                            <h5>House Cleaning for Elderly</h5>
                                            <h6 class="mt-5 fw-normal opacity-50">by Sg Cares Volunteer Centre</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-calendar" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                            </svg>
                                            <h6 class="fw-normal">Mon, 3 Oct 2022</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-alarm" viewBox="0 0 16 16">
                                                <path
                                                    d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                <path
                                                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                            </svg>
                                            <h6 class="fw-normal">10:00AM - 12:00PM</h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd"
                                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h6 class="fw-normal">Suitable for: All, First-timers, Families, Friends,
                                                Large-Groups
                                            </h6>
                                            <br>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                            <h6 class="fw-normal">Ang Mio Kio</h6>
                                            <br>
                                            <h6 style="font-size: 12px;" class="fw-light">3 openings left</h6>
                                        </div>
                                        <!-- <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p>Date & Day of the Week</p>
                                            <p>Time</p>
                                            <p>Suitability</p>
                                            <p>Location</p>
                                            <p>Vacancies Left</p>
                                            <i class="bi-alarm" style="font-size: 1rem; color: cornflowerblue;">See More</i>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="tabs" id="tabthree">
                    <label for="tabthree">Sharing Forum</label>
                    <div class="tab pt-4">
                        <div  class="glass" id="sharing_forum">
                            <p style="font-weight: bold">House cleaning</p>
                            <p>The activity is engaging and I learnt many things than I could otherwise imagine. 
                                The facilitators were friendly and they will guide us when we are unsure. Will definitely recommend it to others who have not tried it.</p>
                            <p style="font-weight: bold">Kim Lee</p>
                        </div>
                        <div class="glass" id="sharing_forum">
                            <p style="font-weight: bold">Elderly Home</p>
                            <p>An eye-opening experience and we had loads of fun whille doing something meaningful for a few hours.
                                I wished there were more activities and opportunities to interact with the elderly, but other than that, it was great!</p>
                            <p style="font-weight: bold">Brendan Tan</p>
                        </div>
                        <div class="glass" id="sharing_forum">
                            <p style="font-weight: bold">Beach Litter Picking</p>
                            <p>Only went for this activity because my friend dragged me along but it was an enriching experience with other volunteers.
                                The facilitators were superb and spontaneous which made the whole event lively. Will definitely recommend it to others who have not tried it.</p>
                            <p style="font-weight: bold">Thomas Gan</p>
                        </div>
                    </div>
                </div>
                <br><br>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
    


</template>

<style scoped>

.banner{
    overflow: hidden;
    max-height: 400px;

}


.left_column,
#sharing_forum {
    /* background-color: rgb(226, 222, 254); */
    border: white inset 2px;
    border-radius: 8px;
    text-align: left;
    padding: 10px;
    /* width: 30%; */
    justify-content: center;
    /* position: relative; */
    margin-top: 4rem;
    background-color: #DFE3FC;
}

.img {
    text-align: center;
    min-width: 3px;
}

.right_column {
    /* width: 60%; */
    border-radius: 8px;
    padding: 8px;
    margin-top: 4rem;
    justify-content: center;
    display: flex;
}

#about_us_info {
    border: 2px inset white;
    border-radius: 15px;
    padding: 0.2cm;
    background-color: #DFE3FC;
}

#bg_img {
    position: fixed;
    min-height: 100px;
    min-width: 1024px;
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
}

.glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.20);
}
.card {
    --padding: 0.8rem;
    border-radius: .25rem;
    overflow: hidden;
    min-width: 300px;
    max-width: 400px;
}

.card-header {
    font-size: 1.5rem;
    padding: var(--padding);
    padding-bottom: 0;
    margin-bottom: .5rem;
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
    font-size: .9rem;
    padding: 0 1rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(114.55deg, #DFE3FC 0%, #E2DFFE 98.46%);
}

.card-footer {
    margin-top: 1rem;
    padding: var(--padding);
    padding-top: 0;
}

h6,
svg {
    display: inline;
}

h3 {
    position: absolute;
}

.a {
    border: 2px solid red;
}

.tabs {
    display: flex;
    flex-wrap: wrap;
}

.tabs label {
    border-bottom: 1px solid ;
    border-radius: 8px;
    order: 1;
    display: flex;
    padding: 1rem 1rem;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    background: #d1d7f6;
    opacity: 0.7;
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
    background: #DFE3FC;
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