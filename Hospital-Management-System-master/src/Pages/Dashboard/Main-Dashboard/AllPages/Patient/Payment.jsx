import QRCode from "qrcode.react";
import Sidebar from "../../GlobalFiles/Sidebar";
import "../Admin/CSS/Payment.css";

function Payment(props) {
  const paymentInfo = `UPITransactionID:${props.transactionId}|Amount:${props.amount}|BeneficiaryName:${props.beneficiaryName}`;
const payment = {
display:"flex"
}
const qr = {}
  return (
    <>
      <div style={payment} className="side">
        <Sidebar />
        <div style={qr} className="QR">
          <h1>Scan QR code to make payment</h1>
          <QRCode
            value={paymentInfo}
            size={128}
            bgColor={"#FFFFFF"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            renderAs={"svg"}
          />
          <p>Amount: 500</p>
          <p>Address: IMmR9X</p>
        </div>
      </div>
    </>
  );
}
export default Payment;
