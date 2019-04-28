const fs = require('fs');
const path = require('path');
let json = JSON.stringify(obj);

fs.writeFile('fifa_data.json', json, 'utf8',function(err){
  if (err) throw 'error writing file';
  console.log('success');
});

const f = "./fifa_stats.csv";

let playerData = d3.csv(f,function(d){
return {
  id: d.id,
  name: d.name,
  age: d.age,
  player_img: d.player_img,
  nation: d.nation,
  nation_img: d.nation_img,
  rating: d.rating,
  club: d.club,
  club_img: d.club_img,
  value: d.value,
  wage: d.wage,
  foot: d.foot
}
});

console.log(playerData);
