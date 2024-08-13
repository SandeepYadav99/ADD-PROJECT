import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonCaptions }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md">
      {children}
       <form method="dialog" className="text-right mt-4">
        <Button>{buttonCaptions}</Button>
       </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
