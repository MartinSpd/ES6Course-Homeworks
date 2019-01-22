'use strict';

// //////////////////////////////////////
// DEMO DATA - USERS
  const demoUsers = [
    { 
      userId: 1, firstName: 'John', lastName: 'Doe', 
      email: 'john.doe@example.com', password: '123'
    },
    { 
      userId: 2, firstName: 'Jane', lastName: 'Doe', 
      email: 'jane.doe@example.com', password: '456'
    },
    { 
      userId: 3, firstName: 'Jill', lastName: 'Doe', 
      email: 'jilldoe@example.com', password: '789'
    },
    { 
      userId: 4, firstName: 'Jon', lastName: 'Doe', 
      email: 'jondoe@example.com', password: '000'
    }
  ];
  
  
// DEMO NOTES
  const demoNotes = [
    {
      userId: 3,
      listId: 1, 
      listName: 'to buy', 
      items: [
        { value: 'go groceries', done: false },
        { value: 'buy iPhone', done: false },
        { value: 'task #3', done: true },
        { value: 'buy new stuff', done: true },
        { value: 'task #5', done: false },
        { value: 'take car to service', done: true }
      ]
    },
    {
      userId: 2,
      listId: 2, 
      listName: 'miscaleous #1', 
      items: [
        { value: 'task #7', done: true },
        { value: 'task #8', done: true }
      ]
    },
    {
      userId: 2,
      listId: 3, 
      listName: 'misc #2', 
      items: [
        { value: 'task #9', done: true },
        { value: 'task #10', done: true },
        { value: 'task #11', done: false }
      ]
    },
    {
      userId: 3,
      listId: 4, 
      listName: 'dayly routine', 
      items: [
        { value: 'task #12', done: false },
        { value: 'task #13', done: true },
        { value: 'task #14', done: true },
        { value: 'task #15', done: true },
        { value: 'task #16', done: false }
      ]
    },
    {
      userId: 3,
      listId: 5, 
      listName: 'vacation plans', 
      items: [
        { value: 'Espana y Portugal 2019', done: false }
      ]
    },
    {
      userId: 1,
      listId: 6, 
      listName: 'List #6', 
      items: [
        { value: 'task #17', done: true },
        { value: 'task #18', done: true },
        { value: 'task #19', done: true }
      ]
    },
    {
      userId: 3,
      listId: 7, 
      listName: 'List #7', 
      items: [
        { value: 'task #20', done: true },
        { value: 'task #21', done: false },
        { value: 'task #22', done: true },
        { value: 'task #23', done: true },
        { value: 'task #24', done: false }
      ]
    },
    {
      userId: 2,
      listId: 8, 
      listName: 'TODO @ home', 
      items: [
        { value: 'clean up', done: true },
        { value: 'task #26', done: false }
      ]
    },
    {
      userId: 1,
      listId: 9, 
      listName: 'Summer Plans - TODOs', 
      items: [
        { value: 'Where to Go', done: false },
        { value: 'Transport', done: true },
        { value: 'Accomodation', done: false },
        { value: 'Points of Interest', done: false }
      ]
    },
    {
      userId: 3,
      listId: 10, 
      listName: 'Work Tasks', 
      items: [
        { value: 'task #31', done: false },
        { value: 'task #32', done: false },
        { value: 'task #33', done: false },
        { value: 'task #34', done: false }
      ]
    },
    {
      userId: 1,
      listId: 11, 
      listName: 'List #11', 
      items: [
        { value: 'task #35', done: true }
      ]
    },
    {
      userId: 2,
      listId: 12, 
      listName: 'Various', 
      items: [
        { value: 'task #36', done: true },
        { value: 'task #37', done: true },
        { value: 'task #38', done: false }
      ]
    }
  ];
  
    if (window.localStorage.getItem('P1_todoUsersDB')) {
        window.localStorage.removeItem('P1_todoUsersDB');
    }
    if (window.localStorage.getItem('P1_todoNotesDB')) {
        window.localStorage.removeItem('P1_todoNotesDB');
    }
  
  window.localStorage.setItem(
    'P1_todoUsersDB', JSON.stringify(demoUsers));
  window.localStorage.setItem(
    'P1_todoNotesDB', JSON.stringify(demoNotes));
  

  /*
      Project #1

  */

  // global JSON variables - user and todo list
  const newUser = { userId: 0, firstName: '', lastName: '', email: '', password: '' };
  const userList = { userId: 0, listId: 0, listName: '', items: [] };
  const listItem = { value: '', done: false };

  let currentUser = newUser;
  let todoUsersDB = [], todoListDB = [];
  let userLists = [], currentListItems = [];
  let listUserListsCaptions = [];
  let storage = window.localStorage;

  // global variables for functions showing and hiding DIVs
  const index = document.getElementById('index');
  const signup = document.getElementById('signup');
  const login = document.getElementById('login');
  const dashboard = document.getElementById('dashboard');
  const settings = document.getElementById('settings');


