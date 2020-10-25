import { ReactComponent as LogSvg } from "../../icons/log.svg";
import { ReactComponent as ReminderSvg } from "../../icons/reminder.svg";
import { ReactComponent as StatusSvg } from "../../icons/status.svg";
import { ReactComponent as EditSvg } from "../../icons/edit.svg";
import { ReactComponent as InboxSvg } from "../../icons/inbox.svg";
import { ReactComponent as FocusSvg } from "../../icons/focus.svg";
import { ActionCategory } from "./types";

export const actions: ActionCategory[] = [
  {
    categoryId: 1,
    name: "default",
    displayCategoryName: false,
    commands: [
      {
        name: "Log an activity",
        shortcut: ["C"],
        commandId: 0,
        subCommands: [],
        Icon: LogSvg,
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Log an Activity");
        },
      },
      {
        name: "Set a Reminder",
        shortcut: ["H"],
        Icon: ReminderSvg,
        subCommands: [],
        commandId: 1,
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Set a Reminder");
        },
      },
      {
        name: "Change status",
        shortcut: ["Shift", "S"],
        Icon: StatusSvg,
        subCommands: [
          {
            name: "Backlog",
            shortcut: ["Shift", "B"],
            Icon: StatusSvg,
            subCommands: [],
            commandId: 2,
            displayIcon: true,
            displayShortcut: true,
            action: () => {
              console.log("Triggered", "Backlog");
            },
          },
        ],
        commandId: 2,
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Change status");
        },
      },
      {
        name: "Edit contact",
        Icon: EditSvg,
        shortcut: ["E"],
        subCommands: [],
        commandId: 3,
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Edit contact");
        },
      },
    ],
  },
  {
    categoryId: 2,
    name: "Go to...",
    displayCategoryName: true,
    commands: [
      {
        name: "Go to inbox",
        shortcut: ["G I"],
        Icon: InboxSvg,
        subCommands: [],
        commandId: 4,
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Go to inbox");
        },
      },
      {
        name: "Go to focus",
        shortcut: ["G F"],
        Icon: FocusSvg,
        commandId: 5,
        subCommands: [],
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Go to focus");
        },
      },
    ],
  },
];
