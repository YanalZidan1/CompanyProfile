import CallToAction from "../Commponents/CallToAction";
import ContactUs from "../Commponents/ContactComponent";
import WhyChooseUs from "../Commponents/WhyChooseUs";
import HeaderPages from "../Commponents/HeaderPages";

function WhyChooseUs_Page() {
    return (
        <div>
            <HeaderPages
             title="Why Choose Us"
             description="We are a leading provider of IT services, offering a wide range of solutions to meet your business needs."
              />
            <WhyChooseUs/>
            <CallToAction/>
            <ContactUs/>
        </div>
    );
}
export default WhyChooseUs_Page;