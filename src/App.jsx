import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MyAlert from "./components/Alert";
import MyBox from "./components/Box";
import MyCenter from "./components/Center";
import MyContainer from "./components/Container";
import MyFlex from "./components/Flex";
import MyGrid from "./components/Grid";
import MySimpleGrid from "./components/SimpleGrid";
import MyStack from "./components/Stack";
import MyWrap from "./components/Wrap";
import MyButton from "./components/Button";
import MyCheckbox from "./components/Checkbox";
import MyEditable from "./components/Editable";
import MyFormControl from "./components/FormControl";
import MyInput from "./components/Input";
import MyNumberInput from "./components/NumberInput";
import MyPinInput from "./components/PinInput";
import MyRadio from "./components/Radio";
import MyRangeSlider from "./components/RangeSlider";
import MySelect from "./components/Select";
import MySwitch from "./components/Switch";
import MyTextarea from "./components/Textarea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Default route, can display any of your components */}
        <Route path="/" element={<MyCenter />} />

        {/* Route to MyAlert */}
        <Route path="/alert" element={<MyAlert />} />

        {/* Route to MyBox */}
        <Route path="/box" element={<MyBox />} />
        <Route path="/container" element={<MyContainer />} />
        <Route path="/flex" element={<MyFlex />} />
        <Route path="/grid" element={<MyGrid />} />
        <Route path="/simple-grid" element={<MySimpleGrid />} />
        <Route path="/stack" element={<MyStack />} />
        <Route path="/wrap" element={<MyWrap />} />
        <Route path="/button" element={<MyButton />} />
        <Route path="/checkbox" element={<MyCheckbox />} />
        <Route path="/editable" element={<MyEditable />} />
        <Route path="/form-control" element={<MyFormControl />} />
        <Route path="/input" element={<MyInput />} />
        <Route path="/number-input" element={<MyNumberInput />} />
        <Route path="/pin-input" element={<MyPinInput />} />
        <Route path="/radio" element={<MyRadio />} />
        <Route path="/range-slider" element={<MyRangeSlider />} />
        <Route path="/select" element={<MySelect />} />
        <Route path="/switch" element={<MySwitch />} />
        <Route path="/textarea" element={<MyTextarea />} />
      </Routes>
    </Router>
  );
}

export default App;
