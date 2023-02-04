<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>Zom 100: Bucket List of the Dead</v-card-title>
    <v-tabs v-model="tab" grow>
      <v-tab key="pending">PENDING ({{ itemsPending.length }})</v-tab>
      <v-tab key="completed">COMPLETED ({{ itemsCompleted.length }})</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="pending">
        <TodoItems :items="itemsPending" />
      </v-tab-item>
      <v-tab-item key="completed">
        <TodoItems :items="itemsCompleted" />
      </v-tab-item>
    </v-tabs-items>
    <v-card-actions>
      <TodoForm />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: "",
  }),
  computed: {
    itemsCompleted() {
      return this.$store.getters["todo/itemsCompleted"];
    },
    itemsPending() {
      return this.$store.getters["todo/itemsPending"];
    },
  },
};
</script>