export function Bonus(yearsOfExperinece:number) {
    if (yearsOfExperinece >= 11) {
        return 0.6;
    }
    else if (yearsOfExperinece >= 8) {
        return 0.4;
    }
    else if (yearsOfExperinece >= 4) {
        return 0.2;
    }
    else {
        return 0;
    }
}