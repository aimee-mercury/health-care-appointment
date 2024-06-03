import React, {useState} from 'react'
import './Book.css'
import Headersidebar from './Headersidebar';
import { Table } from "../React  Table/Table";
import { Modal } from "../React  Table/Modal";

function Books({ addBook }) {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [date, setDate] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  
  const newBook = {
    title,
    author,
    date,
  };

  addBook(newBook);

  setTitle('');
  setAuthor('');
  setDate('');
};

const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "I remember you",
      description: "This book is available in our library",
      status: "available",
    },
    {
      page: "Rich dad poor dad",
      description: "This book is not available, rented by someone",
      status: "pending",
    },
    {
      page: "80% mindset 20% skills",
      description: "It is lost by someone",
      status: "lost",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSend = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <>
    <Headersidebar/>
    <div className='book-dash-container'>
    <div className='book-dash-form'>
      <form onSubmit={handleSubmit} className='dash-book-form'>
      <h1 className='add-book-dash'>Add A Book</h1>
      <label className='book-dashboard-label'><br />
        Book Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className='book-inputs'/>
      </label>

      <label className='book-dashboard-label'>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required className='book-inputs'/>
      </label><br />

      <label className='book-dashboard-label'>
        Select a date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className='book-inputs'/>
      </label>
      <div className='book-dash-button-div'>
      <button type="submit" className='book-dash-button'>Add Book</button></div>
    </form>
    <div className="dash-book-handle">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <div className='dsh-add-btn-div'><button onClick={() => setModalOpen(true)} className="dsh-add-btn">
        Add
      </button></div>

      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSend}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
    </div>
    </div>
    </>
  )
}

export default Books
