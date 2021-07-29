<template>
  <div class="home">
<h1>Home</h1>
<!--<p>My name is {{name}} and my age is {{age}}</p>
<button @click="handleClick">click me</button>
<button @click="age++">add 1 to age</button>
<input type="text" v-model="name">-->

<!-- lesson74
  <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>-->

<!-- lesson76
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
        {{name}}
    </div>
    <button @click="handleClick">stop watching</button>-->


  <PostList v-if="showPosts" :posts="posts" />
  <button @click="showPosts=!showPosts">toggle posts</button>
  <button @click="posts.pop()">delete a post</button>

  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'

import PostList from '../components/PostList.vue'


export default {
  name: 'Home',
  components: { PostList },
  setup(){
    /*console.log('setup')

    //const p = ref(null)

    //let name = 'mario'
    //let age = 30

    const name = ref('mario')
    const age = ref(30)

    const handleClick = ()=>{
     // console.log(p, p.value)
     // p.value.classList.add('test')
     // p.value.textContent ="hello,ninjas"
      name.value = 'luigi'
      age.value = 35
    }
    return {name, age, handleClick 
    //,p
    }*/

    /*
    lesson74
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })
    // reactive cannot be used on primitive values
    const nameOne = ref('mario') // will be reactive
    const nameTwo = reactive('luigi') // will NOT be reactive
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }
    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo }*/

    /*
    lesson76
    const search=ref('')
    const names=ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    
    const stopWatch = watch(search, ()=> {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(()=>{
      console.log('watchEffect function ran',search.value)
    })

    const matchingNames=computed(()=>{
      return names.value.filter((name)=>name.includes(search.value))
    })

    const handleClick=()=>{
      stopWatch()
      stopEffect()
    }

    return {matchingNames, search, names, handleClick}
    */


   const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 1 },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
    ])
    
    const showPosts = ref(true)

    return { posts, showPosts }

  }
}
</script>
