interface IProp {
  name: string;
  id: number;
  idActive: number;
  handlClick: (id: number) => void;
}

const Button = ({ name, id, idActive, handlClick }: IProp) => {
  return (
    <button
      className={`btn px-2 ${id == idActive ? "active" : ""}`}
      onClick={() => {
        handlClick(id);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
