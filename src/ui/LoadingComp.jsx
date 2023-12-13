import '../index.css';

function LoadingComp() {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm ">
      <div className="loader"></div>;
    </div>
  );
}

export default LoadingComp;
