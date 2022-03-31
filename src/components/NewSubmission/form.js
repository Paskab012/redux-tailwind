/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import SideForm from './sideForm';

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('submissions');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export const Form = () => {
  // main array of objects state || submissions state || submissions array of objects
  const [submissions, setSubmissions] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState('');
  const [alias, setAlias] = useState('');
  const [category, setCategory] = useState('');

  // form submit event
  const handleAddsubmissionsubmit = (e) => {
    e.preventDefault();
    // creating an object
    const submission = {
      title,
      alias,
      category,
    };
    setSubmissions([...submissions, submission]);
    setTitle('');
    setAlias('');
    setCategory('');
  };

  // delete submission from LS
  const deleteSubmission = (category) => {
    const filteredsubmissions = submissions.filter((element) => element.category !== category);
    setSubmissions(filteredsubmissions);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('submissions', JSON.stringify(submissions));
  }, [submissions]);

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

        <div className="view-container">
          {submissions.length > 0 && (
            <>
              <div className="respons">
                <div className="w-1200px">
                  <div>
                    <div className="w-1200px">
                      <h3 className="lastAdded">Recently saved submissions</h3>
                    </div>
                  </div>
                  <div>
                    <SideForm submissions={submissions} deleteSubmission={deleteSubmission} />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-last btn-md"
                onClick={() => setSubmissions([])}
              >
                Remove All
              </button>
            </>
          )}
          {submissions.length < 1 && <div className="addedSubmission">No submissions added yet...</div>}
        </div>

      </div>
    </div>
  );
};

export default Form;
