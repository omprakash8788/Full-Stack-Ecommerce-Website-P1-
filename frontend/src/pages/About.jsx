import { assets } from "../assets/assets";
import NewSLetterBox from "../components/NewSLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            obcaecati, fuga id nobis quae provident laboriosam illo quasi ipsa
            corporis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            tempora magni aliquid at?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            enim ea vero ad sed quisquam error. Officia et, architecto nihil,
            ducimus temporibus ex commodi ab quia maxime optio harum mollitia!
          </p>
        </div>
      </div>
      {/* div */}
      <div className="text-4xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            accusantium a necessitatibus illo ipsum soluta quaerat doloremque,
            ipsam suscipit labore amet eveniet, optio modi molestias maiores
            cupiditate accusamus dolorem eius deserunt id. At nostrum deleniti
            fugit rerum eaque distinctio dolor.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quaerat sunt tenetur! Eligendi sed dolor ex quam officia,
            consequatur voluptas iusto non iure saepe laudantium reiciendis
            modi. Repellat molestiae quam illo similique distinctio.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional:</b>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quaerat sunt tenetur! Eligendi sed dolor ex quam officia,
            consequatur voluptas iusto non iure saepe laudantium reiciendis
            modi. Repellat molestiae quam illo similique distinctio.
          </p>
        </div>
      </div>
      <NewSLetterBox/>
    </div>
  );
};

export default About;
