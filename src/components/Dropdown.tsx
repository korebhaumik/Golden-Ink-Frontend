import { motion } from "framer-motion";

type Props = {}

export default function Dropdown({}: Props) {
    return (
        <motion.div
          className="absolute w-32 px-4 py-2 z-10 border rounded shadow-sm bg-white top-10  border-slate-100 "
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 100,
            scale: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            transition: {
              ease: "easeIn",
              duration: 0.1,
            },
          }}
        >
          <div
            className="mt-1 cursor-pointer"
            onClick={() => {
              console.log("This is option 1");
            }}
          >
            option 1
          </div>
          <div className="mt-1 cursor-pointer">option 2</div>
          <div className="mt-1 cursor-pointer">option 3</div>
          <div className="mt-1 cursor-pointer">option 4</div>
        </motion.div>
      );
}