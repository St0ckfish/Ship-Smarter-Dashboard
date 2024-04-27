"use client"

import classes from "./table.module.css"

import { useState } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    keys,


} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

interface RowData {
    submissionDate: string;
    source: string;
    cost: string;
    citryFrom: string;
    cityTo: string;
    orderId: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query))
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

const data = [
    {
        orderId: '1',
        submissionDate: "Wed Mar 20 2024",
        source: "Vitaparaphrama",
        cost: "50 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },
    {
        orderId: '2',
        submissionDate: "Thu Mar 21 2024",
        source: "Vitaparaphrama",
        cost: "33 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },
    {
        orderId: '3',
        submissionDate: "Fri Mar 22 2024",
        source: "Santediagno",
        cost: "50 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },
    {
        orderId: '4',
        submissionDate: "Sat Mar 23 2024",
        source: "Santediagno",
        cost: "20 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },
    {
        orderId: '5',
        submissionDate: "Sun Mar 24 2024",
        source: "Vitaparaphrama",
        cost: "40 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },
    {
        orderId: '6',
        submissionDate: "Mon Mar 25 2024",
        source: "Vitaparaphrama",
        cost: "50 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },
    {
        orderId: '7',
        submissionDate: "Tue Mar 26 2024",
        source: "Santediagno",
        cost: "25 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca",
    },

];

export default function TableSort() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((row) => (
        <Table.Tr
            // style={{ textAlign: 'center' }}
            key={row.orderId}>
            <Table.Td style={{ textAlign: 'left' }}>{row.orderId}</Table.Td>
            <Table.Td>{row.submissionDate}</Table.Td>
            <Table.Td>{row.citryFrom}</Table.Td>
            <Table.Td>{row.cityTo}</Table.Td>
            <Table.Td>{row.cost}</Table.Td>
            <Table.Td>{row.source}</Table.Td>
        </Table.Tr >
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />

            <Table.ScrollContainer minWidth={400}>
                <Table
                    withColumnBorders
                    horizontalSpacing="sm"
                    verticalSpacing="xs"
                    // miw={600}
                    layout="fixed"

                >
                    <Table.Tbody>
                        <Table.Tr
                        >
                            <Th
                                sorted={sortBy === 'orderId'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('orderId')}
                            >
                                Order ID
                            </Th>
                            <Th
                                sorted={sortBy === 'submissionDate'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('submissionDate')}
                            >
                                Submission Date
                            </Th>
                            <Th
                                sorted={sortBy === 'citryFrom'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('citryFrom')}
                            >
                                City-From
                            </Th>
                            <Th
                                sorted={sortBy === 'cityTo'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('cityTo')}
                            >
                                City-To
                            </Th>
                            <Th
                                sorted={sortBy === 'cost'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('cost')}
                            >
                                Cost
                            </Th>
                            <Th
                                sorted={sortBy === 'source'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('source')}
                            >
                                Source
                            </Th>
                        </Table.Tr>
                    </Table.Tbody>
                    <Table.Tbody
                    >
                        {rows.length > 0 ? (
                            rows
                        ) : (
                            <Table.Tr

                            >
                                <Table.Td colSpan={Object.keys(data[0]).length}>
                                    <Text fw={500} ta="center">
                                        Nothing found
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                        )}
                    </Table.Tbody>
                </Table>
            </Table.ScrollContainer>

        </ScrollArea >
    );
}