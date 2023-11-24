import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['教室長', '直営', '社員'];

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

  const [option, setOption] = useState({ selected: '' });

  const onSelect = (op: Option) => {
    console.log('You selected ', op.label);
    setOption({ selected: op });
  };

  const defaultOption = option.selected;

  const onChange = (e) => {
    console.log(e.target.value);
  };

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
      <h3>用途</h3>
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      <h3>回線番号</h3>
      <textarea rows={10} placeholder="090-1234-5678" onChange={onChange} />
      <h3>結果</h3>
      <Link
        download="result.csv"
        to="data:text/csv;base64,YSxiLGMNCmEsYixjDQphLGIsYw=="
      >
        ダウンロード
      </Link>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
