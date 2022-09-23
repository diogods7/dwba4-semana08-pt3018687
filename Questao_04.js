class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
  this.primeiroNome=primeiroNome;
  this.segundoNome=segundoNome;
  this.primeiraNota=primeiraNota;
  this.segundaNota=segundaNota;
  }
  
  nomeCompleto(){
    return this.primeiroNome + " " + this.segundoNome;
  }

  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao(media){
    if(media<6)
      return "Reprovado"; 
    else return "Aprovado";
  }
}

var sala=[5];

var aluno1 = new Aluno("Diogo", "Salgueiro", 8, 7);
sala[0]=aluno1; 
mostrarAluno(aluno1);

var aluno2 = new Aluno("Tayná", "Afonso", 8, 10);
sala[1]=aluno2;
mostrarAluno(aluno2);

var aluno3 = new Aluno("Vanessa", "Pereira", 10, 10);
sala[2]=aluno3;
mostrarAluno(aluno3);

var aluno4 = new Aluno("Pedro", "Gonçalves", 9, 9);
sala[3]=aluno4;
mostrarAluno(aluno4);

var aluno5 = new Aluno("Caio", "Muller", 6, 9);
sala[4]=aluno5;
mostrarAluno(aluno5);


function mostrarAluno(aluno){
  var nome=aluno.nomeCompleto();
  var media=aluno.media();
  var situacao=aluno.situacao(media);
  alert("Nome Completo: " + nome+"\n\nMedia: "+media+" Situacao: " + situacao);
}





