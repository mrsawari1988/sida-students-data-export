import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { exportStudentsData } from '../services/dataExportService';
const DataExport = () => {
    const [token, setToken] = useState('');
    const [isLoading, setLoading] = useState(false);

    const getStudentHandler = async () => {
        setLoading(true);
        exportStudentsData(token);

        setLoading(false);
    };

    return (
        <Form>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Sida Login Token</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={3}
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <Form.Text className='text-muted'>
                    Please enter the token recieved from sida
                </Form.Text>
            </Form.Group>

            <Button
                variant='primary'
                onClick={getStudentHandler}
                disabled={token === '' ? true : false}
            >
                {isLoading ? 'Loading…' : 'Export Data'}
            </Button>
        </Form>
    );
};

export default DataExport;
