const howOld = (age, year) => {
    const currentYear = 2019;
    const birthYear = currentYear - age; // 1987
    const diff = Math.abs(birthYear - year); // -33
    // const newAge = age + yearDifference; // -1

    if (currentYear - year < 0) {
        return 'You will be ' + newAge + ' in the year ' + year;
    } else if (year < birthYear) {
        return 'The year ' + year + ' was ' + newAge + ' years before you were born';
    } else {
        return 'You were ' + diff + ' in the year ' + year; 
    }

}

howOld(32, 2020); // should be 33
howOld(32, 2015); // should be 28
howOld(32, 1986); // should be -1