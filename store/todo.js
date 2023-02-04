export const state = () => ({
  items: [],
});

export const getters = {
  itemsCompleted(state) {
    return state.items.filter((v) => v.completed);
  },
  itemsPending(state) {
    return state.items.filter((v) => !v.completed);
  },
};

export const mutations = {
  add(state, name) {
    const item = {
      id: Math.random(),
      name,
      completed: false,
    };
    state.items.push(item);
  },
  toggle(state, itemId) {
    const itemIndex = state.items.findIndex((v) => v.id == itemId);
    console.log(itemIndex);
    if (itemIndex > -1) {
      console.log(state.items[itemIndex]);
      state.items[itemIndex].completed = !state.items[itemIndex].completed;
    }
  },
};
