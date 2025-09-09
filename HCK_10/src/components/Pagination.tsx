import React from "react";

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Pagination(props: Props) {
  return (
    <div className="pagination">
      <button type="submit" className="page-btn" onClick={props.onPrev} disabled={props.page <= 1}>
        ‹
      </button>
      <span className="page-current">{props.page}</span>
      <button type="submit" className="page-btn" onClick={props.onNext} disabled={props.page >= props.totalPages}>
        ›
      </button>
    </div>
  );
}
