<template>
  <div class="question-slade">
    <h1 class="question-slade__question">{{question.text}}</h1>
    <div class="question-slade__slider">
      <div class="question-slade__quiz-switch" v-on:click="onPrevQuestion">
        <svg
          class="question-slade__button-back"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
          <path fill="none" d="M0 0h24v24H0V0z"></path>
        </svg>
        <p>&lt;</p>
        <p class="question-slade__quiz-switch-text">Back</p>
      </div>
      <p class="question-slade__quiz-note">Select all that apply</p>
      <div class="question-slade__quiz-switch" v-on:click="onNextQuestion">
        <svg
          class="question-slade__button-skip"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
          <path fill="none" d="M0 0h24v24H0V0z"></path>
        </svg>
        <p>&gt;</p>
        <p class="question-slade__quiz-switch-text">Skip</p>
      </div>
    </div>
    <div class="question-slade__answers">
      <button v-for="answer of question.answers" :key="answer.answersId">{{answer.text}}</button>
    </div>
    <p
      class="question-slade__quiz-counter"
    >{{currentQuestionNumber + 1}}/{{questionsCount}} complete</p>
  </div>
</template>

<script>
export default {
  name: "QuestionSlade",
  props: {
    question: {
      type: Object,
      required: true
    },
    currentQuestionNumber: {
      type: Number,
      required: true
    },
    questionsCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    onPrevQuestion: function() {
      this.$emit("onPrevQuestion");
    },
    onNextQuestion: function() {
      this.$emit("onNextQuestion");
    }
  }
};
</script>

<style scoped>
.question-slade {
  background-color: black;
  color: white;
  padding: 50px 70px 20px;
}
.question-slade__question {
  font-weight: 550;
  text-transform: uppercase;
}
.question-slade__quiz-note,
.question-slade__quiz-switch-text,
.question-slade__quiz-counter {
  font-size: 13px;
  font-style: italic;
}
.question-slade__quiz-counter {
  text-align: right;
}
.question-slade__quiz-switch {
  cursor: pointer;
}
.question-slade__slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question-slade__button-back,
.question-slade__button-skip {
  font-size: 60px;
  margin: 0px;
}
</style>