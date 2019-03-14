'use strict';

/*
    Project #4: AWS Lambda

*/

module.exports.calculate = async (event, context, callback) => {

  const number = event.pathParameters.number;
  const square = (!isNaN(number) ? Math.pow(
    number, 2) : 0);
    
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      number: number,
      square: square,
      message: `Second square of number ${
        number} is ${0}.`
    })
  });
};

