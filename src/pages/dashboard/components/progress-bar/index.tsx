import styled from "styled-components";

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 10px;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #6200ea; /* Color púrpura */
  border-radius: 5px;
  transition: width 0.4s ease;
`;

const ProgressPercentage = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #333;
`;

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <ProgressContainer>
      <ProgressBarWrapper>
        <Progress style={{ width: `${percentage}%` }} />
      </ProgressBarWrapper>
      <ProgressPercentage>{`${percentage}%`}</ProgressPercentage>
    </ProgressContainer>
  );
};

export default ProgressBar;
