import { useState } from "react";

import Button from "../components/Button";
import MiniCard from "../components/MiniCard";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { statistics, shoes } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10 xl:ml-[100px]"
    >
      <div className="realtive xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Lorem, ipsum dolor.
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-2">
            Lorem, ipsum dolor
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 mx-2">Lorem</span>
          Ipsum
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          qui pariatur repudiandae!
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative xl:pt-[120px] m xl:min-h-screen max-xl:py-40 padding-x bg-primary bg-hero bg-cover bg-center xl:ml-[50px]">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute bottom-[8%] sm:left-[10%] max-sm:px-6 ml-10">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <MiniCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
