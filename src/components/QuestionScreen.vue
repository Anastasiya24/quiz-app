<template>
    <div class="question-screen">
        <h1 class="question-screen__question">
            Contrary to popular belief, Lorem Ipsum is not simply random text?
        </h1>  
        <div class="question-screen__slider">
            <div>
                <svg class="question-screen__button-back" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                <p> &lt; </p>
                <p class="question-screen__quiz-switch">Back</p>
            </div>
            <p class="question-screen__quiz-note">
                Select all that apply
            </p>
            <div>
                <svg class="question-screen__button-skip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                <p> &gt; </p>
                <p class="question-screen__quiz-switch">Skip</p>
            </div>
        </div>
        <div class="question-screen__answers">
            <button>0-3 Years</button>
            <button>4-9 Years</button>
            <button>10+ Years</button>
        </div>
        <p class="question-screen__quiz-counter">
            1/6 complete
        </p>
    </div>
</template>

<script>
export default {
    name: 'QuestionScreen'
}
</script>

<style scoped>
    .question-screen {
        background-color: black;
        color: white;
        padding: 50px 70px 20px;
    }
    .question-screen__question {
        font-weight: 550;
        text-transform: uppercase;
    }
    .question-screen__quiz-note,
    .question-screen__quiz-switch,
    .question-screen__quiz-counter {
        font-size: 13px;
        font-style: italic;
    }
    .question-screen__quiz-counter {
        text-align: right;
    }
    .question-screen__slider{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .question-screen__button-back,
    .question-screen__button-skip {
        font-size: 60px;
        margin: 0px;
    }
</style>