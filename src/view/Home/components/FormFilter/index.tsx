import { HiDotsVertical } from "react-icons/hi";
import "./styles.scss";
import Button from "./Button";
import { useState } from "react";

const btns = [
  { id: 1, text: "All" },
  { id: 2, text: "Daily Routine" },
  { id: 3, text: "Study Routine" },
];

const FormFilter = () => {
  const [idActive, setIdActive] = useState(1);

  const handleOnclick = (id: number) => {
    setIdActive(id);
  };
  return (
    <div className="d-flex gap-2 form-filter align-items-center">
      {btns.map((btn, index) => {
        return (
          <Button
            key={index}
            name={btn.text}
            id={btn.id}
            idActive={idActive}
            handlClick={handleOnclick}
          />
        );
      })}
      <HiDotsVertical
        style={{
          fontSize: 25,
        }}
      />
    </div>
  );
};

export default FormFilter;
