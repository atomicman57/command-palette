import React, { Fragment } from "react";
import Category from "../Category";
import Commands from "../Commands";
import { ActionCategory } from "../../core/repository/types"

type SuggestionsProps = {
  suggestions: ActionCategory[] 
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  return (
    <div className="suggestions">
      {suggestions.map((action, index) => {
        const { displayCategoryName, name, commands } = action;
        return (
          <Fragment key={index}>
            {displayCategoryName && <Category name={name} />}
            <Commands commands={commands} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Suggestions;
