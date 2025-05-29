import { useState } from "react";
import { useEffect } from "react";
import Paginator from "./Paginator";
import './styles.css';

export default function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);

  return (
    <>
      <Paginator list={list} />
    </>
  );
}
