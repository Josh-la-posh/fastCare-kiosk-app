import classes from "./Items.module.css";
import { Col, Row } from "antd";

export const Items = () => {
  return (
    <div className={classes.patientRetrieveBill}>
      <div className={classes.patientRetrieveBillContainer}>
        {/* INVOICE NUMBER */}

        <h1 className={classes.patientInvoiceNumber}>RE857309</h1>

        {/* INVOICE INFORMATION */}

        <Row className={classes.patientDetails}>
          <Col span={12}>
            <div className={classes.patientDetail}>
              Patient's Name: <b>Obi Zyte</b>
            </div>
            <div
              className={classes.patientDetail}
              style={{ marginBottom: "21px", marginTop: "21px" }}
            >
              Patient's ID: <b>F8734508453</b>
            </div>
            <div className={classes.patientDetail}>
              Tel: <b>08023451876</b>
            </div>
          </Col>
          <Col span={12} style={{ paddingLeft: "180px" }}>
            <div className={classes.patientDetail}>
              Invoice Number: <b>RE857309</b>
            </div>
            <div
              className={classes.patientDetail}
              style={{ marginBottom: "21px", marginTop: "21px" }}
            >
              Physician's Name: <b>Dr. Eudy</b>
            </div>
            <div className={classes.patientDetail}>
              Date: <b>20th May 2022</b>
            </div>
          </Col>
        </Row>

        {/* PAYMENT ITEM SECTION */}

        <div className={classes.paymentItemsTitle}>Payment Items</div>
        <table className={classes.paymentItemsTable}>
          <tr className={classes.paymentItemsTableHeader}>
            <th style={{ width: "98px" }}>S/N</th>
            <th style={{ width: "483px" }}>Item</th>
            <th style={{ width: "131px" }}>Amount</th>
            <th style={{ width: "108px" }}>Qty</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Chloroquine Phosphate</td>
            <td>N4,000</td>
            <td>x1</td>
            <td>N4,000.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Full Blood Count (FBC) (RBC, WBC, Platelet count</td>
            <td>N4,000</td>
            <td>x1</td>
            <td>N4,000.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>HIV screening</td>
            <td>N1,500</td>
            <td>x1</td>
            <td>N1,500.00</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Chloroquine Phosphate</td>
            <td>N4,000</td>
            <td>x1</td>
            <td>N4,000.00</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <Row className={classes.discount}>
          <Col span={12}>
            <p>Discount Amount</p>
          </Col>
          <Col span={12}>
            <span>N0</span>
          </Col>
        </Row>
        <Row className={classes.grandTotal}>
          <Col span={12}>
            <h4>Grand Total</h4>
          </Col>
          <Col span={12}>
            <h3>N16,640.00</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
};
