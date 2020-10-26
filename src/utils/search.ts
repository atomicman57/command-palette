import { ActionCategory } from "../core/repository/types"

export const findCommands = (commands: ActionCategory[], searchString: string) => {
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