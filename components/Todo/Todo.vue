<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>Zom 100: Bucket List of the Dead</v-card-title>
    <v-tabs v-model="tab" grow>
      <v-tab key="pending">PENDING</v-tab>
      <v-tab key="completed">COMPLETED</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="pending">
        <v-card flat>
          <v-card-text>
            <v-checkbox label="Item 1" hide-details></v-checkbox>
            <v-checkbox label="Item 2" hide-details></v-checkbox>
            <v-checkbox label="Item 3" hide-details></v-checkbox>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="completed">
        <v-card flat>
          <v-card-text>
            <v-checkbox label="Item 4" hide-details></v-checkbox>
            <v-checkbox label="Item 5" hide-details></v-checkbox>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-card-actions>
      <v-text-field label="Add item here" class="pr-2"></v-text-field>
      <v-btn>ADD</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: "",
  }),
};
</script>