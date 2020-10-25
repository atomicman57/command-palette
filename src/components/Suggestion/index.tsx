import React, { useRef } from "react";
import Shortcut from "../Shortcut";
import { Command } from "../../core/repository/types";

const Suggestion: React.FC<Command> = ({ commandId, action, Icon, name, shortcut, displayIcon }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} onMouseOver={() => ref.current?.focus()} tabIndex={commandId} key={commandId} className="suggestion-container" onClick={action}>
      <div className="name-container">
        {Icon && displayIcon && <Icon />}
        <h4>{name}</h4>
      </div>
      <div className="shortcut-container">
        {shortcut.map((st, index) => {
          const delimeter = "then";
          const commandArr = st.split(" ").join(` ${delimeter} `);
          const commandArray = commandArr.split(" ");
          if (commandArr.length > 1) {
            return commandArray.map((shortc, index) => {
              return <Shortcut shortc={shortc} delimeter={delimeter} key={index} />;
            });
          }
          return <span key={index}>{st}</span>;
        })}
      </div>
    </div>
  );
};

export default Suggestion;
