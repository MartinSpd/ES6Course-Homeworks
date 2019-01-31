
**LEGEND:**
* note: has its editable name and contanins tasks that can be edited as well
* list: in same comments is the same as note or refering to an array
* task: part of not note together create `TODO list`
* screen: `DIV` element with nested children HTML tags - there are each for home screen, login, signup or editing user data
* user: can create or edit notes


**PROJECT 1 - ASSIGNMENT DESCRIPTION:**
 
- Create a simple "to-do list" application, using client-side HTML, CSS, and Javascript only. This application should store its data using localStorage only, and should not connect to any external APIs, backends, databases etc. This should function as a "Single Page Application", so the page should never actually refresh or reload, and no links should direct to any other page. Instead, when links are clicked (or forms are submitted), the contents of the page should disappear and the new content should be loaded in its place, all without actually redirecting the user. Here are the user-stories:


*Index*

1. Upon a fresh load (or refresh) of the application, the user should see the title of the application, a description, and two buttons: "Sign Up" and "Log In".

2. If "Sign Up" is clicked, the user should be taken to a form where they need to enter their: first name, last name, email, and password (all strings, but passwords should not be displayed in plain text inputs, use password inputs instead). The user also needs to check a check-box that says "I agree to the Terms of Use".  When they submit the form, if there are any errors on the form, they should see a red error message somewhere on the screen. If the form submission is successful, they should be taken to their dashboard. All data for the new user should be stored in localStorage. Note: in an actual application you would never store passwords this way, this is just for the sake of this project.

3. If "Log In" is clicked the user should be taken to a form where they need to enter their email address and password. When they submit the form, if there are any errors on the form (or if the email and password don't match an existing user), they should see a red error message somewhere on the screen. If the inputs are fine, and both of these match an existing user, then the user should be taken to their dashboard.

*Dashboard:*

1. The dashboard should list (in chronological order), all of the "To-Do Lists" created by the user thus far. If none have been created, none should be displayed. In either case, there should be a "Create New to-do List button" somewhere on the screen.

2. If one of the existing todo-lists is clicked on, the user should be taken to that list.

3. If a user clicks to create a new todo list, they should be taken to a blank list.

*Lists:*

- When a user is viewing a (new or existing) list, they should be able to :

1. Name or rename the list to anything they want, as long as it doesn't conflict with the name of any other list created by that particular user.

2.  Add as many items to the list as they wish

3. Check off an item as "done", and uncheck it as well

4. Save the list

*Users:*

1. If the user is logged in, then at the top of the screen, on every page of the site, there should be a "log out" button. Clicking that should log the user out.

2. If the user is logged in, then at the top of the screen, on every page of the site, there should be a button that says "account settings". Clicking that link should take the user to a page where they can edit any/all of the information they entered on the signup for.

3. Your application should support as many unique users as possible. The actions that one user takes within the application should have virtually no effect on what other users are doing.

*Extra Credit:*

- If you feel like getting fancy, try to find an open-source JS library for hashing passwords (using any hashing function you prefer). Hash the passwords when you receive them and only store the hash rather than the raw password.

- "As mentioned above, storing actual users' passwords (in a real life application) is far more complex than this, and often involves many moving parts, but it's still good practice to get used to using hashing libraries.


**PROJECT SOLUTION:**
- I created a project of 3 files - a `*htm`, `*.css` and `*.js` file
- each screen for login, signup, home screen or settings are separated `<DIV>` elements, whitch show and hide using `CSS` property `display`
- `JavaScript` handles rest of logic
- there are also lines of outcommented code for using encryption (`CryptoJS` library), but unfortunately I had no chance to test it:
  * on line `3` is library import
  * line `393` saves a new user with password in encrypted form (to use it comment upper line (`392`) and uncomment line `393`)
  * line `425` is checking loging user (same as previous, it's commented out, to apply it use the same approach as above)
- users and notes are stored in a `JSON` format inside `project1.js` file between lines `7` and `153`  (demo data for existing users and some values for notes)
- under demo data are global variables and functions
- if you want to look into the code, you can find many comments inside functions and `JS Doc` above each function


**STARTING APPLICATION:**
- run `index.html`
- you can pick if you want to login or create a new user
- on start all `JSON` demo data are loaded to localStorage
- before new demo data between lines `7` and `153` in file `project1.js` are inserted into `localStorage` - old data are deleted
- you can disable it by commenting or deleting lines `155` - `160`
- after closing application it deletes all newly added users or notes


**LOGIN:**
- functions according to provided story
- I left predefined values in text fields for each screen, so you don't have to look in code necessarily at first run
- after login all saved notes load as hyperlinks 
- after clicking each link you can see its content
- there is:
  * button to edit user data
  * button to create new note
  * button to add new task
  * checkbox - each task can be checked as done or unchecked
  * new and existing note can be edited (add new task) or create new note
  * after saving new note hyperlinks are regenerated

**SIGN UP:**
- functions according to provided story
- for creating new user
- after new user is created
- no hyperlinks are loaded (since we just created a new user - you will see a message)
- screen after signup offers same options as login screen
- hyperlink is generated after saving a new note
- when newly created user (that new notes created) logoff and login, then his/ hers notes are loaded as well


**OMIT:**
- I didn't add option to remove task, whole note with tasks or delete user - as I understood it was not in provided story


**PERSONAL NOTES ABOUT PROJECT:**
- to be honest it took me more then a week to finish this
- it was much more as I expected, sometimes I was surprised, that problem was not, what I originally tough
- it was an educating experience
- aside problem reading `JSON` from `localStorage` I finished it all by myself
- the most problems making this project long were just the small things
- there might be still a minor flaw, when regenerating items again after saving notes - generate just last item