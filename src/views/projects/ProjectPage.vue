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

    <div class="pt-5 px-5 week edition">
        <div class="container-fluid">
            <div class="row">
                <div class="col"></div>
                <!-- col-sm-12 col-md-6 -->
                <div class="col-sm-12 ">
                    <!-- <div class="row py-3">
                        <h3 class="text-center">Other Portfolios</h3>
                    </div> -->
                    <h3 class="row fw-bold text-dark">Happening This Week </h3>
                        <br>
                    <div class="row mx-auto container-fluid">
                        <!-- First Card -->
                        <div class="mt-4 col d-flex justify-content-center">
                            <div class="card glass">
                                <div class="card-header card-image">
                                    <img id="card-img" class="mb-2 rounded" src="../../assets/pic1.jpg" />
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
                        <!-- End of First Card -->
                        <!-- second Card -->
                        <div class="mt-4 col d-flex justify-content-center">
                            <div class="card glass">
                                <div class="card-header card-image">
                                    <img id="card-img" class="mb-2 rounded" src="../../assets/pic1.jpg" />
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
                        <!-- End of second Card -->
                        <!-- third Card -->
                        <div class="mt-4 col d-flex justify-content-center">
                            <div class="card glass">
                                <div class="card-header card-image">
                                    <img id="card-img" class="mb-2 rounded" src="../../assets/pic1.jpg" />
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
                        <!-- End of third Card -->
                    </div>
                </div>
                <div class="col"></div>
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
    /* align-items: flex-start; */
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
    border: 2px solid red
}
</style>