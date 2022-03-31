/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addItem } from '../../redux/reducers/actions';

export const FormItem = () => {
  // main array of objects state || submissions state || submissions array of objects
  const dispatch = useDispatch();

  // input field states
  const [title, setTitle] = useState('');
  const [alias, setAlias] = useState('');
  const [category, setCategory] = useState('');

  // form submit event
  const handleAddsubmissionsubmit = (e) => {
    e.preventDefault();
    // creating an object
    const submission = {
      id: nextId,
      title,
      alias,
      category,
    };
    dispatch(addItem(submission));
    setTitle('');
    setAlias('');
    setCategory('');
  };

  return (
    <div className="wrapper">
      <h1>submissionList App</h1>
      <p>Add and view your submissions using local storage</p>
      <div className="main">

        <div className="flex bg-red-200 form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddsubmissionsubmit}
          >
            <h3>Create New Submission</h3>
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br />
            <label>Alias</label>
            <input
              type="text"
              maxLength="100"
              className="form-control"
              placeholder="Enter alias"
              required
              onChange={(e) => setAlias(e.target.value)}
              value={alias}
            />
            <br />
            <label>Category</label>
            <input
              type="text"
              maxLength="100"
              className="form-control"
              placeholder="Enter category"
              required
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <br />
            <button type="submit" className="btn btn-success btn-md">
              Save Submission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormItem;
