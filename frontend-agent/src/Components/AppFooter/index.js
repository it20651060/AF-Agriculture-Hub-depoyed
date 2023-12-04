import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">
        +123456789 <br /> Dilshan +123456789 <br /> Dilshan +123456789 <br />{" "}
        Dilshan
      </Typography.Link>{" "}
      <br />
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy <br></br>
        +123456789 <br></br> Dilshan
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
