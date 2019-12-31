export const toArabic = (num) => {
    return num.toString()
        .replace(/0/g, '٠')
        .replace(/1/g, '١')
        .replace(/2/g, '٢')
        .replace(/3/g, '٣')
        .replace(/4/g, '٤')
        .replace(/5/g, '٥')
        .replace(/6/g, '٦')
        .replace(/7/g, '٧')
        .replace(/8/g, '٨')
        .replace(/9/g, '٩');

}

export const fromArabic = (num) => {
    return num.toString()
        .replace(/٠/g, '0')
        .replace(/١/g, '1')
        .replace(/٢/g, '2')
        .replace(/٣/g, '3')
        .replace(/٤/g, '4')
        .replace(/٥/g, '5')
        .replace(/٦/g, '6')
        .replace(/٧/g, '7')
        .replace(/٨/g, '8')
        .replace(/٩/g, '9');
}

export const toInt = (num) => {
    const res = parseInt(fromArabic(num));

    if (!res || Number.isNaN(res)) {
        return 0;
    }

    return res;
}