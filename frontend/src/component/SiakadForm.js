import React from 'react';
import {Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const SiakadForm = ({formContent, onSubmit}) => {
  const history = useHistory();

  return (
    <>
      {formContent.map((form, index) => (
        <Form.Group key={index}>
          <label htmlFor={form.id}>{form.label}</label>
          {form.type === 'select' ?
            (
              <select
                className="form-control" id={form.id} onChange={form.onChange}
                value={form.value}
              >
                <option>{form.placeholder}</option>
                {form.data.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.nama}
                  </option>
                ))}
              </select>
            ) :
            (
              <Form.Control
                type={form.type}
                className="form-control"
                id={form.id}
                placeholder={form.placeholder}
                onChange={form.onChange}
                value={form.value}
              />
            )
          }
        </Form.Group>
      ))}
      <button
        className="btn btn-primary mr-2" onClick={onSubmit}>Submit</button>
      <button className="btn btn-dark" onClick={() => history.goBack()}>
        Cancel
      </button>
    </>
  );
};

export default SiakadForm;
