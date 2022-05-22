import React from "react";
import { Button2, Button1 } from "../../components/util/Button";
import style from "../Resources/components/ResourceSharingForm/resource-sharing-form.module.scss";
import "./Ques.scss";
import { useState } from "react";
import Joi from "joi-browser";
import Loader from "../../components/util/Loader/index";
import { SimpleToast } from "../../components/util/Toast";
import {END_POINT} from "../../config/api"
import { ErrorSharp } from "@material-ui/icons";

function Ques(props) {
  let dark = props.theme;

  const Tags = [
    {
      value: "ml",
    },
    {
      value: "open-source",
    },
    {
      value: "deap-learning",
    },
    {
      value: "cp",
    },
    {
      value: "block-chain",
    },
    {
      value: "mern",
    },
    {
      value: "android",
    },
    {
      value: "mean",
    },
    {
      value: "javascript",
    },
    {
      value: "java",
    },
    {
      value: "c++",
    },
    {
      value: "python",
    },
  ];

  const [isUploadingData, setIsUploadingData] = useState(false);
  const [open, setOpenToast] = useState(false);
  const [toastMessage,setToastMessage] = useState("");
  const [severity,setSeverity] = useState('success')
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(Tags.length).fill(false)
  );

  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
  });

  const handleCloseToast = (event, reason) => {
    setTimeout(() => {
      setOpenToast(false);
    }, 500);
  }
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    formdata.tags.length = 0;
    formdata.tags.push(checkedState);
  };

  const schema = {
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.required(),
  };

  const validate = () => {
    const result = Joi.validate(formdata, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const [formerrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { currentTarget: input } = e;

    const data = { ...formdata };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors({})
  };

  const uploadData = async (formdata) => {
    try {
      const url = `${END_POINT}/question`;
      const response = await fetch(url,{
        method:"POST",
        headers : {
          "content-type":"application/json"
        },
        body : JSON.stringify(formdata)
      });
      const data = await response.json();
      setIsUploadingData(false)
      setToastMessage("Q&A added successfully!")
      setOpenToast(true)
      setSeverity("success")
      setFormData({
        title: "",
        description: "",
        tags: [],
      })
      setFormErrors({})
      setCheckedState(new Array(Tags.length).fill(false))
    }
    catch(err) {
      setIsUploadingData(false)
      setToastMessage("Something went wrong!");
      setOpenToast(true)
      setSeverity("error");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = validate();
    Object.keys(formdata).map((key) => {
      if (formdata[key] === "" || formdata[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
        setFormErrors(errors)
        isValid = false;
      }
      return 0;
    });
    if(isValid && formdata.tags.length !== 0) {
      setIsUploadingData(true)
      uploadData(formdata);
    }
  };
  function ActiveButton() {
    setButtonPressed(!isButtonPressed);
  }
  function DeactiveButton() {
    setButtonPressed(!isButtonPressed);
  }
  return (
    <div
      className="popup-creator"
      style={{ background: dark ? "#171717" : "white" }}
    >
      <SimpleToast open={open} message={toastMessage} severity={severity} handleCloseToast={handleCloseToast}/>
      {isButtonPressed ? (
        <div
          className={
            dark
              ? `${style["resource-section"]} ${style["resource-section-dark"]}`
              : `${style["resource-section"]} ${style["resource-section-light"]}`
          }
        >
          <form className="question_form" onSubmit={handleSubmit}>
            <button className="close-popup" onClick={DeactiveButton}>
              X
            </button>
            <h3
              className={
                dark
                  ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]} `
                  : `${style["resource-header-text"]} ${style["resource-header-text-light"]}`
              }
            >
              Ask your questions
            </h3>
            <div className={style["inside-resource"]}>
              <div className="question-inputs">
                <div className={`form-group ${style["form-group"]}`}>
                  <div
                    className={
                      dark
                        ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      autoFocus="on"
                      placeholder="Subject"
                      type="text"
                      name="title"
                      value={formdata.title}
                      onChange={handleChange}
                    />
                    <i className="fas fa-heading"></i>
                    <div
                      className={`${style["validation"]} validation d-sm-none d-md-block`}
                    >
                      {formerrors["title"] ? (
                        <div>* {formerrors["title"]}</div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`form-group ${style["form-group"]}`}>
                  <div
                    className={
                      dark
                        ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                        : `${style["resource-input"]} ${style["resource-input-light"]}`
                    }
                  >
                    <input
                      placeholder="Body"
                      style={{ height: 100 }}
                      type="text"
                      name="description"
                      value={formdata.description}
                      onChange={handleChange}
                    />
                    <i
                      className="fas fa-envelope"
                      style={{ marginTop: 27 }}
                    ></i>
                    <div
                      className={`${style["validation"]} validation d-sm-none d-md-block`}
                    >
                      {formerrors["body"] ? (
                        <div>* {formerrors["body"]}</div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  dark
                    ? `${style["resource-input1"]} ${style["resource-input1-dark"]} `
                    : `${style["resource-input1"]} ${style["resource-input1-light"]}`
                }
              >
                <div>
                  <label
                    className={
                      dark
                        ? `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                        : `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                    }
                    style={{ color: "#69a9dd", fontSize: "25px" }}
                  >
                    Tags
                  </label>
                </div>
                <div>
                  <ul className="toppings-list">
                    {Tags.map((data, index) => {
                      return (
                        <li key={index}>
                          <div className="checkbox-item">
                            <div className="left-section">
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name="Tags"
                                value={data.value}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                              />
                              <label
                                htmlFor={`custom-checkbox-${index}`}
                                style={{
                                  paddingLeft: "3%",
                                  color: dark ? "white" : "black",
                                }}
                              >
                                {data.value}
                              </label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div
                className={style["submit-btn"]}
                style={{ justifyContent: "space-around" }}
              >
                <div className="data-loader">{isUploadingData?<Loader/>:null}</div>
                <Button2
                  style={{ marginRight: "3%" }}
                  className={style["submit-btn-text"]}
                  label="Submit"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div
        className={
          dark
              ? `${style["resource-section"]} ${style["resource-section-dark"]}`
              : `${style["resource-section"]} ${style["resource-section-light"]}`
            }
        >
          <div
            className={
              dark
              ? `${style["resource-form"]} ${style["resource-form-dark"]} ${style["child2"]}`
                : `${style["resource-form"]} ${style["resource-form-light"]} ${style["child2"]}`
              }
            style={{ marginTop: "12%" }}
          >
            <div
              className={
                dark
                  ? `${style["resource-card"]} ${style["resource-card-dark"]} `
                  : `${style["resource-card"]} ${style["resource-card-light"]}`
                }
            >
              <h3
                className={
                  dark
                  ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]} `
                  : `${style["resource-header-text"]} ${style["resource-header-text-light"]}`
                }
              >
                Ask your questions
              </h3>
              {isButtonPressed ? null : (
                <div className={style["Ask-div-main"]}>
                  <div className={style["Ask-div"]}>
                    <Button2
                      className={style["Ask-div-button"]}
                      label="Ask Question"
                      style={{ width: 200 }}
                      onClick={ActiveButton}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ques;
