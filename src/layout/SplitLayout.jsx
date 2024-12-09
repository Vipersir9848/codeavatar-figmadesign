import Row from "./Row";

export const SplitLayout = ({ children }) => {
  const [left, right] = children;

  return (
    <Row className="h-screen">
      <div className="sm:flex-2 lg:flex-1">{left}</div>
      <div className="flex-1 ">{right}</div>
    </Row>
  );
};
