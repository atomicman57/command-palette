import React, { Component } from "react";
import Mousetrap from "mousetrap";
import { actions } from "../../config/commands";

class CommandPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSuggestions: actions,
      userInput: "",
    };
  }

  componentDidMount() {
    const commands = actions
      .map((action) => {
        return action.commands;
      })
      .flat();

    commands.forEach((command) => {
      const { shortcut, action } = command;
      const lowercaseShortcut = shortcut
        .map((st) => {
          return st.toLowerCase();
        })
        .join("+");
      Mousetrap.bind(lowercaseShortcut, () => action());
    });
  }

  onChange = (e) => {
    const userInput = e.currentTarget.value;
    // Remove object reference
    const commandActions = actions.map((object) => ({ ...object }));

    const filteredSuggestions = commandActions.filter((suggestion) => {
      const { name, commands } = suggestion;
      const input = userInput.toLowerCase().trim();

      const filteredCommmads = commands.filter((command) => {
        const { name } = command;
        return name && name.toLowerCase().includes(input);
      });

      suggestion.commands = filteredCommmads;

      return filteredCommmads.length || (name && name.toLowerCase().includes(input));
    });

    this.setState({
      userInput,
      filteredSuggestions,
    });
  };

  render() {
    const { headerName } = this.props;
    const { filteredSuggestions } = this.state;

    return (
      <div className="command-palette-container">
        <div className="header-container">
          <h5>{headerName}</h5>
        </div>
        <input placeholder="Type a command or search ..." onChange={this.onChange} />
        <div className="suggestions">
          {filteredSuggestions.map((action, index) => {
            const { displayCategoryName, name } = action;
            const renderCommand = action.commands.map((cm, index) => {
              const { Icon, name, shortcut, action } = cm;
              return (
                <div key={index} className="suggestion-container" onClick={action}>
                  <div className="name-container">
                    {Icon && <Icon />}
                    <h4>{name}</h4>
                  </div>
                  <div className="shortcut-container">
                    {shortcut.map((st, index) => {
                      const delimeter = "then";
                      let commandArr = st.split(" ").join(` ${delimeter} `);
                      commandArr = commandArr.split(" ");
                      if (commandArr.length > 1) {
                        return commandArr.map((shortc, index) => {
                          return (
                            <span className={shortc === delimeter ? "command-delimeter" : ""} key={index}>
                              {shortc}
                            </span>
                          );
                        });
                      }
                      return <span key={index}>{st}</span>;
                    })}
                  </div>
                </div>
              );
            });
            return (
              <div key={index} className="">
                {displayCategoryName && <div className="category-name">{name}</div>}
                {renderCommand}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CommandPalette;
