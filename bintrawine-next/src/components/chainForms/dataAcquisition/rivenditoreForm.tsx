import React from "react";

export interface RivenditoreFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

const RivenditoreForm = React.forwardRef<HTMLDivElement, RivenditoreFormProps>(
    ({ className }, ref) => {

        return (
            <div></div>
        )
    });

export default RivenditoreForm;