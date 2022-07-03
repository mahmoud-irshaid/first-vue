<template>
  <main>
    <h1>Home</h1>
    <h3>current Tasks</h3>
    <button @click="ToggleAddTask">Add Task</button>

    <AddTask v-show="showAddTask" />
    <Tasks />

    <NuxtLink to="/about"> to About </NuxtLink>
    <button @click="toContact">to contact</button>
  </main>
</template>

<script>
import Tasks from '../components/tasks.vue'
import AddTask from '../components/addTask.vue'

export default {
  name: 'IndexPage',
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    // deleteTask(id) {
    //   this.tasks = this.tasks.filter((task) => task.id !== id)
    // },
    // checkTask(id) {
    //   this.tasks = this.tasks.map((task) =>
    //     task.id === id ? { ...task, checked: !task.checked } : task
    //   )
    //},
    ToggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    // AddTask(task) {
    //   this.task = this.tasks.push({ ...task, id: this.tasks.length })
    // },
    // setArticals() {
    //   this.$store.commit('setArticals', ['2', '3'])
    // },
    toContact() {
      // this.$router.push({ path: '/contact', params: { data: '+079809' } })
      this.$router.push({ path: `/artical/${5}` })
    },
  },
}
</script>
