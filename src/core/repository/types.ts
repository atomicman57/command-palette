import { FC } from 'react';

export interface ActionCategory {
    categoryId: number
    name: string
    displayCategoryName: boolean
    commands: Command[]
}

export interface Command {
    name: string
    shortcut: string[]
    commandId: number
    subCommands?: Command[]
    displayIcon: boolean
    displayShortcut: boolean
    action: () => void
    Icon: FC
}