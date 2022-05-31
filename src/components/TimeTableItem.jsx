import React from "react";

export default function TimeTitleItem(props) {
  const { item, index, onDelete } = props;
  return (
    <tr>
      <td>{index+1}</td>
      <td>{item.time}</td>
      <td>{item.actname}</td>
      <td className="text-center">
        <span className="label label-success">{item.status}</span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning" >
          <span className="fa fa-pencil mr-3" />
          Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-3" />
          Xóa
        </button>
      </td>
    </tr>
  );
}
