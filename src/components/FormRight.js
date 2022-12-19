import "./FormRight.css";
import Tail from "./Tail";
import { useState } from "react";
const FormRight = () => {
  const [mainName, setNameAs] = useState("");
  const [mainLast, setLastAs] = useState("");
  const [mainAddress, setAddressAs] = useState("");
  const [mainEmail, setEmailAs] = useState("");
  const [mainRemarks, setRemarksAs] = useState("");

  function onNameChange(event) {
    setNameAs(event.target.value);
  }
  function onLastChange(event) {
    setLastAs(event.target.value);
  }
  function onAddressChange(event) {
    setAddressAs(event.target.value);
  }
  function onEmailChange(event) {
    setEmailAs(event.target.value);
  }
  function onRemarksChange(event) {
    setRemarksAs(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const individualInfo = {
      Name: mainName,
      Last_Name: mainLast,
      Address: mainAddress,
      Email: mainEmail,
      Remarks: mainRemarks,
    };
    setNameAs("");
    setLastAs("");
    setEmailAs("");
    setAddressAs("");
    setRemarksAs("");
    console.log(individualInfo);
  }
  return (
    <div>
      <div className="formRight" value={mainRemarks} style={{ backgroundColor: mainRemarks }}>
        <h3>Fill in the following detail:</h3>
        <form className="inputBody" onSubmit={submitHandler}>
          <div className="row">
            <div className="col">
              <label>First Name</label> <br />
              <label>Last Name</label>
              <br />
              <label>Address</label>
              <br />
              <label>Email</label>
              <br />
              <label>Color</label>
              <br />
            </div>
            <div className="col">
              <input type="text" onChange={onNameChange} value={mainName} /> <br />
              <input type="text" onChange={onLastChange} value={mainLast} />
              <br />
              <input type="text" onChange={onAddressChange} value={mainAddress} />
              <br />
              <input type="email" onChange={onEmailChange} value={mainEmail} />
              <br />
              <input type="text" onChange={onRemarksChange} value={mainRemarks} />
              <br />
            </div>
          </div>

          <button> Submit </button>
        </form>
      </div>
      <div className="row tailDiv">
        <Tail nameSend={mainName} lastSend={mainLast} addressSend={mainAddress} emailSend={mainEmail} remarksSend={mainRemarks} />
      </div>
    </div>
  );
};

export default FormRight;
