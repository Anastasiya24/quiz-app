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
        { answerId: 1, text: "Yes" },
        { answerId: 2, text: "No" },
        { answerId: 3, text: "Maybe" }
      ]
    },
    {
      questionId: 2,
      text:
        "Contrary to popular belief, Lorem Ipsum is not simply random text?",
      answers: [
        { answerId: 1, text: "A" },
        { answerId: 2, text: "B" },
        { answerId: 3, text: "Lorem" }
      ]
    },
    {
      questionId: 3,
      text: "All the Lorem Ipsum generators on the Internet tend to repeat?",
      answers: [
        { answerId: 1, text: "first" },
        { answerId: 2, text: "words" },
        { answerId: 3, text: "therefore" }
      ]
    }
  ],
  quizAnswer: []
};

const getters = {
  quizQuestions(state) {
    return state.quizQuestions;
  },
  getQuizAnswers(state) {
    return state.quizAnswer;
  }
};

const actions = {
  [FETCH_QUIZ_QUESTIONS]({ commit }) {
    commit();
  },
  [QUIZ_ADD_ANSWER]({ commit }, payload) {
    commit(QUIZ_NEW_ANSWER, payload);
  }
};

const mutations = {
  [QUIZ_NEW_ANSWER](state, data) {
    const oldQuizAnswer = Array.from(state.quizAnswer);
    
    // let currentQuestion = oldQuizAnswer.find(
    //   el => el.questionId === data.questionId
    // );
    // if (currentQuestion) {
    //   oldQuizAnswer.filter(el => el.questionId === data.questionId);
    // }
    oldQuizAnswer.push(data);
    state.quizAnswer = oldQuizAnswer;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
