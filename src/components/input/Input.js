import React from 'react';
import { useController } from 'react-hook-form';

export const Input = (props) => {
    const { control, type, name,...rest } = props;
    const { field } = useController({
        name: name || '',
        control,
        defaultValue: ''
    });
    return (
        <div className="relative ">
            <input
                type={type}
                className="w-full h-full px-6 py-4 placeholder:text-text4 placeholder:text-[14px] rounded-xl border border-strock flex items-center justify-start "
                {...field}
                {...rest}
            />
        </div>
    );
};
