'use strict';

/*
  Homework Assignment #12: Object Oriented Programming

*/

// Vehicle class

function Vehicle(make, model, year, weight) {
  this.Make = make;
  this.Model = model;
  this.Year = year;
  this.Weight = weight;
  // this.NeedsMaintenance = false;
  // this.TripsSinceMaintenance = 0;
}

Vehicle.prototype.getMake = (obj) => {
  return obj.Make;
}

Vehicle.prototype.setMake = (obj, make) => {
  obj.Make = make;
}

Vehicle.prototype.getModel = (obj) => {
  return obj.Model;
}

Vehicle.prototype.setModel = (obj, model) => {
  obj.Model = model;
}

Vehicle.prototype.getYear = (obj) => {
  return obj.Year;
}

Vehicle.prototype.setYear = (obj, year) => {
  obj.Year = year;
}

Vehicle.prototype.getWeight = (obj) => {
  return obj.Weight;
}

Vehicle.prototype.setWeight = (obj, weight) => {
  obj.Weight = weight;
}

// Cars class

function Cars(make, model, year, weight) {
  Vehicle.call(this, make, model, year, weight);
  this.isDriving = false;
  this.NeedsMaintenance = false;
  this.TripsSinceMaintenance = 0;
}

Cars.prototype = Object.create(Vehicle.prototype);

Cars.prototype.getNeedsMaintenance = (obj) => {
  return obj.NeedsMaintenance;
}

Cars.prototype.getTripsSinceMaintenance = (obj) => {
  return obj.TripsSinceMaintenance;
}

Cars.prototype.Drive = (obj) => {

  if (obj.getTripsSinceMaintenance(obj) > 100) {
    obj.NeedsMaintenance = true;
  } else {
      obj.isDriving = true;
      obj.TripsSinceMaintenance += 1;
    }
}

Cars.prototype.Stop = (obj) => {
  obj.isDriving = false;
}

Cars.prototype.Repair = (obj) => {
  obj.TripsSinceMaintenance = 0;
  obj.NeedsMaintenance = false;
}


  // creating cars
  // Car #1
  const car1 = new Cars('BMW', '330i xDrive sedan', 2018, 1681);

    for (let i=0; i<62; i++) {
      car1.Drive(car1);
      car1.Stop(car1);
    }
  
  console.log(`car #1: ${car1.getMake(car1)} ${car1.getModel(car1)} (${car1.getYear(car1)}):`);
  console.log(`weights ${car1.getWeight(car1)} kg`);
  console.log(`number of trips: ${Cars.prototype.getTripsSinceMaintenance(car1)}`);
  console.log(`... and needs repairs? ${Cars.prototype.getNeedsMaintenance(car1)}`);
  

  // Car #2
  const car2 = new Cars('BMW', '340i xDrive GT', 2017, 1861);

    for (let i=0; i<115; i++) {
      car2.Drive(car2);
      car2.Stop(car2);
    }
  
  console.log(`car #2: ${car2.getMake(car2)} ${car2.getModel(car2)} (${car2.getYear(car2)}):`);
  console.log(`weights ${car2.getWeight(car2)} kg`);
  console.log(`number of trips: ${car2.getTripsSinceMaintenance(car2)}`);
  console.log(`... and needs repairs? ${car2.getNeedsMaintenance(car2)}`);
  
  
  // Car #3
  const car3 = new Cars('BMW', '330i xDrive touring wagon', 2017, 1754);

    for (let i=0; i<125; i++) {

      if (car3.getNeedsMaintenance) { car3.Repair(car3); }
      car3.Drive(car3);
      car3.Stop(car3);
    }
  
  console.log(`car #3: ${car3.getMake(car3)} ${car3.getModel(car3)} (${car3.getYear(car3)}):`);
  console.log(`weights ${car3.getWeight(car3)} kg`);
  console.log(`number of trips: ${Cars.prototype.getTripsSinceMaintenance(car3)}`);
  console.log(`... and needs repairs? ${Cars.prototype.getNeedsMaintenance(car3)}`);
  console.log('====');
    
    
  // Extra credit

  // Planes class
  function Planes(make, model, year, weight) {
    Vehicle.call(this, make, model, year, weight);
    this.isFlying = false;
    this.NeedsMaintenance = false;
    this.TripsSinceMaintenance = 0;
  }

  Planes.prototype = Object.create(Vehicle.prototype);

  Planes.prototype = Object.create(Vehicle.prototype);
  
  Planes.prototype.getNeedsMaintenance = (obj) => {
    return obj.NeedsMaintenance;
  }
  
  Planes.prototype.getTripsSinceMaintenance = (obj) => {
    return obj.TripsSinceMaintenance;
  }
  
  Planes.prototype.Fly = (obj) => {
  
    if (obj.getTripsSinceMaintenance(obj) > 100) {
      obj.NeedsMaintenance = true;
      console.log('You need to repair plane before next flight.');
      return false;
    } else {
        obj.isFlying = true;
        obj.TripsSinceMaintenance += 1;
      }
  }
  
  Planes.prototype.Land = (obj) => {
    obj.isDriving = false;
  }
  
  Planes.prototype.Repair = (obj) => {
    obj.TripsSinceMaintenance = 0;
    obj.NeedsMaintenance = false;
  }


  // Plane #1
  const plane1 = new Planes('Cessna', '172 Skyhawk', 2018, 998);

    for (let i=0; i<21; i++) {

      if (plane1.getNeedsMaintenance) { plane1.Repair(plane1); }
      plane1.Fly(plane1);
      plane1.Land(plane1);
    }
  
  console.log(`plane #: ${plane1.getMake(plane1)} ${plane1.getModel(plane1)} (${plane1.getYear(plane1)}):`);
  console.log(`weights ${plane1.getWeight(plane1)} kg`);
  console.log(`number of trips: ${Cars.prototype.getTripsSinceMaintenance(plane1)}`);
  console.log(`... and needs repairs? ${Cars.prototype.getNeedsMaintenance(plane1)}`);


  // Plane #2
  const plane2 = new Planes('Cessna', '172 Skyhawk', 2016, 998);

    for (let i=0; i<113; i++) {

      // if (plane2.getNeedsMaintenance) { plane2.Repair(plane2); }
      plane2.Fly(plane2);
      plane2.Land(plane2);
    }
  
    console.log(`plane #: ${plane2.getMake(plane2)} ${plane2.getModel(plane2)} (${plane2.getYear(plane2)}):`);
    console.log(`weights ${plane2.getWeight(plane2)} kg`);
    console.log(`number of trips: ${Cars.prototype.getTripsSinceMaintenance(plane2)}`);
    console.log(`... and needs repairs? ${Cars.prototype.getNeedsMaintenance(plane2)}`);


    // Plane #3
    const plane3 = new Planes('Cessna', '172 Skyhawk', 2017, 998);
  
      for (let i=0; i<131; i++) {
  
        if (plane3.getNeedsMaintenance) { plane3.Repair(plane3); }
        plane3.Fly(plane3);
        plane3.Land(plane3);
      }
    
      console.log(`plane #: ${plane3.getMake(plane3)} ${plane3.getModel(plane3)} (${plane3.getYear(plane3)}):`);
      console.log(`weights ${plane3.getWeight(plane3)} kg`);
      console.log(`number of trips: ${Cars.prototype.getTripsSinceMaintenance(plane3)}`);
      console.log(`... and needs repairs? ${Cars.prototype.getNeedsMaintenance(plane3)}`);