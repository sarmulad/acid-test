import React from "react";
import TokenHeader from "./TokenHeader";
import PieChart from "./TokenPieChart";
import Flex from "../../UI-elements/Flex";
import graphData from "../../assets/json/graphData.json";
import stats from "../../assets/json/stats.json";
import Heading from "../../UI-elements/SectionHeading";

const Token = () => {
  return (
    <Flex isCentered className="flex-col mt-24 lg:mt-48 w-full">
      <Heading>TOKENOMICS</Heading>
      <div className="flex w-full flex-col lg:flex-row justify-center lg:justify-between items-center lg:mt-16">
        <div className="flex-col w-full justify-center items-center lg:items-start lg:justify-start flex">
          <TokenHeader
            subtitle1="Acidbase's native token is ACB."
            subtitle2="The total token supply is 1,000,000,000 ACB."
          />
          <div className="w-64 lg:w-[400px] ">
            <PieChart
              key={stats[0].id}
              xLabels={stats[0].label}
              values={stats[0].value}
              color={stats[0].color}
            />
          </div>
          <div className=" block lg:hidden justify-center mt-4">
            <PieChartLabels />
          </div>
        </div>
        <div className="lg:h-[100%] plus-jakarta-sans-light lg:w-[60%] rounded-3xl border border-white my-5  bg-[#1B223A] p-6">
          <table
            className="border-white border text-[10px] lg:text-[13px] w-full pl-4 lg:min-h-[530px] text-white"
            border={1}
          >
            <thead>
              <tr>
                <td className="p-2">TOKEN DISTRIBUTION</td>
                <td className="p-2">AMOUNT</td>
                <td className="p-2">Percentage</td>
              </tr>
            </thead>
            <tbody className="border-white border">
              {graphData?.map((d, i) => (
                <tr key={i} className="border-white border">
                  <td className="p-2">
                    <div className="flex items-start ">
                      <div
                        className="w-5 h-5 rounded-lg mr-2"
                        style={{ backgroundColor: d.color }}
                      ></div>
                      {d.token}
                    </div>
                  </td>
                  <td className="p-2">{d.amount}</td>
                  <td className="p-2">{d.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" hidden lg:block justify-center mt-4">
        <PieChartLabels />
      </div>
    </Flex>
  );
};

const PieChartLabels = () => {
  return (
    <div className="flex lg:w-[90%] justify-center">
      <div className=" flex flex-wrap justify-center items-center">
        {graphData.map((d, i) => (
          <div
            key={i}
            className=" mr-2 lg:mr-4 flex  items-center justify-center text-white my-3"
          >
            <div
              className="w-5 h-2 lg:w-10 lg:h-3 mr-1"
              style={{
                backgroundColor: d.color,
              }}
            ></div>
            <span className="text-[10px] lg:text-base plus-jakarta-sans-light">
              {d.token}
              {d.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Token;
