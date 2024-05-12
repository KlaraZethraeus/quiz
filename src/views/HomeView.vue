<template>
  <div class="home-container">
    <HeaderNav />
    <h2 class="home-title">{{ title }}</h2>
    <p class="message">{{ message }}</p>
    <p class="pepp">{{ pepp }}</p>
    <QuizQuestions />
  </div>
</template>

<script>
  import QuizQuestions from '../components/QuizQuestions.vue'
  export default {
    name: 'HomeView',
    components: {
      QuizQuestions
    },
    data() {
      return {
        title: 'Test your knowledge',
        message:
          'Fill in the answers to the questions below. When you are ready, press submit at the bottom of the page, and find out how many correct answers you got.',
        pepp: 'Good luck!'
      }
    }
  }
</script>
