import ContactUsHeader from "./../../components/ContactUs/ContactUsHeader";
import ContactUsAddress from "./../../components/ContactUs/ContactUsAddress";
import ContactUsMap from "./../../components/ContactUs/ContactUsMap";
export const metadata = {
  title: "Contact Us for Cake Pastry & Baking Classes in Kolkata, West Bengal",
  description:
    "Contact Us for Cake Pastry & Baking Classes in Kolkata, West Bengal. You’ll start with the essentials, including food safety, the science of baking perfect cakes, and creating egg-free masterpieces.",
  canonical: "https://mejoria.in/contact-us",
  keywords: [
    "cake making classes near me",
    "pastry making classes online",
    "professional baking courses",
    "learn to bake cakes",
  ],
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
