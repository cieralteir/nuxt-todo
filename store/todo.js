export const state = () => ({
  items: localStorage.getItem("todoItems")
    ? JSON.parse(localStorage.getItem("todoItems"))
    : [],
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
    if (itemIndex > -1) {
      state.items[itemIndex].completed = !state.items[itemIndex].completed;
    }
  },
  // Can use vuex-persist instead
  saveToLocal(state) {
    localStorage.setItem("todoItems", JSON.stringify(state.items));
  },
};

export const actions = {
  add({ commit }, name) {
    commit("add", name);
    commit("saveToLocal");
  },
  toggle({ commit }, itemId) {
    commit("toggle", itemId);
    commit("saveToLocal");
  },
};
