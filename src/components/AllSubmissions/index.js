import React from 'react';
import { useSelector } from 'react-redux';
import isEmpty from '../NewSubmission/utilities';

function AllSubmission() {
  const itemStore = useSelector((state) => state.reducer);
  return (
    <div className="side-div">
      {!isEmpty(itemStore) && itemStore.map((item) => (
        <>
          <h2 key={item.id}>{item.title}</h2>
          <h4 key={item.id}>{item.alias}</h4>
          <h4 key={item.id}>{item.category}</h4>
        </>
      ))}
    </div>
  );
}

export default AllSubmission;
