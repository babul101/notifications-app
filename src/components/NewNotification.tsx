import { useState } from "react";

interface NewNotificationProps {
    onAddNotification:(title:string) => void
}

const NewNotification = ({onAddNotification}:NewNotificationProps) => {

    const [title,setTitle] = useState('')
    const submitForm = (event:React.FormEvent) => {
        event.preventDefault();
        if(!title) return
        onAddNotification(title)
        setTitle('')
    }
  return (
    <form onSubmit={submitForm}>
      <label htmlFor='title'></label>
      <input value={title} onChange={event => setTitle(event.target.value)} id="title" type='text' className='form-control' />
      <button type="submit" className='btn btn-primary my-3 rounded-pill'>Add Notification</button>
    </form>
  );
};

export default NewNotification;
