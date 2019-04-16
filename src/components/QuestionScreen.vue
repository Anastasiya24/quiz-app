<template>
  <QuestionSlade
    :question="question"
    :questionsCount="quizQuestions.length"
    :currentQuestionNumber="currentQuestion"
    v-on:onPrevQuestion="prevQuestion"
    v-on:onNextQuestion="nextQuestion"
  />
</template>

<script>
import { mapGetters } from "vuex";
import QuestionSlade from "./QuestionSlade";

export default {
  name: "QuestionScreen",
  data() {
    return {
      currentQuestion: 0
    };
  },
  computed: {
    question() {
      return this.quizQuestions[this.currentQuestion];
    },
    ...mapGetters(["quizQuestions"])
  },
  methods: {
    nextQuestion: function() {
      if (this.currentQuestion < this.quizQuestions.length - 1)
        this.currentQuestion++;
      else this.$emit("onFinishQuiz");
    },
    prevQuestion: function() {
      if (this.currentQuestion > 0) this.currentQuestion--;
      else return false;
    }
  },
  components: {
    QuestionSlade
  }
};
</script>