import Vue from "vue";
import {
  FETCH_QUIZ_QUESTIONS,
  QUIZ_ADD_ANSWER,
  QUIZ_NEW_ANSWER
} from "./action.type";

const state = {
  quizQuestions: [
    {
      questionId: 1,
      text:
        "Lorem Ipsum has been the industry standard dummy text ever since the 1500s?",
      answers: [
        { answersId: 1, text: "Yes" },
        { answersId: 2, text: "No" },
        { answersId: 3, text: "Maybe" }
      ]
    },
    {
      questionId: 2,
      text:
        "Contrary to popular belief, Lorem Ipsum is not simply random text?",
      answers: [
        { answersId: 1, text: "A" },
        { answersId: 2, text: "B" },
        { answersId: 3, text: "Lorem" }
      ]
    },
    {
      questionId: 3,
      text:
        "All the Lorem Ipsum generators on the Internet tend to repeat?",
      answers: [
        { answersId: 1, text: "first" },
        { answersId: 2, text: "words" },
        { answersId: 3, text: "therefore" }
      ]
    },
  ],
  quizAnswer: []
};

const getters = {
  getQuizQuestions(state) {
    return state.quizQuestions;
  },
  getQuizAnswers(state) {
    return state.quizAnswer;
  }
};

const actions = {
  [FETCH_QUIZ_QUESTIONS]({ commit }, params) {
    commit();
  },
  [QUIZ_ADD_ANSWER]({ commit }, payload) {
    commit(QUIZ_NEW_ANSWER, payload);
  }
};

const mutations = {
  [QUIZ_NEW_ANSWER](state, data) {
    state.quizAnswer = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
