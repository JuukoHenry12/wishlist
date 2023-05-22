import * as Components from "../../components/Signup/Components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./home.css";
import { useState } from "react";
import Select from "react-select";
import { addUser } from "../../../redux/api/userSlice";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const logo =
    "https://d3r6uj6neri5gc.cloudfront.net/static/user/images/logo.png";
  // const [phone, setphone] = useState();
  const [signIn, toggle] = useState(true);
  const [firstname, setfirstName] = useState();
  const [surname, setsurnName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [NinNumber, setNinNumber] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();
  const response = useSelector((state) => state.user.isSuccess);
 
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
    console.log(response.success);

    if (response.success == true) {
      return  alert("you been added to the list");

    }else {
        alert("failed");
    }
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
              required
            />

            <Components.Input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Select
              className="select"
              // defaultValue={}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              required
            />

            <Components.Input
              type="text"
              placeholder="Nin Number"
              value={NinNumber}
              onChange={(event) => setNinNumber(event.target.value)}
              required
            />
            <Components.Button type="submit">Join WaitList</Components.Button>
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
