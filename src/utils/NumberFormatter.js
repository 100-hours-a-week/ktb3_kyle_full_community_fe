export const formatNumber = (number) => {
    if (number < 1000) return number;

    return parseInt((number / 1000).toString()) + "k";
}