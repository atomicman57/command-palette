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
    subActions: ActionCategory[]
    displayIcon: boolean
    displayShortcut: boolean
    action: (cb?: () => void) => void
    Icon: FC
}