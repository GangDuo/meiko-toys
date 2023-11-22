import { useDropzone } from 'react-dropzone';

export default function SmartManager() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        'text/csv': ['.csv'],
      },
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section>
      <h1>KDDI Smart Mobile Safety Manager</h1>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
