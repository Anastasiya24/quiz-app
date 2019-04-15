<template>
  <div id="app">
    <WelcomeScreen />
    <hr/>
    <QuestionScreen />
  </div>
</template>

<script>
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";

export default {
  name: "app",
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
