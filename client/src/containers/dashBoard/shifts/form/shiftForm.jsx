export default {
  start: {
    elementType: "input",
    elementConfig: {
      type: "datetime-local",
      placeholder: "Email address"
    },
    value: "",
    label: "Start date",
    touched: false
  },
  finish: {
    elementType: "input",
    elementConfig: {
      type: "datetime-local",
      placeholder: "Finish Date"
    },
    value: "",
    label: "Finish date",
    touched: false
  },
  breakLength: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Break length"
    },
    value: "",
    error: "Too long ¯\\_(ツ)_/¯ ",
    label: "Break time",
    validation: {
      minLength: 1,
      maxLength: 2
    },
    valid: false,
    touched: false
  }
};
