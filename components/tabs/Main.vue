<template>
  <div class="flex flex-wrap mt-20">
    <div class="w-full">
      <ul class="flex justify-center gap-8 text-gray-400">
        <li class="text-center">
          <button
            class="icon-text text-xl font-bold"
            :class="{
              '': openTab !== 1,
              'text-orange-400 border-b-3 border-orange-400': openTab === 1,
            }"
            @click="toggleTabs(1)"
          >
            <img
              class="w-10"
              src="https://dipex.lv/static/light-icon-active.svg"
              alt=""
            />
            <span>Легковые</span>
          </button>
        </li>
        <li class="text-center">
          <button
            class="icon-text text-xl font-bold"
            :class="{
              '': openTab !== 2,
              'text-orange-400 border-b-3 border-orange-400': openTab === 2,
            }"
            @click="toggleTabs(2)"
          >
            <img
              class="w-10"
              src="https://dipex.lv/static/moto-icon-active.svg"
              alt=""
            />
            <span>Мотоциклы</span>
          </button>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <TabsTabAuto />
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <TabsTabMoto />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
