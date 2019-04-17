<template>
  <div class="finish-quiz-screen">
    <div class="finish-quiz-screen__quiz-switch" v-on:click="onRepeatToQuiz">
      <p>&lt;</p>
      <p class="finish-quiz-screen__quiz-switch-text">Back</p>
    </div>
    <div>
      <h1
        class="finish-quiz-screen__header"
      >Finish Screen. All the Lorem Ipsum generators tend to repeat predefined chunks as necessary?</h1>
      <button class="finish-quiz-screen__button" v-on:click="onOpenQuiz">Start over</button>
      <button class="finish-quiz-screen__button">
        <a href="https://summit.nacdonline.org/agenda">Show me</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinishQuizPage",
  methods: {
    onOpenQuiz: function() {
      this.$emit("onOpenQuiz");
    },
    onRepeatToQuiz: function() {
      this.$emit("onRepeatToQuiz");
    }
  }
};
</script>

<style scoped>
.finish-quiz-screen {
  background-color: black;
  color: white;
  padding: 50px 70px 20px;
  display: flex;
}

.finish-quiz-screen__header {
  text-transform: uppercase;
}

.finish-quiz-screen__quiz-switch {
  width: 100px;
  margin: auto;
  cursor: pointer;
}

.finish-quiz-screen__quiz-switch-text {
  font-size: 13px;
  font-style: italic;
}
</style>

