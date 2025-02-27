'use client';

import React, { createContext, useContext, useState } from 'react';
import { Success } from './success';
import { Error } from './error';


export type AlertType = 'success' | 'error'
export type AlertConfig = {
  message: string
  title: string
  time?: number
  callback?: () => void
}
export type OpenAlert = (open: React.Dispatch<boolean>, config: AlertConfig) => void
export type Alert = (type: AlertType, config: AlertConfig) => void
export interface AlertContextInterface {
  alert: Alert
}


const AlertContext = createContext({} as AlertContextInterface);

export const AlertContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [ showSuccess, setShowSuccess ] = useState(false);
  const [ showError, setShowError ] = useState(false);
  const [ configAlert, setConfigAlert ] = useState({ message: '', title: '' });

  const openAlert: OpenAlert = (open, config) => {
    open(true);
    setConfigAlert({ message: config.message, title: config.title });
    setTimeout(() => {
      open(false);
      if(config.callback) {
        config.callback();
      }
    }, config.time ? config.time : 3000);
  };

  const alert: Alert = (type, config) => {
    switch (type) {
      case 'success':
        openAlert(setShowSuccess, config);
        break;
      case 'error':
        openAlert(setShowError, config);
        break;
      default:
        console.log(config);
    }
  };

  return <AlertContext.Provider value={{
    alert
  }}>
    {children}

    <Success
      setShow={setShowSuccess}
      show={showSuccess}
      title={configAlert.title}
      message={configAlert.message}
    />

    <Error
      setShow={setShowError}
      show={showError}
      title={configAlert.title}
      message={configAlert.message}
    />

  </AlertContext.Provider>;
};

export const useAlert = () => {
  return useContext(AlertContext);
};