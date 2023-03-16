import { useState } from "react";

function Form(props) {
  const { movieSearch } = props;
    // formData is an object
  const [formData, setFormData] = useState({ searchTerm: ""});

  // handle change on the input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle the on submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(formData.searchTerm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.searchTerm}
          name="searchTerm"
          placeholder="Search"
          onChange={handleChange}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
