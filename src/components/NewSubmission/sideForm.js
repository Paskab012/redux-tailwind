/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';

function SideForm({ submissions, deleteSubmission }) {
  return submissions.map((submission) => (

    <div key={submission.category}>
      <div className="flex justify-between bg-green-400 side-div">
        <div className="submission">
          <h2>{submission.title}</h2>
          <div className="flex justify-between bg-red-200 paragraphe">
            <p>{submission.alias}</p>
            <p>{submission.category}</p>
          </div>
        </div>
        <div className="delete-btn" onClick={() => deleteSubmission(submission.category)}>
          <Icon icon={trash} />
        </div>
      </div>
    </div>

  ));
}
export default SideForm;
