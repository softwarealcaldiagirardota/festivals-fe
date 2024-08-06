import { useHeader } from "../../../../context/header-context";
import { formatter } from "../../../../utils/utils";
import CircleComponent from "../circle-small/circleSmall";
import ProgressBar from "../progress-bar";
import Title from "../title";
import {
  StyledContainer,
  StyledContainerItem,
  StyledContainerItemName,
  StyledContainerItemValue,
  StyledTitle,
} from "./styles";

const cutString = (text: string) => {
  return text.length > 10 ? `${text.substring(0, 10)}...` : text;
};

const CardsDetails = ({ text }: { text: string }) => {
  const { isMobile } = useHeader();
  return (
    <StyledContainer>
      <Title text={text} />
      <>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>

        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
        <StyledContainerItem>
          <StyledContainerItemName>
            <CircleComponent />
            <StyledTitle>
              {isMobile
                ? cutString("Postrezote de chicharrón")
                : "Postrezote de chicharrón"}
            </StyledTitle>
          </StyledContainerItemName>
          <StyledContainerItemValue>
            {isMobile ? null : <ProgressBar percentage={60} />}
            <Title isNumberDetail={true} text={formatter.format(3022)} />
          </StyledContainerItemValue>
        </StyledContainerItem>
      </>
    </StyledContainer>
  );
};

export default CardsDetails;
