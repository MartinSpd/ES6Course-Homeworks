

  const spacetime = require('spacetime');

  // simple script lists limezones with date border
  console.log('my current location:\n',
    spacetime.now().timezone());
  console.log('\ndate border at the moment is in following time zones: \n', 
    spacetime.whereIts('11:00pm') );
