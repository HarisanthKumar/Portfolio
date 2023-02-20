// var cont1 = document.querySelector("#cont1");
// var cont3 = document.querySelector("#cont3");
// var float = document.querySelector("#float");
var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");

// function start() {
//     val1 = inp1.value;
//     val2 = inp2.value;
//     console.log(val1, val2);
//     val1 = val1.toLowerCase();
//     val2 = val2.toLowerCase();
//     console.log(val1, val2);
//     if (val1 !== null && val2 !== null&&val1 !== "" && val2 !== "") {
//         check = true;
//         for (x = 0; x < val1.length; x++) {
//             if (val1[x] !== "a" ||
//                 val1[x] !== "b" ||
//                 val1[x] !== "c" ||
//                 val1[x] !== "d" ||
//                 val1[x] !== "e" ||
//                 val1[x] !== "f" ||
//                 val1[x] !== "g" ||
//                 val1[x] !== "h" ||
//                 val1[x] !== "i" ||
//                 val1[x] !== "j" ||
//                 val1[x] !== "k" ||
//                 val1[x] !== "l" ||
//                 val1[x] !== "m" ||
//                 val1[x] !== "n" ||
//                 val1[x] !== "o" ||
//                 val1[x] !== "p" ||
//                 val1[x] !== "q" ||
//                 val1[x] !== "r" ||
//                 val1[x] !== "s" ||
//                 val1[x] !== "t" ||
//                 val1[x] !== "u" ||
//                 val1[x] !== "v" ||
//                 val1[x] !== "w" ||
//                 val1[x] !== "x" ||
//                 val1[x] !== "y" ||
//                 val1[x] !== "z") {
//                 check = false;
//             };
//         };
//         for (y = 0; y < val2.length; y++) {
//             if (val2[y] !== "a" ||
//                 val2[y] !== "b" ||
//                 val2[y] !== "c" ||
//                 val2[y] !== "d" ||
//                 val2[y] !== "e" ||
//                 val2[y] !== "f" ||
//                 val2[y] !== "g" ||
//                 val2[y] !== "h" ||
//                 val2[y] !== "i" ||
//                 val2[y] !== "j" ||
//                 val2[y] !== "k" ||
//                 val2[y] !== "l" ||
//                 val2[y] !== "m" ||
//                 val2[y] !== "n" ||
//                 val2[y] !== "o" ||
//                 val2[y] !== "p" ||
//                 val2[y] !== "q" ||
//                 val2[y] !== "r" ||
//                 val2[y] !== "s" ||
//                 val2[y] !== "t" ||
//                 val2[y] !== "u" ||
//                 val2[y] !== "v" ||
//                 val2[y] !== "w" ||
//                 val2[y] !== "x" ||
//                 val2[y] !== "y" ||
//                 val2[y] !== "z") {
//                 check = false;
//             };
//         };
//         if (check == true) {
//             if (val1.length <= 15 && val2.length <= 15) {
//                 console.log("checked");
//             } else {
//                 modal("Invalid User Input", "Player Name Cannot Exceed 15 Characters", "2");
//             };
//         } else {
//             modal("Invalid User Input", "Player Name Cannot Contain Numbers, Spaces, Symbols Or Special Characters", "2");
//         };
//     } else {
//         modal("Invalid User Input", "Player Name Required", "2");
//     };
// };
// var ln1 = document.querySelector("#name1");
// var ln2 = document.querySelector("#name2");
// var ls1 = document.querySelector("#score1");
// var ls2 = document.querySelector("#score2");
// var player1_s=0;
// var player2_s=0;
// var player1_n="";
// var player2_n="";
// function start_game(val1, val2) {
//     cont1.style.display = "none";
//     float.style.display = "flex";
//     cont3.style.display = "flex";
//     player1_n=val1[0].toUpperCase();
//     for (x=1;x<val1.length-1;x++){
//         player1_n+=val1[x];
//     };
//     player2_n=val2[0].toUpperCase();
//     for (y=1;y<val2.length-1;y++){
//         player2_n+=val2[y];
//     };
//     player1_s=0;
//     player2_s=0;
//     update();
// };
// function update(){
//     ln1.innerHTML=player1_n;
//     ln2.innerHTML=player2_n;
//     ls1.innerHTML=player1_s;
//     ls2.innerHTML=player2_s;
// };