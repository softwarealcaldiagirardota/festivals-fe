import { formatter } from "../../../../utils/utils";
import CircleComponent from "../circle-small/circleSmall";
import ProgressBar from "../progress-bar";
import Title from "../title";
import {
  StyledContainer,
  StyledContainerItem,
  StyledContainerItemDos,
  StyledContainerItemName,
  StyledContainerItemValue,
  StyledTitle,
} from "../cards-details/styles";

const cutString = (text: string) => {
  return text.length > 10 ? `${text.substring(0, 10)}...` : text;
};

const CardsVotes = ({
  text,
  dashboardSalesDataList,
}: {
  text: string;
  dashboardSalesDataList: any[] | null;
}) => {
  return (
    <StyledContainer>
      <Title text={text} />
      <>
        <StyledContainerItem>
          <StyledContainerItemDos>
            <StyledContainerItemName>
              <div>Participante</div>
            </StyledContainerItemName>
            <StyledContainerItemValue>
              <div>Porcentaje / total votos</div>
              <div>Total votos</div>
              <div>Calificación</div>
            </StyledContainerItemValue>
          </StyledContainerItemDos>
        </StyledContainerItem>
        {dashboardSalesDataList &&
          dashboardSalesDataList
            .sort((a, b) => b.overall_average_rating - a.overall_average_rating)
            .map((item, index) => (
              <StyledContainerItem key={index + 1}>
                <StyledContainerItemDos>
                  <StyledContainerItemName>
                    <CircleComponent number={item?.company_id - 1} />
                    <StyledTitle>
                      {cutString(item?.company_description)}
                    </StyledTitle>
                  </StyledContainerItemName>
                  <StyledContainerItemValue>
                    <ProgressBar percentage={item?.vote_percentage} />
                    <Title
                      isNumberDetail={true}
                      text={formatter.format(item?.total_votes)}
                    />
                    <Title
                      isNumberDetail={true}
                      text={item?.overall_average_rating?.toFixed(3)}
                    />
                  </StyledContainerItemValue>
                </StyledContainerItemDos>
              </StyledContainerItem>
            ))}
      </>
    </StyledContainer>
  );
};

export default CardsVotes;
