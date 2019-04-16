<template>
  <div id="app">
    <WelcomeScreen v-on:onOpenQuiz="startQuiz" v-if="openQuiz==='welcom'"/>
    <QuestionScreen v-else-if="openQuiz==='process'"/>
    <FinishQuizPage v-else-if="openQuiz==='finish'"/>
  </div>
</template>

<script>
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";
import FinishQuizPage from "./components/FinishQuizPage";

export default {
  name: "app",
  data() {
    return {
      openQuiz: "welcom"
    };
  },
  methods: {
    startQuiz: function() {
      this.openQuiz = "process";
    },
    endQuiz: function() {
      this.openQuiz = "finish";
    }
  },
  components: {
    WelcomeScreen,
    QuestionScreen,
    FinishQuizPage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
