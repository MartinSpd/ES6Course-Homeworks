'use strict';

// import SHA1 from 'CryptoJS';
  


  /*
      Home Assignment #9: Template Literals

  */


  // global JSON variables - user and todo list
  const newUser = { userId: 0, firstName: '', lastName: '', email: '', password: '' };
  const userList = { userId: 0, listId: 0, listName: '', items: [] };
  const listItem = { value: '', done: false };
  const body = document.getElementsByTagName('BODY')[0];

  // other global variables
  let currentUser = newUser;
  let todoUsersDB = [], todoListDB = [];
  let userLists = [], currentListItems = [];
  let listOfUserListsCaptions = [];
  let storage = window.localStorage, edited = false;



// onload event
body.onload = () => goIndex();



// FUNCTION TO ASSIGN EVENTS
  /**
   * assign listener to dynamically 
   * created elements
   * 
   */
   function assignListener(thisID) {
     
      switch (thisID) {   // INDEX
        case 'signup1' :
          document.getElementById(thisID).
            addEventListener('click', (event) => {
              event.preventDefault(); goSignUp();
          });
          break;
        case 'login1' :
          document.getElementById(thisID).
            addEventListener('click', (event) => {
              event.preventDefault(); goLogIn();
          });
          break;          // SIGNUP
        case 'signup2' :
          document.getElementById(thisID).
            addEventListener('click', (event) => {
              event.preventDefault();
              const result = signUpCheck();
                if (result) {
                  helper_loadUserLists();
                  goDashboard();
                }
          });
          break;          // LOGIN
        case 'login2' :
          document.getElementById(thisID).
            addEventListener('click',(event) => {
              event.preventDefault();
              const result = logInCheck();
                if (result) {
                    helper_loadUserLists();
                    goDashboard();
                }
          });
          break;          // DASHBOARD
        case 'logout1' :
          document.addEventListener('click', (event) => {
              if ((event.target) && (event.target.id 
                   === thisID)) {
                  event.preventDefault(); goIndex();
                  logoutPurge();
              }
          });
          break;
        case 'userSettings' :
          document.addEventListener('click', (e) => {
  
            if ((e.target) && (e.target.id === thisID)) {
                e.preventDefault(); goSettings();
                loadSettings();
            }
          });
          break;
        case 'createList' :
          document.addEventListener('click', (e) => {
  
            if ((e.target) && (e.target.id === thisID)) {
                e.preventDefault(); listInit();
            }
          });
          break;
        case 'addItem' :
          document.addEventListener('click', (e) => {
            
            if ((e.target) && (e.target.id === thisID)) {
                e.preventDefault(); addNewItem();
            }
          });

          break;
        case 'saveList' :
          document.addEventListener('click', (event) => {
            
            if ((event.target) && (event.target.id === thisID)) {
                event.preventDefault(); saveList();
                helper_loadUserLists();
            }
          });
          break;         // SETTINGS
        case 'logout2' :
          document.getElementById(thisID).
            addEventListener('click', (event) => {
              event.preventDefault(); goIndex();
              logoutPurge();
          });
          break;
        case 'cancel' :
          document.getElementById(thisID).
            addEventListener('click', (event) => {
              event.preventDefault(); goDashboard();
          });
          break;
        case 'saveSettings' :
          document.getElementById(thisID).
            addEventListener('click', (event) => {
              event.preventDefault(); saveSettings();
              goDashboard();
              helper_loadUserLists();
          });
          break;
      }
   }



