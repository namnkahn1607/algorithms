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

/* binary search variants */
export class BS {
    public static iBS(arr: number[], l: number, r: number, target: number): number {
        while (l <= r) {
            const mid = l + Math.trunc((r - l) / 2);

            if (arr[mid] < target)
                l = mid + 1;
            else if (arr[mid] > target)
                r = mid - 1;
            else
                return mid;
        }

        return -1;
    }

    public static lowerBS(arr: number[], target: number): number {
        let low = 0, high = arr.length;

        while (low < high) {
            const mid = low + Math.trunc((high - low) / 2);

            if (arr[mid] < target)
                low = mid + 1;
            else
                high = mid;
        }

        return low;
    }

    public static upperBS(arr: number[], target: number): number {
        let low = 0, high = arr.length;

        while (low < high) {
            const mid = low + Math.trunc((high - low) / 2);

            if (arr[mid] <= target)
                low = mid + 1;
            else
                high = mid;
        }

        return -1;
    }
}