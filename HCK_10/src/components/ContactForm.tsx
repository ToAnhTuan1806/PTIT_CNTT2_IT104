import React, { useEffect, useState } from "react";
import type { Contact } from "./Contact";

type Props = {
  onSubmit: (payload: { id?: string; name: string; phone: string }) => void;
  editing: Contact | null;
  onCancelEdit: () => void;
  phones: string[];
};

export default function ContactForm(props: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [errName, setErrName] = useState("");
  const [errPhone, setErrPhone] = useState("");

  useEffect(() => {
    if (props.editing) {
      setName(props.editing.name);
      setPhone(props.editing.phone);
    } else {
      setName("");
      setPhone("");
    }
    setErrName("");
    setErrPhone("");
  }, [props.editing]);

  const validate = () => {
    let ok = true;

    if (!name.trim()) {
      setErrName("Tên không được để trống");
      ok = false;
    } else {
      setErrName("");
    }

    if (!phone.trim()) {
      setErrPhone("Số điện thoại không được để trống");
      ok = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setErrPhone("Phải gồm đúng 10 chữ số");
      ok = false;
    } else {
      const duplicate = props.phones.includes(phone) && (!props.editing || phone !== props.editing.phone);
      if (duplicate) {
        setErrPhone("Số điện thoại đã tồn tại");
        ok = false;
      } else {
        setErrPhone("");
      }
    }

    return ok;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
        return;
    }

    props.onSubmit({
      id: props.editing?.id,
      name: name.trim(),
      phone: phone.trim()
    });

    if (!props.editing) {
      setName("");
      setPhone("");
    }
  };

  return (
    <section className="card">
      <div className="card__title">
        <span className="title-icon">➕</span>
        <h2>{props.editing ? "Cập nhật liên hệ" : "Thêm liên hệ mới"}</h2>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input className={`input ${errName ? "input--error" : ""}`} placeholder="Tên liên hệ" value={name} onChange={(e) => setName(e.target.value)}/>
        <input className={`input ${errPhone ? "input--error" : ""}`} placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button className="btn btn-success" type="submit">
          {props.editing ? "Lưu" : "Thêm"}
        </button>
        {props.editing && (
          <button className="btn btn-light" type="button" onClick={props.onCancelEdit}>
            Hủy
          </button>
        )}
      </form>

      <div className="form__errors">
        {errName && <p> {errName}</p>}
        {errPhone && <p> {errPhone}</p>}
      </div>
    </section>
  );
}
