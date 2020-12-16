import React, { useState } from "react";

const CardList = ({ postsToRender }) => {
  const [shownComments, setShownComments] = useState({});

  const toggleComment = (id) => {
    setShownComments((prevShownComments) => ({
      ...prevShownComments,
      [id]: !prevShownComments[id],
    }));
  };
  return (
    <>
      {postsToRender.map((item, i) => (
        <div key={i} className="col-sm-12 col-md-4 mb-4">
          <div
            className="col-md-12 p-4 d-flex flex-column text-left text-white h-100"
            style={{ backgroundColor: `${item.variant}` }}
          >
            <p>{item.date}</p>
            <p className="lead">{item.title}</p>
            <p>{item.text}</p>

            <div key={item.id}>
              {shownComments[item.id] ? <p>{item.moretext}</p> : null}
              {item.moretext ? (
                <button
                  className="btn btn-outline-light mt-auto"
                  onClick={() => toggleComment(item.id)}
                >
                  {item.link}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardList;
