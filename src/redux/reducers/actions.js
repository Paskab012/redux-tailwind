/* eslint-disable no-sequences */
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = [];

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};

export default reducer;
