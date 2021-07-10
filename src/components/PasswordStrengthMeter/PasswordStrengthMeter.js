import React from 'react';
import zxcvbn from 'zxcvbn';
import './PasswordStrengthMeter.scss';

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const numStrength = (testResult.score * 100) / 4;
  const createPassLevel = () => {
    if (password.length) {
      switch (testResult.score) {
        case 0:
          return 'Очень Слабый';
        case 1:
          return 'Слабый';
        case 2:
          return 'Средний';
        case 3:
          return 'Хорошо';
        case 4:
          return 'Сильный';
        default:
          return '';
      }
    }
  };
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#ff6596';
      case 1:
        return '#ff6596';
      case 2:
        return '#fd9498';
      case 3:
        return ' #fed057';
      case 4:
        return '#24cca7';
      default:
        return 'none';
    }
  };

  const passwordMeterstyles = {
    width: `${numStrength}%`,
    background: funcProgressColor(),
  };

  return (
    <>
      <div className="progress">
        <div className="progressBar" style={passwordMeterstyles}></div>
      </div>
      <p className="progressDescript" style={{ color: funcProgressColor() }}>
        {createPassLevel()}
      </p>
    </>
  );
};

export default PasswordStrengthMeter;
