let AnswerSheetItemComponent = {
    template: '#answer-sheet-item-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedAnswer: {
            type: String
        },
        answeredRight:{
            type: Boolean
        }
    },
    methods: {
        select() {
                this.$emit('select', this.name)
            }
        }
}

let QuestionSheetComponent = {
    template: '#show-options-template',
    components: {
        'answer-sheet-item': AnswerSheetItemComponent
    },
    data: function() {
        return {
            question: "Mikä eläin on kuvassa?",
            picture: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
            options:[
                {id:1 , answer: "Mursu" , truth: "false"},
                {id:2 , answer: "Mustekala" , truth: "false"},
                {id:3 , answer: "Kilpikonna" , truth: "true"}
            ],
            selectedAnswer: null,

            answeredRight: false,
            answeredFalse: false
        }
    },
    methods: {
        selectAnswer(answer, truth) {

            if(this.selectedAnswer === null){
                this.selectedAnswer = answer
                if(truth === 'true'){
                    this.answeredRight = true
                    console.log(this.answeredRight)
                } else {
                    this.answeredFalse = true
                }
            }

        }
    }
}

/*
<answer-sheet-item v-for="option in options" :name="option.answer"
@select="selectAnswer" :isSelected="selectedAnswer"></answer-sheet-item>

v-bind:class="{showAnswer: isSelected, showAnswer: painettu}">*/

document.addEventListener("DOMContentLoaded", function() {
    var game = new Vue({
        el: '#tell-me-animal',
        data: {
            title: "Testataan taitoja",
            nayta: true
        },
        components: {
            'question-sheet': QuestionSheetComponent
        },
    })

    game.title = "Arvaa eläin"
});
