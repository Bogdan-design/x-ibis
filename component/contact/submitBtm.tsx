import React, {CSSProperties} from 'react';
import {Button} from "@/component/ui/button";
// @ts-ignore
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

export const SubmitBtm = ({className, font}: {
    className?: string,
    font?: CSSProperties
}) => {
    const {pending} = useFormStatus()
    return (
        <Button style={font} className={className} type={'submit'}
                disabled={pending}
                fullWidth
        >
            Sent
        </Button>
    );
};

