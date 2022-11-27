import React, { useState } from "react";
import { Card as UserCard, Row, Col, Avatar, Modal } from "antd";
import moment from "moment/moment";

const Card = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [detail, setdetail] = useState({});
  return (
    <>
      <Modal
        title="Detail User"
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <br />
        <div className="display-flex">
          <span className="font-bold width-medium">Address</span>{" "}
          <span className="content-modal">{`${detail?.location?.street?.name} street No ${detail?.location?.street?.number} ${detail?.location?.city}, ${detail?.location?.country}`}</span>
        </div>
        <br />
      </Modal>
      <Row gutter={[16, 16]}>
        {data?.map((dt, idx) => {
          return (
            <Col className="shadow" span={6} key={idx}>
              <UserCard bordered>
                <p>
                  <Avatar src={dt.picture.medium} />
                </p>
                <div className="display-flex">
                  <span className="font-bold width-medium">Name</span>
                  <div className="content m-top-3">{`${dt.name.title} ${dt.name.first} ${dt.name.last}`}</div>
                </div>
                <div className="display-flex">
                  <span className="font-bold width-medium">Email</span>
                  <div className="content m-top-3">{dt.email}</div>
                </div>
                <div className="display-flex">
                  <span className="font-bold width-medium">City</span>
                  <div className="content m-top-3">{dt.location.city}</div>
                </div>
                <div className="display-flex">
                  <span className="font-bold width-medium">Born Date</span>
                  <div className="content m-top-3">
                    {moment(dt.dob.date).format("DD-MM-YYYY HH:mm")}
                  </div>
                </div>
                <div className="display-flex">
                  <span className="font-bold width-medium">Age</span>
                  <div className="content m-top-3">
                    {moment().diff(moment(dt.dob.date, "YYYYMMDD"), "years")}{" "}
                    years
                  </div>
                </div>
                <br />
                <div className="align-right">
                  <span
                    className="cursor-pointer link-text"
                    onClick={() => {
                      setdetail(dt);
                      setOpen(true);
                    }}
                  >{`More details >>`}</span>
                </div>
              </UserCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Card;
