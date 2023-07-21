import { DropDownProvider } from "../../context/dropDownContext";
import Display from "../display/display.components";
import Chart from "../chart/chart.components";
import Purchase from "../purchase/purchase.components";
const Body = () => {
  return (
    <>
      <DropDownProvider>
        <Display
          coinName="Bitcoin"
          coinImage=""
          coinAmount="3.529020"
          coin="BTC"
          coinInUsd="19.153"
          valueRate="-2.23%"
        />

        {/* <Duration /> */}
        <Chart />
        <Purchase />
      </DropDownProvider>
    </>
  );
};
export default Body;
