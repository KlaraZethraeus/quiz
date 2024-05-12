<!-- DyJ906goehtY5yGcg9yzLZCGQSYCSxE5LQs8Dv5A -->
<template>
  <div class="quiz-question-container">
    <div class="quiz-question">
      <h1 class="quiz-title">{{ quizTitle }}</h1>
      <p class="quiz-description">{{ quizDescription }}</p>
      <ul>
        <li v-for="(question, index) in questions" :key="index">
          <h2 class="question-description">
            {{ parseText(question.question) }}
          </h2>
          <ul>
            <li
              v-for="(answer, answerIndex) in question.answers"
              :key="answerIndex"
            >
              <input
                type="radio"
                :id="'question-' + index + '-answer-' + answerIndex"
                :name="'question-' + index"
                :value="answer"
                v-model="question.selectedAnswer"
                @change="checkAllQuestionsAnswered"
              />
              <label :for="'question-' + index + '-answer-' + answerIndex">
                {{ parseText(answer) }}
              </label>
            </li>
          </ul>
        </li>
      </ul>
      <CorrectAnswers :correct="quizResult" :score="score" />
      <button @click="submitAnswers">Submit Answers</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'
import CorrectAnswers from './CorrectAnswers.vue'
export default {
  name: 'QuizQuestions',
  components: { CorrectAnswers },
  data() {
    return {
      questions: [],
      allQuestionsAnswered: false,
      quizResult: '',
      score: 0,
      quizTitle: 'Quiz',
      quizDescription: '10 random questions',
    }
  },
  created() {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'
      )
      .then((response) => {
        this.questions = response.data.results.map((question) => {
          const answers = question.incorrect_answers
            .concat(question.correct_answer)
            .sort()
          return {
            ...question,
            answers: answers.map((answer) => this.parseText(answer)),
            selectedAnswer: null,
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  },
  computed: {
    ...mapState(['correctAnswers']),
  },
  methods: {
    ...mapMutations(['incrementCorrectAnswers']),
    parseText(text) {
      const specialChars = [
        { regex: /&/g, entity: '&amp;' },
        { regex: /</g, entity: '&lt;' },
        { regex: />/g, entity: '&gt;' },
        { regex: /"/g, entity: '&quot;' },
        { regex: /'/g, entity: '&#39;' },
        { regex: /`/g, entity: '&#96;' },
        { regex: /“/g, entity: '&ldquo;' },
        { regex: /”/g, entity: '&rdquo;' },
        { regex: /‘/g, entity: '&lsquo;' },
        { regex: /’/g, entity: '&rsquo;' },
        { regex: /&amp;#039;/g, entity: "'" },
      ]
      return specialChars.reduce(
        (acc, { regex, entity }) => acc.replace(regex, entity),
        text
      )
    },
    checkAllQuestionsAnswered() {
      this.allQuestionsAnswered = this.questions.every(
        (question) => question.selectedAnswer !== null
      )
    },
    submitAnswers() {
      const score = this.questions.reduce((acc, question) => {
        if (question.selectedAnswer === question.correct_answer) {
          return acc + 1
        } else {
          return acc
        }
      }, 0)
      this.score = score
      this.quizResult = `You scored ${score} out of ${this.questions.length}`
    },
  },
}
</script>

<style lang="scss">
.quiz-question {
  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 10px;
      input[type='radio'] {
        margin-right: 5px;
      }
    }
  }
  button {
    margin-top: 10px;
  }
}
</style>
