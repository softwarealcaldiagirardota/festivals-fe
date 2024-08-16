import {
  currentPrice,
  totalSales2023,
  totalSales2023Money,
} from "../../utils/utils";

export type SalesData = {
  company_id: number;
  company_description: string;
  total_sales: number;
  daily_sales_value: number;
  sale_date: string;
  sales_percentage: number;
  sales_in_money: number;
};

// 1. Función que da la sumatoria de las ventas totales usando total_sales
export const getTotalSales = (data: SalesData[]) => {
  return data.reduce((sum, item) => sum + item.total_sales, 0);
};

// 2. Función que da la sumatoria de las ventas del día
export const getDailySales = (data: SalesData[]) => {
  const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha de hoy en formato YYYY-MM-DD
  return data.reduce((sum, item) => {
    const saleDate = item.sale_date.split("T")[0];
    return saleDate === today ? sum + item.daily_sales_value : sum;
  }, 0);
};

// 3. Función que calcula el total de ventas en pesos
export const getTotalSalesInMoney = (data: SalesData[]) => {
  const totalSales = getTotalSales(data);
  return totalSales * currentPrice;
};

// 4. Función que calcula el total de ventas del día en pesos
export const getDailySalesInMoney = (data: SalesData[]) => {
  const dailySales = getDailySales(data);
  return dailySales * currentPrice;
};

// 5. Función que calcula el porcentaje del total de ventas respecto a totalSales2023
export const getSalesPercentage = (data: SalesData[]) => {
  const totalSales = getTotalSales(data);
  const percentage = (totalSales / totalSales2023) * 100;
  return parseFloat(percentage?.toFixed(2));
};

// 6. Función que calcula el porcentaje del total de ventas en pesos respecto a totalSales2023Money
export const getSalesMoneyPercentage = (data: SalesData[]) => {
  const totalSalesInMoney = getTotalSalesInMoney(data);
  const percentage = (totalSalesInMoney / totalSales2023Money) * 100;
  return parseFloat(percentage?.toFixed(2));
};

export const processSalesData = (salesData: any): SalesData[] => {
  // Agrupar por company_id
  const groupedData = salesData.reduce((acc: any, item: any) => {
    const { company_id, total_sales, daily_sales_value } = item;

    if (!acc[company_id]) {
      acc[company_id] = { ...item, total_sales: 0, daily_sales_value: 0 };
    }

    acc[company_id].total_sales += total_sales;
    acc[company_id].daily_sales_value += daily_sales_value;

    return acc;
  }, {});

  // Convertir el objeto agrupado en un array
  const resultArray = Object.values(groupedData);

  // Calcular las ventas totales y en pesos
  const totalSales: any = resultArray.reduce(
    (acc, item: any) => acc + item.total_sales,
    0
  );
  const totalSalesInMoney = totalSales * currentPrice;

  // Agregar campos adicionales a cada objeto en el array
  return resultArray.map((item: any) => {
    const salesInMoney = item.total_sales * currentPrice;
    const salesPercentage = (item.total_sales / totalSales) * 100;
    const salesMoneyPercentage = (salesInMoney / totalSalesInMoney) * 100;

    return {
      ...item,
      sales_in_money: salesInMoney,
      sales_percentage: parseFloat(salesPercentage?.toFixed(2)),
      sales_money_percentage: parseFloat(salesMoneyPercentage?.toFixed(2)),
    };
  });
};

export const processSalesDataDay = (data: SalesData[]): SalesData[] => {
  const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato "YYYY-MM-DD"
  const groupedData: any = {};

  data.forEach((item: any) => {
    const saleDate = item.sale_date.split("T")[0];

    if (!groupedData[item.company_id]) {
      groupedData[item.company_id] = {
        company_id: item.company_id,
        company_description: item.company_description.trim(),
        total_sales: 0,
        sales_in_money: 0,
        sales_percentage: 0,
        sales_money_percentage: 0,
      };
    }

    if (saleDate === today) {
      groupedData[item.company_id].total_sales += item.total_sales;
    }
  });

  const totalSalesToday: any = Object.values(groupedData).reduce(
    (sum, company: any) => sum + company.total_sales,
    0
  );
  const totalSalesMoneyToday = totalSalesToday * currentPrice;

  Object.values(groupedData).forEach((company: any) => {
    company.sales_in_money = company.total_sales * currentPrice;
    company.sales_percentage = (
      (company.total_sales / totalSalesToday) *
      100
    )?.toFixed(2);
    company.sales_money_percentage = (
      (company.sales_in_money / totalSalesMoneyToday) *
      100
    )?.toFixed(2);
  });

  return Object.values(groupedData);
};

export const sumTotalVotes = (companies: any) => {
  return companies.reduce(
    (total: any, company: any) => total + company.total_votes,
    0
  );
};

export function mergeArraysByCompanyId(votesArray: any, ratingsArray: any) {
  const mergedArray: any = [];

  // Crear un mapa para facilitar la combinación
  const votesMap = new Map();
  const ratingsMap = new Map();

  // Poblar el mapa con los elementos de votesArray
  votesArray.forEach((vote: any) => {
    votesMap.set(vote.company_id, vote);
  });

  // Poblar el mapa con los elementos de ratingsArray
  ratingsArray.forEach((rating: any) => {
    ratingsMap.set(rating.company_id, rating);
  });

  // Calcular la sumatoria de total_votes
  const totalVotesSum = votesArray.reduce(
    (sum: any, vote: any) => sum + vote.total_votes,
    0
  );

  // Combinar ambos mapas en un solo array
  votesMap.forEach((vote, companyId) => {
    const rating = ratingsMap.get(companyId);
    const votePercentage: any =
      totalVotesSum > 0
        ? ((vote.total_votes / totalVotesSum) * 100)?.toFixed(2)
        : 0;
    const mergedObject = {
      company_id: companyId,
      company_description: vote.company_description,
      total_votes: vote.total_votes,
      overall_average_rating: rating ? rating.overall_average_rating : null,
      vote_percentage: parseFloat(votePercentage),
    };
    mergedArray.push(mergedObject);
  });

  // Agregar cualquier elemento de ratingsArray que no esté en votesArray
  ratingsMap.forEach((rating, companyId) => {
    if (!votesMap.has(companyId)) {
      const mergedObject = {
        company_id: companyId,
        company_description: rating.company_description,
        total_votes: 0,
        overall_average_rating: rating.overall_average_rating,
        vote_percentage: 0,
      };
      mergedArray.push(mergedObject);
    }
  });

  return mergedArray;
}
