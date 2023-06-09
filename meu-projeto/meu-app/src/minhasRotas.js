import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from './Atv02';
import Atv03 from './Atv03';
import Atv04 from './Atv04';
import Atv05 from './Atv05';
import Atv06 from './Atv06';
import Atv07 from './Atv07';
import Atv08 from './Atv08';
import Toolbar from './aula5/Toolbar';

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/atv03" element={<Atv03 />} />
        <Route path="/atv04" element={<Atv04 />} />
        <Route path="/atv05" element={<Atv05 />} />
        <Route path="/atv06" element={<Atv06 />} />
        <Route path="/atv07" element={<Atv07 />} />
        <Route path="/atv08" element={<Atv08 />} />
        <Route exact path="/" element={<Atv04 />} />
        <Route exact path="/aula5/Toolbar" element={<Toolbar />} />
      </Routes>
    </BrowserRouter>
  );
}

