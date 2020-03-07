import React from 'react';
import MaterialTable, { Column } from 'material-table';

interface Row {
    name: string;
    rank: string;
    batch: string;
    status: string;
    reason: string;
}

interface TableState {
    columns: Array<Column<Row>>;
    data: Row[];
}

export function TraineeList() {
    const [state, setState] = React.useState<TableState>({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Rank', field: 'rank' },
            { title: 'Batch', field: 'batch' },
            { title: 'status', field: 'status' },
            { title: 'reason', field: 'reason' },
        ],
        data: [
            {
                name: 'Hamza Nazeer',
                rank: 'S/LT',
                batch: 'Mechanical Engineering Semester 1',
                status: 'available',
                reason: '',
            },
            {
                name: 'Syed Daniyal Kazim',
                rank: 'S/LT',
                batch: 'Mechanical Engineering Semester 1',
                status: 'on sick leave',
                reason: 'Admitted to Shifa',
            },
        ],
    });

    return (
        <MaterialTable
            title="Trainees"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
