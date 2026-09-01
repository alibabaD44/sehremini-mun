import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Comingsoon from './comingsoon/comingsoon'

function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/applications" element={<Comingsoon />} />
                <Route path="/our-team" element={<Comingsoon />} />
                <Route path="/committees" element={<Comingsoon />} />
                <Route path="/conference" element={<Comingsoon />} />
                <Route path="/schedule" element={<Comingsoon />} />
                <Route path="/faq" element={<Comingsoon />} />
            </Routes>
        </>
    )
}

export default App