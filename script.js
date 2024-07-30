document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quizForm');
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Loop through each question group to validate
        for (let i = 1; i <= 16; i++) {
            const radios = document.getElementsByName('q' + i);
            let isAnswered = false;

            for (let j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    isAnswered = true;
                    break;
                }
            }

            if (!isAnswered) {
                isValid = false;
                alert('Please answer all questions.');
                return;
            }
        }

        if (isValid) {
            calculateScore();
        }
    });

    function calculateScore() {
        let totalScore = 0;
        for (let i = 1; i <= 16; i++) {
            const radios = document.getElementsByName('q' + i);
            for (let j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    totalScore += parseInt(radios[j].value);
                    break;
                }
            }
        }

        let grade = '';
        if (totalScore <= 16) {
            grade = 'Needs Improvement';
        } else if (totalScore <= 32) {
            grade = 'Average';
        } else {
            grade = 'Strong';
        }

        // Redirect to result page with score and grade
        window.location.href = `result.html?score=${totalScore}&grade=${grade}`;
    }
});
