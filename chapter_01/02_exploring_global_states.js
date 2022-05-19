const Component1 = () => {
  const [state, setState] = useGlobalState();
  return <div>{JSON.stringify(state)}</div>;
};
const Component2 = () => {
  const [state, setState] = useGlobalState();
  return <div>{JSON.stringify(state)}</div>;
};
