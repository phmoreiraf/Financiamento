const calculate = document.getElementById('calcular');

function calculateFinance() {
    const name = document.getElementById('name').value;
    const monthlyIncome = document.getElementById('monthlyIncome').value;
    const itemValue = document.getElementById('itemValue').value;
    const entranceValue = document.getElementById('entranceValue').value;
    const interestRate = document.getElementById('interestRate').value;
    const installmentNumber = document.getElementById('installmentNumber').value;
    const resultText = document.getElementById('resultText');

    if (
        name !== '' &&
        monthlyIncome !== '' &&
        itemValue !== '' &&
        entranceValue !== '' &&
        interestRate !== '' &&
        installmentNumber !== ''
    ) {
        const amountToBeFinanced = itemValue - entranceValue;
        const maximumAmountInstallment = monthlyIncome * 0.3;

        const monthlyInstallmentAmount =
            amountToBeFinanced *
            (((1 + interestRate / 100) ** installmentNumber * interestRate) /
                ((1 + interestRate / 100) ** installmentNumber - 1));

        if (monthlyInstallmentAmount >= maximumAmountInstallment) {
            resultName.textContent = `Olá, ${name}!`;
            resultText.textContent = `Você não está apto para receber o financiamento.
                                O limite da sua parcela é de R$${maximumAmountInstallment}`;
        } else {
            resultName.textContent = `Olá, ${name}!`;
            resultText.textContent = `Você está apto para receber o financiamento.
                                O valor da sua parcela mensal é de R$${maximumAmountInstallment}`;
        }
    } else {
        // Caso o usuario não preencha os input's limpar o resultName e resultText e no result informar o problema
        result.textContent =
            'Para calcular o seu financiamento, preencha todos os campos.';

        resultName.textContent = '';
        resultText.textContent = '';
    }
}

calculate.addEventListener('click', calculateFinance);
