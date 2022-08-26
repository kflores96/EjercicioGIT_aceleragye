// 1.- Condiciones (10 pts)

var Salariosemanal;
var horastrabajadas = 43;
var pagoxhora = 265.00;
var pagoxhora2 = 350.00;

if (horastrabajadas === 40 ){
    Salariosemanal = horastrabajadas * pagoxhora;
    alert ("Tu salario semanal es $" + Salariosemanal);
} else if (horastrabajadas < 40){
    Salariosemanal = horastrabajadas * pagoxhora;
    alert ("Tuviste alguna ausencia y se te desconto $" + Salariosemanal);
} else if (horastrabajadas >= 41){
    Salariosemanal = horastrabajadas * pagoxhora2;
    alert ("El salario semanal mas horas extra es $" + Salariosemanal);
    horastrabajadas ++;
    }else {
        alert ("SIGUE TRABAJANDO CON ANIMOS KARLA");
    }



