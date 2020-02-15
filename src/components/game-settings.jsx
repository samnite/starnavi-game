import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { getSettings, setSettings, initField } from '../store/actions/data-actions';
import StartGameButton from './start-game-button';
import NameField from './name-field';

const { Option } = Select;

const GameSettings = ({ initField, isGameStarted, getSettings, setSettings, fetchedSettings }) => {
  useEffect(() => {
    getSettings();
    // eslint-disable-next-line
  }, []);

  const onChange = key => {
    fetchedSettings.forEach(el => {
      if (el[key]) {
        setSettings(el[key]);
        initField(el[key].field * el[key].field);
      }
    });
  };

  return (
    <div>
      <Select
        defaultValue="Pick game mode"
        disabled={isGameStarted}
        onChange={onChange}
        style={{ width: '150px' }}
      >
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
      <NameField />
      <StartGameButton />
    </div>
  );
};

GameSettings.propTypes = {
  getSettings: PropTypes.func.isRequired,
  fetchedSettings: PropTypes.array,
  initField: PropTypes.func.isRequired,
  isGameStarted: PropTypes.bool.isRequired
};

GameSettings.defaultProps = {
  fetchedSettings: []
};

const mapStateToProps = state => ({
  fetchedSettings: state.data.fetchedSettings,
  isGameStarted: state.data.isGameStarted
});

export default connect(mapStateToProps, { getSettings, setSettings, initField })(GameSettings);
