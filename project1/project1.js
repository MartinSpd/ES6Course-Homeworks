'use strict';

  /*
      Project #1

  */

  // global variables for JSON variables - user and todo list
  let newUser = { userId: 0, firstName: '', lastName: '', email: '', password: '' };
  let list = { userId: 0, listName: '', items: [], done: [] };

  let currentUser = newUser;
  let todoUsersDB = [], todoListDB = [];
  let storage = window.localStorage;

  // global variables for functions showing and hiding DIVs
  const index = document.getElementById('index');
  const signup = document.getElementById('signup');
  const login = document.getElementById('login');
  const dashboard = document.getElementById('dashboard');
  const settings = document.getElementById('settings');
  // const newList = document.getElementById('newList');


// prevents default behaviour - redirecting from form after pressing button
document.getElementById('signup1').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('login1').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('signup2').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('login2').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('logout1').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('logout2').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('settings_btn1').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('cancel').addEventListener('click', function(event){
  event.preventDefault();
});
document.getElementById('save_settings').addEventListener('click', function(event){
  event.preventDefault();
});



// FUNCTIONS TO SHOW AND HIDE DIVs
//

  /**
   * shows home screen form
   * 
   */
  function goIndex() {
    toggleClasses('index');
    
    if (signup.className === 'show') {
        toggleClasses('signup');
    }
    if (login.className === 'show') {
        toggleClasses('login');
    }
    if (dashboard.className === 'show') {
        toggleClasses('dashboard');
    }
  }


  /**
   * shows Sign Up form
   * 
   */
  function goSignUp() {
    toggleClasses('index');
    toggleClasses('signup');
  }


  /**
   * shows Log In form
   * 
   */
  function goLogIn() {
    toggleClasses('index');
    toggleClasses('login');
  }


  /**
   * shows Dashboard form
   * 
   */
  function goDashboard() {
    
    if (signup.className === 'show') {
        toggleClasses('signup');
    }
    if (login.className === 'show') {
        toggleClasses('login');
    }
    toggleClasses('dashboard');
  }


  /**
   * shows Settings form
   * 
   */
  function goSettings() {
    toggleClasses('dashboard');
    toggleClasses('settings');
  }


  /**
   * toggle classes if class is show class changes to hide and
   * vice versa
   */

  function toggleClasses(id) {

    let element = document.getElementById(id);
      if (element.className === 'show') {
          element.className = 'hide';
      } else { element.className = 'show'; }
  }



// CHECKING ENTERED DATA IN TEXT FIELDS - IF ARE EMPTY AND
// HELPER FUNCTIONS FOR SIGN UP AND LOGIN SCREENS
//

  /**
   * Sign up check
   * 
   */
  function signUpCheck() {

    const fName = document.getElementById('first');
    const lName = document.getElementById('last');
    const email = document.getElementById('email1');
    const pass = document.getElementById('pass1');
    const terms = document.getElementById('terms');
    const message = document.getElementById('message1');
    let passed = false;

      if ((fName.value !== '')) {
        if ((lName.value !== '')) {
            if ((email.value !== '')) {
                if ((pass.value !== '')) {
                    if ((terms.checked)) {

                        let formData = [fName.value, lName.value, 
                                        email.value, pass.value];
                        saveNewUser(formData);

                    } else { message.innerText = 'Agree with terms of use'; }
                } else { message.innerText = 'Fill up password'; }
            } else { message.innerText = 'Fill up your email'; }
        } else { message.innerText = 'Fill up your last name'; }
      } else { message.innerText = 'Fill up your first name'; }

  }


  /**
   * Log in check - check login form data if proceed and go to dashboard
   * and load lists
   * 
   */
  function logInCheck() {

    const email = document.getElementById('email2');
    const pass = document.getElementById('pass2');
    const message = document.getElementById('message2');

      if ((email.value !== '')) {
          if ((pass.value !== '')) {

              let formData = [email, pass];
              userExists(formData);

          } else { message.innerText = 'Fill up password'; }
      } else { message.innerText = 'Fill up your email'; }
  }


  /**
   * getting user from localStorage and check if entered data match some user
   * 
   */
  function userExists(user) {

    let allUsers = getAllUsers();
    const message = document.getElementById('message2');
    
      for (let user of allUsers) {
        if ((user.email === user[0]) && (user.password === user[1])) {
          // saves data of current user to variable and returns it
          const userFirstName = user.firstName;
          const userLastName = user.lastName;
          const userEmail = user.email;
          const userPassword = user.password;
          const curUser = [userFirstName, userLastName, 
                               userEmail, userPassword];
          getCurrentUser(curUser);
          goDashboard();
          break;
        } else {
          
          // search which data are faulty, if email or password
          let mail = true, passw = true;
            for (let user of allUsers) {
                if (user.email !== user[0]) {
                    mail = false;
                }
                if (user.password !== user[1]) {
                    passw = false;
                }
            }

            // write out which data are faulty
            if (!mail) {
              message.innerText = 'You entered wrong e-mail.';
            }
              else if (!passw) {
                message.innerText = 'You entered wrong password.';
              }
              else { message.innerText = 'There is no such user. Enter correct data.'; }
            
        }
      }
//     todoUsersDB = getAllUsers().push(newUser);
//     storage.setItem('P1_todoUsersDB', todoUsersDB);
    
  }


  /**
   * gets list of users from localStorage - used to save new user or to login
   * 
   */
  function getAllUsers() {
    let todoUsersDB = storage.getItem('P1_todoUsersDB');

      if (todoUsersDB) { return todoUsersDB; }
        else { return []; }
  }


  /**
   * returns currentUser
   * 
   */
  function getCurrentUser(user) {
    currentUser.firstName = user[0];
    currentUser.lastName = user[1];
    currentUser.email = user[2];
    currentUser.password = user[3];

    return currentUser;
  }
  


