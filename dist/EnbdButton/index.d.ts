import { FC } from 'react';
export interface Props {
    /** Name of the button will be displayed */
    label: string;
    /** optional needs to be string --test*/
    variant?: string;
    /** Custom styles object */
    theme?: object;
}
/**
 * A custom MUI button component.
 */
export declare const EnbdButton: FC<Props>;