// FUNCTIONS TO SHOW AND HIDE DIVs
//

  /**
   * re-render dashboard
   * 
   */
  function reRenderDashboard() {
    body.innerHTML = renderDashboardDiv(dashboardCaption,
                        notesToLinks, notesCaption,
                        notesItems, buttonClass);
  }
  /**
   * shows home screen form
   * 
   */
  function goIndex() {
    
    body.innerHTML = renderIndexDiv();
    assignListener('signup1');
    assignListener('login1');
  }


  /**
   * shows Sign Up form
   * 
   */
  function goSignUp() {
    
    body.innerHTML = renderSignupDiv(first, 
                        last, email1, pass1, '', message1);
    assignListener('signup2');
  }


  /**
   * shows Log In form
   * 
   */
  function goLogIn() {
    
    body.innerHTML = renderLoginDiv(email2, pass2, message2);
    assignListener('login2');
  }


  /**
   * shows Dashboard form
   * 
   */
  function goDashboard() {
    
    // load HTML
    reRenderDashboard();
    
    // assign events
    assignListener('logout1');
    assignListener('userSettings');
    assignListener('createList');
    assignListener('addItem');
    assignListener('saveList');
  }


  /**
   * shows Settings form
   * 
   */
  function goSettings() {
    
    // load HTML
    body.innerHTML = renderSettingsDiv(first2, last2, 
                                       email3,pass3);
    
    // assign events
    assignListener('logout2');
    assignListener('cancel');
    assignListener('saveSettings');
  }



// CHECKING ENTERED DATA IN TEXT FIELDS - IF ARE EMPTY AND
// HELPER FUNCTIONS FOR SIGN UP AND LOGIN SCREENS
//

  /**
   * Sign up check - all entered values, if OK, checks
   * if user exists, if not, saves new user to localStorage
   * 
   */
  function signUpCheck() {

    const fName = document.getElementById('first');
    const lName = document.getElementById('last');
    const email = document.getElementById('email1');
    const pass = document.getElementById('pass1');
    const terms = document.getElementById('terms');
    let passed = false;

      if ((fName.value !== '')) {
        if ((lName.value !== '')) {
            if ((email.value !== '')) {
                if ((pass.value !== '')) {
                    if ((terms.checked)) {

                        message1 = '';
                        let formData = [null, fName.value, lName.value, 
                                        email.value, pass.value];
                                // email.value, CryptoJS.SHA1(pass.value)];
                        const exists = helper_userExists(formData,'signup');
                        
                          if (exists) {
                              saveNewUser(formData);
                              return true;
                          }

                    } else { message1 = 'Agree with terms of use'; }
                } else { message1 = 'Fill up password'; }
            } else { message1 = 'Fill up your email'; }
        } else { message1 = 'Fill up your last name'; }
      } else { message1 = 'Fill up your first name'; }
      
      if (message1 !== '') {
          atrChecked = '';
          renderSignupDiv(first, last, email1, pass1, 
            atrChecked, message1);
          message2 = '';
      }

  }


  /**
   * Log in check - check login form data if match with an
   * user, if yes returns true
   * 
   */
  function logInCheck() {

    const email = document.getElementById('email2');
    const pass = document.getElementById('pass2');

      if ((email.value !== '')) {
          if ((pass.value !== '')) {
            
              message2 = '';
              let formData = [email.value, pass.value];
              // let formData = [email.value, CryptoJS.SHA1(pass.value)];
              const exists = helper_userExists(formData, 'login');
              
                if (exists) { return true; }

          } else {
            message2 = 'Fill up password';
          }
      } else { message2 = 'Fill up your email'; }
      
      if (message2 !== '') {
          renderLoginDiv(email2, pass2, message2);
          message2 = '';
      }
  }
  


