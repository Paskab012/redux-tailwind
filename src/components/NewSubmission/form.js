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
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br />
            <label>alias</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAlias(e.target.value)}
              value={alias}
            />
            <br />
            <label>category#</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <br />
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {submissions.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Alias</th>
                      <th>Category</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <SideForm submissions={submissions} deleteSubmission={deleteSubmission} />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setSubmissions([])}
              >
                Remove All
              </button>
            </>
          )}
          {submissions.length < 1 && <div>No submissions are added yet</div>}
        </div>

      </div>
    </div>
  );
};

export default Form;
