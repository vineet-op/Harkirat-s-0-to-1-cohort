import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  netWorkAtom,
  notificationAtom,
  totalCount,
} from "../atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const NetworkNotificationCount = useRecoilValue(netWorkAtom);
  const JobsCount = useRecoilValue(jobsAtom);
  const MessageCount = useRecoilValue(messagingAtom);

  // const [NotificationCount, setNotificationCount] =
  //   useRecoilState(notificationAtom); // UseRecoilState Gives u theactual value and updater function to update current value

  const NotificationCount = useRecoilValue(notificationAtom);

  const FinalCount = useRecoilValue(totalCount);

  return (
    <>
      <button>Home</button>
      <button>
        Network(
        {NetworkNotificationCount >= 100 ? "99+" : NetworkNotificationCount})
      </button>
      <button>Jobs{JobsCount}</button>
      <button>Messaging {MessageCount}</button>

      <button>Notification {NotificationCount}</button>

      <button>ME{FinalCount}</button>

      {/* <button onClick={() => setNotificationCount(NotificationCount + 1)}>
        ME
      </button> */}
    </>
  );
}

export default App;
