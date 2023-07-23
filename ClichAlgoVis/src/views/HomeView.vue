<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import { make } from "../services/SortableColumnListFactory"

interface SortableColumnStyle {
  style: string,
  numericValue: number
}

let producedSortableColumns: SortableColumnStyle[] = make()

let sortableColumns: Ref<SortableColumnStyle[]> = ref(producedSortableColumns)
shuffleArray(sortableColumns)

function shuffleArray(array: Ref<SortableColumnStyle[]>): void {
  for (var i = array.value.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array.value[i];
    array.value[i] = array.value[j];
    array.value[j] = temp;
  }
}

function mergeSortClick(event : Event): void {
  sortableColumns.value = mergeSort(sortableColumns.value)
}

function mergeSort(m : SortableColumnStyle[]): SortableColumnStyle[] {
    if(m.length <= 1) {
      return m
    }

    let left : SortableColumnStyle[] = []
    let right : SortableColumnStyle[] = []
    m.forEach((x, index) => {
      if(index < (m.length)/2) {
        left.push(x)
      }
      else { 
        right.push(x)
      }      
    });

    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right)
}

function merge(left: SortableColumnStyle[], right: SortableColumnStyle[]): SortableColumnStyle[] {
  let result: SortableColumnStyle[] = []

  while (left.length != 0 && right.length != 0) {
    if (left[0].numericValue <= right[0].numericValue) {
      result.push(left[0])
      left = left.slice(1, left.length - 1)
    }
    else {
      result.push(right[0])
      right = right.slice(1, right.length - 1)
    }

  }

  while (left.length != 0) {
    result.push(left[0])
    left = left.slice(1, left.length - 1)
  }
  while (right.length != 0) {
    result.push(right[0])
    right = right.slice(1, right.length - 1)
  }
  return result
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
    <button class="merge-button" @click="mergeSortClick">Merge Sort</button>
    <button class="reset-button">Reset</button>
  </main>
</template>

<style scoped>
.merge-button {}

.reset-button {}

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
  outline: 4px solid black;
}
</style>