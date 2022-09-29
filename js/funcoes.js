/* Lê o XML */  
xmlhttp = new XMLHttpRequest();//Instanciação do objeto 
xmlhttp.open("GET", "xml/lista_animes.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;//Informa que o tipo de arquivo é XML
let animes = xmlDoc.getElementsByTagName("anime");//let - variavel para conjunto de dados
var cont = animes.length;//Armazena a quantidade de indices dentro do vetor animes

matriz = new Array;
x = 0;

//MATRIZ DO CAÇA PALAVRAS 16 LINHAS x 22 COLUNAS
matriz = [
    ['N','M','H','D','H','E','H','E','T','B','C','O','W','B','O','Y','B','E','B','O','P','A'],
    ['I','S','E','R','I','A','L','E','X','P','E','R','I','M','E','N','T','S','L','A','I','N'],
    ['D','T','M','E','P','B','O','I','T','I','U','O','H','I','H','N','R','D','D','F','T','A'],
    ['N','T','O','V','A','M','P','I','R','E','H','U','N','T','E','R','H','A','A','N','A','C'],
    ['E','C','N','A','T','H','Y','Y','S','S','N','E','T','N','T','L','I','D','N','A','E','F'],
    ['M','I','S','G','E','N','D','E','S','T','N','A','E','E','N','H','A','W','A','M','S','A'],
    ['U','D','T','U','H','R','R','A','E','N','H','N','S','N','T','O','C','R','N','S','A','E'],
    ['U','T','E','E','O','E','P','R','E','A','I','N','Y','A','A','Y','O','A','R','B','S','D'],
    ['O','P','R','E','Y','O','X','A','H','C','A','P','A','R','A','S','Y','T','E','O','M','E'],
    ['N','G','S','V','H','H','S','O','U','L','E','A','T','E','R','S','R','R','T','L','A','A'],
    ['I','Y','W','C','U','H','T','I','I','I','C','E','G','I','T','N','S','K','N','N','B','T'],
    ['K','E','Y','N','B','W','T','Q','T','H','A','A','A','O','O','E','D','E','P','G','E','T'],
    ['C','S','T','E','L','F','E','N','L','I','E','D','Y','N','R','E','O','U','U','K','A','T'],
    ['P','E','Y','U','Y','U','H','A','K','U','S','H','O','K','U','I','N','O','H','H','R','F'],
    ['R','S','M','E','E','H','T','S','T','H','N','P','T','T','T','O','A','E','O','A','I','P'],
    ['C','N','O','I','L','E','G','N','A','V','E','S','I','S','E','N','E','G','N','O','E','N']
];

//EXIBIÇÃO DOS VALORES DA MATRIZ DENTRO DE UMA <TABLE>
document.write("<table>");
for(linha=0; linha<16; linha++){
    //CRIA UMA NOVA LINHA <TR> A CADA ITERAÇÃO
    document.write("<tr>");
    for(coluna=0; coluna<22; coluna++){
        /*  CRIA UMA NOVA COLUNA <TD> DENTRO DA LINHA A CADA ITERAÇÃO
            X CORRESPONDE AO ID DE CADA <TD> 
        */
        x++;
        document.write("<td id='" + x + "' class='"+ x +"' onclick='funcSelect("+x+")' align='center' >" + matriz[linha][coluna] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//NO FINAL DO LAÇO DE REPETIÇÃO É CHAMADA A FUNÇÃO DE COLORIR A PALAVRA
colorirPalavra();

function funcSelect(x){
    document.getElementById(x).style.border = "1px solid #000";
    letra = document.getElementsByClassName(x)[0].childNodes[0].nodeValue;
    document.getElementById('teste').innerHTML += letra;
    console.log(x);
    console.log(letra);
}

function colorirPalavra(){
    for(i=0; i<=cont-1; i++){
        /*
            parseInt() -> função que converte string para inteiro
            inicial -> recebe o id da primeira letra da palavra armazenada na tag <inicial></inicial> do xml
            final -> recebe o id da ultima letra da palavra armazenada na tag <final></final> do xml
            incremento -> recebe o valor armazenada na tag <incremento></incremento> do xml
        */
        inicial = parseInt(animes[i].getElementsByTagName('inicial')[0].childNodes[0].nodeValue);
        final = parseInt(animes[i].getElementsByTagName('final')[0].childNodes[0].nodeValue);
        incremento = parseInt(animes[i].getElementsByTagName('incremento')[0].childNodes[0].nodeValue);
        console.log("inicial: " + inicial);
        console.log("final: " + final);
        console.log("incremento: " + incremento);

        for(z=inicial; z<=final; z=z+incremento){
            console.log(z);
            document.getElementById(z).style.border = "1px solid #000";
        }
    }
}