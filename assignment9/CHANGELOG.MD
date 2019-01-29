
**LEGEND:**
* note: has its editable name and contanins tasks that can be edited as well
* list: in same comments is the same as note or refering to an array
* task: part of not note together create `TODO list`
* screen: `DIV` element with nested children HTML tags - there are each for home screen, login, signup or editing user data
* user: can create or edit notes


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