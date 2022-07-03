<template>
  <div>
    <h1>Add Task</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          name="name"
          v-model="NewTask.name"
          @change="onChange"
          placeholder="Task Name"
        />
      </div>

      <div>
        <label>Task Date:</label>
        <input
          type="text"
          name="date"
          v-model="NewTask.date"
          @change="onChange"
          placeholder="Task date"
        />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  components: {},
  data() {
    return {
      NewTask: {
        name: '',
        date: '',
        checked: false,
      },
    }
  },
  methods: {
    onSubmit(e) {
      this.$store.commit('addTask', this.NewTask)
    },
    onChange(e) {
      this.NewTask = { ...this.NewTask, [e.target.name]: e.target.value }
    },
  },
}
</script>
<style scoped>
div {
  margin: 30px 0;
}
</style>
