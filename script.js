function Mostrar() {

    var nome = document.getElementById("c_nome").value;
    var snome = document.getElementById("c_snome").value;
    var dataNasc = document.getElementById("anoNasc").value;

    var idade = 2023 - dataNasc;

    f1.innerText = (nome + " " + snome);
    f2.innerText = (idade);
}