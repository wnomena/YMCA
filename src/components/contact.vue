<template>
  <section :class="'row ' + mode.toString()">
    <div style="height: min-content;;" class="col-12 d-flex ">
    <select style="height: fit-content;" @change="() => Store.change()" class="col-3" name="Theme" id="">
      <option class="text-dark bg-light text-center" value="Light">Light</option>
      <option class="text-light bg-dark text-center" value="Dark">Dark</option>
    </select>
</div>        
    <div class="col-lg-4 col-md-6 col-11 m-auto p-3 d-flex align-items-center flex-column">
        <h1 class="m-2 text-center text-danger">
            Inscription
        </h1>
        <div class="col-12">
            <label :class="'col-12 fw-bold ' + mode.toString()" for="Name">Name</label>
            <input :class="'col-12 ' + mode.toString()" type="text" placeholder="Sedraniaina Nomenjanahary">
        </div>
        <div class="col-12 ">
            <label :class="'col-12 fw-bold ' + mode.toString()" for="Mail">Mail</label>
            <input :class="'col-12 ' + mode.toString()" type="text" placeholder="stacks@madafree.dev">
        </div>
        <div class="col-12 ">
            <label :class="'col-12 fw-bold ' +  mode.toString()" for="phone">Phone</label>
            <input :class="'col-12 ' + mode.toString()" type="text" placeholder="+ 26 13 84 84 03 19">
        </div>
        <div class="col-12 line d-flex justify-content-between mt-3">
            <div class="col-5">
                <label :class="'col-12 fw-bold ' + mode.toString()" for="Phone">Profil</label>
                <input class="file border-0" type="file" name="phone" id="" placeholder="06 10 56 35 87">
            </div>
            <div class="col-3 d-flex button">
                <button class="bg-dark rounded fw-bold p-1 text-success">Validate</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Store } from "@/main";

const mode = computed(()=> Store.counte)
</script>

<style scoped>
   div.light {
    background-color: white;
    height: 50px;
  }
  div.dark {
    background-color: black;
    height: 50px;
  }
  .row .col-3 {
    overflow: hidden;
    border-radius: 10px;
  }
  .row .col-3 option:nth-child(1) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .row .col-3 option:nth-child(2) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
    section.light {
        height: 100vh;
    }
    section.dark {
        height: 100vh;
        background-color: black;
    }
    label.light {
        color: black;
    }
    label.dark {
        color: white;
    }
    input.light {
        border: 0;
        border-bottom: 3px solid black;
        outline: none;
        overflow: hidden;
    }
    input.dark {
        border: 0;
        background-color: transparent;
        border-bottom: 3px solid white;
        outline: none;
        overflow: hidden;
        color: white;
    }
    input.file, button {
        border : 0;

    }
    .button {
        flex-direction: column-reverse;
    }
    .line {
        line-height: initial;
    }
</style>