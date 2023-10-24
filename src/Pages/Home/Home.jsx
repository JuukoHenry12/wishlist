import * as Components from "../../components/Signup/Components";
import "react-phone-input-2/lib/style.css";
import "./home.css";
import { useState,useRef } from "react";
import { addUser } from "../../../redux/api/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { TextInput } from "flowbite-react";
import ReCAPTCHA from "react-google-recaptcha";

const Home = () => {
  // const logo =
  //   "https://d3r6uj6neri5gc.cloudfront.net/static/user/images/logo.png";

  // const [signIn, toggle] = useState(true);
  const [firstname, setfirstName] = useState();
  const [surname, setsurnName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [NinNumber, setNinNumber] = useState();
  const [selectedValue, setSelectedValue] = useState("");

  const [recaptchaValue, setRecaptchaValue] = useState(""); // To store the ReCAPTCHA response
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  const recaptchaRef = useRef();
 
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

    const dispatch = useDispatch();

    const validateUgandanPhoneNumber = (phone) => {
      const phoneRegex = /^07[0-9]{8}$/; // Ugandan phone format regex
      return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const isUgandanPhoneValid = validateUgandanPhoneNumber(phoneNumber);

    if (!isUgandanPhoneValid) {
      setPhoneError("Please enter a valid Ugandan phone number (e.g., 0712345678).");
      return;
    }

    // Reset phone error if it was previously set
    setPhoneError("");

    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Reset email error if it was previously set
    setEmailError("");

      // Check if ReCAPTCHA is solved
      if (!recaptchaValue) {
      // If ReCAPTCHA is not solved, show ReCAPTCHA
      setShowRecaptcha(true);
      return;
    }

    const payload = {
      firstname: firstname,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      selectedOption: selectedValue,
      NinNumber: NinNumber,
    };
    // console.log(payload);
    dispatch(addUser(payload));
    Swal({
      title: "Thanks you!",
      text: "Your been added to the Waiting List",
      confirmButtonText: "OK",
      icon: "success",
    });
    // Show ReCAPTCHA on submission failure
    setShowRecaptcha(true);
    // Reset ReCAPTCHA value
    setRecaptchaValue("");
      navigate("/");
      setfirstName("");
      setsurnName("");
      setEmail("");
      setPhoneNumber("");
      setNinNumber("");
      setSelectedValue("");
    };

  const options = [
    { value: "KaCyber Offices", label: "KaCyber Offices" },
    { value: "NationalICTInnovationHub", label: "National ICT Innovation Hub" },
    {
      value: "KiiraMotorsVehiclePlant - Jinja",
      label: "Kiira Motors Vehicle Plant - Jinja",
    },
    {
      value: "KiesnyiBusTerminal - Starlink Office",
      label: "Kiesnyi Bus Terminal - Starlink Office",
    },
    { value: "NtindaAponyeMall", label: "Ntinda Aponye Mall" },
    {
      value: "NamayibaBusParkRoblynCoachesOffice",
      label: "Namayiba Bus Park - Roblyn Coaches Office",
    },
  ];

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
  };

    const handleRecaptchaChange = (value) => {
      // This function will be called when the user solves the reCAPTCHA.
      // You can store the ReCAPTCHA response in state.
      setRecaptchaValue(value);
    };


  return (
    <div>
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
            <Components.Title>Apply for KaCyberGo Card </Components.Title>

            <TextInput
              type="text"
              placeholder="Enter your First Name"
              value={firstname}
              onChange={(event) => setfirstName(event.target.value)}
              className="w-full mb-2 mt-2"
              required
            />
            <TextInput
              type="text"
              placeholder="Enter your Surname"
              value={surname}
              className="w-full mb-2"
              onChange={(event) => setsurnName(event.target.value)}
              required
            />

            <TextInput
              type="phone"
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              className="w-full mb-2"
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
               {phoneError && <p className="text-red-500">{phoneError}</p>}
            <TextInput
              type="email"
              placeholder="Enter your Email"
              value={email} 
              className="w-full mb-2"
              onChange={(event) => setEmail(event.target.value)}
            />
             {emailError && <p className="text-red-500">{emailError}</p>}
            <TextInput
              type="text"
              value={NinNumber}
              className="w-full mb-2"
              onChange={(event) => {
                setNinNumber(event.target.value);
                // validateNationalID(event.target.value)
              }}
              placeholder="Enter Your National ID Number"
              autocomplete="off"
              autofocus
              title="National ID Input"
              aria-labelledby="InputLabel"
              aria-invalid
              aria-required="true"
              required
              tabindex="1"
            />

            <div style={{ width: "100%" }}>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                onChange={handleSelectChange}
              >
                <option value="" disabled selected hidden>
                  Pick Location
                </option>
                {options.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>      
                {showRecaptcha && (
                  <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                          <ReCAPTCHA
                            sitekey="6Lda_sYoAAAAAPW4yhB_N_UL3rgU_Wi_vZ8wM3QQ"
                            onChange={handleRecaptchaChange}
                            ref={recaptchaRef}
                          />
                        </div>
                      )}
             </div>
            <div className="mt-2 mb-2">
              <Components.Button type="submit">Apply</Components.Button>
            </div>
          </Components.Form>
        </div>
      </Components.Container>
   
    </div>
       <p className="text-center" >©2023 KaCyber Technologies. All Rights Reserved. </p>
    </div>
  );
};

export default Home;
