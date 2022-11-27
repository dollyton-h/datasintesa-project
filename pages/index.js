//CORE
import React, { useEffect, useState } from "react";

//API
import { apiGetList } from "./api/user";

//COMPONENT UI
import Card from "../components/Card";
import { Row, Col, Spin } from "antd";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

export default function Home() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [nat, setNat] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(function () {
      setLoading(false);
    }, 500);
  }, [nat, pages]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    setLoading(true);
    let requestParams = `?page=${pages}&results=8&nat=${nat}`;
    let { response, error } = await apiGetList(requestParams);
    if (response) {
      setData(response.data.results);
    }
  };

  const filterNationality = async (val) => {
    await setLoading(true);
    await setNat(val);
  };

  const onChangePage = async (page) => {
    console.log(page);
    await setLoading(true);
    await setPages(page);
  };
  return loading === true && data ? (
    <Spin className="loadingSpinner" tip="Loading..."></Spin>
  ) : (
    <>
      <br />
      <Row>
        <Col span={18}>
          <div className="font-big font-bold">List User</div>
        </Col>
        <Col>
          <span>Filter by Nationality </span>
          <Filter onChange={filterNationality} current={nat} />
        </Col>
      </Row>
      <br />
      <Row>
        <Card data={data} />
      </Row>
      <br />
      <br />
      <Row>
        <Col span={9}></Col>
        <Pagination data={data} current={pages} onChange={onChangePage} />
      </Row>
    </>
  );
}
