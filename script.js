function calcularNotas(){
    if(document.getElementById('n1')==""){
        alert('Campo Vazio');
    } else {
        const n1 = parseFloat(document.getElementById('n1').value);

        if (n1 < 0 || n1 > 10 || n1==""){
            alert('Digite um valor válido entre 0 e 10!');
            document.getElementById('n1').focus();
        } else {
            const aprovacao = (15 - n1)/2;    
        
            if (aprovacao > 10){
                document.getElementById('aprovacao').innerHTML = ("Improvável");
            } else {
                document.getElementById('aprovacao').innerHTML = aprovacao.toFixed(2);
            }    

            const recuperacao = (9 - n1)/2;
            if (recuperacao < 0){
                document.getElementById('recuperacao').innerHTML = ("Improvável");
            } else {
                document.getElementById('recuperacao').innerHTML = recuperacao.toFixed(2);
            }
            
            const reprovacao = recuperacao - 0.5;
            if (reprovacao >= 1){
                document.getElementById('reprovacao').innerHTML = reprovacao.toFixed(2);
            } else {
                document.getElementById('reprovacao').innerHTML = ("Improvável");
            }
        }
    
    }
    
    
        
}