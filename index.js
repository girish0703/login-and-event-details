//signup form elements
let firstnameEl = document.getElementById("firstname");
let lastnameEl = document.getElementById("lastname");
let emailEl = document.getElementById("email");
let pwdEl = document.getElementById("pwd");
let firstNameErrMsgEl = document.getElementById("firstNameErrMsg");
let lastNameErrMsgEl = document.getElementById("lastNameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let pwdErrMsgEl = document.getElementById("pwdErrMsg");

let myFormEl = document.getElementById("myForm");

let signUpFormEl = document.getElementById("signUpForm");
let loginSpanEl = document.getElementById("loginSpan");

loginSpanEl.onclick = function () {
  signUpFormEl.classList.add("signup-form");
  loginFormEl.classList.remove("login-form");
};

firstnameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    firstNameErrMsgEl.textContent = "Required*";
  } else {
    firstNameErrMsgEl.textContent = "";
  }
});
lastnameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    lastNameErrMsgEl.textContent = "Required*";
  } else {
    lastNameErrMsgEl.textContent = "";
  }
});
emailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});
pwdEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    pwdErrMsgEl.textContent = "Required*";
  } else {
    pwdErrMsgEl.textContent = "";
  }
});

function validateFormData() {
  let count = 0;
  if (firstnameEl.value == "") {
    firstNameErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }
  if (lastnameEl.value == "") {
    lastNameErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }
  if (emailEl.value == "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }

  if (
    pwdEl.value.match(/[a-z]/g) &&
    pwdEl.value.match(/[A-Z]/g) &&
    pwdEl.value.match(/[0-9]/g) &&
    pwdEl.value.length >= 8
  ) {
    count += 1;
    pwdErrMsgEl.textContent = "";
  } else {
    if (pwdEl.value == "") {
      pwdErrMsgEl.textContent = "Required*";
    } else {
      pwdErrMsgEl.textContent =
        "Password must contain atleast 1 lowercase letter, 1 uppercase letter, 1 digit and contains atleast 8 characters.";
    }
  }
  if (count === 4) {
    let userDetails = {
      firstName: firstnameEl.value,
      lastName: lastnameEl.value,
      emailId: emailEl.value,
      password: pwdEl.value,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    firstnameEl.value = "";
    lastnameEl.value = "";
    emailEl.value = "";
    pwdEl.value = "";
    signUpFormEl.classList.add("signup-form");
    loginFormEl.classList.remove("login-form");
  }
}
myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateFormData();
});

//login form elements
let loginEmailEl = document.getElementById("loginEmail");
let loginPwdEl = document.getElementById("loginPwd");
let loginEmailErrMsgEl = document.getElementById("loginEmailErrMsg");
let loginPwdErrMsgEl = document.getElementById("loginPwdErrMsg");

let loginMyFormEl = document.getElementById("loginMyForm");

let loginFormEl = document.getElementById("loginForm");

let eventDetailsFormEl = document.getElementById("eventDetailsForm");
let signupSpanEl = document.getElementById("signupSpan");

loginEmailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    loginEmailErrMsgEl.textContent = "Required*";
  } else {
    loginEmailErrMsgEl.textContent = "";
  }
});
loginPwdEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    loginPwdErrMsgEl.textContent = "Required*";
  } else {
    loginPwdErrMsgEl.textContent = "";
  }
});
//login form validation
function validateLoginFormData() {
  let stringifiedUserDetails = localStorage.getItem("userDetails");
  let parsedUserDetails = JSON.parse(stringifiedUserDetails);
  if (loginEmailEl.value == "") {
    loginEmailErrMsgEl.textContent = "Required*";
  }
  if (loginPwdEl.value == "") {
    loginPwdErrMsgEl.textContent = "Required*";
  }
  if (loginEmailEl.value !== parsedUserDetails.emailId) {
    loginEmailErrMsgEl.textContent = "Invalid user";
  }
  if (loginPwdEl.value !== parsedUserDetails.password) {
    loginPwdErrMsgEl.textContent = "Invalid password";
  }
  if (
    loginEmailEl.value === parsedUserDetails.emailId &&
    loginPwdEl.value === parsedUserDetails.password
  ) {
    loginEmailEl.value = "";
    loginPwdEl.value = "";
    eventDetailsFormEl.classList.remove("events-form");
    loginFormEl.classList.add("login-form");
    signUpFormEl.classList.add("signup-form");
  }
}
signupSpanEl.onclick = function () {
  loginFormEl.classList.add("login-form");
  signUpFormEl.classList.remove("signup-form");
};

loginMyFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateLoginFormData();
});

// event detail form elements
let nameEl = document.getElementById("name");
let descriptionEl = document.getElementById("description");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let descErrMsgEl = document.getElementById("descErrMsg");

let startTimeEl = document.getElementById("startTime");
let startTimeErrMsgEl = document.getElementById("startTimeErrMsg");
let endTimeEl = document.getElementById("endTime");
let endTimeErrMsgEl = document.getElementById("endTimeErrMsg");
let dayEl = document.getElementById("day");

