'use strict';

/*
    Homework Assignment #20: Final Exam Proposal

*/

const fiveProjects = [
  {
    projectName: 'Moment.js',
    favorite: true,
    proposedFunctions: [
      {
        functionName: 'getLocaleMonthName',
        args: [
          {
            args: 'monthIndex',
            type: number,
            description: 'defines month index, limited to range 0 - 11'
          },
          {
            args: 'lang',
            type: string,
            description: '2 or 3 letter country code for localization of month name'
          }
        ],
        return: {
          type: string,
          description: 'full month name in localized language'
        }
      },
      {
        functionName: 'getMonthfromLocaleName',
        args: [
          {
            args: 'monthName',
            type: string,
            description: 'full month name in localized language'
          },
          {
            args: 'lang',
            type: string,
            description: 'for localization of language'
          }
        ],
        return: {
          type: number,
          description: 'month index'
        }
      }
    ],
    reason: `I didn't find in documentation a function to localize month names 
    in multiple languages. Might be usefull, when you want long format.
    Using maps and arrays.`
  },
  {
    projectName: 'Luxon.js',
    favorite: false,
    proposedFunctions: [
      {
        functionName: 'getLocaleMonthName',
        args: [
          {
            args: 'monthIndex',
            type: number,
            description: 'defines month index, limited to range 0 - 11'
          },
          {
            args: 'lang',
            type: string,
            description: '2 or 3 letter country code for localization of month name'
          }
        ],
        return: {
          type: string,
          description: 'full month name in localized language'
        }
      },
      {
        functionName: 'getMonthfromLocaleName',
        args: [
          {
            args: 'monthName',
            type: string,
            description: 'full month name in localized language'
          },
          {
            args: 'lang',
            type: string,
            description: 'for localization of language'
          }
        ],
        return: {
          type: number,
          description: 'month index'
        }
      }
    ],
    reason: `I didn't find in documentation a function to localize month names 
    in multiple languages. Might be usefull, when you want long format.
    Using maps and arrays.`
  },
  {
    projectName: 'Spacetime.js',
    favorite: false,
    proposedFunctions: [
      {
        functionName: 'getDateBorderDistance',
        args: [],
        return: {
          type: JSON,
          description: 'data about location, where is currently date border'
        }
      }
    ],
    reason: 'I find this function to be handy for this kind of library'
  },
  {
    projectName: 'Zuck.js',
    favorite: false,
    proposedFunctions: [
      {
        functionName: 'addStory',
        args: [
          {
            args: 'story',
            type: JSON,
            description: ''
          },
        ],
        return: {
          type: '',
          description: 'adds another story to array of stories'
        }
      },
      {
        functionName: 'removeStory',
        args: [
          {
            args: 'story',
            type: JSON,
            description: ''
          },
        ],
        return: {
          type: '',
          description: 'removes story from array of stories'
        }
      }
    ],
    reason: `It's a original script of fb and insta stories. 
    I think it can be extended with new functions.`
  },
  {
    projectName: 'Draggable.js',
    favorite: false,
    proposedFunctions: [
      {
        functionName: 'setClassName',
        args: [
          {
            args: 'element',
            type: HTMLElement,
            description: `element's class name to be changed`
          },
          {
            args: 'className',
            type: string,
            description: 'class name to be set'
          }
        ],
        return: {
          type: null,
          description: ''
        }
      }
    ],
    reason: `I found in documentation this kind of function is missing aside 
    get function.`
  }
];

console.log(fiveProjects);


