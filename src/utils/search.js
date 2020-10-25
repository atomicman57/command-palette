

export const findCommands = (commands, searchString) => {
  const searchResults = commands.filter((suggestion) => {
    const { name, commands } = suggestion;
    const input = searchString.toLowerCase().trim();

    const filteredCommmads = commands.filter((command) => {
      const { name } = command;
      return name && name.toLowerCase().includes(input);
    });

    suggestion.commands = filteredCommmads;

    return filteredCommmads.length || (name && name.toLowerCase().includes(input));
  });

  return searchResults;
};