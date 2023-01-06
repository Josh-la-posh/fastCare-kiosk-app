import classes from "./OutstandingInvoice.module.css";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";

export const OutstandingInvoice = () => {
  return (
    <div className={classes.patientRetrieveBill}>
      <div className={classes.patientRetrieveBillContainer}>
        <Row className={classes.patientDetails}>
          <Col span={12}>
            <div
              className={classes.patientDetail}
              style={{ marginBottom: "21px" }}
            >
              Patient's Name: <b>Obi Zyte</b>
            </div>
            <div className={classes.patientDetail}>
              Tel: <b>08023451876</b>
            </div>
          </Col>
          <Col span={12} style={{ paddingLeft: "180px" }}>
            <div
              className={classes.patientDetail}
              style={{ marginBottom: "21px" }}
            >
              Patient's ID: <b>F8734508453</b>
            </div>
            <div className={classes.patientDetail}>
              Gender: <b>Female</b>
            </div>
          </Col>
        </Row>
        <div className={classes.outstandingInvoices}>
          <div className={classes.outstandingInvoiceTitle}>
            <p>Outstanding Invoices</p>
            <span>
              <img src="./../icons/filter.png" className={classes.icon} />
              <p>Filter by;</p>
            </span>
          </div>
          <table className={classes.outstandingInvoiceTable}>
            <tr className={classes.outstandingInvoiceTableHeader}>
                <th></th>
              <th>Invoice Date</th>
              <th>Invoice Number</th>
              <th>Total Items</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
              <td className={classes.date}>
                <span>02/11/2020</span>
                <span className={classes.time}>10:30:20am</span>
              </td>
              <td>IN19530</td>
              <td>5</td>
              <td>N14,000.00</td>
              <td className={classes.outstanding}>outstanding</td>
              <td>
                <Link to='/payitem/1'><Button type="primary" className={classes.btn}>View</Button></Link>
              </td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
              <td className={classes.date}>
                <span>02/11/2020</span>
                <span className={classes.time}>10:30:20am</span>
              </td>
              <td>RE857309</td>
              <td>3</td>
              <td>N3,000.00</td>
              <td className={classes.outstanding}>outstanding</td>
              <td>
                <Link to='/payitem/1'><Button type="primary" className={classes.btn}>View</Button></Link>
              </td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
              <td className={classes.date}>
                <span>02/11/2020</span>
                <span className={classes.time}>10:30:20am</span>
              </td>
              <td>IN19530</td>
              <td>1</td>
              <td>N1,500.00</td>
              <td className={classes.outstanding}>outstanding</td>
              <td>
                <Link to='/payitem/1'><Button type="primary" className={classes.btn}>View</Button></Link>
              </td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
              <td className={classes.date}>
                <span>02/11/2020</span>
                <span className={classes.time}>10:30:20am</span>
              </td>
              <td>IN19530</td>
              <td>1</td>
              <td>N1,500.00</td>
              <td className={classes.outstanding}>outstanding</td>
              <td>
                <Link to='/payitem/1'><Button type="primary" className={classes.btn}>View</Button></Link>
              </td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
              <td className={classes.date}>
                <span>02/11/2020</span>
                <span className={classes.time}>10:30:20am</span>
              </td>
              <td>RE857309</td>
              <td>3</td>
              <td>N3,000.00</td>
              <td className={classes.outstanding}>outstanding</td>
              <td>
                <Link to='/payitem/1'><Button type="primary" className={classes.btn}>View</Button></Link>
              </td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
              <td className={classes.date}>
                <span>02/11/2020</span>
                <span className={classes.time}>10:30:20am</span>
              </td>
              <td>IN19530</td>
              <td>1</td>
              <td>N1,500.00</td>
              <td className={classes.outstanding}>outstanding</td>
              <td>
                <Link to='/payitem/1'><Button type="primary" className={classes.btn}>View</Button></Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
