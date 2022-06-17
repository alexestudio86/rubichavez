<template>
  <article class="col-md-6 p-2" >
    <div class='card p-2'>
      <div class='row'>
        <header class="col-md-9 d-none d-sm-block placeholder-glow">
          <h1 class='fs-4 text-uppercase card-title'>
            <span class="placeholder col-6"></span>
          </h1>
          <span class='fs-5 placeholder col-4'></span>
        </header>
        <div class="col-md-3 placeholder-glow">
          <svg class="bd-placeholder-img placeholder w-100" xmlns='http://www.w3.org/2000/svg' role="img" aria-label="Placeholder" preserveAspectRatio='xMidYMid slice' focusable='false'>
            <title>Placeholder</title>
            <rect width='100%' height='100%' ></rect>
          </svg>
        </div>
        <div class="col-md-9 d-block d-sm-none">
          <div class="row justify-content-between placeholder-glow">
            <div class="col-8">
              <h1 class='m-0 fs-6 fw-bold placeholder col-8'></h1>
            </div>
            <div class="col-4">
              <span class="placeholder col-12"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>

export default {

  name: 'ArticlesPlaceholder'

}
</script>