// SAVING NEW DATA - USER, LIST, SETTINGS
//


  /**
   * saving new user to localStorage - called if 
   * verification of entered data was succeessful
   * 
   */
  function saveNewUser(user) {
    // gets userId from last user
    const allUsers = getAllUsers();
    user[0] = ++(allUsers.length);
    
    newUser.userId = user[0];
    newUser.firstName = user[1];
    newUser.lastName = user[2];
    newUser.email = user[3];
    newUser.password = user[4];
    
      if (allUsers[(allUsers.length-1)] == null) {
          allUsers[(allUsers.length-1)] = newUser;
      } else { allUsers.push(newUser); }
      
    setCurrentUser(user);
    setAllUsers(allUsers);
  }


  /**
   * load user data from global variable
   * 
   */
  function loadSettings() {
    
    const curUser = getCurrentUser();
    document.getElementById('first2').value = curUser.firstName;
    document.getElementById('last2').value = curUser.lastName;
    document.getElementById('email3').value = curUser.email;
    document.getElementById('pass3').value = curUser.password;
  }


  /**
   * saving user data to localStorage
   * 
   */
  function saveSettings() {
    
    const curUser = getCurrentUser();
    const editedUser = curUser;
    
    editedUser.firstName = document.getElementById('first2').value;
    editedUser.lastName = document.getElementById('last2').value;
    editedUser.email = document.getElementById('email3').value;
    editedUser.password = document.getElementById('pass3').value;
    
    const index = (editedUser.userId-1);
    let allUsers = getAllUsers();
    allUsers[index] = editedUser;
    setAllUsers(allUsers);
  }


  /**
   * called after clicking a link with list name - 
   * creates TODO list
   * 
   */
  function openList(id) {
    
    notesCaption = '';
    buttonClass = 'visible';
    
      for (let i=0; i<userLists.length; i++) {
        
        // finds record of list matching id
        if (userLists[i][0] == id) {
          
          // 1. write out caption
          const currentList = userLists[i];
          notesCaption = `${currentList[1]}
          <button id="editListCaption">edit</button>`;
          
          // 2. generate list of tasks
          helper_generateListItems(currentList[2]);
          
          // 3. saves current list to global variable
          setUserList(id, currentList);
          break;
        }
      }
      
    reRenderDashboard();
    
    // assign event to button
    document.addEventListener('click', (e) => {
  
      if ((e.target) && (e.target.id === 
           'editListCaption')) {
          e.preventDefault();
          editListCaptions();
      }
    });
    
    document.getElementById('saveList').disabled = true;
  }


  /**
   * function to create new TODO list - loads default 
   * values, when user want to create new list, not
   * edit existing notes
   * 
   */
  function listInit() {
    
    const node = document.createElement('DIV');
    
    buttonClass = 'visible';
    notesCaption = '';
    notesItems = '';

    notesCaption = `new TODO list
    <button id="editListCaption">edit</button>`;
    
    reRenderDashboard();
    
    // assign event to button
    document.addEventListener('click', (e) => {
  
      if ((e.target) && (e.target.id === 
           'editListCaption')) {
          e.preventDefault();
          editListCaptions();
      }
    });
  }


  /**
   * changes name of existing list
   * 
   */
  function editListCaptions() {
    
    const defaultValue = tableCaption.innerText.substring(
      0,tableCaption.innerText.length-5).trim();
    let caption = window.prompt('enter list caption:',
          defaultValue);
    
      // in case cancel was pressed
      if (caption === null) { return ; }
    
      // else check if caption does not exists
      for (let i=0;i<listOfUserListsCaptions.length;i++) {
          
          if (listOfUserListsCaptions[i] === caption) {
              alert('You already have list with same name.');
              return ;
          }
      }
          
    notesCaption = `${caption}
      <button id="editListCaption">edit</button>`;
            
    reRenderDashboard();
    
    // assign event to button
    document.getElementById('editListCaption').
      addEventListener('click', (event) => {
        event.preventDefault(); editListCaptions();
    });

    // mark caption edited
    edited = true;
    document.getElementById('saveList').disabled = false;
  }


  /**
   * adds new item to new list
   * 
   */
  function addNewItem() {
    
    const item = window.prompt('What is your new task?','');
    const count = document.getElementById('selectedListOl').
      getElementsByTagName('LI').length;
    
    // let newItem;
    
      if (item) {
          notesItems += `
            <LI><label id="label${(count+1)}"><input type="checkbox" 
                id="item${(count+1)}">${item}</label></LI>`;
                
          reRenderDashboard();

          // list updated
          edited = true;
          document.getElementById('saveList').disabled = false;
      }
    
  }


  /**
   * function gets data from list and save it to JSON and
   * localStorage
   * 
   */
  function saveList() {
    
    const userId = getCurrentUser().userId;
    const list = getUserList();
    const savingList = list;
    const savingListName = tableCaption.innerText.substring(
                            0,tableCaption.innerText.length-5).trim();
    let allNotes = getAllNotes(), 
      savingListId = 0, isNew = false;
    
      if (edited) {

          // if it's an existing list - keeps an ID otherwise
          // a new ID is created
          if (list.listId > 0) { 
              savingListId = list.listId;
          } else {
              savingListId = ++(allNotes.length);
              isNew = true;
              }
              
          // set values of userId, listId, listName and tasks
          savingList.userId = userId;
          savingList.listId = savingListId;
          savingList.listName = savingListName;
          savingList.items = helper_listItemsToJSON();
          
          // adds new or edited notes into notes database
          if (isNew) {
              allNotes[(allNotes.length-1)] = savingList;
          } else {
              let index = --(savingList.listId);
              allNotes[index] = savingList;
              }
    
        setAllNotes(allNotes);
        todoListDB = getAllNotes();
      }
      
    edited = false;
    document.getElementById('saveList').disabled = true;
  }


  /**
   * cleaning global variables at logout & cleaning of
   * element's content and removing their dynamically
   * created nodes
   * 
   */
  function logoutPurge() {
  
    // purge of new User and current User values
    newUser.userId = 0;       currentUser.userId = 0;
    newUser.firstName = '';   currentUser.firstName = '';
    newUser.lastName = '';    currentUser.lastName = '';
    newUser.email = '';       currentUser.email = '';
    newUser.password = '';    currentUser.password = '';
    
    // user list purge
    userList.userId = 0;
    userList.listId = 0;
    userList.listName = '';
    userList.items = [];
    
    // list item purge
    listItem.value = '';
    listItem.done = false;
  
    currentUser = newUser;
    todoUsersDB = [], todoListDB = [];
    userLists = [], currentListItems = [];
    listOfUserListsCaptions = [];
    
    // elemet's purge
    dashboardCaption = 'Dashboard';
    notesToLinks = '';
    notesCaption = '';
    notesItems = '';
    buttonClass = 'invisible';
  }
  
  
  
