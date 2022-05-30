import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { rmVnTones } from "../helpers/commonFuncs";
import AddToTimeTable from "./AddToTimeTable";
import SearchList from "./SearchList";
import SortList from "./SortList";
import TimeTableList from "./TimeTableList";
const status = ["Vui vẻ", "Không vui", "Buồn ngủ"];
const time = ["Sáng", "Trưa", "Chiều", "Tối"];
const sortByName = ["Tên A-Z", "Tên Z-A"];
export default function TimeTable() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );
  const [itemsFilter, setItemsFilter] = useState([]);
  const [input, setInput] = useState({
    time: "Sáng",
    actname: "",
    status: "Vui vẻ",
    search: "",
    sortAsc: true,
    sortDes: false,
  });

  const [isShow, setIsShow] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const onToggleShow = () => {
    setIsShow((prev) => !prev);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const onReset = () => {
    setInput({
      time: "Sáng",
      actname: "",
      status: "Vui vẻ",
    });
  };
  // Them cong viec `
  const onSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, input]);
    onReset();
    onToggleShow();
    toast.success("Hihi");
  };

  // Tim kiem ne, hihi
  const onSearch = () => {
    const value = rmVnTones(input.search.toLowerCase());
    if (!value) {
      setIsFilter(false);
      return;
    }
    const result = items.filter((item) =>
      rmVnTones(item.actname.toLowerCase()).includes(value)
    );
    setItemsFilter(result);
    setIsFilter(true);
  };

  const onSearchClear = () => {
    setInput((prev) => ({ ...prev, search: "" }));
    setIsFilter(false);
  };

  const onSort = () => {
    const result =  items.sort((item)=>{
      
    })
  };
  return (
    <div className="container">
      <div className="text-center">
        <h1>Thời Gian Biểu Của Mtien</h1>
        <hr />
      </div>
      <div className="row">
        <div className={isShow ? "col-lg-4" : "d-none"}>
          <AddToTimeTable
            status={status}
            time={time}
            onSubmit={onSubmit}
            input={input}
            onChange={onChange}
            onReset={onReset}
          />
        </div>
        <div className={isShow ? "col-lg-8" : "col-lg-12"}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onToggleShow}
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Thêm Công Việc
          </button>
          <div className="row mt-3">
            <SearchList
              onSearch={onSearch}
              input={input}
              onChange={onChange}
              onSearchClear={onSearchClear}
            />
            <SortList
              sortByName={sortByName}
              input={input}
              onChange={onChange}
              onSort={onSort}
            />
          </div>
          <div className="row mt-3">
            <TimeTableList
              items={isFilter ? itemsFilter : items}
              status={status}
              time={time}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
