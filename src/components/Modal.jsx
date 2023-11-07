import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate(".."); //go up one level - to parent route
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
