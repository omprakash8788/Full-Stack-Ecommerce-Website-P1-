import { assets } from "../assets/assets";
import NewSLetterBox from "../components/NewSLetterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="img"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">122, Mumbai, CST East 322AS, Maharastra, India</p>
          <p className="text-gray-500">Tel: +91- 675544332 <br /> Email: patliputra@gmail.com</p>
          <p className="text-gray-700 font-semibold text-xl">Careers at Partliputra</p>
          <p className="text-gray-500">Learn more about our team and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewSLetterBox/>
    </div>
  );
};

export default Contact;
