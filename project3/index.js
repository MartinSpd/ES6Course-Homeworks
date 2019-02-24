'use strict';

import { range } from 'lodash';

/*
    Project #3

*/


  /**
   * Building class
   * 
   */

  class Building {

    constructor() {
      this.floorNumber = range(-1,10); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.floors = [];
      this.inhabitants = 100;
      this.timeLimit = 180;
    }

    // generate floors with buttons, add to array
    setFloorOptions() {

      for (let i = -1; i<this.floorNumber.length-1; i++) {

        let floor = null;
        
          switch (i) {
            case -1:
              floor = new Floor(i, true, false);
              this.floors.push(floor);
              break;
            case 10:
              floor = new Floor(i, false, true);
              this.floors.push(floor);
              break;
            default:
              floor = new Floor(i);
              this.floors.push(floor);
          }
      }
    }
  }



  /** 
   * Floor class
   * 
   */

  class Floor {

    constructor(floorNumber = 0, buttonUp = true , 
                buttonDown = true) {
      this.floorNumber = floorNumber;
      this.buttonUp = buttonUp;
      this.buttonDown = buttonDown;
    }
  }



  /** 
   * ElevatorsController class
   * 
   */

  class ElevatorsController {

    constructor(e1, e2) {
      this.elevator = [e1, e2];
      this.floorsNumber = range(-1,10); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.elevatorToUse = [];
      this.maxQueries = 10;
      this.userQueries = [];
    }


    /**
     * generates elevator call queries 
     */

    generateQueries() {
      
      for (let i = 0; i < this.maxQueries; i++) {

        if (i === 0) {

          // trying to get 2 different random numbers -
          // start and end cannot be at the same floor
          while (true) {

            // when pushing first item, the start position is random
            const start = this.helper_generateRandomNumber() ;
            const destination = this.helper_generateRandomNumber() ;

              if (start !== destination) {
                const query = new UserQuery(start, destination);
                this.userQueries.push(query);
                break;
              }
          }
        }
          else {

            // trying to get 2 different random numbers -
            // start and end cannot be at the same floor
            while (true) {

              // when pushing other positions the start position have 
              // to equal last destination
              const lastPosition = this.userQueries[i-1].
                destination;
              const destination = this.helper_generateRandomNumber();

                if (lastPosition !== destination) {
                  const query = new UserQuery(lastPosition, 
                    destination);
                  this.userQueries.push(query);
                  break;
                }
            }
          }
      }
    }
    
    
    /**
     * generates a number in a range
     */
     
     helper_generateRandomNumber() {
       
       // generates a number in range of floors
       // and returns it
       let number = ((Math.round(Math.random() 
        * 12)) - 2);
       
        if (number < this.floorsNumber[0]) {
          number = this.floorsNumber[0];
        }
       
        if (number > this.floorsNumber[this.
          floorsNumber.length-1]) {
          number = this.floorsNumber[this.
            floorsNumber.length-1];
        }
        
      return number;
     }


    /**
     * checks if there is just one elevator preference
     */

    helper_changePreference(i, query) {

      let sameUsed = false, elevator = '', index = 0;
        // checks if last two times same elevator ran
        if (this.elevatorToUse[i-1] === this.
            elevatorToUse[i-2]) {
          sameUsed = true;
          elevator = this.elevatorToUse[i-1];
        }

        // if same elevator was running get other
        // elevator and check if can be engaged
        if (sameUsed) {

            if (elevator.indexOf('B') !== -1) 
              { index = 1; }
            
            if (query.destination === -1) {
              elevator = this.elevator[0];
            }

            if (query.destination === 10) {
              elevator = this.elevator[1];
            }

          return this.elevator[index];
        }

      return null;
    }
     
    
    /**
     * controller function for managing elevators
     */
    
    callElevators() {
      
      const elevators = this.elevator;
      
       for (let i = 0; i < this.userQueries.length; i++) {
         
        let query = this.userQueries[i];
        
        // get closest elevator
        const calledElevator = this.whichIsCloser(i, elevators);
        this.elevatorToUse.push(calledElevator);
        
        // move with elevator
        query = this.moveElevator(query);
        this.userQueries[i] = query;
        
        // arrival in destination and logging
        this.elevatorLogger(calledElevator, query);
        
        // update elevator location
        let index = 0;
          if (calledElevator.type.indexOf('B') !== -1) {
            index = 1;
          }
        this.elevator[index].location = query.destination;
       }
    }

    

    /**
     * finds out which elevator services next
     */
    
    whichIsCloser(i, elevators) {
      
      let index = 0;
        
        let query = this.userQueries[i];
        let elevator = [];
    
          if (query.destination === -1 || 10) {

              // deciding if was called basement or apartment
              if (query.destination === -1) {
                
                elevator.push(elevators[0]);
              }
              if (query.destination === 10) {

                elevator.push(elevators[1]);
              }
            
            // count elevator distance and set query
            const calledElevator = elevator.pop();
            if (calledElevator) {
              query.callLasting = Math.abs( calledElevator. 
                location - query.currentFloor );
              this.userQueries[i] = query;          
            
              let sameElevator = helper_changePreference(
                i, query);

                if (!sameElevator) {
                  calledElevator = sameElevator;
                }
              
              return calledElevator;
            }
          }
          
          if (query.destination !== -1 || 10) {
            
            let callDistance;
            
              if ((Math.abs( elevators[0].location - 
                    query.currentFloor)) < 
                  (Math.abs( elevators[1].location - 
                    query.currentFloor))) {
                      
                      elevator = this.elevator[0];
                    } else {
                        elevator = this.elevator[1];
                      }
                      
                // sets query with filled up values 
                // for calling time
                
                callDistance = Math.abs( (elevator.location 
                  - query.currentFloor) );
                query.callLasting = callDistance;
                this.userQueries[i] = query;         
            
                let sameElevator = helper_changePreference(
                  i, query);
  
                  if (!sameElevator) {
                    elevator = sameElevator;
                  }
                
                return elevator;
          }
      
        return null;
    }
    
    
    /**
     * move with elevator - count travel 
     * time and whole trip
     */
     
    moveElevator(query) {
      

      // when elevator is on floor and is moving to destination
      // count travel time and total time

      let total = Math.abs( query.destination - query.currentFloor );

        if ((-1 || 0 === query.destination) || 
            (-1 || 0 === query.currentFloor)) { total += 1; }

      query.transportLasting = total;
      total = (query.callLasting + query.transportLasting);

      return query;
    }


    /**
     * log elevator movements
     */

    elevatorLogger(chosenElevator, query) {

      // logging elevator was called
      chosenElevator.logCall(chosenElevator, query);

      // logging elevator arrival
      setTimeout(chosenElevator.logArival(
        chosenElevator, query), query.callLasting );

      // log reaching destination
      setTimeout(chosenElevator.logDestination(
        chosenElevator, query), query.transportLasting);
    }
  }



  /** 
   * Elevator class
   * 
   */

  class Elevator {
    constructor(type, basement, apartment, 
                location = 0) {
      this.type = type;
      this.basementFloor = basement;
      this.apartmentFloor = apartment;
      this.location = location;
      this.floorSpeed = 1;
      this.emergency = false;
    }

    logCall(elevator, query) {
      console.log(`NEW CALL:`);
      console.log(`${elevator.type} is on floor ${elevator.location}.`);
      console.log(`${elevator.type} is called to floor ${query.currentFloor}.`);
      console.log(`${elevator.type} move to ${query.destination}.`);
    }

    logArival(elevator, query) {
      console.log(`${elevator.type} arrived on ${query.currentFloor}. floor.`);
      setTimeout( console.log(`${elevator.type} opens doors.`), 3000);
      setTimeout( console.log(`${elevator.type} closes doors.`), 5000);
    }

    logDestination(elevator, query) {
      console.log(`current floor: ${query.destination}.`);
      console.log(`---`);
    }
  }



  /**
   * UserQuery class
   *
   */

  class UserQuery {
    constructor(currentFloor, 
                destination) {
      this.currentFloor = currentFloor;
      this.destination = destination;
      this.callLasting = 0;
      this.transportLasting = 0;
      this.totalTime = 0;
    }
  }



const elevatorA = new Elevator('elevatorA', true, false);
const elevatorB = new Elevator('elevatorB', false, true);

const building = new Building();
const elevatorsController = new ElevatorsController(
  elevatorA, elevatorB
);

building.setFloorOptions();
// console.log('364: floors = ', building.floors);

elevatorsController.generateQueries();
// console.log('367: generated queries = ', 
//   elevatorsController.userQueries);

elevatorsController.callElevators();


