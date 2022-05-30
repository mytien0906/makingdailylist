import React from "react";

export default function FormAdd(props) {
  const { status, time, onSubmit, input, onChange,onReset } = props;

  
  return (
    <form onSubmit={onSubmit}>
      <label>Canh:</label>
      <select name="time" className="form-control" required value={input.time} onChange={onChange}>
        {time.map((t, i) => (
          <option value={t} key={t}>
            {t}
          </option>
        ))}
      </select>
      <div className="form-group">
        <label>Tên :</label>
        <input name="actname" type="text" className="form-control" value={input.actname} onChange={onChange}/>
      </div>
      <label>Trạng Thái :</label>
      <select name="status" className="form-control" required value={input.status} onChange={onChange}>
        {status.map((s, i) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
      <br />
      <div className="text-center">
        <button type="submit" className="btn btn-warning">
          Thêm
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onReset}>
          Hủy Bỏ
        </button>
      </div>
    </form>
  );
}
