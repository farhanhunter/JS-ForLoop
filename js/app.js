// for (let index = 20; index >= 0; index--) {
//   console.log("Countdown");
//   console.log(index);
// }

//Dont Try Do This at home
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// const game = [
//   "Valorant",
//   "Counter Strike2",
//   "Apex Legends",
//   "GTA V",
//   "EA SPORTS 2024",
// ];
// for (let index = 0; index < game.length; index++) {
//   const newGame = game[index];
//   console.log(index, newGame);
// }

// const choice = "abcd";
// for (let index1 = 1; index1 <= 10; index1++) {
//   console.log(`${index1} Soal pilihan ganda nomor${index1}`);
//   for (let index2 = 0; index2 < choice.length; index2++) {
//     console.log(` ${choice[index2]}. Pilihan jawabab`);
//   }
// }

const monsterRow = [
  ["Godzila", "King Kong", "M.U.T.O.s"],
  ["Skullcrawlers", "Mother Longlegs", "Leafwings"],
  ["Mothra", "King Ghidorah", "Rodan"],
];

for (let i = 0; i < monsterRow.length; i++) {
  const nameRow = monsterRow[i];
  console.log(`Monster Row # ${i + 1}`);
  for (let j = 0; j < nameRow.length; j++) {
    console.log(`   ${nameRow[j]}`);
  }
}
