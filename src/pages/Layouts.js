import React from "react";
import { useSelector } from "react-redux";

export default function Layouts() {
  const paper = useSelector((state) => state.book.paper);
  return <div>Layouts paper: {paper}</div>;
}
