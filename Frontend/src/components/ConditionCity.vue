<script setup lang="ts">
  import { useApi } from "../composables/useApi.ts";

  const { data } = useApi();
  
</script>

<template>
  <section class="boxWrapper">
    <div class="box">
      <div class="boxImg">
        <img :src="data.icon" :alt="data.condition">
      </div>
      <div class="boxCondition">
        <h2 class="boxConditionCity">
          {{ data.city }}
        </h2>
        <p class="boxConditionTempc">
          {{  data.temp_c }} 
        </p>
        <!-- {{ data  }} -->
      </div>
      <div class="boxDescriptions">
        <div class="boxDescriptionsWrapper">
          <p class="boxDescritionTitle">
            Condição
          </p>
          <p class="boxDescritionValue">
            {{  data.condition }}
          </p>
        </div>
        <div class="boxDescriptionsWrapper">
          <p class="boxDescritionTitle">
            Sensação térmica
          </p>
          <p class="boxDescritionValue">
            {{  data.feelslike_c }}
          </p>
        </div>
      </div>
    </div>
  </section>  
</template>

<style scoped src="../styles/ConditionCity.css"></style>
