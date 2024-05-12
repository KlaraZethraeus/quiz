<template>
  <div>
    <p v-if="score >= 7">Good work</p>
    {{ correct }}
  </div>
</template>

<script>
  export default {
    props: {
      correct: {
        type: String,
        required: true,
        default: 'hej'
      },
      score: {
        type: Number,
        required: true,
        default: 0
      }
    },
    created() {
      console.log(this.score)
    }
  }
</script>
