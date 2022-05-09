// Ésta línea permite importar la clase de app
const MissionCommander = require('./app/missionCommander');

const carlo = new MissionCommander("Carlo")
const pete = new MissionCommander("Pete")
const tony = new MissionCommander("Tony")

console.log(carlo.name)
console.log(pete.name)
console.log(tony.name)