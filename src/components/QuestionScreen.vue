<template>
    <div class="question-screen">
        <h1 class="question-screen__question">
            Contrary to popular belief, Lorem Ipsum is not simply random text?
        </h1>  
        <div class="question-screen__slider">
            <div>
                <button>Back</button>
                <p class="question-screen__quiz-switch">Back</p>
            </div>
            <p class="question-screen__quiz-note">
                Select all that apply
            </p>
            <div>
                <button>Skip</button>
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
</style>