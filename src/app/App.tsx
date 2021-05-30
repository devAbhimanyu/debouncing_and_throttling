import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;

/**
 *
 * @param {function} func core function
 * @param {number} delay time in ms
 * @returns {function} closure function
 */
const debounce = (func: any, delay: number) => {
  let setTimoutInstance: any;
  return function () {
    const args = arguments;
    if (setTimoutInstance) clearTimeout(setTimoutInstance);
    //as arguments is an array apply is the best way to invoke
    setTimoutInstance = setTimeout(() => func.apply({}, args), delay);
  };
};

/**
 * A demo api call
 * @param {string} val
 */
const api = (val: string) => {
  //call api here
  console.log(val);
};

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  //debounced function as callback
  const func: any = useCallback(
    debounce((string: string) => api(string), 1000),
    []
  );

  useEffect(() => {
    search && func(search);
  }, [search, func]);

  const changeHandler: ChangeEvent = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="App container">
      <h1> Debouncing </h1>
      <input
        type="text"
        className="search"
        value={search}
        onChange={changeHandler}
      />
    </div>
  );
};

export default App;
