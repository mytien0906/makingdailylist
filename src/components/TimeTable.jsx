import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { rmVnTones } from '../helpers/commonFuncs';
import useComponentWillMount from '../hooks/useComponentWillMount';
import AddToTimeTable from './AddToTimeTable';
import SearchList from './SearchList';
import SortList from './SortList';
import TimeTableList from './TimeTableList';
const status = ['Vui vẻ', 'Không vui', 'Buồn ngủ'];
const time = ['Sáng', 'Trưa', 'Chiều', 'Tối'];
const sortByName = ['Tên A-Z', 'Tên Z-A'];
export default function TimeTable() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('items')) || []);
  const [itemsFilter, setItemsFilter] = useState([]);
  const randomId = () => {
    return `${Date.now()}${Math.floor(Math.random() * 100)}`;
  };
  const [id, setId] = useState(() => randomId());
  const [isEdit, setIsEdit] = useState('');
  const [input, setInput] = useState({
    id: randomId(),
    time: 'Sáng',
    actname: '',
    status: 'Vui vẻ',
    search: '',
  });

  const [isShow, setIsShow] = useState(false);
  const [isFilter, setIsFilter] = useState({ time: '', status: '' });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    console.log('useEffect' + document);
  }, []);

  useComponentWillMount(() => {
    console.log('useComponentWillMount ' + document);
  });

  const onToggleShow = () => {
    setIsShow((prev) => !prev);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const onReset = () => {
    setInput((prev) => ({
      ...prev,
      id: randomId(),
      time: 'Sáng',
      actname: '',
      status: 'Vui vẻ',
    }));
  };
  // Them cong viec `
  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const newItem = [...items];
      const findIndex = items.findIndex((item) => item.id === isEdit);
      newItem.splice(findIndex, 1, input);
      setItems(newItem);
      setIsEdit('');
    } else {
      setItems((prev) => [...prev, input]);
    }
    onReset();
    onToggleShow();
    toast.success('Hihi');
  };

  // Tim kiem ne, hihi
  const onSearch = () => {
    const value = rmVnTones(input.search.toLowerCase());
    if (!value) {
      setIsFilter((prev) => ({
        ...prev,
        search: '',
      }));
      return;
    }
    // const result = items.filter((item) => rmVnTones(item.actname.toLowerCase()).includes(value));
    setIsFilter((prev) => ({
      ...prev,
      search: value,
    }));
  };

  const onSearchClear = () => {
    setInput((prev) => ({ ...prev, search: '' }));
    setIsFilter((prev) => ({
      ...prev,
      search: '',
    }));
  };

  const onDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const onSelfClick = (id) => {
    const findItem = items.find((item) => item.id === id);
    setInput((prev) => ({
      ...prev,
      id: findItem.id,
      time: findItem.time,
      actname: findItem.actname,
    }));
    onToggleShow();
    setIsEdit(findItem.id);
  };
  const onUpdate = (items) => {
    console.log(items);
    const newItems = [...items];
  };

  const onSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue === 'Tên A-Z') {
      // Sort khong tra ve gia tri nha, phai new ra
      const sortItems = [...items];
      sortItems.sort((a, b) => a.actname.localeCompare(b.actname));
      setItems(sortItems);
    } else if (sortValue === 'Tên Z-A') {
      const sortItems = [...items];
      sortItems.sort((a, b) => -1 * a.actname.localeCompare(b.actname));
      setItems(sortItems);
    }
  };

  const onFilter = useCallback(
    (e) => {
      const { name, value } = e.target;
      setIsFilter((prev) => ({ ...prev, [name]: value }));
    },
    [items],
  );

  // a= 1
  // console.log(isFilter);
  const data = useMemo(() => {
    if (!isFilter.time && !isFilter.status && !isFilter.search) {
      return items;
    }
    let newItems = [...items];
    if (isFilter.time === 'Sáng') {
      newItems = newItems.filter((item) => item.time.includes(isFilter.time));
    }
    if (isFilter.time === 'Trưa') {
      newItems = newItems.filter((item) => item.time.includes(isFilter.time));
    }
    if (isFilter.time === 'Chiều') {
      newItems = newItems.filter((item) => item.time.includes(isFilter.time));
    }
    if (isFilter.time === 'Tối') {
      newItems = newItems.filter((item) => item.time.includes(isFilter.time));
    }
    if (isFilter.status === 'Vui vẻ') {
      newItems = newItems.filter((item) => item.status.includes(isFilter.status));
    }
    if (isFilter.status === 'Không vui') {
      newItems = newItems.filter((item) => item.status.includes(isFilter.status));
    }
    if (isFilter.status === 'Buồn ngủ') {
      newItems = newItems.filter((item) => item.status.includes(isFilter.status));
    }
    if (isFilter.search) {
      newItems = newItems.filter((item) =>
        rmVnTones(item.actname.toLowerCase()).includes(isFilter.search),
      );
    }
    return newItems;
  }, [items, isFilter]);

  return (
    <div className="container">
      <div className="text-center">
        <h1>Thời Gian Biểu Của Mtien</h1>
        <hr />
      </div>
      <div className="row">
        <div className={isShow ? 'col-lg-4' : 'd-none'}>
          <AddToTimeTable
            status={status}
            time={time}
            onSubmit={onSubmit}
            input={input}
            onChange={onChange}
            onReset={onReset}
            isEdit={isEdit}
            onUpdate={onUpdate}
          />
        </div>
        <div className={isShow ? 'col-lg-8' : 'col-lg-12'}>
          <button type="button" className="btn btn-primary" onClick={onToggleShow}>
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
            <SortList sortByName={sortByName} input={input} onSort={onSort} />
          </div>
          <div className="row mt-3">
            <TimeTableList
              items={data}
              status={status}
              time={time}
              onDelete={onDelete}
              onSelfClick={onSelfClick}
              onFilter={onFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
