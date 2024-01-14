import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { IsEven, countAtom } from "./store/atoms/Count";

function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  const IsEven2 = useRecoilValue(IsEven);
  return (
    <div>
      <div>{count}</div>
      {IsEven2 && <div>Even</div>}
    </div>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
