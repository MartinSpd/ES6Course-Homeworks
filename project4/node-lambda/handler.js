'use strict';

/*
    Project #4: AWS Lambda

*/

module.exports.calculate = async (event, context, callback) => {

  const number = event.pathParameters.number;
  
  const successMessage = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Second square of number ${number} is ${(
        !isNaN(number) ? Math.pow(number, 2) : 0)}.`
    })
  };
  const errorMessage = {
    statusCode: 400,
    body: JSON.stringify({
      message: err.message
    })
  };

  callback(errorMessage, successMessage);
};

