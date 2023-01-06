import { Link } from "react-router-dom";
import classes from "./PaymentItems.module.css";
import { Button } from "antd";
import { Items } from "../../components/item/Items";

export const PaymentItems = () => {
  return (
    <div>
      <Items />
      <div className={classes.paymentInvoiceBtnContainer}>
        <Link to="/allinvoice">
          <Button className={classes.paymentInvoiceBtn}>Make payment</Button>
        </Link>
      </div>
    </div>
  );
};
