export const getNumbersArrayFromString = (stringNums: string | null): number[] => {
    return stringNums ? stringNums.split(",").map((id) => +id) : [];
};