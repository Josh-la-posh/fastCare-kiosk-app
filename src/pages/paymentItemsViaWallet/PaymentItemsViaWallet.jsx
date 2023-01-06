import { Items } from "../../components/item/Items";
import classes from "./PaymentItemsViaWallet.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export const PaymentItemsViaWallet = () => {
  return (
    <div>
      <Items />
      <div className={classes.paymentMethodContainer}>
        <Row className={classes.paymentMethod}>
          <Col span={12}>
            <h4>Payment Methods:</h4>
          </Col>
          <Col span={12}>
            <Link to="/paidinvoice">
              <span>
                <small>Wallet</small>
              </span>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
