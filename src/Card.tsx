import { motion } from 'framer-motion';

type Props = {
  id: number;
  index: number;
  text: string;
  bgColor: string;
  setList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
        bgColor: string;
      }[]
    >
  >;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Card({
  id,
  index,
  text,
  bgColor,
  setList,
  isDragging,
  setIsDragging,
}: Props) {
  return (
    <motion.div
      key={id}
      drag="x"
      dragSnapToOrigin
      layout
      dragListener={index === 0}
      onDrag={() => {
        setIsDragging(true);
      }}
      whileDrag={{ cursor: 'grabbing', scale: 1 }}
      onDragEnd={(_event, info) => {
        console.log(info);
        if (info.offset.x < -150) {
          setList((list) => [...list.slice(1), list[0]]);
        }
        setIsDragging(false);
      }}
      className="card"
      style={{
        backgroundColor: bgColor,
        gridArea: '1 / 1 / auto / 4',
        zIndex: 3 - index,
        cursor: 'pointer',
      }}
      initial={{
        x: 500,
      }}
      animate={{
        rotate: index % 2 ? 3 : -3,
        x: index * 80,
        scale: 1 - (index - Number(isDragging)) * 0.1,
      }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      {text}
    </motion.div>
  );
}
