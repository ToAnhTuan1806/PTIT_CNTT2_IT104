import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import ConfirmDialog from "./components/ConfirmDialog";
import Pagination from "./components/Pagination";

import type { Contact } from "./components/Contact";


const PAGE_SIZE = 5;

const seed: Contact[] = [
  { id: "1", name: "Nguyễn Văn A", phone: "0912345678" },
  { id: "2", name: "Trần Thị B",   phone: "0987654321" },
  { id: "3", name: "Lê Văn C",     phone: "0901234567" }
];

function newId(): string {
  const t = Date.now().toString();
  const r = Math.random().toString(36).slice(2, 6);
  return t + "-" + r;
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>(seed);
  const [editing, setEditing] = useState<Contact | null>(null);
  const [confirmDel, setConfirmDel] = useState<Contact | null>(null);

  const [page, setPage] = useState<number>(1);

  const totalPages = Math.max(1, Math.ceil(contacts.length / PAGE_SIZE));
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = page * PAGE_SIZE;
  const pageData = contacts.slice(startIndex, endIndex);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const handleSubmit = (payload: { id?: string; name: string; phone: string }) => {
    if (payload.id) {
      setContacts((list) => {
        return list.map((c) => {
          if (c.id === payload.id) {
            return { ...c, name: payload.name, phone: payload.phone };
          }
          return c;
        });
      });
      setEditing(null);
    } else {
      const newContact: Contact = {
        id: newId(),
        name: payload.name,
        phone: payload.phone
      };
      setContacts((list) => [newContact, ...list]);
      setPage(1);
    }
  };

  const handleDelete = () => {
    if (!confirmDel) return;

    setContacts((list) => list.filter((c) => c.id !== confirmDel.id));

    if (editing && editing.id === confirmDel.id) {
      setEditing(null);
    }
    setConfirmDel(null);
  };

  return (
    <div className="page">
      <Header />

      <main className="container">
        <ContactForm
          onSubmit={handleSubmit}
          editing={editing}
          onCancelEdit={() => setEditing(null)}
          phones={contacts.map((c) => c.phone)}
        />

        <ContactTable
          data={pageData}
          onEdit={(c) => setEditing(c)}
          onAskDelete={(c) => setConfirmDel(c)}
          pagination={
            <Pagination
              page={page}
              totalPages={totalPages}
              onPrev={() => setPage((p) => Math.max(1, p - 1))}
              onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
            />
          }
        />
      </main>

      <ConfirmDialog
        open={!!confirmDel}
        title="Xóa liên hệ"
        message={confirmDel ? `Bạn chắc chắn xóa "${confirmDel.name}"?` : ""}
        onConfirm={handleDelete}
        onCancel={() => setConfirmDel(null)}
      />
    </div>
  );
}
