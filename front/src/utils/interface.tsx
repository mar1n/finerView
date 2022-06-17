export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  comments: string;
  day: string;
  month: string;
  year: string;
}
export interface Err {
  firstNameErr: string;
  lastNameErr: string;
  emailErr: string;
  phoneNumberErr: string;
  genderErr: string;
  dateOfBirthErr: string;
  commentsErr: string;
  duplicateEmailErr: string;
  dayErr: string;
  monthErr: string;
  yearErr: string;
}

export interface Accord {
  first: boolean;
  second: boolean;
  third: boolean;
}
