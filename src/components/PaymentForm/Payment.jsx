
 import "./main.css";
import { GrSecure } from "react-icons/gr";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function Form() {
    const logo =
    "https://d3r6uj6neri5gc.cloudfront.net/static/user/images/logo.png";
//   const navigate = useNavigate();
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [phone,setphone]=useState()
  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
 
      const amount=15000
      const payload= {
            amount:amount,
            name,
            email,
            phone,
      }
      

      const response =await axios.post("http://localhost:8000/api/cardpayment/mtn-pay",payload)
      console.log(response)
      if(response.status === 200){
        Swal({
          title: "Thanks you!",
          text: response.data.message,
          confirmButtonText: "OK",
          icon: "success",
        });
        navigate("/cardpayment")
      }else {
        alert("token expired")
      }
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
               <label> Email  </label>
             <input name="NomDuClient" 
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
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
