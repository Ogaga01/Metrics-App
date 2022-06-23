import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCountry } from '../Redux/Country';
import Form from './Forms';

const CountryTiles = () => {
  const country = useSelector((state) => state.country);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCountry());
  }, []);

  useEffect(() => {
    setDisplayedCountries(country);
  }, [country]);

  const searchHandler = (n) => {
    const countries = n.target.value;
    const list = country.filter((e) => e.countryName
      .toLowerCase()
      .startsWith(countries.toLowerCase()));
    setDisplayedCountries(list);
  };

  return (
    <section>
      <Form onChange={searchHandler} />
      <ul className="country-list">
        {displayedCountries.map((
          {
            countryCode: id,
            countryName: name,
          },
        ) => (
          <li className="city-index" key={id}>
            <NavLink to={`/${id}`}>
              <FaRegArrowAltCircleRight className="fa-icons-right" />
            </NavLink>
            <p className="country-name">{name}</p>
            <p className="country-code">{id}</p>
            <p className="country-name">
              Total holidays:
              5+
            </p>
            {/* <p className="fa-icons-right">{countHoliday(id)}</p> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountryTiles;
