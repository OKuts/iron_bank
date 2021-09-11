export interface ISubmitEvent {
    target: HTMLFormElement;
    submitter: {
        defaultValue: string;
    }
};

export interface IElementEvent {
    target: HTMLElement;
    currentTarget: HTMLElement;
}

// export interface IInputEvent {
//     target: HTMLInputElement;
// };
