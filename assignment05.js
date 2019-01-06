'use strict';

/*
    Homework Assignment #4: Switch Statements

*/

function timeAdder(value1, label1, value2, label2) {

        // exit if one of times is lower than 0 
        // or one of units is invalid
        if ((value1<0 || value2<0) && 
        (label1 != null || undefined) && 
        (label2 != null || undefined)) {
            console.log('both time values must be higher' +
                ' than zero and time units correct.'); 
            return;
        }

    // weight indicates if unit is bigger or smaller
    // (e.g. hour is bigger than seconds thats's why 
    // you have to multiply hours to seconds to sum)
    const multiplyUnitsBy = [1, 60, 60, 24];
    let result = [];

    const time1 = {
        value: value1,
        units: label1,
        weight: null
    };

    const time2 = {
        value: value2,
        units: label2,
        weight: null
    };

    /**
     * sets weight to time units - equals to index in an
     * array in multiplyUnits (used for multiplication in 
     * case entered units have different values)
     */
    function setTimeUnitWeight(timeObj) {
        switch(timeObj.units) {
            case 'seconds' : 
                timeObj.weight = 0; break;
            case 'minutes' : 
                timeObj.weight = 1; break;
            case 'hours' : 
                timeObj.weight = 2; break;
            case 'days' : 
                timeObj.weight = 3; break;
            default :
                console.log('time unit doesn\'t exists.');
                return;
        }
    }

    /**
     *  counts summary of times, but first it converts higher
     *  unit to lower unit to sum them together (multiply 
     *  unit's value with higher weight to have equal time
     *  value in unit with lower weight)
     */
    function sumSameUnits(timeObj1, timeObj2) {
        
        let value3 = 0;
        let multiplication = 1;
        let label3 = timeObj1.units;

            // finds out multiplication for lower unit
            for (let i = timeObj1.weight;
                i <= timeObj2.weight; i++) {
                multiplication *= multiplyUnitsBy[i];
            }

        // assign result
        value3 = timeObj1.value + 
            (timeObj2.value * multiplication);
        
            // in case of edge case value and label change 
            // to higher unit
            if ((label3 === 'seconds') && (value3 === 60)) {
                value3 = 1; label3 = 'minutes';
            }
        
            if ((label3 === 'minutes') && (value3 === 60)) {
                value3 = 1; label3 = 'hours';
            }
        
            if ((label3 === 'hours') && (value3 === 24)) {
                value3 = 1; label3 = 'days';
            }

        // write out and returns value with label
        console.log(value3 + ' ' + label3);

        return [value3, label3];
    }

    // set weight for time objects
    setTimeUnitWeight(time1);
    setTimeUnitWeight(time2);

    // compares weights and in case of inequality 
    // calls function to recalculate values and sum
    if (time1.weight === time2.weight) {
        console.log('time summary is '+ ( 
            time1.value + time2.value) + ' ' + time1.units + '.');
    } else if (time1.weight > time2.weight) {
        result = sumSameUnits(time2, time1);
    } else {
        result = sumSameUnits(time1, time2);
    }

    return result;
}


// examples
timeAdder(3, 'seconds', 5, 'seconds');
timeAdder(3, 'seconds', 5, 'minutes');
timeAdder(3, 'hours', 5, 'seconds');
timeAdder(-1, 'hours', 5, 'seconds');
timeAdder(3, 'hours', -5, 'seconds');
timeAdder(3, 'hours', 21, 'hours');
timeAdder(3, null, 21, 'hours');
timeAdder(0, 'hours', 21, 'days');
timeAdder(0, 'hours', 21, undefined);

