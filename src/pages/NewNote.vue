<template>
  <div class="m-newnote">
    <NoteItem item="data"></NoteItem>
  </div>
</template>
<script>
import NoteItem from '@/components/NoteItem'

export default {
  components: {
    NoteItem
  },
  data () {
    return {
      data: {
        title: '',
        content: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.m-newnote {
  height: 100%;
}
</style>
