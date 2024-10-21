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
import MyBadge from "./components/badge";
import MyCard from "./components/Card";
import MyCode from "./components/Code";
import MyDivider from "./components/Divider";
import MyList from "./components/List";
import MyTable from "./components/Table";
import MyToast from "./components/Toast";
import MySkeleton from "./components/Skeleton";
import MyProgress from "./components/Progress";
import MyCircularProgress from "./components/CircularProgress";
import MyText from "./components/Text";
import MyHeading from "./components/Heading";
import MyHighlight from "./components/Highlight";
import MyAlertDialog from "./components/AlertDialog";
import MyDrawer from "./components/Drawer";
import MyMenu from "./components/Menu";
import MyModal from "./components/Modal";
import MyPopover from "./components/Popover";
import MyTooltip from "./components/Tooltip";
import MyAccordian from "./components/Accordian";
import MyTabs from "./components/Tabs";
import MyVisualHidden from "./components/VisualHidden";
import MyLink from "./components/Link";
import MyBreadcrumb from "./components/Breadcrumb";
import MyStepper from "./components/Stepper";
import MyAvatar from "./components/Avatar";
import MyImage from "./components/Image";
import MyShowHide from "./components/ShowHide";
import MyTransitions from "./components/Transitions";
import MyCloseButton from "./components/CloseButton";

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
        <Route path="/badge" element={<MyBadge />} />
        <Route path="/card" element={<MyCard />} />
        <Route path="/code" element={<MyCode />} />
        <Route path="/divider" element={<MyDivider />} />
        <Route path="/list" element={<MyList />} />
        <Route path="/table" element={<MyTable />} />
        <Route path="/toast" element={<MyToast />} />
        <Route path="/skeleton" element={<MySkeleton />} />
        <Route path="/progress" element={<MyProgress />} />
        <Route path="/circular-progress" element={<MyCircularProgress />} />
        <Route path="/text" element={<MyText />} />
        <Route path="/heading" element={<MyHeading />} />
        <Route path="/highlight" element={<MyHighlight />} />
        <Route path="/alert-dialog" element={<MyAlertDialog />} />
        <Route path="/drawer" element={<MyDrawer />} />
        <Route path="/menu" element={<MyMenu />} />
        <Route path="/modal" element={<MyModal />} />
        <Route path="/popover" element={<MyPopover />} />
        <Route path="/tooltip" element={<MyTooltip />} />
        <Route path="/accordian" element={<MyAccordian />} />
        <Route path="/tabs" element={<MyTabs />} />
        <Route path="/visual-hidden" element={<MyVisualHidden />} />
        <Route path="/links" element={<MyLink />} />
        <Route path="/breadcrumbs" element={<MyBreadcrumb />} />
        <Route path="/stepper" element={<MyStepper />} />
        <Route path="/avatar" element={<MyAvatar />} />
        <Route path="/image" element={<MyImage />} />
        <Route path="/show-hide" element={<MyShowHide />} />
        <Route path="/transitions" element={<MyTransitions />} />
        <Route path="/close-button" element={<MyCloseButton />} />
      </Routes>
    </Router>
  );
}

export default App;
