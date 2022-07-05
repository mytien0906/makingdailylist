import React from "react";
import FormAdd from "./FormAdd";

export default function AddToTimeTable(props) {
  const {status,time,onSubmit, input,onChange,onReset, isEdit,onUpdate} = props;
  return (
      <div className="panel panel-warning add-block">
        <div className="panel-heading">
          <h3 className="panel-title pink-color">{isEdit ? 'Sửa' : 'Thêm'} Công Việc Đi Mtien</h3>
        </div>
        <div className="panel-body">
          <FormAdd status={status} time={time} onSubmit={onSubmit} onReset={onReset} input={input} onChange={onChange} isEdit={isEdit} />
        </div>
      </div>
  );
}
