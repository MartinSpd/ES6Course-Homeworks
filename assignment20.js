'use strict';

/*
    Homework Assignment #20: Final Exam Proposal

*/

const fiveProjects = [
  {
    projectName: 'Draggable.js',
    url: null,
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
  },
  {
    projectName: 'Luxron.js',
    url: null,
    GitHub: 'https://github.com/moment/luxon',
    favorite: false,
    proposedFunctions: [
      {
        functionName: 'getMilils',
        args: [],
        return: {
          type: number,
          description: 'number of miliseconds since 1. 1 1970.'
        }
      }
    ],
    choiceReason: `It's a simple version of Moment.js without this kind of function.`
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
    projectName: 'Spacetime.js',
    url: null,
    GitHub: 'https://github.com/spencermountain/spacetime',
    favorite: true,
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
  }
];

const source = 'https://medium.mybridge.co/amazing-javascript-projects-for-the-past-year-v-2018-2f114c6bd70a';

console.log(fiveProjects);


