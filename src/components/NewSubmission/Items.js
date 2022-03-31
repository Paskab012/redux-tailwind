import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
// eslint-disable-next-line import/no-named-as-default
import FormItem from './form';
import { removeItem } from '../../redux/reducers/actions';
import isEmpty from './utilities';

const Items = () => {
  const itemStore = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  const deleteSubmission = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="wrapper">
      <FormItem />
      <div className="">
        <div className="itemsClm">
          {!isEmpty(itemStore) && itemStore.map((submission) => (
            <div key={submission.category} className="center">
              <div className="flex justify-between side-div">
                <div className="submission">
                  <h2 className="font-bold">{submission.title}</h2>
                  <div className="flex justify-between paragraphe">
                    <h4 className="font-normal">{submission.alias}</h4>
                    <h4>{submission.category}</h4>
                  </div>
                </div>
                <button className="delete-btn" onClick={() => deleteSubmission()} type="button">
                  <Icon icon={trash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
