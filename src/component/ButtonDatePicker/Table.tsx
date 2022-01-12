import React from "react";
import { tableTitle } from "./config";
import { renderRowTable, renderTitleTable } from "./RenDerHTML";
import { TypeTable } from "./types";

const Table = (props: TypeTable) => {
  const { handleClick, valueRadio, weeks } = props;
  return (
    <table className="table">
      <thead>
        <tr>{renderTitleTable(tableTitle)}</tr>
      </thead>
      <tbody>{renderRowTable(weeks, handleClick, valueRadio)}</tbody>
    </table>
  );
};

export default Table;
