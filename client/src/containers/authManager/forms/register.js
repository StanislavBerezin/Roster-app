export default {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Username "
    },
    value: "",
    label: "Username",
    validation: {
      isEmail: true,
      required: true
    },
    valid: false,
    touched: false
  },
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
    value: "",
    label: "Password",
    validation: {
      minLength: 6,
      maxLength: 12,
      required: true
    },
    valid: false,
    touched: false
  },
  passwordConfirm: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholder: "Confirm Password"
    },
    value: "",
    label: "Confirm password",
    validation: {
      minLength: 6,
      maxLength: 12,
      required: true
    },
    valid: false,
    touched: false
  }
};
