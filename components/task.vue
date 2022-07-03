<template>
  <div
    :key="task.id"
    @dblclick="onCheck(task.id)"
    :class="[task.checked ? 'taskChecked' : '']"
  >
    <b>{{ task.name }}</b>
    <p>{{ task.date }}</p>
    <button @click="onDelete(task.id)">delete</button>
    <button @click="ToggleEditTask">Edit Task</button>
    <EditTask
      v-show="showEditTask"
      @edit-task="ToggleEditTask"
      :editTask="task"
    />
  </div>
</template>

<script>
import EditTask from './editTask.vue'

export default {
  name: 'Task',
  components: {
    EditTask,
  },
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$store.commit('deleteTask', id)
    },
    onCheck(id) {
      this.$store.commit('checkTask', id)
    },
    ToggleEditTask() {
      this.showEditTask = !this.showEditTask
    },
  },
  data() {
    return {
      showEditTask: false,
    }
  },
}
</script>

<style scoped>
div {
  display: flex;
  align-items: flex-start;
  gap: 5%;
}
.taskChecked {
  background: gray;
}
button {
  background: tomato;
}
</style>
