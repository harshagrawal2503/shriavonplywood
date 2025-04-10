import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="card bg-dark border-0">
          <img
            className="card-img img-fluid rounded"
            style={{ maxHeight: "80vh", objectFit: "cover", width: "100%" }}
            src="./images/bannersite.jpg"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
