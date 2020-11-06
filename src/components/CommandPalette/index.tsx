import React, { useState, useCallback, useMemo } from "react";
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

  const [userInput, setUserInput] = useState("");
  const [isUserTyping, setIsUserTyping] = useState(false);
  
  const onChange = useCallback((userInput: string) => {
    setIsUserTyping(true);
    setUserInput(userInput)
  }, []);

  const suggestions = useMemo(() => findCommands(actions, userInput), [actions, userInput]);

  return (
    <div className="command-palette-container">
      <div className="header-container">
        <h5>{headerName}</h5>
      </div>
      <Input placeholder={placeholder} onChange={onChange} />
      <Suggestions
        setPlaceholder={setPlaceholder}
        setCurrentActions={setCurrentActions}
        suggestions={suggestions}
        isUserTyping={isUserTyping}
      />
    </div>
  );
};

export default CommandPalette;
