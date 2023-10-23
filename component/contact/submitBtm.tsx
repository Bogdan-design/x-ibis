import React from 'react';
import {Button} from "@/component/ui/button";
// @ts-ignore
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

export const SubmitBtm = () => {
    const {pending} = useFormStatus()
    return (
        <Button type={'submit'}
                disabled={pending}
                fullWidth
        >
            Sent
        </Button>
    );
};

