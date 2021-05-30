import { debounce } from "./utils";
// import _ from 'lodash';

import './index.css';

let defaultCount = 0;
let debounceCount = 0;

function defaultSearch(e) {
  defaultCount++;
  console.log('default search ' +defaultCount);
};

function debouncedSearch(e) {
    const {value=null} = e.target;
  debounceCount++;
  console.log("debounced search " + debounceCount, value);
};

const input1 = document.querySelector("#search");
input1.addEventListener("keydown", defaultSearch);

const input2 = document.querySelector("#debounce");
input2.addEventListener("keydown", debounce(debouncedSearch, 1000));

export const hellowrld = ()=>console.log("hello world");

