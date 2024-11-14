let student = +prompt('Студент санын жазыңыз:')
let oqushy = 1
let bagalary = 0

while(student >= oqushy){
    let baga = +prompt(oqushy+ '-Студент бағасын енгізіңіз:')
    bagalary = bagalary + baga
    oqushy++
}
alert('Студенттердің бағаларының орташа мәні:'+ bagalary/student)