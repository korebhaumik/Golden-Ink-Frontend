import avatar_1 from "./avatars/avatar_1.webp";
import avatar_2 from "./avatars/avatar_2.png";
import avatar_3 from "./avatars/avatar_3.png";
import avatar_4 from "./avatars/avatar_4.png";
import avatar_5 from "./avatars/avatar_5.png";
import avatar_6 from "./avatars/avatar_6.png";
import avatar_7 from "./avatars/avatar_7.png";
import avatar_8 from "./avatars/avatar_8.png";
import avatar_9 from "./avatars/avatar_9.png";
import avatar_10 from "./avatars/avatar_10.png";
import avatar_11 from "./avatars/avatar_11.png";
import avatar_12 from "./avatars/avatar_12.png";
import avatar_13 from "./avatars/avatar_13.png";
import avatar_14 from "./avatars/avatar_14.png";
import avatar_15 from "./avatars/avatar_15.png";
import avatar_16 from "./avatars/avatar_16.png";
import avatar_17 from "./avatars/avatar_17.png";
import avatar_18 from "./avatars/avatar_18.png";
import avatar_19 from "./avatars/avatar_19.png";
import avatar_20 from "./avatars/avatar_20.png";

interface IAvatar {
  className?: string;
  onClick?: () => void;
}
export const Avatar_1 = ({ className, onClick }: IAvatar) => {
  return (
    <div
      className={className || "border-4 border-accent-blue-600 cursor-pointer rounded-full h-fit"}
    >
      <img
        className={!className?"w-12 h-12 rounded-full": ""}
        src={avatar_1}
        onClick={onClick}
      ></img>
    </div>
  );
};
export const Avatar_2 = () => {
  return <img className="w-12 h-12 " src={avatar_2}></img>;
};
export const Avatar_3 = () => {
  return <img className="w-12 h-12 " src={avatar_3}></img>;
};
export const Avatar_4 = () => {
  return <img className="w-12 h-12 " src={avatar_4}></img>;
};
export const Avatar_5 = () => {
  return <img className="w-12 h-12 " src={avatar_5}></img>;
};
export const Avatar_6 = () => {
  return <img className="w-12 h-12 " src={avatar_6}></img>;
};
export const Avatar_7 = () => {
  return <img className="w-12 h-12 " src={avatar_7}></img>;
};
export const Avatar_8 = () => {
  return <img className="w-12 h-12 " src={avatar_8}></img>;
};
export const Avatar_9 = () => {
  return <img className="w-12 h-12 " src={avatar_9}></img>;
};
export const Avatar_10 = () => {
  return <img className="w-12 h-12 " src={avatar_10}></img>;
};
export const Avatar_11 = () => {
  return <img className="w-12 h-12 " src={avatar_11}></img>;
};
export const Avatar_12 = () => {
  return <img className="w-12 h-12 " src={avatar_12}></img>;
};
export const Avatar_13 = () => {
  return <img className="w-12 h-12 " src={avatar_13}></img>;
};
export const Avatar_14 = () => {
  return <img className="w-12 h-12 " src={avatar_14}></img>;
};
export const Avatar_15 = () => {
  return <img className="w-12 h-12 " src={avatar_15}></img>;
};
export const Avatar_16 = () => {
  return <img className="w-12 h-12 " src={avatar_16}></img>;
};
export const Avatar_17 = () => {
  return <img className="w-12 h-12 " src={avatar_17}></img>;
};
export const Avatar_18 = () => {
  return <img className="w-12 h-12 " src={avatar_18}></img>;
};
export const Avatar_19 = () => {
  return <img className="w-12 h-12 " src={avatar_19}></img>;
};
export const Avatar_20 = () => {
  return <img className="w-12 h-12 " src={avatar_20}></img>;
};
