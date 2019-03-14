'use strict';

module.exports.calculate = async (event, context) => {

  // const number = 2;
  // // const square = ;
  // const message = `Second square of number ${number} is 
  //   ${((!number.isNaN()) ? Math.pow(number, 2) : 0)}`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'message',
      input: event,
    }),
  };

};

