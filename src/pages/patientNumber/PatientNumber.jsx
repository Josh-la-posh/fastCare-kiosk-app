import { Button } from 'antd';
import classes from './PatientNumber.module.css';

export const PatientNumber = () => {
  return (
    <div className={classes.patientNumber}>
      <div className={classes.patientNumberContainer}>        
        <h2 className={classes.patientNumberTitle}>
          Patient Number
        </h2>
        <p className={classes.patientNumberDesc}>
          Enter the patient number to view all bill invoice under the patient’s name and make payments too
        </p>
        <form className={classes.patientNumberForm}>
          <input type="num" placeholder='Enter invoice number' className={classes.patientNumberInput} />
          <Button type='primary' className={classes.patientNumberBtn} block>Submit</Button>
        </form>
      </div>
    </div>
  )
}