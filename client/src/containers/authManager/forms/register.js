export default {
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
