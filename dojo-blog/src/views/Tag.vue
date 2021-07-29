<template>
  <div class="tag">
      <div v-if="error">{{error}}</div>
      <div v-if="posts.length" class="layout">
          <PostList :posts="Tposts"/>
          <TagCloud :posts="posts" />
      </div>
      <div v-else>
          <Spinner/>
      </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
import { computed } from 'vue'
import {useRoute} from 'vue-router'

export default {
components: { PostList, Spinner, TagCloud},
  setup(){
    const route = useRoute()
    const {posts,error, load} = getPosts()
    load()

    const Tposts = computed(()=>{
        return posts.value.filter((post)=>post.tags.includes(route.params.tag))
    })

    return { Tposts, error, posts }
  }
}
</script>

<style>
 .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>