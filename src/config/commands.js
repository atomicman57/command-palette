import { ReactComponent as LogSvg } from '../icons/log.svg';
import { ReactComponent as ReminderSvg } from '../icons/reminder.svg';
import { ReactComponent as StatusSvg } from '../icons/status.svg';
import { ReactComponent as EditSvg } from '../icons/edit.svg';
import { ReactComponent as InboxSvg } from '../icons/inbox.svg';
import { ReactComponent as FocusSvg } from '../icons/focus.svg';

export const actions = [
    {
        categoryId: 1,
        name: "default",
        displayCategoryName: false,
        commands: [
            {
                name: "Log an activity",
                shortcut: ["C"],
                subAction: [],
                Icon: LogSvg,
                showIcon: true,
                showShortcut: true,
                action: () => {
                    console.log('Triggered', 'Log an Activity')
                },
            },
            {
                name: "Set a Reminder",
                shortcut: ["H"],
                Icon: ReminderSvg,
                subAction: [],
                showIcon: true,
                showShortcut: true,
                action: () => {
                    console.log('Triggered', 'Set a Reminder')
                },
            },
            {
                name: "Change status",
                shortcut: ["Shift","S"],
                Icon: StatusSvg,
                subAction: [],
                showIcon: true,
                showShortcut: true,
                action: () => {
                    console.log('Triggered', 'Change status')
                },
            },
            {
                name: "Edit contact",
                Icon: EditSvg,
                shortcut: ["E"],
                subAction: [],
                showIcon: true,
                showShortcut: true,
                action: () => {
                    console.log('Triggered', 'Edit contact')
                },
            },
        ]
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
                subAction: [],
                showIcon: true,
                showShortcut: true,
                action: () => {
                    console.log('Triggered', 'Go to inbox')
                },
            },
            {
                name: "Go to focus",
                shortcut: ["G F"],
                Icon: FocusSvg,
                subAction: [],
                showIcon: true,
                showShortcut: true,
                action: () => {
                    console.log('Triggered', 'Go to focus')
                },
            },
        ]
    }
];

