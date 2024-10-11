import React from 'react'
import "./App.css"
import Section2 from './assets/components/Section2/Section2'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header/Header';
import Section1 from './assets/components/Section1/Section1';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Section3 from './assets/components/Section3/Section3';
import { useDispatch } from 'react-redux';



const App = () => {
  const dispatch = useDispatch();
  
  return (
    <div>

<MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
 </MantineProvider>
      
    </div>
  )
}

export default App
