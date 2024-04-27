"use client"

import { useState } from 'react';
import Cookie from 'js-cookie'
import axios from 'axios';
import styles from "./LoginForm.module.css"
import { useRouter } from 'next/navigation';
import { useForm, isNotEmpty, isEmail } from '@mantine/form';
import {
    Button,
    TextInput,
    PasswordInput,
    Box, Flex
} from '@mantine/core';

export default function LoginForm() {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: isEmail('Invalid email'),
            password: isNotEmpty('Enter your password'),

        },
    });

    const router = useRouter();
    const [error, setError] = useState('');


    const handleSubmit = async () => {
        const { email, password } = form.getValues();

        try {
            const response = await axios.post(
                `https://api.shipsmarter.net/api/v1/auth/login?email=${email}&password=${password}&device-token=`
            );

            if (!response.data.success) {
                console.log(response);
                throw new Error(`Email or Password are not valid`);
            }

            

            const token = response.data.data;
            Cookie.set('token', token);
            localStorage.setItem('myAuthorizationToken', token);
            const lool = localStorage.getItem('myAuthorizationToken');
            console.log(lool);
            console.log('Login successful');
            router.replace('/dashboard');

        } catch (error) {
            console.error('Error:', error);
            setError("Email or Password are not valid");
        }
    };


    return (
        <Box component="form"
            mx="auto"
            onSubmit={form.onSubmit(() => { handleSubmit() })}
            style={{ width: '100%' }}

        >

            <TextInput
                label="Your email"
                placeholder="Your email"
                withAsterisk
                pt="md"
                pb="md"
                size="lg"
                radius={10}

                {...form.getInputProps('email')}
                style={{ width: '100%' }}
            />

            <PasswordInput
                label="Password"
                withAsterisk
                pt="md"
                pb="md"
                placeholder="Your password"
                size="lg"
                radius={10}
                {...form.getInputProps('password')}
                style={{ width: '100%' }}

            />
            <div style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>{error}</div>

            <Flex

                justify="center"
                align="center"
                direction="column"
                pt="md"
            >
                <Button
                    className={styles["button"]}
                    type="submit"
                    miw={150}
                    mih={45}
                    radius={10}
                    mt="lg"
                >Log in
                </Button>
            </Flex>
        </Box>
    );
}