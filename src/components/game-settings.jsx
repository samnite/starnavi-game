import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { getSettings, setSettings } from '../store/actions/data-actions';

const { Option } = Select;

const GameSettings = ({ getSettings, setSettings, fetchedSettings }) => {
  useEffect(() => {
    getSettings();
    // eslint-disable-next-line
  }, []);

  const onChange = key => {
    fetchedSettings.forEach(el => {
      if (el[key]) {
        setSettings(el[key]);
      }
    });
  };

  return (
    <div>
      <Select defaultValue="Pick game mode" onChange={onChange}>
        {fetchedSettings &&
          fetchedSettings.map(el => {
            const value = Object.keys(el)[0];
            return (
              <Option value={value} key={value}>
                {value}
              </Option>
            );
          })}
      </Select>
    </div>
  );
};

GameSettings.propTypes = {
  getSettings: PropTypes.func.isRequired,
  fetchedSettings: PropTypes.array
};

GameSettings.defaultProps = {
  fetchedSettings: []
};

const mapStateToProps = state => ({
  fetchedSettings: state.data.fetchedSettings
});

export default connect(mapStateToProps, { getSettings, setSettings })(GameSettings);
