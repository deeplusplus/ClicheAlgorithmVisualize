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

function mergeSort(sortableColumnArray: SortableColumnStyle[]) : SortableColumnStyle[] {
  const half = sortableColumnArray.length / 2
  
  if(sortableColumnArray.length < 2){
    return sortableColumnArray 
  }
  
  const left = sortableColumnArray.splice(0, half)
  return merge(mergeSort(left),mergeSort(sortableColumnArray))
}

function merge(leftArray: SortableColumnStyle[], rightArray: SortableColumnStyle[]) {
    let sortableColumnSubArray: SortableColumnStyle[] = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0].numericValue < rightArray[0].numericValue) {
            sortableColumnSubArray.push(leftArray.shift())
        } else {
            sortableColumnSubArray.push(rightArray.shift())
        }
    }
    
    return [ ...sortableColumnSubArray, ...leftArray, ...rightArray ]
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