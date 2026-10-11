import { Formik, Field, Form } from 'formik';
import { CiSearch } from 'react-icons/ci';
import {
  FilterContainer,
  FieldContainer,
  SearchControl,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filter);
  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <FilterContainer>
      <h2>All contacts</h2>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        <Form>
          <FieldContainer>
            <label htmlFor="search">Find contacts by name</label>
            <SearchControl>
              <Field
                type="search"
                id="search"
                name="search"
                placeholder="John Doe"
                value={filterValue}
                onChange={handleChange}
              />
              <CiSearch />
            </SearchControl>
          </FieldContainer>
        </Form>
      </Formik>
    </FilterContainer>
  );
};