let myEventsFormEl = document.getElementById("myEventsForm");

//event details
let nameSpanEl = document.getElementById("nameSpan");
let descSpanEl = document.getElementById("descSpan");
let startSpanEl = document.getElementById("startSpan");
let endSpanEl = document.getElementById("endSpan");
let daySpanEl = document.getElementById("daySpan");

let eventDetailsEl = document.getElementById("eventDetails");
let logoutBtnEl = document.getElementById("logoutBtn");

let backEventBtnEl = document.getElementById("backEventBtn");

nameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});
descriptionEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    descErrMsgEl.textContent = "Required*";
  } else {
    descErrMsgEl.textContent = "";
  }
});
startTimeEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    startTimeErrMsgEl.textContent = "Required*";
  } else {
    startTimeErrMsgEl.textContent = "";
  }
});
endTimeEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    endTimeErrMsgEl.textContent = "Required*";
  } else {
    endTimeErrMsgEl.textContent = "";
  }
});
logoutBtnEl.onclick = function () {
  eventDetailsFormEl.classList.add("events-form");
  loginFormEl.classList.remove("login-form");
};
let eventDetailsListEl = document.getElementById("eventDetailsList");

function createAndAppendEventItem(parsedEventDetails) {
  let eventDetailsItem = document.createElement("div");
  eventDetailsItem.classList.add("mb-5");
  eventDetailsListEl.appendChild(eventDetailsItem);
  let headingEl = document.createElement("h1");
  headingEl.classList.add("sub-heading");
  headingEl.textContent = "Event details: ";
  eventDetailsItem.appendChild(headingEl);

  let nameEl = document.createElement("p");
  nameEl.classList.add("header");
  nameEl.textContent = "Name: ";
  eventDetailsItem.appendChild(nameEl);
  let nameSpan = document.createElement("span");
  nameSpan.classList.add("span-element");
  nameSpan.textContent = parsedEventDetails.name;
  nameEl.appendChild(nameSpan);

  let descEl = document.createElement("p");
  descEl.classList.add("header");
  descEl.textContent = "Description: ";
  eventDetailsItem.appendChild(descEl);
  let descSpan = document.createElement("span");
  descSpan.classList.add("span-element");
  descSpan.textContent = parsedEventDetails.description;
  descEl.appendChild(descSpan);

  let startTimeEl = document.createElement("p");
  startTimeEl.classList.add("header");
  startTimeEl.textContent = "Start Time: ";
  eventDetailsItem.appendChild(startTimeEl);
  let startTimeSpan = document.createElement("span");
  startTimeSpan.classList.add("span-element");
  startTimeSpan.textContent = parsedEventDetails.starttime;
  startTimeEl.appendChild(startTimeSpan);

  let endTimeEl = document.createElement("p");
  endTimeEl.classList.add("header");
  endTimeEl.textContent = "End Time: ";
  eventDetailsItem.appendChild(endTimeEl);
  let endTimeSpan = document.createElement("span");
  endTimeSpan.classList.add("span-element");
  endTimeSpan.textContent = parsedEventDetails.endtime;
  endTimeEl.appendChild(endTimeSpan);

  let dayEl = document.createElement("p");
  dayEl.classList.add("header");
  dayEl.textContent = "Day of the week: ";
  eventDetailsItem.appendChild(dayEl);
  let daySpan = document.createElement("span");
  daySpan.classList.add("span-element");
  daySpan.textContent = parsedEventDetails.day;
  dayEl.appendChild(daySpan);
}

function validateEventsFormData() {
  let count = 0;
  if (nameEl.value == "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }
  if (descriptionEl.value == "") {
    descErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }
  if (startTimeEl.value == "") {
    startTimeErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }
  if (endTimeEl.value == "") {
    endTimeErrMsgEl.textContent = "Required*";
  } else {
    count += 1;
  }
  if (count === 4) {
    let eventdetails = {
      name: nameEl.value,
      description: descriptionEl.value,
      starttime: startTimeEl.value,
      endtime: endTimeEl.value,
      day: dayEl.value,
    };
    localStorage.setItem("eventdetails", JSON.stringify(eventdetails));
    let stringifiedEventDetails = localStorage.getItem("eventdetails");
    let parsedEventDetails = JSON.parse(stringifiedEventDetails);
    createAndAppendEventItem(parsedEventDetails);

    nameEl.value = "";
    descriptionEl.value = "";
    startTimeEl.value = "";
    endTimeEl.value = "";
    dayEl.value = "";
    eventDetailsEl.classList.remove("details");
    eventDetailsFormEl.classList.add("events-form");
  }
}
backEventBtnEl.onclick = function () {
  eventDetailsEl.classList.add("details");
  eventDetailsFormEl.classList.remove("events-form");
};

myEventsFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateEventsFormData();
});
