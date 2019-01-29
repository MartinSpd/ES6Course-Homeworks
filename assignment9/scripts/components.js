
/** TEXT FIELDS
 */

// signup
let first = 'Bob';
let last = 'Doe';
let email1 = 'bob-doe@example.com';
let pass1 = '666';
let atrChecked = 'checked';
let message1 = '';

// login
let email2 = 'john.doe@example.com';
let pass2 = '123';
let message2 = '';

// dashboard
let dashboardCaption = 'Dashboard';
let notesToLinks = '';
let notesCaption = '';
let notesItems = '';
let buttonClass = 'invisible';

// settings
let first2 = '';
let last2 = '';
let email3 = '';
let pass3 = '';



/** HTML COMPONENTS
 */

const renderIndexDiv = () => {
  
  return `
    <!-- DEFAULT DIV: INDEX -->
    <div id="index">
    <h1>TODO List</h1>
    <span>A simple TODO list. Create an account or sign in to
        see list.
    </span><br />
    <form id="form1">
        <button id="signup1">Sign Up</button>
        <button id="login1">Log In</button>
    </form>
    </div>
  `; 
};


const renderSignupDiv = (first, last, email1, pass1, 
                          atrChecked, message1) => {
                           
  return `
    <!-- SIGN UP FORM -->
    <div id="signup">
    <h2>Sign Up</h2>
    <span>Create an account.</span>
    <br /><br />
    <form id="form2">
        <input type="text" id="first" value="${first}"/><br />
        <input type="text" id="last" value="${last}"/><br />
        <input type="text" id="email1" value="${email1}"/><br />
        <input type="password" id="pass1" value="${pass1}"/><br /><br />
        <label class="terms"><input type="checkbox" id="terms" ${atrChecked}/>
        I agree to the Terms of Use</label>
        <br /><br /><br />
        <button id="signup2">Sign Up</button>
    </form>
    <p id="message1">${message1}</p>
    </div>
  `;
};


const renderLoginDiv = (email2, pass2, message2) => {
  
  return `
    <!-- LOGIN FORM -->
    <div id="login">
      <h2>Log In</h2>
      <span>Log in to see your TODO lists.</span><br />
      <form id="form3">
        <input type="text" id="email2" value="${email2}"/><br />
        <input type="password" id="pass2" value="${pass2}" />
        <br /><br /><br />
        <button id="login2">Log In</button>
      </form>
      <p id="message2">${message2}</p>
    </div>
  `;
};


const renderDashboardDiv = (
                      dashboardCaption,
                      notesToLinks,
                      notesCaption,
                      notesItems, buttonClass) => {
  
  return `
    <!-- DASHBOARD AFTER LOGIN OR SIGNUP -->
    <div id="dashboard">
    <h2 id="username">${dashboardCaption}</h2>
      <form id="form4">
        <!-- buttons: settings, create new, log out -->
        <button id="userSettings">
          Account Settings</button>
        <button id="createList">
          New TODO list</button>
        <button id="logout1">Log Out</button>
      </form>
      <br /><br />
      
      <!-- div where user lists write out -->
      <div id="listsDiv">
        <h3>recently created lists</h3>
          <!-- links to lists -->
          ${notesToLinks}
          <div id="listOfListsDiv">
            <div id="listOfListsInnerDiv"></div>
          </div><br />
      </div>
    
      <!-- current (selected) list -->
      <div id="selectedListDiv">
        <br /><br />
        
        <form id="selectedListForm" class="${buttonClass}">
          <table id="listTable">
            <tr>
              <td id="tableCaption">
                <!-- caption and edit button goes here -->
                ${notesCaption}
              </td>
            </tr>
            <tr>
              <td id="selectedListItems">
                <ol class="list" id="selectedListOl">
                  <!-- list generates here -->
                  ${notesItems}
                </ol>
              </td>
            </tr>
          </table>
          <br />
          <button id="addItem">+ Item to List</button>
          <button id="saveList">Save List</button>
        </form>
      </div>
            
    </div>
  `;
};


const renderSettingsDiv = (first2, last2,
                           email3, pass3) => {

return `
    <!-- SETTINGS FORM -->
    <div id="settings">
    <h2>Settings</h2>
        <form id="form5">
          <input type="text" id="first2" value="${first2}" /><br />
          <input type="text" id="last2" value="${last2}" /><br />
          <input type="text" id="email3" value="${email3}" /><br />
          <input type="password" id="pass3" value="${pass3}" /><br /><br />
    
          <button id="logout2">Log Out</button>
          <button id="cancel">Cancel</button>
          <button id="saveSettings">
            Save changes</button>
      </form>
    </div>
  `;
};



