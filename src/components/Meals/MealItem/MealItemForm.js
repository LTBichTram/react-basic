import { useRef } from "react";

import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef(null);
  const checkNumber = (envent) => {
    // envent = envent ? envent : window.event;
    var charCode = envent.which ? envent.which : envent.keyCode;
    if (charCode > 48 && charCode < 54) {
      return;
    }
    envent.preventDefault();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +inputRef.current.value;
    props.onAddItem(enteredAmount);
    inputRef.current.value = 1;
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          type: "text",
          onKeyPress: (e) => {
            return checkNumber(e);
          },
          maxLength: "1",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
