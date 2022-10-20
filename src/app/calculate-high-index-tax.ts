export function CalculateHighIndexTax(grossSalary: number) {
    if (grossSalary > 45000) {
        let x: number = grossSalary - 45000;
        return x * 0.7 + 4500;
    }
    else if (grossSalary > 36000) {
        let x: number = grossSalary - 36000;
        return x * 0.5;
    }
    return 0;
}