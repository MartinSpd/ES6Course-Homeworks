// 'use strict';

/*
    Homework Assignment #2: Variables and Constants

        1st paragraph - hoisting
        2nd paragraph - var
        3rd paragraph - let
        4th paragraph - const

    After each paragraph follows a code example
*/

        /*
            HOISTING
            - works with var variables only
            - a variable can be used before it's declared in 
              code - JavaScript by default moves all var
              variables to top before execution
            - does not work with let and const
            - declared and initialized var variables are not
              hoisted
            - declarations are hoisted to the top of their
              scope
            - if a variable is used before declaration in the
              strict mode an error is raised
        */

        // EXAMPLE 1:
        bookName = 'Book1';
        console.log(bookName);
        var bookName;

       // EXAMPLE 2:
       bookName = 'Book1';
       console.log(bookName);
       let bookName;

      // EXAMPLE 3:
      bookName = 'Book1';
      console.log(bookName);
      const bookName;

     // EXAMPLE 4:
     console.log(bookName);
     var bookName = 'Book1';

     // EXAMPLE 5:
     'use strict'
     bookName = 'Book1';
     console.log(bookName);
     var bookName;

/*
    VAR
    - declares a variable with global scope
    - value can be multiple-times overwritten
    - it's visible in nested block(s) of block, 
      in which isthe var variable declared
    - in case variable is called outside of a block, 
      in which it's declared it return its last
      assigned value
    - outside of this nested block (where was a new 
      value assigned) can program see the 
      variable with a new value

      EXAMPLE:
 */
if (true) {
    var bookName = 'Book1';
        if (true) {
            bookName = 'Book2';
            console.log(bookName);
        }
        console.log(bookName);
}
console.log(bookName);

/*
    LET
    - declares a variable with local (block) scope
    - value can be multiple times overwritten
    - it's visible in nested block(s) of block, 
      in which is the let variable declared
    - in case variable is called outside of a block, 
      in which it's declared an error is raised
    - outside of this nested block (where was a new 
      value assigned) can program see the 
      variable with a new value

      EXAMPLE:
*/
    if (true) {
        let bookName = 'Book1';
            if (true) {
                bookName = 'Book2';
                console.log(bookName);
            }
            console.log(bookName);
    }
    console.log(bookName);

    /*
        CONST
        - declares a variable with local (block) scope
        - value can be assigned just once
        - assigning a new value doesn't rise error, but
          execution stops
        - it's visible in nested block(s) of block, 
          in which is the const variable declared
        - in case variable is called outside of a block, 
          in which it's declared an error is raised
        - outside of this nested block (where was a new 
          value assigned) can program see the 
          variable with a new value
    
          EXAMPLE:
    */
        if (true) {
            const bookName = 'Book1';
                if (true) {
                    // bookName = 'Book2';
                    console.log(bookName);
                }
                console.log(bookName);
        }
        console.log(bookName);
