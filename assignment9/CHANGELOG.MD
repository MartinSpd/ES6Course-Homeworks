
**LEGEND:**
* note: has its editable name and contanins tasks that can be edited as well
* list: in same comments is the same as note or refering to an array
* task: part of not note together create `TODO list`
* screen: `DIV` element with nested children HTML tags - there are each for home screen, login, signup or editing user data
* user: can create or edit notes


**HOME ASSIGNMENT 9:**
*Details:*
 
- Now that you know how template literals work, you've probably got a few ideas of how you improve Project #1. So for this assignment, return to project #1 and upgrade your code to use template literals. That is, specifically:

1. Modify your pages so that all of the HTML within the `<body>` is written by Javascript (rather than hardcoded onto the page).

2. Break all your HTML into separate Javascript templates, using template literals.

3. Make sure that any variables that appear are not harcoded, but are presented via those template literals. Keep your templates free of as much text and numbers as possible, pushing all that data into variables instead. 


*Extra Credit:*

- In addition to template-izing the `<body>` see if you can do so for the some of the `<head>` tags like the `<title>` and various pieces of meta data.


**PROJECT 1 CHANGES:**
- most of features works same as Project #1
- Home assignment 9 is just Project #1 remade according to requirements
- no minor bugs were fixed
- I moved all HTML into separate functions and its inserted with innerHTML
- some functions had to be adjusted accordingly, since they were inserting new child nodes
- all demo data, in `JSON` format, were moved into file `scripts/demoData.js`
- text literals for injecting HTML are in file `scripts/components.js` in separate functions called to render inside `<BODY>`
- file `index.htm` has blank body
- all logic is stored inside `scripts/assignment09.js`
- CSS plays in this case minor role