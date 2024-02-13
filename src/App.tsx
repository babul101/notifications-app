
import NotificationList from './components/NotificationList';
import Notification from './interfaces/notification';

const notifications: Notification[] = [
  {id:1,title:'Notification 1'}
]

function App() {
  return (
    <div className="App">
      <NotificationList items={notifications}></NotificationList>
    </div>
  );
}

export default App;
