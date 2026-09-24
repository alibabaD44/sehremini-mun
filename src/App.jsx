import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Comingsoon from './comingsoon/comingsoon'
import Committees from './committees/committees'
import Ecofin from './committees/ecofin/ecofin'
import Unwomen from './committees/unwomen/unwomen'
import Legal from './committees/legal/legal'
import Ussc from './committees/ussc/ussc'
import Hnato from './committees/h-nato/h-nato'
import Hunsc from './committees/hunsc/hunsc'
import Conference from './conference/conference'
import Faq from './faq/faq'
import Jcc from './committees/jcc/jcc'

function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/applications" element={<Comingsoon />} />
                <Route path="/our-team" element={<Comingsoon />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/ecofin" element={<Ecofin />} />
                <Route path="/unwomen" element={<Unwomen />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/ussc" element={<Ussc />} />
                <Route path="/jcc" element={<Jcc />} />
                <Route path="/historicalnato" element={<Hnato />} />
                <Route path="/hunsc" element={<Hunsc />} />
                <Route path="/conference" element={<Conference />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </>
    )
}

export default App