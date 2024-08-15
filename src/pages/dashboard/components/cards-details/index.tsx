import { formatter } from "../../../../utils/utils";
import { SalesData } from "../../utils";
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
} from "./styles";

const cutString = (text: string) => {
  return text.length > 10 ? `${text.substring(0, 10)}...` : text;
};

const CardsDetails = ({
  text,
  dashboardSalesDataList,
}: {
  text: string;
  dashboardSalesDataList: SalesData[] | null;
}) => {
  return (
    <StyledContainer>
      <Title text={text} />
      <>
        {dashboardSalesDataList &&
          dashboardSalesDataList
            .sort((a, b) => b.total_sales - a.total_sales)
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
                    <ProgressBar percentage={item?.sales_percentage} />
                    <Title
                      isNumberDetail={true}
                      text={formatter.format(item?.total_sales)}
                    />
                    <Title
                      isNumberDetail={true}
                      text={`$${formatter.format(item?.sales_in_money)}`}
                    />
                  </StyledContainerItemValue>
                </StyledContainerItemDos>
              </StyledContainerItem>
            ))}
      </>
    </StyledContainer>
  );
};

export default CardsDetails;
