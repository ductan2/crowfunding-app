import React from 'react';
import { useController } from 'react-hook-form';

export const Input = (props) => {
    const { control, children, type, name, error, placeholder, ...rest } =
        props;
    const { field } = useController({
        name: name || '',
        control,
        defaultValue: ''
    });
    return (
        <div className="relative  mb-2">
            <input
                type={type}
                className={`w-full h-full dark:bg-darkSecondary dark:border px-6 py-4  placeholder:text-text4 placeholder:text-[14px] rounded-xl border flex items-center justify-start 
                ${
                    error ? 'border-error focus:border-strock' : 'border-strock dark:border-darkStroke'
                } ${children && "pr-12"}`}
                placeholder={error ? '' : placeholder}
                {...field}
                {...rest}
            />
            <span className="absolute cursor-pointer select-none top-[50%] right-0 translate-y-[-50%] -translate-x-5 ">
                {children}
            </span>
            <span className="text-error absolute -bottom-[30%] translate-y-[50%] input-focus text-[14px]">
                {error}
            </span>
        </div>
    );
};
