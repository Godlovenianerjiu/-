
// JavaScript 代码
var examDateInput = document.getElementById('examDate');
var totalQuestionsInput = document.getElementById('totalQuestions');
var questionsDoneInput = document.getElementById('questionsDone');
var examDateOption = document.getElementById('examDateOption');
var customDateInput = document.getElementById('customDateInput');
var questionBankInputs = document.querySelectorAll('input[id^="questionBank"]');

// 初始化题库输入框的值
function initQuestionBankInputs() {
    questionBankInputs.forEach(function(input) {
        var storedValue = localStorage.getItem(input.id);
        if (storedValue) {
            input.value = storedValue;
        }
        input.addEventListener('change', function() {
            localStorage.setItem(input.id, input.value);
            updateTotalQuestionsDone();
        });
    });
}

function updateTotalQuestionsDone() {
    var sum = 0;
    questionBankInputs.forEach(function(input) {
        sum += parseInt(input.value) || 0;
    });
    questionsDoneInput.value = sum;
}

function selectDate() {
    var option = examDateOption.value;
    customDateInput.style.display = (option === 'custom') ? 'block' : 'none';
}

window.onload = function() {
    selectDate();
    initQuestionBankInputs();
    // 省略其他内容
};
