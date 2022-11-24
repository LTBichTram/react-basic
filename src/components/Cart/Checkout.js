import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });
  const inputRef = useRef({});
  const onSubmit = (data) => {
    console.log(data);
    console.log("jjjj");
    props.onOrder(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.control}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          autoFocus
          {...register("name", {
            // required: true,
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Alphabetical characters only",
            },
            maxLength: {
              value: 25,
              message: "Name cannot over characters",
            },
          })}
          ref={(el) => (inputRef.current.name = el)}
        />
        <span className={styles["focus-input"]}></span>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ messages }) => {
            console.log(messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
      </div>
      <div className={styles.control}>
        <label>Your phone</label>
        <input
          {...register("phone", { required: "This field is required." })}
          ref={(el) => (inputRef.current.phone = el)}
        />
        <span className={styles["focus-input"]}></span>
      </div>
      <div className={styles.control}>
        <label>Your address</label>
        <input
          {...register("address")}
          ref={(el) => (inputRef.current.address = el)}
        />
        <span className={styles["focus-input"]}></span>
      </div>
      <div className={styles.control}>
        <label>Note</label>
        <input
          {...register("note")}
          ref={(el) => (inputRef.current.note = el)}
        />
        <span className={styles["focus-input"]}></span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button type="submit" className={styles.submit}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Checkout;
