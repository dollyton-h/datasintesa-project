//CORE
import React from "react";

//COMPONENT UI
import { Select } from "antd";
import moment from "moment/moment";
import { nat_filter } from "../../constants/User/user";

const Filter = (props) => {
  return (
    <>
      <Select
        className="width-large"
        defaultValue="select"
        options={nat_filter}
        onChange={props.onChange}
        value={props.current === "" ? "select" : props.current}
      />
    </>
  );
};

export default Filter;
