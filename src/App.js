import React, { useState } from "react";
import FileUploader from "./FileUploader";

const App = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    console.log(selectedFile, name, formData);

    // axios
    //   .post(UPLOAD_URL, formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
