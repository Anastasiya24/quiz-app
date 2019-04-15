<template>
  <div id="app">
    <WelcomeScreen v-on:onOpenQuiz="startQuiz" v-if="!openQuiz" />
    <hr>
    <QuestionScreen v-if="openQuiz" />
  </div>
</template>

<script>
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";

export default {
  name: "app",
  data() {
    return {
      openQuiz: false
    };
  },
  methods: {
    startQuiz: function() {
      this.openQuiz = true;
    },
    endQuiz: function() {
      this.openQuiz = false;
    }
  },
  components: {
    WelcomeScreen,
    QuestionScreen
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
