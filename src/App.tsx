import React from 'react';
import './App.css';
import { SectionList } from './components/molecules';
import { GlobalStyle } from './components/atoms';
import { AddSection } from './components/molecules/AddSection.component';

export const App = () => (
  <>
    <GlobalStyle />
    <SectionList />
    <AddSection />
  </>
);
