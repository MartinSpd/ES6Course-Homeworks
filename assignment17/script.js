'use strict';

/*
    Homework Assignment #17: The Notifications API

*/

const defaultAlarms = [
    { date: 'Fri Apr 12 2019 07:00:00 GMT+0100 (Central European Standard Time)', message: 'good morning', enabled: true, },
    { date: 'Fri Apr 12 2019 12:00:00 GMT+0100 (Central European Standard Time)', message: 'lunch time!', enabled: true, },
    { date: 'Fri Apr 12 2019 17:00:00 GMT+0100 (Central European Standard Time)', message: 'call mom after work', enabled: true, },
    { date: 'Fri Apr 19 2019 07:00:00 GMT+0100 (Central European Standard Time)', message: 'task 1', enabled: true, },
    { date: 'Fri Apr 26 2019 07:00:00 GMT+0100 (Central European Standard Time)', message: 'task 2', enabled: true, },
    { date: 'Fri Apr 12 2019 15:00:00 GMT+0100 (Central European Standard Time)', message: 'task 3', enabled: true, },
    { date: 'Fri Mar 22 2019 07:00:00 GMT+0100 (Central European Standard Time)', message: 'It\'s Friday!', enabled: false, },
    { date: 'Sun Mar 24 2019 22:37:00 GMT+0100 (Central European Standard Time)', message: 'It\'s Friday!', enabled: false, },
    { date: 'Sat Mar 23 2019 08:00:00 GMT+0100 (Central European Standard Time)', message: 'buy groceries', enabled: false, },
  ];
  
  
  
  if (window.localStorage.getItem('Assignment17-Alarms')) {
    window.localStorage.removeItem('Assignment17-Alarms');
  }
  
window.localStorage.setItem(
  'Assignment17-Alarms', JSON.stringify(defaultAlarms));
  


  /** GLOBAL VARIABLES */
  
  const storage = window.localStorage;
  const topic = 'Assignment17-Alarms';
  const alarmObj = {
    date: new Date(),
    message: '',
    enabled: true,
  };
  let currentEdit = alarmObj;
  let alarmDates = [];
  let access = 'granted';
  
  const date = new Date();
  
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

// onload event
body.onload = () => {
  listAlarms();
  
  Notification.requestPermission().then((result) => {
    access = result;
  });
  
    if (access === 'granted') {
      setInterval(() => {
        triggerAlarm();
      } , 1000);
    }
  
};



  /**
   * add alarm div
   * 
   */
   
const addAlarmDiv = (currentDate) => {
  
  return `
    <form id="addForm">
      
      <div class="alarmDiv">
        <h2>new alarm:</h2>
        <span class="label">date and time:</span>
        <br />
        <input type="text" id="pickYear" maxlength="4"
         onclick="this.select()" class="notificationYear"
          value="${currentDate[0]}" />/
        <input type="text" id="pickMonth" maxlength="2"
          onclick="this.select()" class="notificationDate"
          value="${currentDate[1]+1}" />/
        <input type="text" id="pickDay" maxlength="2"
          onclick="this.select()" class="notificationDate"
          value="${currentDate[2]}" />
          
        <span class="at">at</span> 
        
        <input type="text" id="pickHour" maxlength="2"
          onclick="this.select()" class="notificationDate"
          value="${currentDate[3]}" />:
        <input type="text" id="pickMinute" maxlength="2"
          onclick="this.select()" class="notificationDate"
          value="${currentDate[4]}" />:
        <input type="text" id="pickSecond" maxlength="2"
          onclick="this.select()" class="notificationDate"
          value="${currentDate[5]}" />          
      </div>
      
      <div class="alarmDiv">
        <span class="label">message:</span>
        <br />
        <input type="text" id="newAlarmMessage" size="40" 
          maxlength="320" class="notificationMessage" />
        <br />
        <button id="saveNewAlarm" class="
          notificationActionButton">save new alarm</button>
        <button id="cancelNewAlarm" class="
          notificationActionButton">cancel</button>
      </div>
    
    </form>
  `;
}
  
  
  
  /**
   * edit alarm div
   * 
   */
   
