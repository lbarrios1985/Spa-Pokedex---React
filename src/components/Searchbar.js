import React from 'react';
const { useState } = React;

export const Searchbar = (props) => {

  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search);
    }
  }

  return (
    <div className="container-search">
      <div className="col-search">
        <input placeholder="Search pokemon..."
               onChange={onChange}
               onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-btn">
        <button onClick={onClick}/>
      </div>
    </div>
  )
}
