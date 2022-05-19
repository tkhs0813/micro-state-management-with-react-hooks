// useCountという明確な名前を付けれる
// Componentコンポーネントからカウントロジックを独立できる。コンポーネントを壊さずにロジックの機能を追加できる。
const useCount = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);
  return [count, inc];
};

const Component = () => {
  const [count, inc] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => inc()}></button>
    </div>
  );
};
