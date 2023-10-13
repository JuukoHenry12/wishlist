import { Table, Card } from "flowbite-react";
import  { useState } from "react";
import { useTotal } from '../../../TotalContext/TotalContext';
import { useNavigate } from "react-router-dom";

const CardPayment = () => {
  const [Rectnumber, setRectNumber] = useState(0);
  const [Cirnumber, setCirNumber] = useState(0);
  const [Trinumber, setTriNumber] = useState(0);
  const { total, setTotal } = useTotal();
  const navigate = useNavigate()

  // Calculate the total based on the input values
  const uptotal = Rectnumber * 15000 + Cirnumber * 15000 + Trinumber * 15000;
  setTotal(uptotal)

  const handleInputChange = (event, setter) => {
    // Parse the input value as a number
    const value = parseFloat(event.target.value);
    // Check if the value is not NaN and greater than or equal to 0
    if (!isNaN(value) && value >= 0) {
      // Update the state with the valid value
      setter(value);
    }
  };

  return (
    <div className="mt-10 container2 custom-background">
      <h1 className="text-center  mb-2">Buy Bus Card</h1>
      <Card>
        <Table>
          <Table.Head>
            <Table.HeadCell>Card Images</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Number of Cards</Table.HeadCell>
            <Table.HeadCell>Total Cost</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-500">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-500 dark:text-gray-400">
                Rectangle Card
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>
                <input
                  type="number"
                  style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                  value={Rectnumber}
                  onChange={(event) => handleInputChange(event, setRectNumber)}
                />
              </Table.Cell>
              <Table.Cell>{Rectnumber * 15000}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-500 dark:text-gray-400">
                <p>Circle Card</p>
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>
                <input
                  type="number"
                  style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                  value={Cirnumber}
                  onChange={(event) => handleInputChange(event, setCirNumber)}
                />
              </Table.Cell>
              <Table.Cell>{Cirnumber * 15000}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-500 dark:text-gray-400">
                Triangle Card
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>
                <input
                  type="number"
                  style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                  value={Trinumber}
                  onChange={(event) => handleInputChange(event, setTriNumber)}
                />
              </Table.Cell>
              <Table.Cell>{Trinumber * 15000}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className="mt-4 ">
          <p className="text-center f-30">Total Cost:UGX: {total}</p>
          <div className="mt-4 text-end">
            <button className="btn2"
            onClick={()=>navigate("/cardpayment")}
            >Procced to Pay </button>
          </div>
        </div>
        {/* <Payment total={total} /> */}
      </Card>
    </div>
  );
};

export default CardPayment;
