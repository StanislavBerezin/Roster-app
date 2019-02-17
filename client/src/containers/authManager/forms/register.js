export default {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Username "
    },
    error: "4-12 chars",
    value: "",
    label: "Username",
    validation: {
      minLength: 4,
      maxLength: 12,
      required: true
    },
    valid: false,
    touched: false
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Email address"
    },
    value: "",
    error: "Wrong email",
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
    error: "6-12 char",
    validation: {
      minLength: 6,
      maxLength: 12,
      required: true
    },
    valid: false,
    touched: false
  },
  passwordConfirmation: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholder: "Confirm Password"
    },
    value: "",
    error: "6-12 char",
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
