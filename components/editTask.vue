<template>
<div>
 <h1>Edit Task</h1>
 <form @submit.prevent="onSubmit">
    <div>
        <label>Task Name:</label>
        <input type="text" name="name" v-model="editTask.name" @change="onChange"   placeholder="Task Name"/>
    </div>

    <div>
      <label>Task Date:</label>
      <input type="text" name="date" v-model="editTask.date" @change="onChange" placeholder="Task date"/>
    </div>

    <div>
      <input type="submit"/>
    </div>
 </form>
 </div>
</template>

<script>
export default {
  name: 'EditTask',
  props:{
    editTask:Object
  },
  components:{
  },
  data(){
    return{
        EditTask:{
            name:this.editTask.name,
            date:this.editTask.date,
            checked:this.editTask.checked
        }
    }
  },
  methods:{
    onSubmit(){
      this.$emit('edit-task')
    },
    onChange(e){
      this.EditTask={...this.EditTask, [e.target.name]:e.target.value}
    }
  }
}
</script>
<style scoped>
div{
  margin:30px 0
}
</style>
