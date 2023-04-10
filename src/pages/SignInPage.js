import { ButtonGoogle } from '../components/button/ButtonGoogle';
import { FieldWrap } from '../components/formField/FieldWrap';
import { IconEyePassword } from '../components/icon/IconEyePassword';
import { Input } from '../components/input/Input';
import { Label } from '../components/label/Label';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AuthLayout from '../layouts/AuthLayout';
import Button from '../components/button/Button';

import useToggle from '../hooks/useToggle';

export const SignInPage = () => {
    const schema = yup.object({
        email: yup.string().required('Email is not valid!'),
        password: yup
            .string()
            .min(6, 'Password must be more than 6 character')
            .required('Password is not valid!')
    });
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid, errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    });
    const { value: togglePassword, handleValue: handleTogglePassword } =
        useToggle();
      const handleSubmitSignIn=(values)=>{
        console.log(values)
      }
    return (
        <AuthLayout heading="Sign In">
            <div className=" text-center mt-2 lg:mt-1">
                <p className="text-text3 text-[12px] lg:text-[14px] mb-5">
                    Don have an account?{' '}
                    <Link to={'/sign-up'} className="text-primary">
                        Sign up
                    </Link>
                </p>
                <ButtonGoogle text="Sign in with google"></ButtonGoogle>
            </div>
            <form action="" onSubmit={handleSubmit(handleSubmitSignIn)}>
                <FieldWrap>
                    <Label>Email *</Label>
                    <Input
                        name="email"
                        control={control}
                        type="email"
                        error={errors.email?.message}
                        placeholder="Example@gmail.com"
                    ></Input>
                </FieldWrap>
                <FieldWrap>
                    <Label>Password *</Label>
                    <Input
                        name="password"
                        control={control}
                        type={`${!togglePassword ? 'password' : 'text'}`}
                        placeholder="Create a password"
                        error={errors.password?.message}
                    >
                        <IconEyePassword
                            open={togglePassword}
                            onClick={handleTogglePassword}
                        ></IconEyePassword>
                    </Input>
                </FieldWrap>

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
