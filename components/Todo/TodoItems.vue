<template>
  <v-card flat class="todo-items">
    <v-card-text>
      <v-slide-y-reverse-transition group>
        <v-checkbox
          v-for="item in items"
          :key="item.id"
          :input-value="item.completed"
          hide-details
          @click="() => onCheckboxClick(item)"
        >
          <template #label>
            <div :class="{ 'text-decoration-line-through': item.completed }">
              {{ item.name }}
            </div>
          </template>
        </v-checkbox>
      </v-slide-y-reverse-transition>
      <span v-if="items.length === 0">NO ITEMS</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TodoItems",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onCheckboxClick(item) {
      this.$store.dispatch("todo/toggle", item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-items {
  .v-card__text {
    height: 500px;
    overflow-y: scroll;
  }
}
</style>