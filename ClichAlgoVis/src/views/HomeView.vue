<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { make } from "../services/SortableColumnListFactory"

interface SortableColumnStyle {
  style: string,
  numericValue: number
}

let producedSortableColumns : SortableColumnStyle[] = make()

let sortableColumns: Ref<SortableColumnStyle[]> = ref(producedSortableColumns)
shuffleArray(sortableColumns)

function shuffleArray(array: Ref<SortableColumnStyle[]>) {
    for (var i = array.value.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array.value[i];
        array.value[i] = array.value[j];
        array.value[j] = temp;
    }
}

</script>

<template>
  <main>
    <div class="chart-wrap">
      <div class="grid">
        <div v-for="column in sortableColumns" v-bind:key="column.numericValue" class="column-wrap">
          <div class="column" :style="column.style"></div>
        </div>
      </div>
    </div>
    <button>Merge Sort</button>
  </main>
</template>

<style scoped>
.chart-wrap {
  margin: auto;
  height: 200px;
  width: fit-content;
}

.column-wrap {
  display: flex;
  justify-content: flex-end;
  flex-direction: column
}

.column {
  width: 10px;
  background: blue;
}

.grid {
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  outline:4px solid black;
}
</style>