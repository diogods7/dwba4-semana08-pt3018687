var nome = new Array();
var p1 = new Array();
var p2 = new Array();
var nf = new Array();

for (var i=0; i<3; i++)
  {
    nome[i]=prompt("Digite o nome do aluno: ");
p1[i]=prompt("Digite a primeira nota do aluno #"+(i+1)+": ");
p2[i]=prompt("Digite a segunda nota do aluno #"+(i+1)+": ");

    nf[i]=(p1[i]*0.6) + (p2[i]*0.4);
  }

for (var i=0; i<3; i++){
alert("Aluno: "+nome[i]+"\nNota final:"+nf[i]);
}


