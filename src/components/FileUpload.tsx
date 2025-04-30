import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  accept: string;
  onFileSelect: (file: File) => void;
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ accept, onFileSelect, label }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    if (!file.type.match(accept)) {
      setUploadStatus('error');
      setErrorMessage('Invalid file type');
      return;
    }

    // Validate file size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      setUploadStatus('error');
      setErrorMessage('File size must be less than 100MB');
      return;
    }

    setUploadStatus('success');
    onFileSelect(file);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging
            ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
            : 'border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <input
          id="fileInput"
          type="file"
          accept={accept}
          onChange={handleFileInput}
          className="hidden"
        />
        
        <div className="flex flex-col items-center">
          <Upload 
            className={`w-12 h-12 mb-4 ${
              uploadStatus === 'success' ? 'text-green-500' : 
              uploadStatus === 'error' ? 'text-red-500' : 
              'text-gray-400'
            }`} 
          />
          
          {uploadStatus === 'idle' && (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Drag and drop your file here, or click to select
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Maximum file size: 100MB
              </p>
            </>
          )}
          
          {uploadStatus === 'success' && (
            <div className="flex items-center text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>File uploaded successfully!</span>
            </div>
          )}
          
          {uploadStatus === 'error' && (
            <div className="flex items-center text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;