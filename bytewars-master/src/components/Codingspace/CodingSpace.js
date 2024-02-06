import React from 'react';
import Editor from '@monaco-editor/react';


function CodingSpace() {
  function handleEditorChange(value, event) {
    console.log(value); 
  }

  return (
    <Editor
      height="500px" 
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange}
      theme="vs-dark" 
    />
  );
}

export default CodingSpace;
