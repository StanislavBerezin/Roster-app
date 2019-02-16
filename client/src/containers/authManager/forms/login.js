export default {
  login: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Email address"
    },
    value: "",
    label: "Email",
    validation: {
      isEmail: true,
      required: true
    },
    valid: false,
    touched: false
  },

  password: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholder: "Password"
    },
    label: "Password",
    value: "",
    validation: {
      minLength: 5,
      maxLength: 12,
      required: true
    },
    valid: false,
    touched: false
  },

  remember: {
    elementType: "input",
    elementConfig: {
      type: "checkbox"
    },
    name: "Remember",
    value: "Remember",
    label: "Remember me",
    touched: false,
    valid: true
  }
};
