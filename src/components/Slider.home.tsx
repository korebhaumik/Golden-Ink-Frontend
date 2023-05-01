import { Avatar_7, Avatar_14, Avatar_19 } from "../assets/avatar";
import {
  ChevronLeftSVG,
  ChevronRightSVG,
  QuotesSVG,
  StarSVG,
} from "../assets/svg";

interface cardType {
  id: number;
  avatar: JSX.Element;
  comment: string;
  username: string;
  rating: number;
}
const cardsArr: cardType[] = [
  {
    id: 1,
    avatar: <Avatar_7 />,
    comment: "",
    username: "Bhaumik Kore",
    rating: 5,
  },
  {
    id: 2,
    avatar: <Avatar_14 />,
    comment: "",
    username: "Atharv Patawar",
    rating: 4,
  },
  {
    id: 3,
    avatar: <Avatar_19 />,
    comment: "",
    username: "Mohammed Mehdi",
    rating: 5,
  },
];

export default function Slider() {
  const CardJSXArr = cardsArr.map((card) => <Card key={card.id} card={card} />);
  return (
    <>
      {/* Dots */}
      <div className="absolute hidden sm:flex top-16 right-20">
        <svg className="w-3 h-3 ml-2 bg-blue-700 rounded-full"></svg>
        <svg className="w-3 h-3 ml-2 rounded-full bg-slate-400"></svg>
        <svg className="w-3 h-3 ml-2 rounded-full bg-slate-400"></svg>
      </div>
      <div className="flex justify-between mt-12 mb-3">
        {/* Buttons */}
        <div className="items-center justify-between hidden w-24 sm:flex ">
          <div className="p-2 border-2 rounded-full cursor-pointer text-slate-500 w-fit border-slate-500">
            <ChevronLeftSVG />
          </div>
          <div className="p-2 text-white bg-blue-700 rounded-full cursor-pointer w-fit">
            <ChevronRightSVG />
          </div>
        </div>
        {/* Comments */}
        <div className="flex flex-wrap">{CardJSXArr}</div>
      </div>
    </>
  );
}

function Card({ card }: { card: cardType }) {
  return (
    <div className="relative py-8 pl-12 mb-4 text-white rounded-md sm:w-72 bg-primary-800 pr-7 sm:mx-4">
      {card.avatar}
      <QuotesSVG />
      <p className="my-2 mt-3 text-slate-500">
        I had a fantastic experience with the Golden Ink! Their products and
        service exceeded my expectations.
      </p>
      <h2 className="mb-2">{card.username}</h2>
      <div>
        <Stars num={card.rating} />
      </div>
    </div>
  );
}

function Stars({ num }: { num: number }) {
  const StarsArrJSX: JSX.Element[] = [];
  for (let i = 0; i < num; i++) {
    StarsArrJSX.push(<StarSVG className="w-5 h-5 text-yellow-500" key={i} />);
  }
  return <div className="flex">{StarsArrJSX}</div>;
}
