function howOld (age, year) {
    const currentYear = 2019;
    const birthYear = year - age; // 1987
    const yearDifference = year - currentYear; // -33
    const newAge = age + yearDifference; // -1

    if (year > currentYear) {
        return 'You will be ' + newAge + ' in the year ' + year
    } else if (year < currentYear) {
        return 'You were ' + newAge + ' in the year ' + year
    } else if (birthYear < year) {
        return 'The year ' + year + ' was ' + newAge + ' years before you were born'
    }

}

howOld(32, 2020); // should be 33
howOld(32, 2015); // should be 28
howOld(32, 1986); // should be -1