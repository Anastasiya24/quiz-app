<template>
  <div id="app">
    <WelcomeScreen v-on:onOpenQuiz="startQuiz" v-if="openQuiz==='welcom'"/>
    <QuestionScreen
      v-else-if="openQuiz==='process'"
      v-on:onFinishQuiz="endQuiz"
      :repeatQuiz="repeatQuiz"
    />
    <FinishQuizPage
      v-else-if="openQuiz==='finish'"
      v-on:onOpenQuiz="startQuiz"
      v-on:onRepeatToQuiz="repeatToQuiz"
    />
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
      openQuiz: "welcom",
      repeatQuiz: false
    };
  },
  methods: {
    startQuiz: function() {
      this.openQuiz = "process";
    },
    endQuiz: function() {
      this.openQuiz = "finish";
    },
    repeatToQuiz: function() {
      this.repeatQuiz = true;
      this.openQuiz = "process";
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
