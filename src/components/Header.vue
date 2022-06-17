<template>
    <header>
        <div class="py-3 bg-secondary d-none d-sm-block">
            <h2 class="text-center text-white fs-1 fw-bold text-uppercase">Toluca Arminda</h2>
        </div>
        <div class="d-block d-sm-none">
            <div class="w3-display-container">
                <img src="../assets/slider/slide_01.jpg" alt="Background header" height="120" style="width:100%; object-fit:cover">
                <img class='w3-display-bottomright' src="../assets/logo_arminda-dark.png" alt="Logo" width="120" height="90" style="object-fit:cover">
            </div>
        </div>
    </header>
</template>

<script>
export default {

  name: 'Header'

}
</script>
<style scoped>
    .w3-display-container {
        position:   relative;
    }
    .w3-display-bottomright {
        position:   absolute;
        right:      30px;
        bottom:     -30px;
    }
</style>