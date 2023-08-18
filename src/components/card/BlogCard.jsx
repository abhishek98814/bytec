import React from 'react';
import vlog1 from "../../assets/images/blog1.png";
import vlog2 from "../../assets/images/blog2.png";
import vlog3 from "../../assets/images/blog3.png";
import "./css/blogcard.css"

export default function BlogCard() {
  const vlogs = [
    {
      image: vlog1,
    },
    {
      image: vlog2,
    },
    {
      image: vlog3,
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-8">
          {vlogs.map((vlog, index) => (
            <div key={index} className="my-4">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="d-flex flex-column flex-md-row">
                    <img src={vlog.image} alt="" />
                    <div className="card2 col-lg-12 d-flex flex-column justify-content-end">
                      <h5>how to do anything</h5>
                      <p className="text-secondary" style={{ fontSize: '0.8rem' }}>
                        Relpenishb him third and meat blessed void a fruit gathered You're they're two water. Relpnish him third
                      </p>
                      <p style={{ fontSize: '0.8rem' }}>3 min Read</p>
                      <p>
                        <span className="text-dark" style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>@mir</span>
                        <span className="text-secondary px-3" style={{ fontSize: '0.8rem' }}>july 8 2022</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-4 my-4">
          <h5 className="text-center text-decoration-underline">Latest News</h5>
          <div className="box">
            <div className="my-3">
              <div className="box3">
                <div className="d-flex">
                  <p className="mx-2 my-4">
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>How to do anything</span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: '0.8rem', fontWeight: 500 }}>3min Read</span>
                  </p>
                  <img src={vlog3} alt="" height="40px" />
                </div>
                <hr className="mx-4" />

                <div className="d-flex">
                  <p className="mx-2 my-4">
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Have a fun weekend</span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: '0.8rem', fontWeight: 500 }}>5min Read</span>
                  </p>
                  <img src={vlog3} alt="" height="40px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
