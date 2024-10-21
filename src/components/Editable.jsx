import React from "react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

const MyEditable = () => {
  return (
    <div className="border-2 border-red-400">
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </div>
  );
};

export default MyEditable;
