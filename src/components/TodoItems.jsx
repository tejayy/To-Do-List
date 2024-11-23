import check from "../assets/circle-check-solid.svg";
import notCheck from "../assets/xmark-solid.svg";
import remove from "../assets/trash-solid.svg";

const TodoItems = ({text, id, isCompleted, deleteTodo}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer ">
        <img className="w-7" src={check} alt="" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
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
