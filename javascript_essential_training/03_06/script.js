/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const fles = {
  name: 'waterfles',
  maxInhoud: 1000,
  inhoud: 0,
  kleur: 'zwart',
  vol: true,

  vul: function (erbij) {
    this.inhoud += erbij;
  }

}
console.log(fles)





console.log("The backpack object:", backpack);
console.log('The pocketNum value:', backpack.pocketNum);
console.log('Strap length left', backpack.strapLength.left);

var query = 'pocketNum';

console.log('The pocketNum with a variable value:', backpack[query]);
