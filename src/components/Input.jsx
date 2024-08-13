import { forwardRef } from "react";

const Input = forwardRef(({ label, isTextArea, ...rest }, ref) => {
  const inputClass =
    "w-full p-1 border-1 rounded-sm  focus:outline-none bg-stone-200 text-bold text-stone-600";
  return (
    <p className="flex flex-col my-4">
      <label className="font-bold text-stone-500 uppercase text-sm ">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={inputClass} {...rest} />
      ) : (
        <input ref={ref} className={inputClass} {...rest} />
      )}
    </p>
  );
});
export default Input;
