import { forwardRef } from "react";

import styles from "./Input.module.css";

const Input = (props, ref) => {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
};

export default forwardRef(Input);
