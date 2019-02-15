export default {
  login: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Email address"
    },
    value: "",
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
    value: "",
    validation: {
      isEmail: true,
      required: true
    },
    valid: false,
    touched: false
  }
};
