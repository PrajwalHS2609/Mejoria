import ContactUsHeader from "./../../components/ContactUs/ContactUsHeader";
import ContactUsAddress from "./../../components/ContactUs/ContactUsAddress";
import ContactUsMap from "./../../components/ContactUs/ContactUsMap";
export const metadata = {
  title: "",
  description: "",
  canonical: "https://mejoria.in",
  keywords: [""],
};
export default function ContactUs() {
  return (
    <div>
      <ContactUsHeader />
      <ContactUsAddress />
      <ContactUsMap />
    </div>
  );
}
