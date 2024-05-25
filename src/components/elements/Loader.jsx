import { RotatingLines } from "react-loader-spinner";
import { LoaderDiv } from "../styled/Loader.styled";

const Loader = () => {
  return (
    <LoaderDiv>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="#304ffe"
        strokeWidth="2"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderDiv>
  );
};

export default Loader;
