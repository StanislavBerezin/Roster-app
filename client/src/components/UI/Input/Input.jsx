import React from "react";
import classes from "./Input.module.scss";
// form: {
//     name:{
//         elementType: input,
//         elementConfig: {
//             type:"text",
//             placeholder: "place"
//         }
//     },
//     value: "s",
//     validation:{
//           required: true
//      },
//      valid: false;
//      touched: false,
// },
//formIsValid: false

//TO CONVER OBJECT ABOVE INTO AN ARRAY

// const formElementsArray = []
// for (let key in FORM){

// key is the "name", "value" etc
// and config is all the data ascoiated with that form

//formElementsArray.push({
//id: key,
//config: this.state.form[key]
// })

// }

// TO DISPLAY THE CONTENT DYNAMICALLY

// formElementsArray.map(formElement => {
//   <Input
// config in this case return to everything inside of a parent
//         key={formElement.id}
//         touched={formElement.config.touched}
//         elementType={formElement.config.elementType}
//         elementConfig = {formElement.config.elementConfig}
//         value={formElement.config.value}
//         invalid={!formElement.config.valid}
//         changed={(event)=> this.inputChangedHandler(event, formElement.id)}>; //id here is the key like "name","suburb" etc
// });

// TO UPDATE DATA IN THE REAL STATE

// inputChangedHandler = (event, inputIdentifier) => {
//   console.log(event.target.value);
//   //getting the whole state
//   const updatedForm = {
//     ...this.state.form
//   };
//   // getting the specific
//   const updatedFormElement = {
//     ...updatedForm[inputIdentifier]
//   };
//   //updating the value
//   updatedFormElement.value = event.target.value;

// to check to see if its valid, there is a boolean in the object and it will be equal to whatever validation returns
//   updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

// it has been touched
//     updatedFormElement.touched = true;
//   //inserting new value
//   updatedForm[inputIdentifier] = updatedFormElement;
// to check if the form is complete and passed all validations

// let formIsValid = true;
// for (let inputIdentifier in updatedForm) {
//   // checking all and including previous
//   formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
// }

//   //updating the state everytime we enter something
//   this.setState({ form: updatedForm , formIsValid});
// };

// TO SUBMIT FORMS with all data

// submit = event => {
//   event.preventDefault();
//   let formData = {};
//   // it creates key value pairs
//   //like name: "Stas"
//   for (let elIdentifier in this.state.form) {
//     formData[elIdentifier] = this.state.form[elIdentifier].value;
//   }
// };

// TO VALIDATE DATA

// checkValidity ( value, rules ) {
// without this it will check one by one, and even if all of them fail except the
// last one, then it will be ok

//     let isValid = true;
//     if ( !rules ) {
//         return true;
//     }
// if its empty
//     if ( rules.required ) {
// we check if its true for trim and if it was true before
// kind of like chaining, so all rules have to pass
//         isValid = value.trim() !== '' && isValid;
//     }
// if there is a min length
//     if ( rules.minLength ) {
//         isValid = value.length >= rules.minLength && isValid
//     }

//     if ( rules.maxLength ) {
//         isValid = value.length <= rules.maxLength && isValid
//     }

//     if ( rules.isEmail ) {
//         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//         isValid = pattern.test( value ) && isValid
//     }

//     if ( rules.isNumeric ) {
//         const pattern = /^\d+$/;
//         isValid = pattern.test( value ) && isValid
//     }

//     return isValid;
// }

const input = props => {
  let inputElement = null;
  //   in case there is an error
  const inputClasses = [classes.InputElement];
  let validationError = null;
  //   in case there is an error we a certain style of it
  //   if not rules then leave it, and if wasnt touched leave it
  if (props.invalid && props.shouldValidate && props.touched) {
    validationError = <p className={classes.ValidationError}>Wrong</p>;
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input" || "password":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          // here we can assign html attibutes to it
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {/* this is in case there are a few select boxes to be created */}
          {props.elementConfig.options.map(option => (
            //   value to retrieve it
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {validationError}
      {inputElement}
    </div>
  );
};

export default input;
