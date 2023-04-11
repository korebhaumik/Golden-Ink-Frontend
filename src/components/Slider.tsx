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
      <div className="absolute flex top-16 right-20">
        <svg className="rounded-full h-3 w-3 bg-blue-700 ml-2"></svg>
        <svg className="rounded-full h-3 w-3 bg-slate-400 ml-2"></svg>
        <svg className="rounded-full h-3 w-3 bg-slate-400 ml-2"></svg>
      </div>
      <div className="flex justify-between my-12">
        {/* Buttons */}
        <div className="flex items-center w-24 justify-between ">
          <div className="text-slate-500 w-fit rounded-full p-2 border-2 border-slate-500 cursor-pointer">
            <ChevronLeftSVG />
          </div>
          <div className="bg-blue-700 text-white w-fit rounded-full p-2 cursor-pointer">
            <ChevronRightSVG />
          </div>
        </div>
        {/* Comments */}
        <div className="flex">{CardJSXArr}</div>
      </div>
    </>
  );
}

function Card({ card }: { card: cardType }) {
  return (
    <div className="w-72 text-white bg-primary-800 rounded-md py-8 pr-7 pl-12 relative mx-4">
      {card.avatar}
      <QuotesSVG />
      <p className="text-slate-500 my-2 mt-3">
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
    StarsArrJSX.push(<StarSVG key={i} />);
  }
  return <div className="flex">{StarsArrJSX}</div>;
}
