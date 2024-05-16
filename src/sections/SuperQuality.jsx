import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div>
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nemo
          rem doloribus nisi, ratione eos consequuntur? Odit minima, odio, ipsum
          omnis sequi ex impedit repellat mollitia rem, quas neque similique.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
