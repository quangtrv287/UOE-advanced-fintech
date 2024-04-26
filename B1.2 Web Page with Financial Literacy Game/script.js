function calculateScore() {
    const salary = parseFloat(document.getElementById('salary').value);
    let totalSpending = 0;
    let income = salary;
    const jarInputs = document.querySelectorAll('.jar-inputs input');

    jarInputs.forEach(input => {
        const jarAmount = parseFloat(input.value);
        totalSpending += jarAmount;
    });

    const necessitiesPercent = (totalSpending / salary) * 100;
    const financialFreedomPercent = (document.getElementById('financial-freedom').value / salary) * 100;
    const educationPercent = (document.getElementById('education').value / salary) * 100;
    const longTermSavingsPercent = (document.getElementById('long-term-savings').value / salary) * 100;
    const playPercent = (document.getElementById('play').value / salary) * 100;
    const givePercent = (document.getElementById('give').value / salary) * 100;

    let score = 100;

    if (totalSpending > salary) {
        score = 0;
    } else if (totalSpending < 0.6 * salary) {
        score += 10;
    }

    if (necessitiesPercent > 30) {
        score -= 15;
    } else if (necessitiesPercent > 10) {
        score -= 10;
    } else if (necessitiesPercent > 5) {
        score -= 5;
    }

    if (financialFreedomPercent > 15) {
        score -= 15;
    }

    if (educationPercent > 15) {
        score -= 15;
    }

    if (longTermSavingsPercent > 15) {
        score -= 15;
    }

    if (playPercent > 5) {
        score -= 5;
    }

    if (givePercent > 5) {
        score -= 5;
    }

    if (score < 0) {
        score = 0;
    }

    document.getElementById('total-spending').textContent = totalSpending.toFixed(2);
    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('score').textContent = score;

    displayFeedback(score);
}

function displayFeedback(score) {
    const feedbackElement = document.getElementById('feedback');
    const necessitiesSuggested = "Recommended spending: 50% or less of your income";
    const financialFreedomSuggested = "Recommended spending: 10% or less of your income";
    const educationSuggested = "Recommended spending: 15% or less of your income";
    const longTermSavingsSuggested = "Recommended spending: 15% or less of your income";
    const playSuggested = "Recommended spending: 5% or less of your income";
    const giveSuggested = "Recommended spending: 5% or less of your income";

    let feedback = "";

    if (score <= 0) {
        feedback = "Oops! You've overspent. Try to reduce your expenses next time.";
        feedbackElement.classList.add('error');
    } else if (score < 100) {
        feedback = "You're managing your finances well.";
        feedbackElement.classList.add('success');
    } else {
        feedback = "Great job! You're managing your finances very effectively.";
        feedbackElement.classList.remove('error', 'success');
    }

    feedback += "<br><br>";
    feedback += "<strong>For optimal financial management, consider the following allocations:</strong><br>";
    feedback += "- Necessities: " + necessitiesSuggested + "<br>";
    feedback += "- Financial Freedom Account: " + financialFreedomSuggested + "<br>";
    feedback += "- Education: " + educationSuggested + "<br>";
    feedback += "- Long-term Savings for Spending: " + longTermSavingsSuggested + "<br>";
    feedback += "- Play: " + playSuggested + "<br>";
    feedback += "- Give: " + giveSuggested;

    feedbackElement.innerHTML = feedback;
}
