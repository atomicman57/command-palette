import React, { useState, useEffect } from "react";
import { ActionCategory } from "../../core/repository/types";
import { findCommands } from "../../utils/search";
import Input from "../Input";
import Suggestions from "../Suggestions";

type CommandPaletteProps = {
  actions: ActionCategory[];
  headerName: string;
  placeholder: string;
  setPlaceholder: (placeholder: string) => void;
  setCurrentActions: (userActions: ActionCategory[]) => void;
};

const CommandPalette: React.FC<CommandPaletteProps> = ({
  actions,
  headerName,
  setCurrentActions,
  placeholder,
  setPlaceholder,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState(actions);

  useEffect(() => {
    if (actions !== filteredSuggestions) {
      setFilteredSuggestions(actions);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions]);

  const [isUserTyping, setIsUserTyping] = useState(false);
  const onChange = (userInput: string) => {
    // Remove object reference and make immutable
    const commandActions = actions.map((object) => ({ ...object }));
    const filteredSuggestions = findCommands(commandActions, userInput);
    setFilteredSuggestions(filteredSuggestions);
    setIsUserTyping(true);
  };

  return (
    <div className="command-palette-container">
      <div className="header-container">
        <h5>{headerName}</h5>
      </div>
      <Input placeholder={placeholder} onChange={onChange} />
      <Suggestions
        setPlaceholder={setPlaceholder}
        setCurrentActions={setCurrentActions}
        suggestions={filteredSuggestions}
        isUserTyping={isUserTyping}
      />
    </div>
  );
};

export default CommandPalette;
