"use client"
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export default function DatePickerVariant() {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return <DatePicker type="range" value={value} onChange={setValue} />;
}