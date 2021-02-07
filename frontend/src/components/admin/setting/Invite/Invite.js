import React from "react";
import style from "./Invite.module.css";
const Invite = () => {
  return (
    <div className={style.cont}>
      <div className="container">
        <h1 className={style.h1}>Invite Admins</h1>
        <div className={style.dash}></div>
      </div>
      <div className={style.admin_section}>
        <div className={style.admin_card}>
          <h3 className={style.admin_header_text}>Enter the email Id: </h3>
          <div className={style.inside_admin}>
            <div className={style.form_row}></div>
            <div className={style.admin_input}>
              <input
                placeholder="Email ID"
                id="txt_email"
                type="text"
                Required="required"
                name="email"
              />
              <i className="far fa-envelope"></i>
            </div>
          </div>
          <div className={style.wrap}>
            <button className={style.button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invite;