// SAVING NEW DATA - USER, LIST, SETTINGS
//


  /**
   * saving new user to localStorage - called if there are all data entered
   * 
   */
  function saveNewUser(user) {
    newUser.firstName = user[0];
    newUser.lastName = user[1];
    newUser.email = user[2];
    newUser.password = user[3];

//     todoUsersDB = getAllUsers().push(newUser);
//     storage.setItem('P1_todoUsersDB', todoUsersDB);
    goDashboard();
  }


  /**
   * saving user data to localStorage
   * 
   */
  function saveSettings() {
    
    const user = getCurrentUser(currentUser);
    newUser.firstName = document.getElementById('first2').value;
    newUser.lastName = document.getElementById('last2').value;
    newUser.email = document.getElementById('email3').value;
    newUser.password = document.getElementById('pass3').value;

//     todoUsersDB = getAllUsers().push(newUser);
//     storage.setItem('P1_todoUsersDB', todoUsersDB);
  }


  /**
   * function to create new TODO list
   * 
   */
  function newTODO(user) {
    //
  }

  /*
  Details:
 
Create a simple "to-do list" application, using client-side HTML, CSS, and Javascript only. This application should store its data using 
localStorage only, and should not connect to any external APIs, backends, databases etc. This should function as a "Single Page Applicat
ion", so the page should never actually refresh or reload, and no links should direct to any other page. Instead, when links are clicked 
(or forms are submitted), the contents of the page should disappear and the new content should be loaded in its place, all without actua
lly redirecting the user. Here are the user-stories:


Index

1. Upon a fresh load (or refresh) of the application, the user should see the title of the application, a description, and two buttons: 
"Sign Up" and "Log In".

2. If "Sign Up" is clicked, the user should be taken to a form where they need to enter their: first name, last name, email, and passwo
rd (all strings, but passwords should not be displayed in plain text inputs, use password inputs instead). The user also needs to check 
a check-box that says "I agree to the Terms of Use".  When they submit the form, if there are any errors on the form, they should see a 
red error message somewhere on the screen. If the form submission is successful, they should be taken to their dashboard. All data for 
the new user should be stored in localStorage. Note: in an actual application you would never store passwords this way, this is just for 
the sake of this project.

3. If "Log In" is clicked the user should be taken to a form where they need to enter their email address and password. When they submit
 the form, if there are any errors on the form (or if the email and password don't match an existing user), they should see a red error 
 message somewhere on the screen. If the inputs are fine, and both of these match an existing user, then the user should be taken to the
 ir dashboard.

Dashboard:

1. The dashboard should list (in chronological order), all of the "To-Do Lists" created by the user thus far. If none have been created, 
none should be displayed. In either case, there should be a "Create New to-do List button" somewhere on the screen.

2. If one of the existing todo-lists is clicked on, the user should be taken to that list.

3. If a user clicks to create a new todo list, they should be taken to a blank list.

Lists:

When a user is viewing a (new or existing) list, they should be able to :

1. Name or rename the list to anything they want, as long as it doesn't conflict with the name of any other list created by that particu
lar user.

2.  Add as many items to the list as they wish

3. Check off an item as "done", and uncheck it as well

4. Save the list

Users 

1. If the user is logged in, then at the top of the screen, on every page of the site, there should be a "log out" button. Clicking that 
should log the user out.

2. If the user is logged in, then at the top of the screen, on every page of the site, there should be a button that says "account setti
ngs". Clicking that link should take the user to a page where they can edit any/all of the information they entered on the signup for.

3. Your application should support as many unique users as possible. The actions that one user takes within the application should have 
virtually no effect on what other users are doing.

Extra Credit:

If you feel like getting fancy, try to find an open-source JS library for hashing passwords (using any hashing function you prefer). Has
h the passwords when you receive them and only store the hash rather than the raw password.

As mentioned above, storing actual users' passwords (in a real life application) is far more complex than this, and often involves many 
moving parts, but it's still good practice to get used to using hashing libraries.
*/