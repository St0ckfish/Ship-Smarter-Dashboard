"use client"

import styles from "./ResetPasswordForm.module.css"
import { useForm } from '@mantine/form';
import {
    Button,
    Box, Flex, PasswordInput
} from '@mantine/core';

export default function ForgetPasswordForm() {

    const form = useForm({
        initialValues: {
            password: '',
            confirmPassword: '',
        },

        validate: {
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    });


    return (
        <Box component="form"
            // miw="300"
            // maw="400"
            mx="auto"
            onSubmit={form.onSubmit(() => { })}
            style={{ width: '100%' }}

        >

            <PasswordInput
                label="Password"
                placeholder="Enter your new password"
                {...form.getInputProps('password')}
                pt="md"
                pb="md"
                size="lg"
                radius={10}
                style={{ width: '100%' }}


            />

            <PasswordInput
                mt="sm"
                label="Confirm password"
                placeholder="Confirm your new password"
                {...form.getInputProps('confirmPassword')}
                pt="md"
                pb="md"
                size="lg"
                radius={10}
                style={{ width: '100%' }}

            />


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
                >Resend Recovery Code
                </Button>
            </Flex>
        </Box>
    );
}

