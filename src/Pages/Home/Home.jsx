import * as Components from "../../components/Signup/Components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./home.css";
import { useState } from "react";
import Select from "react-select";
import { addUser } from "../../../redux/api/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

const Home = () => {
  // const logo =
  //   "https://d3r6uj6neri5gc.cloudfront.net/static/user/images/logo.png";

  const [signIn, toggle] = useState(true);
  const [firstname, setfirstName] = useState();
  const [surname, setsurnName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [NinNumber, setNinNumber] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  // const [error, setError] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      firstname: firstname,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      selectedOption: selectedOption.value,
      NinNumber: NinNumber,
    };
    console.log(payload);
    dispatch(addUser(payload));
    Swal({
      title: "Thanks you!",
      text: "Your been added to the Waiting List",
      confirmButtonText: "OK",
      icon: "success",
    });
    navigate("/");
    setfirstName("");
    setsurnName("");
    setEmail("");
    setPhoneNumber("");
    setNinNumber("");
    setSelectedOption("");
  };

  const options = [
    { value: "KaCyber Offices", label: "KaCyber Offices" },
    { value: "NationalICTInnovationHub", label: "National ICT Innovation Hub" },
    { value: "KiiraMotorsVehiclePlant - Jinja", label:"Kiira Motors Vehicle Plant - Jinja" },
    { value: "KiesnyiBusTerminal - Starlink Office", label: "Kiesnyi Bus Terminal - Starlink Office" },
    { value: "NtindaAponyeMall", label: "Ntinda Aponye Mall" },
    { value: "NamayibaBusParkRoblynCoachesOffice", label: "Namayiba Bus Park - Roblyn Coaches Office" },
  ];

  // const validatePhone = (phone) => {
  //   const phoneRegex = /^\d{10}$/;
  //   if (!phoneRegex.test(phone)) {
  //     setError("Please enter avalid phone number");
  //   } else {
  //     setError("");
  //   }
  // };

  // const validateNationalID=()=>{
  //   const pattern = /^([CP])(\d{2})(\d{2})(\d{2})(\d{4})(\d)$/;
  //   if(!pattern.test(NinNumber)){
  //     setIsValid(false)
  //     return ;
  //   }
  //   const [ year, month, day, uniqueID, checkDigit] =NinNumber.match(pattern);

  //   // Calculate check digit
  //   const calculatedCheckDigit = (parseInt(year) +
  //     parseInt(month) +
  //     parseInt(day) +
  //     parseInt(uniqueID)) % 10;

  //   setIsValid(parseInt(checkDigit) === calculatedCheckDigit);
  // }

  return (
    <div className="mt-5 items-center flex justify-center">
      <Components.Container>
        <div className="mobile">
          <img
            src="https://kacyber.africa/wp-content/uploads/2021/11/kacyberlgogo.png"
            width="200px"
            height="200px"
            className="mx-auto mt-2 mb-2"
          />
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Apply for KaCyber Card </Components.Title>

            <Components.Input
              type="text"
              placeholder="Enter your First Name"
              value={firstname}
              onChange={(event) => setfirstName(event.target.value)}
              required
            />
            <Components.Input
              type="text"
              placeholder="Enter your Surname"
              value={surname}
              onChange={(event) => setsurnName(event.target.value)}
              required
            />

            <Components.Input
              type="text"
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
            <Components.Input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Components.Input
              type="text"
              value={NinNumber}
              onChange={(event) => {
                setNinNumber(event.target.value);
                // validateNationalID(event.target.value)
              }}
              placeholder="Enter Your National Id Number"
              autocomplete="off"
              autofocus
              title="National ID Input"
              aria-labelledby="InputLabel"
              aria-invalid
              aria-required="true"
              required
              tabindex="1"
            />
            
            <Select
              className="select"
              placeholder="Pick location"
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isClearable={isClearable}
              isSearchable={isSearchable}
              required
            />

            <div className="mt-2 mb-2">
              <Components.Button type="submit">Apply</Components.Button>
            </div>
          </Components.Form>
        </div>
      </Components.Container>
    </div>
  );
};

export default Home;
