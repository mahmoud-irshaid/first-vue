const task = {
  namespace: true,
  state: {
    tasks: [
      {
        id: 0,
        name: 'task 1',
        date: '9 jun',
        checked: false,
      },
      {
        id: 1,
        name: 'task 2',
        date: '2 jan',
        checked: false,
      },
    ],
  },
  actions: {},
  mutations: {
    deleteTask(state, payload) {
      return (state.tasks = state.tasks.filter((task) => task.id !== payload))
    },
    checkTask(state, payload) {
      return (state.tasks = state.tasks.map((task) =>
        task.id === payload ? { ...task, checked: !task.checked } : task
      ))
    },
    addTask(state, payload) {
      return state.tasks.push({
        ...payload,
        id: state.tasks.length,
      })
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
  },
}

export default task
