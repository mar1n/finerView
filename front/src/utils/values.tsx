const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",
  comments: "",
  day: "",
  month: "",
  year: "",
};

const errorState = {
  firstNameErr: "",
  lastNameErr: "",
  emailErr: "",
  phoneNumberErr: "",
  genderErr: "",
  dateOfBirthErr: "",
  commentsErr: "",
  duplicateEmailErr: "",
  dayErr: "",
  monthErr: "",
  yearErr: "",
};

const accordionState = {
  first: true,
  second: false,
  third: false,
}
export { initialState, errorState, accordionState };
