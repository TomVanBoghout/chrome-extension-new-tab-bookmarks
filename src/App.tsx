import React from 'react';
import './App.css';
import { AddSectionButton, SectionList } from './components/molecules';
import { GlobalStyle } from './components/atoms';

export const App = () => (
  <>
    <GlobalStyle />
    <SectionList />
    <AddSectionButton />
  </>
);
