function finalGrade(homework, midterm, final) {
 if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
   return 'You have entered an invalid grade.';
 } else if ((midterm + final + homework)/3 <= 59) { 
   return 'F';
 } else if ((midterm + final + homework)/3 <= 69) { 
   return 'D';
 } else if ((midterm + final + homework)/3 <= 79) {
   return 'C';
 } else if ((midterm + final + homework)/3 <= 89) {
   return 'B';
 } else {
   return 'A';
 }
}

console.log(finalGrade(99, 92, 40))