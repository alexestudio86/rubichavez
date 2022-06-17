<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/slider/slide_01.jpg" class="d-block w-100" alt="Slide 01" />
            </div>
            <div class="carousel-item">
            <img src="../assets/slider/slide_02.jpg" class="d-block w-100" alt="Slide 02" />
            </div>
            <div class="carousel-item">
            <img src="../assets/slider/slide_03.jpg" class="d-block w-100" alt="Slide 03" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>