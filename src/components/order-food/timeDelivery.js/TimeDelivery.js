import React from 'react';

export const TimeDelivery = () => {
  return (
    <div className="order-form mb-5">
      <h4 className="order-form__title mb-4 ">TIME DELIVERY</h4>
      <form>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className={`form-control backgrond-black `}
                  id="date"
                  placeholder="date"
                />
                <label htmlFor="date">Date Delivery</label>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-floating mb-3">
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Time
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    defaultValue="DEFAULT"
                  >
                    <option value="DEFAULT">Please choose your hour</option>
                    <option value="10am">10am</option>
                    <option value="11am">11am</option>
                    <option value="12am">12am</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-floating">
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="phone"
                />
                <label htmlFor="phone">Your phone number</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};