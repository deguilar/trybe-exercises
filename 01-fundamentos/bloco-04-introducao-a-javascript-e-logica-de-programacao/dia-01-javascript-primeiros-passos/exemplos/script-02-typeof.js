let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// 1 - Utilize o operador typeof para imprimir qual o tipo das variáveis

console.log(typeof patientId);

console.log(typeof isEnrolled);

console.log(typeof patientInfo);

console.log(typeof patientEmail);

// 2 - O que aconteceria se tentássemos checar qual o tipo da variável patientAge? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined

console.log(typeof patientAge);