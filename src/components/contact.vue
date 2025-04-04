<template>
  <section class="row">
    <div class="col-lg-4 col-md-6 col-11 m-auto p-3">
        <h1 class="m-2 text-center text-danger">
            Inscription
        </h1>
        <div class="col-12">
            <label class="col-12 fw-bold" for="Name">Name</label>
            <input class="col-12" type="text" placeholder="Sedraniaina Nomenjanahary">
        </div>
        <div class="col-12 ">
            <label class="col-12 fw-bold" for="Mail">Mail</label>
            <input class="col-12" type="text" placeholder="stacks@madafree.dev">
        </div>
        <div class="col-12 ">
            <label class="col-12 fw-bold" for="phone">Phone</label>
            <input class="col-12" type="text" placeholder="+ 26 13 84 84 03 19">
        </div>
        <div class="col-12 line d-flex justify-content-between mt-3">
            <div class="col-5">
                <label class="col-12 fw-bold" for="Phone">Profil</label>
                <input class="file border-0" type="file" name="phone" id="" placeholder="06 10 56 35 87">
            </div>
            <div class="col-3 d-flex">
                <button class="bg-dark rounded fw-bold p-1 text-success">Validate</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    .row .col-4 {
        line-height: 40px;
    }
    input {
        border: 0;
        border-bottom: 3px solid black;
        outline: none;
        overflow: hidden;
    }
    input.file, button {
        border : 0;

    }
    .col-3 {
        flex-direction: column-reverse;
    }
    .line {
        line-height: initial;
    }
</style>