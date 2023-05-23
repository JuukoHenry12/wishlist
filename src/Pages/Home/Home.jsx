import * as Components from "../../components/Signup/Components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./home.css";
import { useState } from "react";
import Select from "react-select";
import { addUser } from "../../../redux/api/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert";

const Home = () => {
  const logo =
    "https://d3r6uj6neri5gc.cloudfront.net/static/user/images/logo.png";

  const [signIn, toggle] = useState(true);
  const [firstname, setfirstName] = useState();
  const [surname, setsurnName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [NinNumber, setNinNumber] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);


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
    dispatch(addUser(payload));
    Swal({
      title: "Thanks you!",
      text: "your been added to the Waiting List",
      confirmButtonText: "OK",
      icon: "success",
    });

    setfirstName("");
    setsurnName("");
    setEmail("");
    setPhoneNumber("");
    setNinNumber("");
    setSelectedOption("");
  };

  const options = [
    { value: "Kisenyi bus terminal", label: "Kisenyi bus terminal" },
    { value: "Kacyber Offices", label: "Kacyber Offices" },
  ];

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter avalid phone number");
    } else {
      setError("");
    }
  };


  const validateNationalID=()=>{
    const pattern = /^([CP])(\d{2})(\d{2})(\d{2})(\d{4})(\d)$/;
    if(!pattern.test(NinNumber)){
      setIsValid(false)
      return ;
    }
    const [ year, month, day, uniqueID, checkDigit] =NinNumber.match(pattern);

    // Calculate check digit
    const calculatedCheckDigit = (parseInt(year) +
      parseInt(month) +
      parseInt(day) +
      parseInt(uniqueID)) % 10;

    setIsValid(parseInt(checkDigit) === calculatedCheckDigit);
  }

  return (
    <div className="mt-20 items-center flex justify-center">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit}>
            <Components.Title>Join Swap and Pay </Components.Title>

            <Components.Input
              type="text"
              placeholder="Please Enter your First Name"
              value={firstname}
              onChange={(event) => setfirstName(event.target.value)}
              required
            />
            <Components.Input
              type="text"
              placeholder="Please Enter your Surname"
              value={surname}
              onChange={(event) => setsurnName(event.target.value)}
              required
            />
            <PhoneInput
              country={"ug"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              onBlur={validatePhone}
              required
            />
            {error && <div className="error">{error}</div>}
            <Components.Input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Select
              className="select"
              placeholder="Select Place of Pick Up"
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              required
            />

            <Components.Input
              type="text"
              value={NinNumber}
              onChange={(event) => {
                setNinNumber(event.target.value)
                validateNationalID(event.target.value)
              }}
              placeholder="Please Enter Your National Id Number"
              autocomplete="off"
              autofocus
              title="National ID Input"
              aria-labelledby="InputLabel"
              aria-invalid
              aria-required="true"
              required
              tabindex="1"

            />
             
            <Components.Button type="submit" >Join WaitList</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.Background></Components.Background>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <img src={logo} width="200px" height="200px" />
              <Components.Title>Swap & Pay </Components.Title>
              <Components.Paragraph>
                Fill in Your Information to get Your Contact Card
              </Components.Paragraph>

              <Components.GhostButton onClick={() => toggle(true)} >Back</Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <img src={logo} width="200px" height="200px" />
              <Components.Title>Hello, Friends!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start Contact less Jounery
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Join WaitList
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default Home;
