import check from "../assets/circle-check-solid.svg";
import remove from "../assets/trash-solid.svg";
import notTick from "../assets/circle-regular.svg";

// eslint-disable-next-line react/prop-types
const TodoItems = ({text, id, isCompleted, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer "
      >
        <img className="w-7" src={isCompleted ? check : notTick} />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-3.5 cursor-pointer"
        src={remove}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
