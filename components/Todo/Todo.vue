<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>Zom 100: Bucket List of the Dead</v-card-title>
    <v-tabs v-model="tab" grow>
      <v-tab key="pending">PENDING</v-tab>
      <v-tab key="completed">COMPLETED</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="pending">
        <TodoItems :items="itemsPending" @click="completeItem" />
      </v-tab-item>
      <v-tab-item key="completed">
        <TodoItems
          :items="itemsCompleted"
          @click="(item) => completeItem(item, false)"
        />
      </v-tab-item>
    </v-tabs-items>
    <v-card-actions>
      <TodoForm @submit="addItem" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: "",
    items: [],
  }),
  computed: {
    itemsCompleted() {
      return this.items.filter((v) => v.completed);
    },
    itemsPending() {
      return this.items.filter((v) => !v.completed);
    },
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    completeItem(item, completed = true) {
      const itemIndex = this.items.findIndex((v) => v.id == item.id);
      if (itemIndex > -1) {
        this.$set(this.items[itemIndex], "completed", completed);
      }
    },
  },
};
</script>