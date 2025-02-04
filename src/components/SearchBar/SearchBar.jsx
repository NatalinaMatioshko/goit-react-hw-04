import { useState } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      return toast.error("Please enter the text", {
        duration: 3000,
        position: "top-right",
      });
    }

    onSubmit(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
