<template>
  <div
    class="mt-5 mb-6 rounded-md shadow-md text-sm font-medium text-center text-gray-500 bg-white"
  >
    <ul class="flex flex-wrap -mb-px ml-2">
      <li class="mr-2" v-for="(tab, tabIndex) in tabs" :key="tabIndex">
        <button
          :class="[
            tabIndex == activeTab
              ? 'inline-block p-4 text-amber-600 border-b-2 border-amber-600 rounded-t-lg active dark:text-amber-500 dark:border-amber-500'
              : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
          ]"
          @click="chengeTab(tabIndex)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>
  </div>
  <div class="tab-content rounded-md">
      <div :class="{ hidden: activeTab !== 0, block: activeTab === 0 }">
        <div class="flex gap-5">
          <div class="w-3/12">
            <BaseProductFilter />
          </div>
          <div class="w-9/12">
            <BaseProductList />
          </div>
        </div>
      </div>
      <div :class="{ hidden: activeTab !== 1, block: activeTab === 1 }">
test 1 
      </div>
      <div :class="{ hidden: activeTab !== 2, block: activeTab === 3 }">
test3
      </div>
  </div>
</template>

<script setup lang="ts">
const tabs = ref(["ЗАМЕНИТЕЛИ", "OEM НОМЕРА", "ПРИМЕНЯЕТСЯ К МОДЕЛИ"]);
const activeTab = ref(0);

const chengeTab = (indexTab: number) => (activeTab.value = indexTab);
</script>
