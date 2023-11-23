/* eslint-disable react/prop-types */
import Container from "../Shared/Container";
const Cover = ({ heading }) => {
  return (
    <div className="h-[250px] bg-[#07332F]">
      <Container>
        <h2 className="font-medium text-white text-left text-3xl pt-24">
          {heading}
        </h2>
      </Container>
    </div>
  );
};

export default Cover;
