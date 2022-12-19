import "./FormHeading.css";
const FormHeading = (props) => {
  return (
    <div>
      <div className="formHeading">
        <h2>Registration Form</h2>
        <p>
          <u>
            Following is simply a react form created to get the knowledge of form submission , component building , communication , {props.firstSend} and {props.secondSend}
          </u>
        </p>
      </div>
    </div>
  );
};
export default FormHeading;
