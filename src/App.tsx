import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ActiveNotes from '@/pages/ActiveNotes';
import ArchivedNotes from '@/pages/ArchivedNotes';

function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ActiveNotes />} />
          <Route path="archived" element={<ArchivedNotes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;