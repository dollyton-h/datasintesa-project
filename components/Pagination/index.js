//CORE
import React from "react";

//COMPONENT UI
import { Pagination } from "antd";

const Filter = (props) => {
  return (
    props.data && (
      <>
        <Pagination
          defaultCurrent={props.current}
          total={100}
          onChange={props.onChange}
          showSizeChanger={false}
        />
      </>
    )
  );
};

export default Filter;
