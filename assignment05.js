'use strict';

/*
    Homework Assignment #4: Switch Statements

*/

function timeAdder(value1, label1, value2, label2) {

        // exit if one of times is lower than 0 
        // or one of units is invalid
        if ((value1<0 || value2<0) && 
        (label1 !== null || undefined) && 
        (label2 !== null || undefined)) {
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

    const time3 = {
        value: 0,
        units: null,
        multiplyToSeconds: 0,
        seconds: null,
        minutes: null,
        hours: null,
        days: null
    };

    const divideBy = {
        seconds: 1,
        minutes: 1,
        hours: 1,
        days: 1

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
        time3.value = value3;
        time3.units = label3;


        // recalculate summed time to seconds
        toSeconds();


        // write out and returns value with label
        console.log(value3 + ' ' + label3);

        return [value3, label3];
    }


    /**
     * Recalculate sum of both values to seconds
     * after that it counts days, hours, minutes
     * and seconds
     */
    function toSeconds() {
        if (time3.units === 'minutes') {
            time3.value *= multiplyUnitsBy[1];
        }
        if (time3.units === 'hours') {
            time3.value *= multiplyUnitsBy[1] * 
                multiplyUnitsBy[2];
        }
        if (time3.units === 'days') {
            time3.value *= multiplyUnitsBy[1] * 
                multiplyUnitsBy[2] * multiplyUnitsBy[3];
        }
        time3.units = 'seconds';

        Recalculate();
    }
    
    function Recalculate() {

        let rest
        // set division ammount
        if (divideBy.minutes === 'minutes') {
            divideBy.minutes *= multiplyUnitsBy[1];
        }
        if (divideBy.hours === 'hours') {
            divideBy.hours *= multiplyUnitsBy[1] * 
                multiplyUnitsBy[2];
        }
        if (divideBy.days === 'days') {
            divideBy.days *= multiplyUnitsBy[1] * 
                multiplyUnitsBy[2] * multiplyUnitsBy[3];
        }

        // gets number of days from seconds
        time3.days = Number.parseInt(
            time3.value / divideBy.days);
        // gets number of hours from seconds (count days and
        // substract number of hours in days)
        time3.hours = Number.parseInt(
            (time3.value / divideBy.hours) - (time3.days * 
                multiplyUnitsBy[3])
            );
        // gets number of minutes from seconds (count days and
        // hours and substract number of minutes in days and 
        // hours)
        time3.minutes = Number.parseInt(
            (time3.value / divideBy.minutes) - (time3.days * 
                multiplyUnitsBy[3] + time3.hours * 
                multiplyUnitsBy[2])
            );
        // gets number of minutes from seconds (count days and
        // hours and substract number of minutes in days, hours 
        // and minutes)
        time3.seconds = Number.parseInt(
            (time3.value / divideBy.seconds) - (time3.days * 
                multiplyUnitsBy[3] + time3.hours * 
                multiplyUnitsBy[2] + time3.minutes * 
                multiplyUnitsBy[1])
            );

        console.log(
            `Summary of ${time1.value} ${time1.units} and ${time2.
            value} ${time2.units} is:`);
            if (time3.days > 0) {
                console.log(`${time3.days} day(s),`); }
            if (time3.hours > 0) {
                console.log(`${time3.hours} hour(s),`); }
            if (time3.minutes > 0) {
                console.log(`${time3.minutes} minute(s),`); }
            if (time3.seconds > 0) {
                console.log(` ${time3.seconds} second(s).`); }
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

