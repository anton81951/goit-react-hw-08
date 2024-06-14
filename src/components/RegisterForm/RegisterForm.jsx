import { Formik, Form, Field } from "formik";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(data => console.log(data))
      .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.inputForm} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.inputField} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.inputField} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.inputField} type="password" name="password" />
        </label>
        <button className={css.inputBtn} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
