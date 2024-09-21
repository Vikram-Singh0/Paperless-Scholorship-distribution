import React, { useState } from 'react';
import axios from 'axios';

const DocumentUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            await axios.post('/api/student/upload-documents', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage('File uploaded successfully.');
        } catch (error) {
            console.error('Upload failed', error);
            setMessage('Failed to upload file.');
        }
    };

    return (
        <div>
            <h2>Upload Documents</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DocumentUpload;
