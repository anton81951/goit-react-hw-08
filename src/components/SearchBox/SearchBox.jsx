import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import styles from './SearchBox.module.css';
import { setFilterName, setFilterNumber } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filters.name);
  const filterNumber = useSelector(state => state.filters.number);

  const handleChangeName = event => {
    dispatch(setFilterName(event.target.value));
  };

  const handleChangeNumber = event => {
    dispatch(setFilterNumber(event.target.value));
  };

  return (
    <Formik initialValues={{ searchName: filterName, searchNumber: filterNumber }} onSubmit={() => {}}>
      <Form className={styles.searchBox}>
        <label htmlFor="searchName">Find contacts by name</label>
        <Field
          className={styles.searchField}
          type="text"
          name="searchName"
          id="searchName"
          placeholder="Enter name"
          value={filterName}
          onChange={handleChangeName}
        />

        <label htmlFor="searchNumber">Find contacts by number</label>
        <Field
          className={styles.searchField}
          type="text"
          name="searchNumber"
          id="searchNumber"
          placeholder="Enter number"
          value={filterNumber}
          onChange={handleChangeNumber}
        />
      </Form>
    </Formik>
  );
};

export default SearchBox;