import { useState } from "react";

const PAGE_SIZE = 10;
export default function Paginator({ list }) {
  const [currPage, setCurrPage] = useState(0);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const numPages = Math.ceil(list.length / pageSize);
  const pages = new Array(numPages).fill(null);
  const startIndex = currPage * pageSize;
  const endIndex = startIndex + pageSize;

  const visibleList = list.slice(startIndex, endIndex);

  const handleNext = () => {
    setCurrPage((prev) => {
      if (prev < numPages - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrev = () => {
    setCurrPage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
      <div className="container">
        <span className="page-btn" onClick={handlePrev}>
          ◀️
        </span>
        {pages?.map((_, index) => {
          return (
            <span
              key={index}
              onClick={() => setCurrPage(index)}
              className={`page-btn ${currPage === index ? "active" : ""}`}
            >
              {index + 1}
            </span>
          );
        })}
        <span className="page-btn" onClick={handleNext}>
          ▶️
        </span>

        <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      {visibleList?.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.id}&nbsp;</span>
            <span>{item.title}</span>
          </div>
        );
      })}
    </>
  );
}
