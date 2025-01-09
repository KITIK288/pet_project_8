function calculate() {

    // расчет ипотеки для аннуитетных платежей

    const sum = document.getElementById('cost').value; // сумма займа
    const contribution = document.getElementById('contribution').value; // первоначальный взнос
    const years = document.getElementById('years').value; // срок на который берётся кредит
    const annualRate = document.getElementById('annualRate').value; // процентная ставка

    if (sum === "" || contribution === "" || years === "" || annualRate === "") {
        alert("Введите корректные значения в поля ввода");
    }

    const sumCredit = sum - contribution; // сумма итогового кредита
    document.getElementById('sumCredit-result-0').innerText = `Сумма кредита:`;
    document.getElementById('sumCredit-result').innerText = `${sumCredit}₽`;

    const monthlyRate = annualRate / 12 / 100; // ежемесячная процентная ставка

    const loanTermInMonths = years * 12; // срок кредитования в месяцах

    const totalRate = (1 + monthlyRate) ** loanTermInMonths; // общая ставка

    const monthlyPayment = (sumCredit * monthlyRate * totalRate / (totalRate - 1)).toFixed(0); // ежемесячный платёж
    document.getElementById("monthlyPayment-result-0").innerText = `Ежемесячный платеж: `
    document.getElementById('monthlyPayment-result').innerText = `${monthlyPayment}₽`;

    const overpayment = monthlyPayment * loanTermInMonths - sumCredit; // переплата
    document.getElementById("overpayment-result-0").innerText = `Переплата: `;
    document.getElementById("overpayment-result").innerText = `${overpayment}₽`;

}
