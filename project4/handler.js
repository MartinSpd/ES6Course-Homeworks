'use strict';

/*
    Project #4: AWS Lambda

*/

module.exports.calculate = async (event, context, callback) => {

  const number = event.pathParameters.number;
  const squared = (Math.round(!isNaN(number) ? Math.pow(
    number, 2)*1000 : 0)/1000);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      number: number,
      square: squared,
      message: `Second square of number ${
        number} is ${squared}.`
    })
  });
};

