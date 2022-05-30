import React from "react";
import TimeTableItem from "./TimeTableItem";

export default function TimeTableList(props) {
  const { items, status,time } = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Buổi</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <select className="form-control">
                <option>Tất Cả</option>
                {time.map((t, i) => (
                  <option value={t} key={t}>
                    {t}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <select className="form-control">
                <option>Tất Cả</option>
                {status.map((s, i) => (
                  <option value={s} key={s}>
                    {s}
                  </option>
                ))}
              </select>
            </td>
            <td />
          </tr>
          {items.map((item, index) => (
            <TimeTableItem item={item} index={index} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