// prevents default behaviour - redirecting from form after 
// pressing button and assigning function to trigger
document.getElementById('signup1').addEventListener('click', function(event){
  event.preventDefault();
  goSignUp();
});
document.getElementById('login1').addEventListener('click', function(event){
  event.preventDefault();
  goLogIn();
});
document.getElementById('signup2').addEventListener('click', function(event){
  event.preventDefault();
  const result = signUpCheck();
  
    if (result) {
        goDashboard();
        loadUserLists();
    }
});
document.getElementById('login2').addEventListener('click', function(event){
  event.preventDefault();
  const result = logInCheck();
  
    if (result) {
        goDashboard();
        loadUserLists();
    }
});
document.getElementById('logout1').addEventListener('click', function(event){
  event.preventDefault();
  goIndex();
  logoutPurge();
  elementPurge();
});
document.getElementById('logout2').addEventListener('click', function(event){
  event.preventDefault();
  goIndex();
  logoutPurge();
  elementPurge();
});
document.getElementById('userSettings').addEventListener('click', function(event){
  event.preventDefault();
  goSettings();
  loadSettings();
});
document.getElementById('createList').addEventListener('click', function(event){
  event.preventDefault();
  listInit();
});
document.getElementById('cancel').addEventListener('click', function(event){
  event.preventDefault();
  goDashboard();
  document.getElementById('settings').className = 'hide';
});
document.getElementById('saveSettings').addEventListener('click', function(event){
  event.preventDefault();
  goDashboard();
  document.getElementById('settings').className = 'hide';
  saveSettings();
});
document.getElementById('addItem').addEventListener('click', function(event){
  event.preventDefault();
  addNewItem();
});
document.getElementById('saveList').addEventListener('click', function(event){
  event.preventDefault();
  saveList();
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
    
    const listsDiv = document.getElementById('listsDiv');
    const selectedListDiv = document.getElementById('selectedListDiv');
    
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
   * toggle classes if class is 'show' -> class changes 
   * to 'hide' and vice versa
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
    const message = document.getElementById('message1');
    let passed = false;

      if ((fName.value !== '')) {
        if ((lName.value !== '')) {
            if ((email.value !== '')) {
                if ((pass.value !== '')) {
                    if ((terms.checked)) {

                        message.innerText = '';
                        let formData = [fName.value, lName.value, 
                                        email.value, pass.value];
                        const exists = userExists(formData,'signup');
                        
                          if (exists) {
                              saveNewUser(formData);
                              return true;
                          }

                    } else { message.innerText = 'Agree with terms of use'; }
                } else { message.innerText = 'Fill up password'; }
            } else { message.innerText = 'Fill up your email'; }
        } else { message.innerText = 'Fill up your last name'; }
      } else { message.innerText = 'Fill up your first name'; }

  }


  /**
   * Log in check - check login form data if match with an
   * user, if yes returns true
   * 
   */
  function logInCheck() {

    const email = document.getElementById('email2');
    const pass = document.getElementById('pass2');
    const message = document.getElementById('message2');

      if ((email.value !== '')) {
          if ((pass.value !== '')) {
            
              let formData = [email.value, pass.value];
              const exists = userExists(formData, 'login');
              
                if (exists) { return true; }

          } else { message.innerText = 'Fill up password'; }
      } else { message.innerText = 'Fill up your email'; }
  }


  /**
   * getting user from localStorage and check if entered data 
   * match some user - helper for login and signup
   * 
   */
  function userExists(loggingUser, type) {

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
  


// SAVING NEW DATA - USER, LIST, SETTINGS
//


  /**
   * saving new user to localStorage - called if 
   * verification of entered data was succeessful
   * 
   */
  function saveNewUser(user) {
    // gets userId from last user
    const allUsers = getAllUsers()
    const newId = ++((allUsers.pop()).userId);
    
    newUser.userId = newId;
    newUser.firstName = user[0];
    newUser.lastName = user[1];
    newUser.email = user[2];
    newUser.password = user[3];

    allUsers.push(newUser);
    storage.setItem('P1_todoUsersDB', JSON.stringify(allUsers));
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
    
    curUser.firstName = document.getElementById('first2').value;
    curUser.lastName = document.getElementById('last2').value;
    curUser.email = document.getElementById('email3').value;
    curUser.password = document.getElementById('pass3').value;
    
    const index = newUser.userId;
    const allUsers = getAllUsers();
    allUsers[(index-1)] = editedUser;
    storage.setItem('P1_todoUsersDB', JSON.stringify(allUsers));
  }


  /**
   * function gets TODO lists for logged user by filtering
   * all lists, JSON is then read and data saved into arrays
   * of same structure, which is assigned to global variable
   * calls function to generate link for each list
   * 
   */
  function loadUserLists() {
    //
    const userDiv = document.getElementById('username');
    const user = getCurrentUser();
    const allTodoLists = JSON.parse( storage.getItem('P1_todoNotesDB') );
    let userJSONTodoLists = [], userTodoLists = [];
    let currentList = [], currentItems = [];
    
    listUserListsCaptions = [];
    
      // 1. gets all lists and search for lists created by current user
      for (let i=0; i<allTodoLists.length;i++) {
        
        if (allTodoLists[i].userId === user.userId) {
          userJSONTodoLists.push(allTodoLists[i]);
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
          listUserListsCaptions[i] = userJSONTodoLists[i].listName;
          
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
        generateLinks(userLists);
      }
      else {
        document.getElementById('listOfListsDiv').innerText = 
          'No lists were created yet. Create a new one by pressing a button above.';
      }
    userDiv.innerText = `${user.firstName} ${user.lastName}'s dashboard`;
  }


  /**
   * function generates links for each TODO list
   * at login - lists created by user in the past
   * line 726 use to make problems
   * 
   */
  function generateLinks(lists) {
    
    const node = document.createElement('DIV');
    let newItem = '';
    
    try {
      for (let i=0; i<lists.length; i++) {
        const listName = lists[i][1];
        newItem += `
          <a href="javascript: " id="${(lists[i][0])}"
           onClick="openList(this.id)">${listName}</a>`;
        
        node.innerHTML = newItem;
        document.getElementById('listOfListsSpan').appendChild(node);
      }
    } catch (err) { console.log(err); }
  }
  
  
  /**
   * function generates list of tasks for clicked list
   * 
   */
  function generateListItems(items, id) {
    
    const selectedTasks = document.getElementById('selectedListOl');
    let newItem = '', checked = '';
    
    selectedTasks.innerHTML = '';
    
      for (let i=0; i<items.length; i++) {
        
        const node = document.createElement('LI');
        
          if (items[i][1] === true) { checked = ' checked '; }
          
        newItem = `
          <label id="label${(i+1)}"><input type="checkbox"
            id="item${(i+1)}"${checked}/>${items[i][0]}</label>`;
        
        node.innerHTML = newItem;
        selectedTasks.appendChild(node);
      }
  }


  /**
   * called after clicking a link with list name - 
   * creates TODO list
   * 
   */
  function openList(id) {
    
    const captionTd = document.getElementById('tableCaption');
    const listsDiv = document.getElementById('listsDiv');
    const selectedListDiv = document.getElementById('selectedListDiv');
    captionTd.innerHTML = '';listsDiv.className = 'show';
    
      for (let i=0; i<userLists.length; i++) {
        
        // finds record of list matching id
        if (userLists[i][0] == id) {
          
          // 1. write out caption
          const node = document.createElement('DIV');
          const currentList = userLists[i];
          const newItem = `${currentList[1]}
          <button id="editListCaption">edit</button>`;
                  
          node.innerHTML = newItem;
          captionTd.appendChild(node);
          selectedListDiv.className = 'show';
          
          // 2. generate list of tasks
          generateListItems(currentList[2], id);
          
          // 3. saves current list to global variable
          setUserList(id, currentList);
          break;
        }
      }
    
    // assign event to button
    document.getElementById('editListCaption').addEventListener('click', function(event){
        event.preventDefault();
        editListCaptions();
    });
  }


  /**
   * function to create new TODO list - loads default 
   * values, when user want to create new list, not
   * edit existing notes
   * 
   */
  function listInit() {
    
    const captionTd = document.getElementById('tableCaption');
    const selectedListDiv = document.getElementById('selectedListDiv');
    const selectedListOl = document.getElementById('selectedListOl');    
    const node = document.createElement('DIV');

    try {
      selectedListDiv.className = 'show';
      try {
        captionTd.innerText = '';
        
        captionTd.innerHTML = '';
        selectedListOl.innerHTML = ''; } catch (err) {}
  
      const newItem = `new TODO list
      <button id="editListCaption">edit</button>`;
          
      node.innerHTML = newItem;
      captionTd.appendChild(node);
      
      // assign event to button
      document.getElementById('editListCaption').addEventListener('click', function(event){
          event.preventDefault();
          editListCaptions();
      });
    } catch (err) { console.log(err); }
  }


  /**
   * changes name of existing list
   * 
   */
  function editListCaptions() {
    
    const captionTd = document.getElementById
      ('tableCaption');
    const node = document.createElement('DIV');
    const defaultValue = captionTd.innerText.substring(
      0,captionTd.innerText.length-5).trim();
    let caption = window.prompt('enter list caption:',
          defaultValue);
    
      // in case cancel was pressed
      if (caption === null) { return ; }
    
      // else check if caption does not exists
      for (let i=0;i<listUserListsCaptions.length;i++) {
          
          if (listUserListsCaptions[i] === caption) {
              alert('You already have list with same name.');
              return ;
          }
      }
          
    captionTd.innerHTML = '';
    const newItem = `${caption}
      <button id="editListCaption">edit</button>`;
            
    node.innerHTML = newItem;
    captionTd.appendChild(node);
    
    // assign event to button
    document.getElementById('editListCaption').addEventListener(
      'click', function(event){
        event.preventDefault();
        editListCaptions();
    });
  }


  /**
   * adds new item to new list
   * 
   */
  function addNewItem() {
    
    const item = window.prompt('What is your new task?','');
    const count = document.getElementById('selectedListOl').
      childElementCount;
    const node = document.createElement("LI");
    
    let newItem;
    
      if (item) {
          newItem = `
              <label id="label${(count+1)}"><input type="checkbox" 
                id="item${(count+1)}">${item}</label>`;
                
          node.innerHTML = newItem;
          document.getElementById('selectedListOl').
            appendChild(node);
      }
    
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
   * function gets data from list and save it to JSON and
   * localStorage
   * 
   */
  function saveList() {
    
    const captionTd = document.getElementById('tableCaption');
    const userId = getCurrentUser().userId;
    const list = getUserList();
    const savingList = list;
    const savingListName = captionTd.innerText.substring(
                            0,captionTd.innerText.length-5).trim();
    let savingListId = 0, isNew = false, allNotes = getAllNotes();
    
      // if it's an existing list - keeps an ID otherwise
      // a new ID is created
      if (list.listId !== null) { savingListId = list.listId; }
        else {
          savingListId = ++(getAllNotes().pop().listId);
          isNew = true;
        }
        
    // set values of userId, listId, listName and tasks
    savingList.userId = userId;
    savingList.listId = savingListId;
    savingList.listName = savingListName;
    savingList.items = listItemsToJSON();
    
      // adds new or edited notes into notes database
      if (isNew) { allNotes.push(savingList); }
        else {
          let index = --(savingList.listId);
          allNotes = getAllNotes().splice(index, 1, savingList);
        }
    
    storage.setItem('P1_todoNotesDB', JSON.stringify(allNotes));
  }


  /**
   * reads all list items and push them all to a JSON array,
   * used at saving edited / new list
   * 
   */
  function listItemsToJSON() {
    //
    const currentListOl = document.getElementById('selectedListOl');
    const currentListLi = currentListOl.getElementsByTagName('LI');
    currentListItems = [];
    
      if (currentListLi.length>0) {
        
        // reads element data and insert them to JSON, adds
        // JSONs to array and returns it
          for (let i=0;i<currentListLi.length;i++) {
            
            const currentListLabel = currentListLi[i].
              getElementsByTagName('LABEL')[0];
            const checked = currentListLabel.
              innerHTML.indexOf('checked');
              
            listItem.value = currentListLabel.innerText;
            
              if (checked !== -1) {
                listItem.done = true;
              } else { listItem.done = false; }
            currentListItems.push(listItem);
          }
        
        return currentListItems;
      }
      else {
        // if no tasks were added
        return [];
      }
  }


  /**
   * a
   * 
   */
  function a() {
    //
  }


  /**
   * cleaning content of elements and removing dynamically
   * created nodes
   * 
   */
  function elementPurge() {

    const listCaption = document.getElementById('listOfListsSpan');
    const dashboardCaption = document.getElementById('username');
    const listsDiv = document.getElementById('listsDiv');
    const selectedListDiv = document.getElementById('selectedListDiv');
    
      if (dashboardCaption) { dashboardCaption.innerText = 'Dashboard'; }
      
      if (listCaption !== null) {
          listCaption.innerHTML = '';
      }
      if (listsDiv !== null) {
          listsDiv.className = 'show';
      }
      if (selectedListDiv !== null) {
          selectedListDiv.className = 'hide';
      }
  }


  /**
   * cleaning global variables at logout
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
    listUserListsCaptions = [];
  }
  
  
  
// HELPER FUNCTIONS
//
  
  //