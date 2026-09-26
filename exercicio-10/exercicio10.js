let idade = Number(process.argv[2]); 
let anosComCategoriaB = Number(process.argv[3]); 
 
if (idade >= 19 && anosComCategoriaB >= 1) { 
  console.log("Motorista APTO a tirar a Categoria C!"); 
} else { 
  console.log("Motorista NAO atinge os requisitos para a Categoria C."); 
} 
