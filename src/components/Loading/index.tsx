import React from "react";
import { TailSpin } from "react-loader-spinner";
import { LoadingContainer } from "./styles";

const Loading = () => {
  return (
    <LoadingContainer>
      <TailSpin
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoadingContainer>
  );
};

export default Loading;
