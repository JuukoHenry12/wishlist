
 import "./main.css";
import { GrSecure } from "react-icons/gr";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
export default function Form() {
    const logo =
    "https://d3r6uj6neri5gc.cloudfront.net/static/user/images/logo.png";
//   const navigate = useNavigate();
  const [name,setName] = useState()
  const [phone,setphone]=useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.random();
    const id = randomNumber.toString(36).substring(2, length + 2);
    const payload= {
            "amount": "15,000",
            "currency": "EUR",
            "externalId": id,
            "payer": {
                "partyIdType": "MSISDN",
                "partyId": phone
            },
            "payerMessage": "card payment",
            "payeeNote":  "card payment"
     }
    
    console.log(payload)
  };

  return (
    <div className="mt-10 items-center flex justify-center">

      <form  className="form2" onSubmit={handleSubmit }>
        <main>
            <img src={logo} width="200px" height="200px"  className="mx-auto"/>
            <div className="TitleSecure">
        
            <h3 className="text-center">Card Payment</h3>
            <GrSecure className="secureIcon" />
            </div>
            <div className="Amont">
            <p> Amount : </p>
            <label className="price">UGX 15,000</label>
            </div>
            <div className="NomDuClient">
            <label> Name  </label>
            <input name="NomDuClient" 
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            <label>Phone Number  </label>
            <PhoneInput
               country={"ug"}
               value={phone}
               onChange={setphone}
               required
               inputStyle={{
                background: "#eee",
                height:'40px',
                width: '370px',
                borderRadius:'15px',
                marginRight:'5px'
              }}

            />
            </div>
            <label>Select Network</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                <option value="mtn">MTN</option>
                {/* <option>AirTel</option> */}
            </select>
            <button
            // type="submit"
            className="btn  w-full "
            >Pay</button>
        </main>
       
    </form>

    </div>
  );
}
