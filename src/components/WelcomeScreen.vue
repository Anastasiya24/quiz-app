<template>
<div class="main-screen">
    <h1 class="main-screen__header">
        Welcome Screen. Lorem Ipsum is simply dummy text of the printing and typesetting industry!
    </h1>  
    <p class="main-screen__quiz-description">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, you need to be sure there 
        isn't anything embarrassing hidden in the middle of text. 
    </p>  
    <button>Start</button>
    <p class="main-screen__quiz-note">
        It is a long established fact that a reader will be distracted by the readable 
        content of a page when looking at its layout. 
    </p>
</div>
</template>


<script>
export default {
    name: 'WelcomeScreen'
}
</script>

<style scoped>
.main-screen {
    background-color: black
}
.main-screen__header,
.main-screen__quiz-description {
    color: white;
    text-transform: uppercase;
}
.main-screen__header {
    font-weight: 900;
}
.main-screen__quiz-note {
    color: yellow;
    font-style: italic;
}
</style>