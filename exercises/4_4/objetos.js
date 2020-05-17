let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

  console.log("Bem-vinda "+[info.personagem])
  console.log(info.recorrente)

  for(let i in info) {
  console.log(i)
  }

 for(let i in info) {
 console.log(info[i])
 }

 let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

for(let i in info2) {
  console.log(info[i]+" e "+info2[i])
}