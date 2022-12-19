import "./Tail.css";
const Tail = (props) => {
  return (
    <div>
      <u>Entered Information: </u>
      <br />
      Name: {props.nameSend} <br />
      LastName: {props.lastSend} <br />
      Address: {props.addressSend} <br />
      Email: {props.emailSend} <br />
      Remarks: {props.remarksSend} <br />
    </div>
  );
};

export default Tail;
