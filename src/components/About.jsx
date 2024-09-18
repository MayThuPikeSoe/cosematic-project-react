import "../css/about.css";
const About = () => {
  return (
    <div>
      <section className="about md:h-[947px] h-auto flex-col items-center justify-around lg:flex-row flex py-10 px-8">
        <div
          className="img_about relative lg:w-[550px] lg:h-[700px] w-[450px] h-[500px] aos-init aos-animate  "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="https://d2w53g1q050m78.cloudfront.net/makeumorcom/uploads/img/top2/about-fg.webp"
            alt=""
            className=" border border-black w-full h-full "
          />
        </div>
        <div className="aos-init aos-animate md:w-[450px] w-auto">
          <h1
            className=" text-6xl font-medium mb-12 aos-init aos-animate "
            data-aos="fade-left"
            data-aos-duration="200"
            data-aos-easing="ease-in-sine"
          >
            About <br />
            makeumor
          </h1>
          <p
            className="aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            難しいことはなく、
            <br data-type="pc" />
            今のままプラスで贅沢綺麗に！！
            <br data-type="pc" />
            みて楽しい、みつけて面白い、使ってキレイに、一緒におもしろキレイを目指していきましょう！
            <br data-type="pc" />
            嬉し、恥ずかし、美し！！
          </p>
          <div
            className="read_btn relative lg:my-14 aos-init aos-animate my-3"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
          >
            <button className="more_btn border sm:h-[71px] w-[237px] h-[50px]  my-5">
              <span>Read More</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
