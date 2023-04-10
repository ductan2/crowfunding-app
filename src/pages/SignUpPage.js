import { ButtonGoogle } from '../components/button/ButtonGoogle';
import { Checkbox } from '../components/checkbox/Checkbox';
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

export const SignUpPage = () => {
    const schema = yup.object({
        fullname: yup.string().required('Full name is not valid!'),
        email: yup
            .string()
            .email('Invalid Email!')
            .required('The field is not valid!'),
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
    });
    const { value: togglePassword, handleValue: handleTogglePassword } =
        useToggle();
    const { value: term, handleValue: handleTerm } = useToggle();
    const authValues = (values) => {
        if (!isValid) return;
        console.log(values);
    };

    return (
        <AuthLayout heading="Sign Up">
            <div className=" text-center mt-1 lg:mt-2">
                <p className="text-text3 text-[12px] lg:text-[14px] mb-5">
                    Already have an account?{' '}
                    <Link to={'/sign-in'} className="text-primary">
                        Sign in
                    </Link>
                </p>
                <ButtonGoogle text="Sign up with google"></ButtonGoogle>
                <p className="my-5 text-[14px] text-text2 dark:text-white">
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
                        error={errors.fullname?.message}
                    ></Input>
                </FieldWrap>
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
                <div className="flex gap-5 my-5">
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
