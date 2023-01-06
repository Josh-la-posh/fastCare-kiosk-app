import { Link } from "react-router-dom";
import classes from "./PatientNumber.module.css";
import { Button } from "antd";

export const PatientNumber = () => {
  return (
    <div className={classes.patientNumber}>
      <div className={classes.patientNumberContainer}>
        <h2 className={classes.patientNumberTitle}>Patient Number</h2>
        <p className={classes.patientNumberDesc}>
          Enter the patient number to view all bill invoice under the patient’s
          name and make payments too
        </p>
        <form className={classes.patientNumberForm}>
          <input
            type="num"
            placeholder="Enter invoice number"
            className={classes.patientNumberInput}
          />
          <Link to="/outinvoice">
            <Button type="primary" className={classes.patientNumberBtn} block>
              Submit
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
