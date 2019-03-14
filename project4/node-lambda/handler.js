'use strict';

/*
    Project #4: AWS Lambda

*/

module.exports.calculate = async (event, context, callback) => {

  const number = event.pathParameters.number;
  const message = `Second square of number ${number} is ${(!isNaN(number) ? Math.pow(number, 2) : 0)}.`;

  const reply = {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };

  callback(null, JSON.stringify({ message: reply.body.message }));

};

