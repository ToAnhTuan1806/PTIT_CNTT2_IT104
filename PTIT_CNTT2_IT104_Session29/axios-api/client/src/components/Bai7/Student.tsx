import React, { useEffect, useMemo, useState } from "react";
import { getAllStudents, type StudentType } from "../../api/api";
import StudentTable from "../../components/Bai7/StudentTable";
import Pagination from "../../components/Bai7/Pagination";
import "./style.css";

export default function Student() {
  const [students, setStudents] = useState<StudentType[]>([]);
  const [page, setPage] = useState<number>(3); 
  const pageSize = 10;

  useEffect(() => {
    (async () => {
      const data = await getAllStudents();
      setStudents(data);
      if (data.length <= pageSize * 2) setPage(1);
    })();
  }, []);

  const slice = useMemo(() => {
    const start = (page - 1) * pageSize;
    return students.slice(start, start + pageSize);
  }, [students, page]);

  const startDisplay = Math.min((page - 1) * pageSize + 1, students.length || 0);
  const endDisplay = Math.min(page * pageSize, students.length);

  return (
    <div className="st-card">
      <div className="st-card-head">
        <h3 className="st-title">
          Quản lý <span className="st-bold">sinh viên</span>
        </h3>
        <button className="st-add-btn">＋ Thêm mới sinh viên</button>
      </div>

      <StudentTable students={slice} />

      <div className="st-card-foot">
        <span className="st-count">
          Hiển thị {students.length ? `${startDisplay}-${endDisplay}` : 0}/{students.length} bản ghi
        </span>
        <Pagination
          current={page}
          total={students.length}
          pageSize={pageSize}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
