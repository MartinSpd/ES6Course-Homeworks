'use strict';

/*
    Homework Assignment #20: Final Exam Proposal

*/

const fiveProjects = [
  {
    projectName: 'Luxon.js',
    url: null,
    GitHub: 'https://github.com/moment/luxon',
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
    choiceReason: `I didn't find in documentation a function to localize month names 
    in multiple languages. Might be usefull, when you want long format.
    Using maps and arrays.`
  },
  {
    projectName: 'Maptalks.js',
    url: 'http://maptalks.org/maptalks.js/',
    GitHub: 'https://github.com/maptalks/maptalks.js',
    favorite: false,
    proposedFunctions: [
      {
        functionName: 'setSize',
        args: [
          {
            args: 'object',
            type: object,
            description: ' to be changed'
          },
          {
            args: 'size',
            type: number,
            description: 'new size of an object'
          }
        ],
        return: { }
      }
    ],
    choiceReason: `I want to get to know basics of Open GL.`
  },
  {
    projectName: 'Spacetime.js',
    url: null,
    GitHub: 'https://github.com/spencermountain/spacetime',
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
    choiceReason: 'I find this function to be handy for this kind of library'
  },
  {
    projectName: 'Zuck.js',
    url: null,
    GitHub: 'https://github.com/ramon82/zuck.js',
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
    choiceReason: `It's a original script of fb and insta stories. 
    I think it can be extended with new functions.`
  },
  {
    projectName: 'Draggable.js',
    url: '',
    GitHub: 'https://github.com/Shopify/draggable',
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
        return: { }
      }
    ],
    choiceReason: `I found in documentation this kind of function is missing aside 
    get function.`
  }
];

const source = 'https://medium.mybridge.co/amazing-javascript-projects-for-the-past-year-v-2018-2f114c6bd70a';

console.log(fiveProjects);


