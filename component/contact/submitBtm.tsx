import React, {CSSProperties} from 'react';
import {Button} from "@/component/ui/button";
// @ts-ignore
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

export const SubmitBtm = ({className,style}:{className?:string,
style?:CSSProperties}) => {
    const {pending} = useFormStatus()
    return (
        <Button style={style} className={className} type={'submit'}
                disabled={pending}
                fullWidth
        >
            Sent
        </Button>
    );
};

