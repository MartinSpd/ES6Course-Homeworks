'use strict';

module.exports.calculate = async (event, context) => {

  // const number = 2;
  // // const square = ;
  // const message = `Second square of number ${number} is 
  //   ${((!number.isNaN()) ? Math.pow(number, 2) : 0)}`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'message '+2*2,
      input: event,
    }),
  };

};
/*
 serverless deploy
 serverless invoke local --function calculate --data '{"pathParameters": {"numbers":4}}'
*/
