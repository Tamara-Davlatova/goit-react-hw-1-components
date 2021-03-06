import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  return <ul className={s.statList}>{items.map(StatsListItem)}</ul>;
};

export default function Statistics({ items }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <StatsList items={items} />
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
