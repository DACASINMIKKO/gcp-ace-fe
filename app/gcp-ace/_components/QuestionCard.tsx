import React from "react";

type QuestionInterface = {
  questions: string;
  choices: string[];
  answer: number;
};
type QuestionCardProps = {
  items: QuestionInterface;
  index: number;
  selectedValue: string;
  handleChange: (index: number, value: string) => void;
};

const QuestionCard = ({
  items,
  index,
  selectedValue,
  handleChange,
}: QuestionCardProps) => {
  return (
    <div className=" p-5 bg-white rounded-xl flex gap-4 flex-col">
      <div className=" font-bold">{items.questions}</div>
      <div className=" flex flex-col gap-2">
        {items.choices.map((choice, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={`${index}`}
              value={i}
              style={{
                accentColor: "black",
              }}
              checked={selectedValue === i.toString()}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {choice}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
