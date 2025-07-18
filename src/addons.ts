/* check if a char, throw invalid argument */
export function checkIfChar(c: string): void {
    if (c.length !== 1)
        throw new Error("invalid argument: non-char");
}

/* check if a char is an alphabet one */
export function isAlpha(c: string): boolean {
    checkIfChar(c);

    return /^[a-z]$/i.test(c);
}

/* check if a char is a lowercase alphabet one */
export function isLower(c: string): boolean {
    checkIfChar(c);

    return /^[a-z]$/.test(c);
}

/* check if a char is an uppercase alphabet one */
export function isUpper(c: string): boolean {
    checkIfChar(c);

    return /^[A-Z]$/.test(c);
}

/* check if a char is a digit */
export function isDigit(c: string): boolean {
    checkIfChar(c);

    return /^[0-9]$/.test(c);
}

/* check if a char is alphanumeric one */
export function isAlNum(c: string): boolean {
    checkIfChar(c);

    return /^[a-z0-9]$/i.test(c);
}

/* check if a string range is strict palindrome */
export function palindrome(str: string, l: number, r: number): boolean {
    while (l < r) {
        if (str[l] !== str[r])
            return false;

        ++l; --r;
    }

    return true;
}