const editAlarmDiv = (alarm) => {
  
  return `
    <form id="editForm">
      
      <div class="alarmDiv">
        <h2>edit alarm:</h2>
        <span class="label">date and time:</span>
        <br />
        <input type="text" id="alarmYear" maxlength="4"
         onclick="this.select()" class="notificationYear"
         value="${alarm[0]}" />/
        <input type="text" id="alarmMonth" maxlength="2"
          onclick="this.select()" class="notificationDate"
         value="${alarm[1]+1}" />/
        <input type="text" id="alarmDay" maxlength="2"
          onclick="this.select()" class="notificationDate"
         value="${alarm[2]}" />
          
        <span class="at">at</span> 
        
        <input type="text" id="alarmHour" maxlength="2"
          onclick="this.select()" class="notificationDate"
         value="${alarm[3]}" />:
        <input type="text" id="alarmMinute" maxlength="2"
          onclick="this.select()" class="notificationDate"
         value="${alarm[4]}" />:
        <input type="text" id="alarmSecond" maxlength="2"
          onclick="this.select()" class="notificationDate"
         value="${alarm[5]}" />          
      </div>
      
      <div class="alarmDiv">
        <span class="label">message:</span>
        <br />
        <input type="text" id="alarmMessage" size="40" 
          maxlength="320" class="notificationMessage"
         value="${alarm[6]}" />
        <br />
        <button id="saveAlarmEdit" class="
          notificationActionButton">save changes</button>
        <button id="deleteAlarmEdit" class="
          notificationActionButton">delete</button>
        <button id="cancelAlarmEdit" class="
          notificationActionButton">cancel</button>
      </div>
      
    </form>
  `;
}
  
  
  
  /**
   * assign event listeners
   * 
   */
   
const assignListeners = (button) => {
  
  switch(button) {
    case 'saveNewAlarm' :
      document.getElementById('saveNewAlarm').
        addEventListener('click', (event) => {
          event.preventDefault();
          
          saveAlarm(1);
          listAlarms();
          
            while (container1.firstChild) {
              container1.removeChild(
                container1.firstChild);
            } 
      });
      break;
    case 'cancelNewAlarm' :
      document.getElementById('cancelNewAlarm').
        addEventListener('click', (event) => {
          event.preventDefault();
          
            while (container1.firstChild) {
              container1.removeChild(
                container1.firstChild);
            }
      });
      break;
    case 'saveAlarmEdit' :
      document.getElementById('saveAlarmEdit').
        addEventListener('click', (event) => {
          event.preventDefault();
          
          saveEditedAlarm();
          listAlarms();
          
            while (container2.firstChild) {
              container2.removeChild(
                container2.firstChild);
            }
      });
      break;
    case 'deleteAlarmEdit' :
      document.getElementById('deleteAlarmEdit').
        addEventListener('click', (event) => {
          event.preventDefault();
          
          deleteAlarm();
          listAlarms();
          
            while (container2.firstChild) {
              container2.removeChild(
                container2.firstChild);
            }
      });
      break;
    case 'cancelAlarmEdit' :
      document.getElementById('cancelAlarmEdit').
        addEventListener('click', (event) => {
          event.preventDefault();
          
            while (container2.firstChild) {
              container2.removeChild(
                container2.firstChild);
            }
      });
      break;
  }
}


document.getElementById('showAddAlarm').
  addEventListener('click', (event) => {
    event.preventDefault();
    
    container1.innerHTML = addAlarmDiv(
        helper_setCurrentDateTime() );
    assignListeners('saveNewAlarm');
    assignListeners('cancelNewAlarm');
});



  /**
   * checks if alarm should be triggered
   * 
   */
   
function triggerAlarm() {
  
  const dates = helper_getAlarmDates();
  const alarms = JSON.parse(storage.getItem(topic));
  let currentDate = new Date();
  
    for (let i = 0; i < alarms.length; i++) {
      console.log();
      if ((dates[i].getFullYear() == 
           currentDate.getFullYear()) && 
          (dates[i].getMonth() == 
           currentDate.getMonth()) && 
          (dates[i].getDate() == 
           currentDate.getDate()) && 
          (dates[i].getHours() === 
           currentDate.getHours()) && 
          (dates[i].getMinutes() === 
           currentDate.getMinutes()) && 
          (dates[i].getSeconds() <= 
           currentDate.getSeconds()) &&
           alarms[i].enabled) {
          
          const notify = new Notification(
            alarms[i].message);
            
          helper_disableAlarm(i);
      }
    }
}



  /**
   * loads alarms from localStorage and
   * list them
   */
