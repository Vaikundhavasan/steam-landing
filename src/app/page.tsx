"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const imgDir: {
  id: number;
  name: string;
  imgURL: string;
}[] = [
  {
    id: 1,
    name: "logo",
    imgURL: "/logo.svg",
  },
  {
    id: 2,
    name: "menu",
    imgURL: "/menu.svg",
  },
  {
    id: 3,
    name: "Shipping",
    imgURL: "/shipping.svg",
  },
  {
    id: 4,
    name: "Reusable Lab",
    imgURL: "/lab.svg",
  },
  {
    id: 5,
    name: "Micro-Courses",
    imgURL: "/micro_courses.svg",
  },
  {
    id: 6,
    name: "Exciting experiment",
    imgURL: "/Exciting_experiment.svg",
  },
  {
    id: 7,
    name: "girl",
    imgURL: "/girl.png",
  },
  {
    id: 8,
    name: "ins_1",
    imgURL: "/ins_1.png",
  },
  {
    id: 9,
    name: "ins_2",
    imgURL: "/ins_2.png",
  },
  {
    id: 10,
    name: "ins_3",
    imgURL: "/ins_3.png",
  },
  {
    id: 11,
    name: "ins_4",
    imgURL: "/ins_4.png",
  },
];

const page = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <OverView />
      <Instruction />
      <OutComes />
      <Product />
    </div>
  );
};
const NavBar = () => {
  return (
    <div className="bg-orange-500 flex justify-around p-5 items-center">
      <Image
        src={imgDir[0].imgURL}
        alt={imgDir[0].name}
        height={200}
        width={200}
      />
      <div className="sm:hidden cursor-pointer">
        <Image
          src={imgDir[1].imgURL}
          alt={imgDir[1].name}
          height={30}
          width={30}
          onClick={() => console.log("Clicked")}
        />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-orange-500 text-white text-2xl overflow-hidden pb-10">
      <div className="pt-10">
        <div className="flex justify-center">
          <Image
            src={imgDir[2].imgURL}
            alt={imgDir[2].name}
            height={30}
            width={30}
          />
          <p className="px-3">
            Shipping across <strong className="">INDIA</strong>
          </p>
        </div>
        <h1 className="text-center font-extrabold my-10 text-5xl">
          See Your Kids Falling In Love With Science
        </h1>
        <h1 className="text-center font-bold my-5">
          India’s Finest STEM Activity Kit
        </h1>
      </div>
      <div className="flex items-center justify-center w-screen">
        <button className="bg-white px-5 py-5 text-orange-500 rounded-full font-extrabold">
          Learn More
        </button>
      </div>
    </div>
  );
};

const OverView = () => {
  return (
    <div className="h-auto bg-orange-500 pt-20">
      <div className="flex bg-white justify-center items-center mx-10 py-4 rounded-tr-[2rem] rounded-bl-[2rem]">
        <OverViewCard num={3} />
        <OverViewCard num={4} />
        <OverViewCard num={5} />
      </div>
      <div className="pt-10 flex justify-center items-center ">
        <Image
          src={imgDir[6].imgURL}
          alt={imgDir[6].name}
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

type OverViewCardProps = {
  num: number;
};

const OverViewCard = ({ num }: OverViewCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <Image
        src={imgDir[num].imgURL}
        alt={imgDir[num].name}
        width={70}
        height={70}
      />
      <h1 className="text-center font-bold mt-5">{imgDir[num].name}</h1>
    </div>
  );
};

const Instruction = () => {
  return (
    <div className="bg-white h-auto -mt-24">
      <div className="pt-32">
        <div className="mx-5 mb-5 px-1 py-5  bg-gray-300 h-auto rounded-3xl">
          <h1 className=" text-center text-orange-500 text-4xl font-bold">
            Everything you needed is Inside
          </h1>
          <h1 className="text-center text-3xl font-light pt-10">
            Our kit comes with all the materials you needed to work Hands-On
          </h1>
          <div className="flex flex-col mt-5">
            <img
              src={imgDir[7].imgURL}
              alt={imgDir[7].name}
              className="h-32 w-32 mx-20"
            />
            <img
              src={imgDir[8].imgURL}
              alt={imgDir[8].name}
              className="h-32 w-32 self-end mx-20"
            />
            <img
              src={imgDir[9].imgURL}
              alt={imgDir[9].name}
              className="h-32 w-32 mx-20"
            />
            <img
              src={imgDir[10].imgURL}
              alt={imgDir[10].name}
              className="h-32 w-32 self-end mx-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OutComes = () => {
  const containerDetails: {
    id: number;
    name: string;
    imgURL: string;
  }[] = [
    {
      id: 1,
      name: "Critical Thinking",
      imgURL: "/outcomes_ct.png",
    },
    {
      id: 2,
      name: "Problem Solving",
      imgURL: "/outcomes_ps.png",
    },
    {
      id: 3,
      name: "Experiment Learning",
      imgURL: "/outcomes_el.png",
    },
    {
      id: 4,
      name: "Innovative Mindset",
      imgURL: "/outcomes_im.png",
    },
  ];

  const res: JSX.Element[] = containerDetails.map((el: any) => {
    return <OutComesContainer key={el.id} name={el.name} imgUrl={el.imgURL} />;
  });

  return (
    <div className="h-auto bg-blue-950 pb-5">
      <h1 className="px-7 pt-5 text-center text-white text-3xl">
        The <strong className="text-orange-500">Labnbox </strong> learning kit
        helps your child develop
      </h1>
      <div className="flex flex-wrap items-center justify-center">{res}</div>
    </div>
  );
};

type OutComesProps = {
  name: string;
  imgUrl: string;
};

const OutComesContainer = ({ name, imgUrl }: OutComesProps) => {
  return (
    <div className="mt-12 px-3 flex flex-col justify-center items-center basis-1/3">
      <div className="bg-white w-32 h-32 rounded-3xl flex justify-center items-center">
        <Image src={imgUrl} alt={name} width={100} height={100} />
      </div>
      <h1 className="w-44 text-center text-white text-xl mt-3 font-light">
        {name}
      </h1>
    </div>
  );
};

const Product = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const products: JSX.Element = (
    <div className="flex-[0_0_100%] m-20 ">
      <div className="flex flex-col justify-center items-center w-60 h-64 bg-white rounded-3xl">
        <div className="bg-blue-400 h-52 w-52 m-5 rounded-lg"></div>
        <h1 className="text-center text-xl mb-2">Artificial snow kit</h1>
      </div>
    </div>
  );

  return (
    <div className="h-screen pt-10 bg-orange-500 flex flex-col items-center overflow-x-hidden">
      <div className="text-center text-2xl">
        <h1 className="text-white font-bold text-3xl mx-10">
          Your gateway to knowledge and innovation
        </h1>
        <p className="text-white pt-5 mx-14">
          Discover shop! Elevate your learning with one time shop
        </p>
      </div>
      <div className="overflow-y-hidden" ref={emblaRef}>
        <div className="flex">{products}</div>
        <div className="flex">{products}</div>
        <div className="flex">{products}</div>
      </div>
    </div>
  );
};

export default page;
