'use strict';

module.exports.calculate = async (event, context) => {

  // const number = 2;
  // const square = ((!number.isNaN()) ? Math.pow(number, 2) : 0);
  // message: `Second square of number ${number} is ${square}`,

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Return text',
      input: event,
    }),
  };

};

