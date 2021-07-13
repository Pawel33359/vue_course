<template>
  <h1>{{title}}</h1>
  <p>Welcome</p>
  <teleport to=".modals" v-if="showModal">
    <!--lesson 27<Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>-->
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
        <h1>Ninja!</h1>
        <p>Long TEXT</p>
      </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
      <Modal theme="ads" @close="toggleModalTwo">
        <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      </Modal>
  </teleport>
  <button @click="toggleModal">open Modal</button>
  <button @click="toggleModalTwo">open Modal2</button>
  <!-- lesson22
    <input type="text" ref="name">
  <button @click="handleClick">click me</button>-->
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      title: 'My First Vue App :)',
      /*header: 'Sign up for the Giveaway',
      text: 'Long text',*/
      showModal: false,
      showModalTwo: false
    }
  },
  methods:{
    /* lesson22
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }*/
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
