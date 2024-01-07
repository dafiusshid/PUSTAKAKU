import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
      { id: 1, name: 'Rendi', position: 'Manager', salary: '6.000.000' },
      { id: 2, name: 'Irfan', position: 'Developer', salary: '4.500.000' },
      { id: 3, name: 'Alice BTR', position: 'Designer', salary: '5.000.000' },
    ]);

    const [dataTransaction, setDataTransaction] = useState([
      { id: 1, description: 'Bank', amount: 10, productName: 'buku'}
    ]);

    const addNewItemTransaction = (newItem) => {
      setDataTransaction([...dataTransaction, newItem]);
    };
        
    const addNewItem = (newItem) => {
      setData([...data, newItem]);
    };
  
    const deleteItem = (id) => {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    };
  
    const editItem = (id, updatedItem) => {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      );
      setData(updatedData);
    };
  
    return (
      <DataContext.Provider value={{ data, addNewItem, deleteItem, editItem, dataTransaction, addNewItemTransaction }}>
        {children}
      </DataContext.Provider>
    );
  };
  