import React from "react";

function LoadMoreBtn({ result, page, load, handleLoadMore }) {
  return (
    <>
      {result < 10 * (page - 1)
        ? ""
        : !load && (
            <button
              className="btn btn-dark mx-auto d-block mb-[20px]"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
    </>
  );
}

export default LoadMoreBtn;
