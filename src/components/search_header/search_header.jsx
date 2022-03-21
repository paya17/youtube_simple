import React, { useRef } from 'react';
import styles from './search_header.module.css'; //import


const SearchHeader = ({ onSearch }) => {  // * props.onSearch = {onSearch} (줄여쓰기)  //props를 인자로 받아서, return! (화살표 함수)

  const inputRef = useRef(); //1.*useRef 사용하기

  const handleSearch = () => {
    const value = inputRef.current.value; //3.*input태그에 입력된 value
    onSearch(value); //=props.onSearch(value), *app.jsx에 있는 search함수에 value를 대입
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return ( 
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        ref={inputRef} //2.inputRef를 연결
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      /> {/*onKeyPress이벤트->함수*/}

      <button className={styles.button} type="submit" onClick={onClick}> {/*onClick이벤트->함수*/}
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
