

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

