import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/reducers';
import { decrement, increment } from '../store/reducers/countReducer';

export default function Counter() {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={() => dispatch(increment())} style={{ marginRight: 8 }}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
}
