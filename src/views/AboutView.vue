<template>
  <div class="about-container">
    <p class="about-title">{{ message }}</p>
    <p class="future-plans">{{ futurePlans }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      message:
        'Welcome to MindSkills – your platform for engaging and challenging quizzes! At MindSkills, we strive to provide a dynamic learning experience by combining entertainment with knowledge. Our quizzes are powered by the Open Trivia Database (opentdb.com), offering a diverse range of questions across various topics.',
      futurePlans:
        "Stay tuned, as we're working on exciting features! In the future, you'll have the ability to tailor your quiz experience. Choose specific subjects, set difficulty levels, and determine the number of questions to suit your preferences. MindSkills is here to make learning enjoyable and customizable just for you.",
      showQuizSettings: false,
    }
  },
}
</script>

<style scoped lang="scss">
/* Sass-styling för AboutView här */

.about-container {
  text-align: left;
  margin-top: 0px;

  /* margin: 20px; */
}

.about-title {
  font-size: 18px;
  font-weight: 500;
  color: #1f4a36;
  margin-bottom: 20px;
}

.future-plans {
  font-size: 16px;
  font-weight: 400;
  color: #1f4a36;
  margin-top: 20px;
}
</style>
