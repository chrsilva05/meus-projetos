let estaBloqueado = process.argv[2] === 'true'; 
 
if (!estaBloqueado) { 
  console.log("Acesso Liberado! Bem-vindo ao sistema."); 
} else { 
  console.log("Acesso Bloqueado! Entre em contato com o suporte."); 
} 
