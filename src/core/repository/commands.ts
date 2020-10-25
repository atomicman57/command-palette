import { ReactComponent as LogSvg } from "../../icons/log.svg";
import { ReactComponent as ReminderSvg } from "../../icons/reminder.svg";
import { ReactComponent as StatusSvg } from "../../icons/status.svg";
import { ReactComponent as EditSvg } from "../../icons/edit.svg";
import { ReactComponent as InboxSvg } from "../../icons/inbox.svg";
import { ReactComponent as FocusSvg } from "../../icons/focus.svg";
import { ReactComponent as TodoSvg } from "../../icons/todo.svg";
import { ReactComponent as BacklogSvg } from "../../icons/backlog.svg";
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
        subActions: [],
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
        subActions: [],
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
        subActions: [
          {
            categoryId: 7,
            name: "default",
            displayCategoryName: false,
            commands: [
              {
                name: "Backlog",
                shortcut: ["Shift", "B"],
                Icon: BacklogSvg,
                subActions: [],
                commandId: 10,
                displayIcon: true,
                displayShortcut: true,
                action: () => {
                  console.log("Triggered", "Backlog");
                },
              },
              {
                name: "Todo",
                shortcut: ["Shift", "T"],
                Icon: TodoSvg,
                subActions: [],
                commandId: 11,
                displayIcon: true,
                displayShortcut: true,
                action: () => {
                  console.log("Triggered", "Todo");
                },
              },
            ]
          }
        ],
        commandId: 2,
        displayIcon: true,
        displayShortcut: true,
        action: (cb = () => { }) => {
          console.log("Triggered", "Change status");
          cb();
        },
      },
      {
        name: "Edit contact",
        Icon: EditSvg,
        shortcut: ["E"],
        subActions: [],
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
        subActions: [],
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
        subActions: [],
        displayIcon: true,
        displayShortcut: true,
        action: () => {
          console.log("Triggered", "Go to focus");
        },
      },
    ],
  },
];
