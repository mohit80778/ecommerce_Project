import React from 'react';

const LanguageSelect = () => {
  const languages = ['English', 'Hindi', 'Chinese', 'Arabic','French','Spanish','Dutch']; // Add more languages as needed

  return (
    <select>
      {languages.map((language, index) => (
        <option key={index} value={language}>{language}</option>
      ))}
    </select>
  );
};

export default LanguageSelect;