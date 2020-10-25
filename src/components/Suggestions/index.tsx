import React, { Fragment, useEffect } from "react";
import Category from "../Category";
import Commands from "../Commands";
import { ActionCategory } from "../../core/repository/types";

type SuggestionsProps = {
  suggestions: ActionCategory[];
  isUserTyping: boolean
  setCurrentActions: (userActions: ActionCategory[]) => void
  setPlaceholder: (placehoder: string) => void
};

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, isUserTyping, setCurrentActions, setPlaceholder }) => {
  useEffect(() => {
    const element = document.querySelector(".suggestion-container") as HTMLDivElement;
    !isUserTyping && element && element.focus();
  });

  return (
    <div className="suggestions">
      {suggestions.map((action, index) => {
        const { displayCategoryName, name, commands } = action;
        return (
          <Fragment key={index}>
            {displayCategoryName && <Category name={name} />}
            <Commands setPlaceholder={setPlaceholder} setCurrentActions={setCurrentActions} commands={commands} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Suggestions;
