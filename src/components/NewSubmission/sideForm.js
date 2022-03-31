// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// import React from 'react';
// import { Icon } from 'react-icons-kit';
// import { trash } from 'react-icons-kit/feather/trash';

// function SideForm({ submissions, deleteSubmission }) {
//   return submissions.map((submission) => (

//     <div key={submission.category} className="center">
//       <div className="flex justify-between side-div">
//         <div className="submission">
//           <h2 className="font-bold">{submission.title}</h2>
//           <div className="flex justify-between paragraphe">
//             <h4 className="font-normal">{submission.alias}</h4>
//             <h4>{submission.category}</h4>
//           </div>
//         </div>
//         <div className="delete-btn" onClick={() => deleteSubmission(submission.category)}>
//           <Icon icon={trash} />
//         </div>
//       </div>
//     </div>

//   ));
// }
// export default SideForm;

// {/* <>
//         <div className="respons">
//           <div className="w-1200px">
//             <div>
//               <div className="w-1200px">
//                 <h3 className="lastAdded">Recently saved submissions</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           className="btn btn-last btn-md"
//           onClick={() => setSubmissions([])}
//         >
//           Remove All
//         </button>
//       </>
//       )}
//       {submissions.length < 1 && <div
// className="addedSubmission">No submissions added yet...</div>}
//     </div>

//   ); */}
