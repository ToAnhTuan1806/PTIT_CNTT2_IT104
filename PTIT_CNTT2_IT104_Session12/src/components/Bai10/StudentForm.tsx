import React from "react";

export default function StudentForm() {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin sinh viên</h3>
        <form className="form-sample">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Nhập mã sinh viên" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" placeholder="Nhập tên sinh viên" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tuổi</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" placeholder="Nhập tuổi" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Giới tính</label>
            <div className="col-sm-9">
              <select className="form-control" title="Chọn giới tính">
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Ngày sinh</label>
            <div className="col-sm-9">
              <input type="date" className="form-control" title="Chọn ngày sinh" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Nơi sinh</label>
            <div className="col-sm-9">
              <select className="form-control" title="Chọn nơi sinh">
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Quảng Ninh</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Địa chỉ</label>
            <div className="col-sm-9">
              <textarea className="form-control" placeholder="Nhập địa chỉ"></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
