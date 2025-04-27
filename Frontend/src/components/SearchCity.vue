<script setup lang="ts">
  import { useSearchCity } from "../composables/SearchCity";

  const emit = defineEmits<{
    (e: 'search', city: string): void;
  }>();

const { city, handleSearch } = useSearchCity();

</script>

<template>
  <form
    class="formSearchCity"
    @submit.prevent="handleSearch(emit)"
  >
    <div class="formWrapper">
      <input 
        v-model="city"
        type="text"
        class="searchInput"
        placeholder="Buscar cidade"
        required
      >
      <button class="searchButton" type="submit">
        <img
          src="../assets/search.png"
          alt="Buscar cidade"
        >
      </button>
    </div>
  </form>
</template>

<style scoped src="../styles/Searchcity.css"></style>
