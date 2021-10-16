import React from "react";
import { Pagination } from "react-rainbow-components";
import { useSelector, shallowEqual } from "react-redux";

export default function Panigation({ onChangePage, limitPage = 10 }) {
  const { pagination } = useSelector(
    (state) => ({
      pagination: state.pagination.item,
    }),
    shallowEqual
  );
  return pagination.total > limitPage ? (
    <Pagination
      activePage={100}
      className="rainbow-m_auto"
      pages={
        Math.ceil(pagination && pagination.total / limitPage) > 0
          ? Math.ceil(pagination && pagination.total / limitPage)
          : 0
      }
      onChange={(e, page) => onChangePage(e, page)}
    />
  ) : (
    ""
  );
}
