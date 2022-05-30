import React from "react";

export default function SortList(props) {
  const { sortByName,input,onChange,onSort } = props;
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-2">
      <select className="form-control btn-primary">
        {sortByName.map((s, i) => (
          <option value={input.sortAsc} key={s} onChange={onSort}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
