import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd , onCancel}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  const classValue = "text-stone-600 mt-1"
  const saveFormData = () => {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newDueDate = dueDate.current.value;

    // Validation
    const validateValue =
      newTitle.trim() === "" ||
      newDescription.trim() === "" ||
      newDueDate.trim() === "";
    if (validateValue) {
      modal.current.open();
      return;
    }
    onAdd({
      title: newTitle,
      newDescription: newDescription,
      dueDate: newDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaptions={"Close"}>
        <h2 className="font-bold text-stone-700 text-xl mt-2">Invalid Input</h2>
        <p className={classValue}>Oops ... looks like you forgot input value.</p>
        <p className={classValue}>Please make sure you input valid value</p>
      </Modal>
      <div className="w-[35rem] mt-12">
        <menu className="flex justify-end gap-4 items-center mb-2">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={saveFormData}
              className="px-6 py-1 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50 hover:text-stone-100"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input ref={description} isTextArea label={"Description"} />
          <Input type="date" ref={dueDate} label={"New Date"} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
