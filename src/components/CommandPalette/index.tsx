import React, { useState } from "react";
import { ActionCategory } from "../../core/repository/types";
import { findCommands } from "../../utils/search";
import Input from "../Input";
import Suggestions from "../Suggestions";

type CommandPaletteProps = {
  actions: ActionCategory[]
  headerName: string
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ actions, headerName }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState(actions);

  const onChange = (userInput: string) => {
    // Remove object reference and make immutable 
    const commandActions = actions.map((object) => ({ ...object }));
    const filteredSuggestions = findCommands(commandActions, userInput);
    setFilteredSuggestions(filteredSuggestions)
  };

  return (
    <div className="command-palette-container">
      <div className="header-container">
        <h5>{headerName}</h5>
      </div>
      <Input placeholder="Type a command or search ..." onChange={onChange} />
      <Suggestions suggestions={filteredSuggestions} />
    </div>
  );
}

export default CommandPalette;
