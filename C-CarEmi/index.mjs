

export const carLoan = (loanAmount, interestAmount, years) => {


    const totalLoanAmount = loanAmount+interestAmount;

    const totalMonths = years*12;

    const montlyEMI   = totalLoanAmount/totalMonths;

    return montlyEMI
}