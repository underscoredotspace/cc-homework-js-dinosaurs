const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park

  const jeff = new Dinosaur('Diplodocus', 'Foliage', 40), 
    jenn = new Dinosaur('Pterodactyl', 'Fish', 30),
    andy = new Dinosaur('T-Rex', 'You, probably', 60)

  beforeEach(function () {
    park = new Park('Park Name', 25)
  })

  it('should have a name', () => {
    assert.strictEqual(park.name, 'Park Name')
  });

  it('should have a ticket price', () => {
    assert.strictEqual(park.ticketPrice, 25)
  });

  it('should have a collection of dinosaurs', () => {
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', () => {
    park.addDinosaur(jeff)
    assert.deepStrictEqual(park.dinosaurs, [jeff])
  });

  it('should be able to remove a dinosaur from its collection', () => {
    const dinos = [jeff, jenn, andy].forEach(dino => park.addDinosaur(dino))

    park.removeDinosaur(jenn)
    assert.deepStrictEqual(park.dinosaurs, [jeff, andy])
  });

  it('should be able to find the dinosaur that attracts the most visitors', () => {
    const dinos = [jeff, jenn, andy].forEach(dino => park.addDinosaur(dino))

    assert.strictEqual(park.findMVD(), andy)
  });

  it('should be able to find all dinosaurs of a particular species', () => {
    const dinos = [jeff, jenn, andy].forEach(dino => park.addDinosaur(dino))

    assert.deepStrictEqual(park.findDinosaurBySpecies('Diplodocus'), [jeff])
  });

  it('should be able to remove all dinosaurs of a particular species', () => {
    const dinos = [jeff, jenn, andy].forEach(dino => park.addDinosaur(dino))
    park.removeDinosaurBySpecies('Pterodactyl')
    
    assert.deepStrictEqual(park.dinosaurs, [jeff, andy])
  });

});