function listAlarms() {
  const alarms = JSON.parse(storage.getItem(topic));
  
  let listItems = '';
    for (let i = 0; i< alarms.length; i++) {
      
      const propDate = new Date(alarms[i].date);
      const date = `${propDate.getDate()}. 
        ${propDate.getMonth()+1} ${propDate.
          getFullYear()}`;
      const time = `${propDate.getHours()}:${
        propDate.getMinutes() < 10 ? 
          '0'+propDate.getMinutes() :
          propDate.getMinutes()
        }:${
        propDate.getSeconds() < 10 ?
          '0'+propDate.getSeconds() :
          propDate.getSeconds()
        }`;
        
        if (alarms[i].enabled) {
          listItems += `<li id="alarm${i}">
            <b>alarm ${i+1}:</b> ${date} 
            ${time}</li>`;
          } else {
              listItems += `<li id="alarm${
                i}" class="disabled"><b>alarm 
                ${i+1}:</b> ${date} ${time}
                </li>`;
            }
    }

  document.getElementById('alarmList').innerHTML 
    = listItems;
    
    for (let i = 0; i < alarms.length; i++) {
      
      if (alarms[i].enabled) {
        document.getElementById(`alarm${i}`).
          addEventListener('click', (event) => {
            
            container2.innerHTML = editAlarmDiv( 
                openEdit(alarms[i]) );
            assignListeners('saveAlarmEdit');
            assignListeners('deleteAlarmEdit');
            assignListeners('cancelAlarmEdit');
        });
      }
    }
}



  /**
   * saves new alarm into local storage
   * 
   */
   
function saveAlarm(type) {
  
  const alarm = helper_alarmAsJSON(type);

    if (alarm) {
        let alarms = JSON.parse(storage.getItem(topic));
        alarms.push(alarm);
        storage.setItem(topic, JSON.stringify(alarms));
    }
}



  /**
   * loads alarm data to text fields
   * 
   */
function openEdit(alarm) {
  
  currentEdit = alarm;
  const propDate = new Date(alarm.date);
  
  const editValues = [
      propDate.getFullYear(),
      propDate.getMonth(),
      propDate.getDate(),
      propDate.getHours(),
      (propDate.getMinutes() < 10 ?
        '0'+propDate.getMinutes() : 
        propDate.getMinutes() ),
      (propDate.getSeconds() < 10 ?
        '0'+propDate.getSeconds() : 
        propDate.getSeconds() ),
      alarm.message
    ];
    
  return editValues;
}



  /**
   * saves edited alarm
   * 
   */
   
function saveEditedAlarm() {
  
  const edited = helper_alarmAsJSON(2);
  
  let alarms = JSON.parse(storage.getItem(topic));

    // finds position
    for (let i = 0; i < alarms.length; i++) {
      if (alarms[i] === currentEdit) {
        
        alarms.splice(i, 1);
        alarms.splice(i, 0, edited);
        
        storage.setItem(topic, JSON.stringify(
          alarms));
        break;
      }
    }
  
  currentEdit = alarmObj;
}



  /**
   * deletes edited alarm
   * 
   */
   
function deleteAlarm() {
  
  let alarms = JSON.parse(storage.getItem(topic));
  
    for (let i = 0; i < alarms.length; i++) {
      
      if (alarms[i].date == currentEdit.date &&
          alarms[i].message == currentEdit.message &&
          alarms[i].enabled == currentEdit.enabled) {
        
        alarms.splice(i, 1);
        storage.setItem(topic, JSON.stringify(alarms));
        break;
      }
    }
  
  currentEdit = alarmObj;
}



  /**
   * gather dates from all alarms
   * 
   */
   
function helper_getAlarmDates() {
  
  const alarms = JSON.parse(
    storage.getItem(topic) );
  let dates = [];
  
    // get all dates
    for (const alarm of alarms) {
      dates.push(new Date(alarm.date));
    }
  
  alarmDates = dates;
  
  return dates;
}



  /**
   * save textfields into the JSON Object
   * and returns it
   * 
   */
   
