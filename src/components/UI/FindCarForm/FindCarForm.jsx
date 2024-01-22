import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./FindCarForm.css";
import { Form, FormGroup } from "reactstrap";
import { GetListContext } from "../../../context/getCarList";

const FindCarForm = () => {
  const navigate = useNavigate();
  const {
    makeModel,
    setMakeModel,
    transmission,
    setTransmission,
    year,
    setYear,
    budget,
    setBudget,
    fuelType,
    setFuelType,
    handleSubmit,
    searchResults,
  } = useContext(GetListContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    navigate("/results", { state: { results: searchResults } });
  };

  console.log(makeModel);

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="form">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Make/Model"
            value={makeModel}
            onChange={(e) => setMakeModel(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value="automatic">Automatic</option>
            <option value="manuel">Manuel</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="number"
            placeholder="Budget (€)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="gasoline">Gasoline</option>
            <option value="electric">Electric</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
