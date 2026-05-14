

import { carLoan } from "./index.mjs";

const loanAmount = 500000;
const interestAmount = 200000;
const years = 5;

const montlyEMI = carLoan(loanAmount, interestAmount, years)

console.log("montlyEMI===>",montlyEMI)


