import { useState } from "react";

const NewNotification = () => {

    const [title,setTitle] = useState('')
  return (
    <form>
      <label htmlFor='title'></label>
      <input value={title} onChange={event => setTitle(event.target.value)} id="title" type='text' className='form-control' />
      <button type="submit" className='btn btn-primary my-3 rounded-pill'>Add Notification</button>
    </form>
  );
};

export default NewNotification;
