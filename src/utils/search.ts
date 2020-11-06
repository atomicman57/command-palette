import { ActionCategory } from "../core/repository/types"

export const findCommands = (commandActions: ActionCategory[], searchString: string) => {
  const commands = commandActions.map((object) => ({ ...object }));
  return (commands.filter((suggestion) => {
    const { commands } = suggestion;
    const input = searchString.toLowerCase().trim();

    const filteredCommmads = commands.filter((command) => {
      const { name } = command;
      return name?.toLowerCase().includes(input);
    });

    suggestion.commands = filteredCommmads;

    return filteredCommmads.length;
  }));
};