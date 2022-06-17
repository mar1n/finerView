import { useState } from "react";
import "./Registration.css";
import { User, Accord } from "./utils/interface";
import { initialState} from "./utils/values";
import axios from "axios";


const Registration = () => {
  const [user, setUser] = useState<User>(initialState);

  const [accordion, setAccordion] = useState<Accord>({
    first: true,
    second: false,
    third: false,
  });
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    comments,
    gender,
    day,
    month,
    year,
  } = user;
  const { first, second, third } = accordion;

  const toggle = (
    accord1: string,
    value1: boolean,
    accord2: string,
    value2: boolean
  ) => {
    setAccordion({ ...accordion, [accord1]: value1, [accord2]: value2 });
  };
  const handleChange =
    (name: string) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      setUser({ ...user, [name]: event.target.value });
    };
  const handleTxtChange =
    (name: string) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUser({ ...user, [name]: event?.currentTarget?.value });
    };

  const back = async () => {
    console.log("zxc");
    try {
      const result = await axios.put("http://localhost:3003/users", {
        firstName: firstName,
        sureName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
        dateOfBirth: "28-09-1985",
        comments: comments,
      });
      console.log("result", result);
      setUser(initialState);
      toggle("third", false, "first", false)
    } catch (err) {
      console.log("err", err);
    }
  };

  const signinForm = () => {
    return (
      <form>
        <div className='wrapper'>
          <div className='item'>
            <div className='title'>
              <span>Step 1: Your details</span>
            </div>
            <div className={first === true ? "content first" : "content"}>
              <div>
                <div className='itemFirst'>
                  <div className='form-group'>
                    <label>First Name</label>
                    <input
                      onChange={handleChange("firstName")}
                      type='text'
                      value={firstName}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name</label>
                    <input
                      onChange={handleChange("lastName")}
                      type='text'
                      value={lastName}
                    />
                  </div>
                </div>
                <div className='itemFirst'>
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                      onChange={handleChange("email")}
                      type='email'
                      value={email}
                    />
                  </div>
                </div>
                <div className='itemFirst itemButton'>
                  <div
                    className='nextButton'
                    onClick={() => toggle("first", false, "second", true)}
                  >
                    Next {">"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div
              className='title'
              onClick={() => toggle("second", false, "third", true)}
            >
              <span>Step 2: More comments</span>
            </div>
            <div className={second === true ? "content second" : "content"}>
              <div>
                <div className='itemSecond'>
                  <div className='form-group'>
                    <label>Telephone Number</label>
                    <input
                      onChange={handleChange("phoneNumber")}
                      type='text'
                      value={phoneNumber}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Gender</label>
                    <select onChange={handleChange("gender")} name='' id=''>
                      <option value='' disabled selected>
                        Select Gender
                      </option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                  </div>
                </div>
                <div className='itemSecond'>
                  <div className='form-group'>
                    <label>Date of Birth</label>
                    <div className='specialDate'>
                      <input
                        type='text'
                        id='date'
                        name='date'
                        onChange={handleChange("day")}
                      />
                      <input
                        type='text'
                        id='month'
                        name='month'
                        onChange={handleChange("month")}
                      />
                      <input
                        type='text'
                        id='year'
                        name='year'
                        onChange={handleChange("year")}
                      />
                    </div>
                  </div>
                </div>
                <div className='itemSecond itemButton'>
                  <div
                    className='nextButton'
                    onClick={() => toggle("second", false, "third", true)}
                  >
                    Next{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div
              className='title'
              onClick={() => toggle("third", false, "first", false)}
            >
              <span>Step 3: Final comments</span>
            </div>
            <div className={third === true ? "content third" : "content"}>
              <div>
                <div className='itemThird'>
                  <div className='form-group'>
                    <label>Essay:</label>
                    <textarea
                      value={comments}
                      onChange={handleTxtChange("comments")}
                    />
                  </div>
                </div>
                <div className='itemThird itemButton'>
                  <div
                    className='nextButton'
                    onClick={back}
                  >
                    Next{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };
  return (
    <div>
      <div>{signinForm()}</div>
    </div>
  );
};

export default Registration;
