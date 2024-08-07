import React from 'react'
import { getAppSettings } from '../lib/settings';

async function Settings() {
  const { theme, language } = await getAppSettings();
  
  return (
    <div>
      <h1 className='text-2xl font-bold'>Settings Page</h1>

      <p>Theme: {theme}</p>
      <p>Langague: {language}</p>

    </div>
  );
}

export default Settings;