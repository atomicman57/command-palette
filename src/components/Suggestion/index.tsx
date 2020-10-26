import React, { useRef } from "react";
import Shortcut from "../Shortcut";
import { ActionCategory, Command } from "../../core/repository/types";

type SuggestionProps = Command & {
  setCurrentActions: (userActions: ActionCategory[]) => void;
  setPlaceholder: (placehoder: string) => void;
};

const Suggestion: React.FC<SuggestionProps> = ({
  commandId,
  action,
  Icon,
  name,
  shortcut,
  displayIcon,
  setCurrentActions,
  setPlaceholder,
  subActions,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseOver={() => ref.current?.focus()}
      tabIndex={commandId}
      key={commandId}
      className="suggestion-container"
      onClick={() =>
        action(() => {
          setCurrentActions(subActions);
          setPlaceholder(`${name}...`);
        })
      }
    >
      <div className="name-container">
        {Icon && displayIcon && <Icon />}
        <h4>{name}</h4>
      </div>
      <div className="shortcut-container">
        {shortcut.map((singleShortcut, index) => {
          const delimeter = "then";
          const commandArr = singleShortcut.split(" ").join(` ${delimeter} `);
          const commandArray = commandArr.split(" ");
          if (commandArr.length > 1) {
            return commandArray.map((commandShortcut, index) => {
              return <Shortcut shortcut={commandShortcut} delimeter={delimeter} key={index} />;
            });
          }
          return <span key={index}>{singleShortcut}</span>;
        })}
      </div>
    </div>
  );
};

export default Suggestion;