// HELPER FUNCTIONS
//


    /**
   * gets list of users from localStorage - used to save new 
   * user or to login
   * 
   */
  function getAllUsers() {
    let todoUsersDB = storage.getItem('P1_todoUsersDB');

      if (todoUsersDB) { return JSON.parse(todoUsersDB); }
        else { return []; }
  }


  /**
   * sets list of users to localStorage
   * 
   */
  function setAllUsers(users) {
    storage.setItem('P1_todoUsersDB', JSON.stringify(users));
  }


  /**
   * gets list of todo lists from localStorage - used to save
   * new todo list
   * 
   */
  function getAllNotes() {
    let todoNotesDB = storage.getItem('P1_todoNotesDB');

      if (todoNotesDB) { return JSON.parse(todoNotesDB); }
        else { return []; }
  }


  /**
   * sets list of todo lists from localStorage
   * 
   */
  function setAllNotes(lists) {
    storage.setItem('P1_todoNotesDB', JSON.stringify(lists));
  }


  /**
   * returns currentUser - a global variable
   * 
   */
  function getCurrentUser() {
    
    return currentUser;
  }


  /**
   * setup currentUser - a global variable
   * 
   */
  function setCurrentUser(user) {
    
    currentUser.userId = user[0];
    currentUser.firstName = user[1];
    currentUser.lastName = user[2];
    currentUser.email = user[3];
    currentUser.password = user[4];
  }


  /**
   * returns userList - currently selected notes
   * 
   */
  function getUserList() {
    
    return userList;
  }


  /**
   * setup currentList - a global variable for 
   * currently selected notes
   * 
   */
  function setUserList(id, list) {
    
    userList.userId = getCurrentUser().userId;
    userList.listId = list[0];
    userList.listName = list[1];
    userList.items = list[2];
  }


  /**
   * getting user from localStorage and check if entered data 
   * match some user - helper for login and signup
   * 
   */
  function helper_userExists(loggingUser, type) {

    let allUsers = getAllUsers();
    let isLogin = false, isSignup = false;
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    
    if (allUsers !== null || undefined) {
    
      for (let i=0;i<allUsers.length;i++) {
        
        // checking data at login
        if (type === 'login') {

            if ((allUsers[i].email === loggingUser[0]) && 
                (allUsers[i].password === loggingUser[1])) {
                isLogin = true;
            } else {
        
              // search which data are faulty, if email or 
              // password
              let mail = true, passw = true;
        
                for (let i=0;i<allUsers.length;i++) {
                    if ((allUsers[i].email !== loggingUser[0]) &&
                        (allUsers[i].password === loggingUser[1])) {
                        mail = false;
                    }
                    if ((allUsers[i].email === loggingUser[0]) &&
                        (allUsers[i].password !== loggingUser[1])) {
                        passw = false;
                    }
                }

                // write out which data are faulty
                if (!mail) {
                  message2.innerText = 'You entered wrong e-mail.';
                }
                  else if (!passw) {
                    message2.innerText = 'You entered wrong password.';
                  }
                  else { message2.innerText = 'There is no such user. Enter correct data.'; }
                
                // clean up message
                if (mail && passw) { message2.innerText = ''; }
              }

          //checkimg data at signup if match existing user
          } else if (type === 'signup') {

              if ((allUsers[i].firstName === loggingUser[0]) && 
                  (allUsers[i].lastName === loggingUser[1]) &&
                  (allUsers[i].email === loggingUser[2]) && 
                  (allUsers[i].password === loggingUser[3])) {
                  
                message1.innerText = 'User with entered data already exists.';
                return false;
          } else {
            isSignup = true;
          }
            }

        if (isLogin) {
          // saves data of current user to variable and returns it
          const userId = allUsers[i].userId;
          const userFirstName = allUsers[i].firstName;
          const userLastName = allUsers[i].lastName;
          const userEmail = allUsers[i].email;
          const userPassword = allUsers[i].password;
          const curUser = [userId, userFirstName, userLastName, 
                            userEmail, userPassword];
          
          setCurrentUser(curUser);
          
          return true;
        }
          else if (isSignup) {

            // if sign up verification passed
            return true;
          }

      }
    } else { alert('no users in localStorage.'); }
    
  }


  /**
   * function gets TODO lists for logged user by filtering
   * all lists, JSON is then read and data saved into arrays
   * of same structure, which is assigned to global variable
   * calls function to generate link for each list
   * 
   */
  function helper_loadUserLists() {
    //
    const user = getCurrentUser();
    const allTodoLists = getAllNotes();
    let userJSONTodoLists = [], userTodoLists = [];
    let currentList = [], currentItems = [], index = 0;
    
    listOfUserListsCaptions = [];
    
      // 1. gets all lists and search for lists created by current user
      for (let i=0; i<allTodoLists.length;i++) {
        
        if (allTodoLists[i] !== null) {
          if (allTodoLists[i].userId === user.userId) {
            userJSONTodoLists.push(allTodoLists[i]);
          }
        } else if (allTodoLists[i] === null) {
            
            index = i;
          }
      }
      
      // 2. process JSONs into regullar aray
      if (userJSONTodoLists.length > 0) {
      
        // if user has todo lists
        for (let i=0; i<userJSONTodoLists.length;i++) {
          
          // loading JSON data into array - id, name
          currentList[0] = userJSONTodoLists[i].listId;
          currentList[1] = userJSONTodoLists[i].listName;
          // saving list caption to global array
          listOfUserListsCaptions[i] = userJSONTodoLists[i].listName;
          
            for (let j=0; j<userJSONTodoLists[i].items.length;j++) {
              // loading each record into array
              let currentRecord = [];
              const value = userJSONTodoLists[i].items[j].value;
              const done = userJSONTodoLists[i].items[j].done;
              
              currentRecord.push(value);
              currentRecord.push(done);
              currentItems.push(currentRecord);
            }
          // and save them in an array
          currentList.push(currentItems);
          currentItems = [];
          
          // add current list to lists array (non-JSON format)
          userTodoLists.push(currentList);
          currentList = [];
        }
        
        // assign to global variable
        userLists = userTodoLists;
        
        // generate links to each list
        notesToLinks = '';
        notesToLinks = helper_generateLinks(userLists);
      }
      else {
        notesToLinks = `<div>
          No lists were created yet. Create a new one by 
          pressing a button above.
          </div>`;
      }
      
    dashboardCaption = 
      `${user.firstName} ${user.lastName}'s dashboard`;
    
    reRenderDashboard();
  }


  /**
   * function generates links for each TODO list
   * at login - lists created by user in the past
   * 
   */
  function helper_generateLinks(lists) {
    
      for (let i=0; i<lists.length; i++) {
        const listName = lists[i][1];
        notesToLinks += `
          <a href="javascript: " id="${(lists[i][0])}"
           onClick="openList(this.id)">${listName}</a>`;
      }
      
    return notesToLinks;
  }
  
  
  /**
   * function generates list of tasks for clicked list
   * 
   */
  function helper_generateListItems(items) {

    notesItems = '', notesItems = ''; let checked = '', 
    count = 0, allWords = [], chkboxIDs = [];
    
      for (let i=0; i<items.length; i++) {
        
        
          if (items[i][1] === true) { checked = ' checked '; }
          
        notesItems += `
          <LI><label id="label${(i+1)}"><input type="checkbox"
            class="chkbox" id="item${(i+1)}"${checked}/>
            ${items[i][0]}</label></LI>`;
        let id = `item${(i+1)}`;
      }
    
    // rerenders dashboard
    reRenderDashboard();
    
    
    // gets all checkboxes from items
    allWords = notesItems.split(' ');
    
      // 1. get checkboxes IDs
      for (let i=0;i<allWords.length;i++) {
        
          if (allWords[i].indexOf('"item') !== -1) {
            
            chkboxIDs.push( allWords[i].substring(
              (allWords[i].indexOf('"')+1),
              allWords[i].lastIndexOf('"')
            ));
            allWords[i] = '';
          }
      }
      
      // 2. add event listeners to checkboxes
      for (let i=0;i<chkboxIDs.length;i++) {
        document.addEventListener('click', function(e) {
          
          if ((e.target) && 
              (e.target.id === chkboxIDs[i])) {
              helper_checkboxChecked(chkboxIDs[i]);
          }
        });
      }
  }


  /**
   * marks if checkbox was clicked
   * 
   */
  function helper_checkboxChecked(id) {
    
    const index = (id.substring(id.indexOf('m')+1)-1);
    const chkbox = document.getElementById(id);
    const items = userList.items;
    let originalCheck = items[index][1], currentCheck = false;
    
      if (chkbox.checked) { currentCheck = true; } 
        else if (!chkbox.checked) { currentCheck = false; }
        
      if (originalCheck !== currentCheck) {
          document.getElementById('saveList').disabled = false;
          edited = true;
      }
      
    return edited;
  }


  /**
   * temporarily stores all lists in an array -
   * global variable
   * 
   */
  function getAllListsOfUser() {
    
    const allLists = storage.getItem('P1_todoUsersDB');
    
      for (const list of allLists) {
          if (currentUser.userId === list.userId) {
            userLists.push(list);
          }
      }
      
    return userLists;
  }


  /**
   * reads all list items and push them all to a JSON array,
   * used at saving edited / new list
   * 
   */
  function helper_listItemsToJSON() {
    
    const currentListLi = document.getElementById
      ('selectedListOl').getElementsByTagName('LI');
    currentListItems = [];
    
      if (currentListLi.length>0) {
        
        // reads element data and insert them to JSON, adds
        // JSONs to array and returns it
          for (let i=0;i<currentListLi.length;i++) {
            
            const currentListLabel = currentListLi[i].
              getElementsByTagName('LABEL')[0];
            const checked = currentListLabel
              .getElementsByTagName('INPUT')[0].checked;
              
            listItem.value = currentListLabel.innerText;
            listItem.done = checked;
            currentListItems.push(listItem);
          }
        
        return currentListItems;
      }
      else {
        // if no tasks were added
        return [];
      }
  }

