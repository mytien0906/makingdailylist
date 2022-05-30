import React from 'react'

export default function SearchList(props) {
  const {onSearch,input,onChange,onSearchClear} = props;
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group">
                <input name="search" value={input.search} onChange={onChange}
                  type="text"
                  className="form-control"
                  placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={onSearch}>
                    <span className="fa fa-search mr-2" />
                    Tìm
                  </button>
                  <button className="btn btn-danger ml-4" type="button" onClick={onSearchClear} style={{fontWeight:600}}>
                    <span className="fa fa-minus mr-2"/>
                    Xóa
                  </button>
                </span>
              </div>
            </div>
  )
}
