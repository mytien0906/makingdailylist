import React from "react";

export default function SortList(props) {
  const { sortByName,input,onSort } = props;
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-2">
      <select className="form-control btn-primary" onChange={onSort}>
        {sortByName.map((s, i) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
