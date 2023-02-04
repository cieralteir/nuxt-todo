<template>
  <v-form
    class="d-flex align-center"
    style="width: 100%"
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="name"
      label="Add item here"
      class="pr-2"
    ></v-text-field>
    <v-btn type="submit" :disabled="!name">ADD</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch("todo/add", this.name);
      // Clear input
      this.name = "";
    },
  },
};
</script>