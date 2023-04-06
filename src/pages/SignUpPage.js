import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Link } from 'react-router-dom';
import { Input } from '../components/input/Input';
import { useForm } from 'react-hook-form';
import { Label } from '../components/label/Label';
import { FieldWrap } from '../components/formField/FieldWrap';
import Button from '../components/button/Button';
import { Checkbox } from '../components/checkbox/Checkbox';
import * as Yup from "yup"

export const SignUpPage = () => {
    
    
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid }
    } = useForm();
    const [term, setTerm] = useState(false);
    const handleTerm = () => {
        setTerm(!term);
    };
    console.log('🚀  ~  handleTerm ~  term:', term);
    const authValues = (values) => {
        if (!isValid) return;
        console.log(values);
    };

    return (
        <AuthLayout heading="Sign Up">
            <div className=" text-center mt-2 lg:mt-1">
                <p className="text-text3 text-[14px] lg:text-[12px] mb-5">
                    Already have an account?{' '}
                    <Link to={'/sign-in'} className="text-primary">
                        Sign in
                    </Link>
                </p>
                <button className="flex justify-center gap-3 font-semibold items-center mx-auto border border-strock w-full px-8 rounded-lg py-4">
                    <img src="./google-icon.png" className="w-6 h-6" alt="" />
                    <span className="text-text2 text-[16px]">
                        Sign up with google
                    </span>
                </button>
                <p className="my-5 text-[14px] text-text2">
                    Or sign up with email
                </p>
            </div>
            <form action="" onSubmit={handleSubmit(authValues)}>
                <FieldWrap>
                    <Label>Full name *</Label>
                    <Input
                        name="fullname"
                        control={control}
                        type="text"
                        placeholder="Jhon doe"
                    ></Input>
                </FieldWrap>
                <FieldWrap>
                    <Label>Email *</Label>
                    <Input
                        name="email"
                        control={control}
                        type="email"
                        placeholder="Example@gmail.com"
                    ></Input>
                </FieldWrap>
                <FieldWrap>
                    <Label>Password *</Label>
                    <Input
                        name="password"
                        control={control}
                        type="password"
                        placeholder="Create a password"
                    ></Input>
                </FieldWrap>
                <div className="flex gap-5 mt-5">
                    <Checkbox name="term" isCheck={term} onClick={handleTerm}>
                        <p className=" text-[14px] text-text2 ">
                            I agree to the{' '}
                            <span className="text-secondary">
                                Tearms of Use
                            </span>{' '}
                            and have read and understand the{' '}
                            <span className="text-secondary">
                                Privacy policy
                            </span>
                            .
                        </p>
                    </Checkbox>
                </div>
                <Button
                    isLoading={isSubmitting}
                    type={'submit'}
                    className={'bg-primary'}
                >
                    Create my account
                </Button>
            </form>
        </AuthLayout>
    );
};
