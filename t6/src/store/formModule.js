export const formModule = {
  state: () => ({
    formData: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: ""
    }
  }),
  getters: {
    getFormData(state) {
      return state.formData
    }
  },
  mutations: {
    setFormData(state, formData) {
      state.formData = formData
    },
  },
  namespaced: true
}