function helper_alarmAsJSON(type) {
  
  
  const addMessage = document.getElementById('newAlarmMessage');
  const editMessage = document.getElementById('alarmMessage');
  
  const passed = helper_checkIfDateTimeIsValid(type);
  
    if (passed) {
      
      // if check passed get date and time
      const values = helper_addFieldsToArray(type);
      const customDate = new Date(values[0], 
        values[1]-1, values[2], values[3], 
        values[4], values[5]);
      
      // sets new alarm
      const saveAlarm = alarmObj;
      saveAlarm.date = customDate;
      
        if (type === 1) {
          saveAlarm.message = addMessage.value;
        }
      
        if (type === 2) {
          saveAlarm.message = editMessage.value;
        }
      
      return saveAlarm;
    }
    
  return passed;
}
  
  

  /**
   * sets current date and time to text fields
   * 
   */
   
function helper_setCurrentDateTime() {
   
  return [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];
}



  /**
   * returns array with loaded values
   * from text fields
   * 
   */
   
function helper_addFieldsToArray(type) {
  
  
  const addYear = document.getElementById('pickYear');
  const addMonth = document.getElementById('pickMonth');
  const addDay = document.getElementById('pickDay');
  const addHour = document.getElementById('pickHour');
  const addMinute = document.getElementById('pickMinute');
  const addSecond = document.getElementById('pickSecond');
  const addMessage = document.getElementById('newAlarmMessage');
  
  const editYear = document.getElementById('alarmYear');
  const editMonth = document.getElementById('alarmMonth');
  const editDay = document.getElementById('alarmDay');
  const editHour = document.getElementById('alarmHour');
  const editMinute = document.getElementById('alarmMinute');
  const editSecond = document.getElementById('alarmSecond');
  const editMessage = document.getElementById('alarmMessage');
  
  let customDate = '';
  let values = [];
  
    if (type === 1) {
      values = [addYear.value, addMonth.value,
        addDay.value, addHour.value, addMinute.value,
        addSecond.value];
    }
    
    if (type === 2) {
      values = [editYear.value, editMonth.value,
        editDay.value, editHour.value, editMinute.value,
        editSecond.value];
    }
    
  return values;
}



  /**
   * checks if set date is valid
   * if values are not set / numeric or
   * in allowed range - return false
   * 
   */
   
function helper_checkIfDateTimeIsValid(type) {
  
  const values = helper_addFieldsToArray(type);
  const customDate = new Date(values[0], values[1]-1, values[2], 
      values[3], values[4], values[5]);
    
        
    // checks if some of values are empty
    // checks if values are numbers only
    for (const prop of values) {
      if (prop === '') {
        alert('Fill up missing values.');
        return false;
      }
      
      if (isNaN(prop)) {
        alert('Fill up numeric values.');
        return false;
      }
    }
    
    // checks if some of values are higher 
    // than they should be - simplified version
    for (let i=0; i<values.length; i++) {
      if (values[0] < new Date().getFullYear()) { // years
        alert('Set correct value for year.');
        return false;
      }
      if (!(values[1] > 0 && values[1] < 13)) { // months
        alert('Set correct value for month.');
        return false;
      }
      if (!(values[2] > 0 && values[2] < 32)) { // days
        alert('Set correct value for day.');
        return false;
      }
      if (!(values[3] >= 0 && values[3] < 24)) { // hours
        alert('Set correct value for hours.');
        return false;
      }
      if (!(values[4] >= 0 && values[4] < 60)) { // minutes
        alert('Set correct value for minutes.');
        return false;
      }
      if (!(values[5] >= 0 && values[5] < 60)) { // seconds
        alert('Set correct value for seconds.');
        return false;
      }
    }
      
    // check if date is older than current date
    if (customDate < new Date()) {
        alert('Date is older than current date and time.');
        return false;
    }
  
  return true;
}



  /**
   * disables alarm
   * 
   */
   
function helper_disableAlarm(index) {
  
  
  let alarms = JSON.parse(storage.getItem(topic));
  const edited = alarms[index];
  edited.enabled = false;
  
  alarms.splice(index, 1);
  alarms.splice(index, 0, edited);
  
  storage.setItem(topic, JSON.stringify(
    alarms));
  
}


