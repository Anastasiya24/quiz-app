<template>
  <QuestionSlade
    :question="question"
    :questionsCount="quizQuestions.length"
    :currentQuestionNumber="currentQuestion"
    v-on:onPrevQuestion="prevQuestion"
    v-on:onNextQuestion="nextQuestion"
    v-on:onClickToAnswer="clickToAnswer"
  />
</template>

<script>
import { mapGetters } from "vuex";
import QuestionSlade from "./QuestionSlade";
import { QUIZ_ADD_ANSWER } from "../store/action.type";

export default {
  name: "QuestionScreen",
  data() {
    return {
      // currentQuestion: this.repeatQuiz ? this.quizQuestions.length : 0
      currentQuestion: 0
    };
  },
  props: {
    repeatQuiz: {
      type: Boolean
    }
  },
  computed: {
    question() {
      return this.quizQuestions[this.currentQuestion];
    },
    ...mapGetters({ quizQuestions: "quizQuestions" || [] })
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
    },
    clickToAnswer: function(answer) {
      let questionWithanswer = {
        questionId: this.question.questionId,
        answerId: answer.answerId
      };
      this.$store.dispatch(QUIZ_ADD_ANSWER, questionWithanswer);
    }
  },
  components: {
    QuestionSlade
  }
};
</script>