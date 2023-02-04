<template>
  <v-card flat>
    <v-card-text>
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
      this.$store.commit("todo/toggle", item.id);
    },
  },
};
</script>