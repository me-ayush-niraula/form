import FormLeft from "./FormLeft";
import FormRight from "./FormRight";
import "./FormBody.css";
const FormBody = () => {
  return (
    <div>
      <div className="container formBody">
        <div className="row">
          <div className="col">
            <FormLeft />
          </div>
          <div className="col">
            <FormRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormBody;
