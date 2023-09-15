import { useState } from 'react';

import {
  Container,
  Form,
  FormName,
  NewFormValue,
  Search,
} from './SearchBar.styled';

const SearchBar = ({ onHandleSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setSearchText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchText.trim() === '') {
      return;
    }

    onHandleSubmit({ query: searchText });
    setSearchText('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormName>
          Find movies:
          <NewFormValue
            type="text"
            name="searchText"
            value={searchText}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </FormName>

        <Search type="submit">Search</Search>
      </Form>
    </Container>
  );
};

export default SearchBar;
