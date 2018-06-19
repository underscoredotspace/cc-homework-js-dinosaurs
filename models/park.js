const Park = function(name, ticketPrice) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
  // this.dinosaurs = this.dinosaurs.filter(d => d!==dinosaur)

  // *boak*
  for (let ndx=this.dinosaurs.length-1; ndx>0; ndx--) {
    const dino = this.dinosaurs[ndx]
    if (dino === dinosaur) {
      this.dinosaurs.splice(ndx,1)
    }
  }
}

Park.prototype.findMVD = function() {
  // return this.dinosaurs.reduce((mvd, dinosaur) => {
  //   if (!mvd || dinosaur.guestsAttractedPerDay > mvd.guestsAttractedPerDay) {
  //     return dinosaur
  //   }
  // })

  let mvd = null

  for (const dinosaur of this.dinosaurs) {
    if (!mvd || dinosaur.guestsAttractedPerDay > mvd.guestsAttractedPerDay) {
      mvd = dinosaur
    }
  }

  return mvd
}

Park.prototype.findDinosaurBySpecies = function(species) {
  // return this.dinosaurs.filter(dinosaur => dinosaur.species===species)

  let dinosaursOfSpecies = []

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species===species) {
      dinosaursOfSpecies.push(dinosaur)
    }
  }

  return dinosaursOfSpecies
}

Park.prototype.removeDinosaurBySpecies = function(species) {
  for (const dinosaur of this.findDinosaurBySpecies(species)) {
    this.removeDinosaur(dinosaur)
  }
}

module.exports = Park