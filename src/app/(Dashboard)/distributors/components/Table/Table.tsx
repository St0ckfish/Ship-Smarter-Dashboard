"use client"

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import {
    MRT_EditActionButtons,
    flexRender,
    MRT_GlobalFilterTextInput,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    type MRT_ColumnDef,
    useMantineReactTable,
    MRT_TableBodyCellValue,
} from 'mantine-react-table';

import { Divider, Flex, Stack, Table, Title, Button, ActionIcon, Tooltip } from '@mantine/core';

import { ModalsProvider, modals } from '@mantine/modals';

import { type Distributor, Data } from './Data';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useMemo } from 'react';
import ActionsButtonXL from '@/components/ActionsButtonXL/ActionsButtonXL';

const columns: MRT_ColumnDef<Distributor>[] = [
    {
        accessorKey: 'distributorName',
        header: 'Distributor Name',
        Cell: ({ renderedCellValue }) => (
            <a style={{ color: "#EF4887", textDecoration: "underline" }} href="">

                {renderedCellValue}

            </a>
        ),
        // mantineTableBodyCellProps: {
        //     align: 'center',
        // },

    },
    {
        accessorKey: 'nationalID',
        header: 'NationalID',
        size: 180,

        mantineTableHeadCellProps: {
            align: 'center',
        },
        mantineTableBodyCellProps: {
            align: 'center',
        },

    },
    {
        accessorKey: 'city',
        header: 'City',
    },
    {
        accessorKey: 'region',
        header: 'Region',
    },
    {
        accessorKey: 'zip',
        header: 'Zip',
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
    },

];



const DistributorsTable = () => {


    const table = useMantineReactTable({
        columns,
        data: Data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
        enableFilterMatchHighlighting: true,
        enableGlobalFilter: true,
        enableGlobalFilterModes: true,
        enableGlobalFilterRankedResults: true,
        enableRowSelection: false,
        enableEditing: true,
        enableRowActions: true,
        initialState: {
            pagination: { pageSize: 5, pageIndex: 0 },
            showGlobalFilter: true,
        },
        //customize the MRT components
        mantinePaginationProps: {
            rowsPerPageOptions: ['5', '10', '15'],
        },
        paginationDisplayMode: 'pages',
        positionActionsColumn: 'last',
        renderRowActions: ({ row, table }) => (

            <Flex gap="md">
                <Tooltip label="Edit">
                    <ActionIcon onClick={() => table.setEditingRow(row)}>
                        <IconEdit />
                    </ActionIcon >
                </Tooltip >
                <Tooltip label="Delete">
                    <ActionIcon color="red"
                    // onClick={() => openDeleteConfirmModal(row)}
                    >
                        <IconTrash />
                    </ActionIcon>
                </Tooltip>
            </Flex >
        ),
    });

    return (
        <Stack>
            {/* <Divider /> */}
            <Title pb={50} order={2}>Distributors Information</Title>
            <Flex justify="space-between" align="center">
                {/**
         * Use MRT components along side your own markup.
         * They just need the `table` instance passed as a prop to work!
         */}
                <MRT_GlobalFilterTextInput table={table} />
                <ActionsButtonXL title="Add a new distributor" />

            </Flex>
            {/* Using Vanilla Mantine Table component here */}
            <Table.ScrollContainer minWidth={500}>
                <Table
                    captionSide="top"
                    fz="md"
                    highlightOnHover
                    horizontalSpacing="xl"
                    striped
                    verticalSpacing="xs"
                    withTableBorder
                    withColumnBorders
                    m="0"
                // miw="700"
                >
                    {/* Use your own markup or stock Mantine components, customize however you want using the power of TanStack Table */}
                    <Table.Thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Table.Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <Table.Th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.Header ??
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </Table.Th>
                                ))}
                            </Table.Tr>
                        ))}
                    </Table.Thead>
                    <Table.Tbody>
                        {table.getRowModel().rows.map((row) => (
                            <Table.Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <Table.Td key={cell.id}>
                                        <MRT_TableBodyCellValue cell={cell} table={table} />
                                    </Table.Td>
                                ))}
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Table.ScrollContainer>
            <MRT_TablePagination table={table} />
            <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Stack >
    );
};

export default DistributorsTable;