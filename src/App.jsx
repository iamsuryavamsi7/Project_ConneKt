import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Web_Design_Service from './Components/Web_Design_Service'
import Web_App_Development from './Components/Web_App_Development'
import Web_App_Maintenance from './Components/Web_App_Maintenance'
import Search_Engine_O from './Components/Search_Engine_O'
import Social_Media_Ads from './Components/Social_Media_Ads'
import WA_Solutions from './Components/WA_Solutions'
import CallEngagingSolutions from './Components/CallEngagingSolutions'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {

	return (

		<>

			<BrowserRouter>

				<Routes>

					<Route index path='/' element={<Home />} />
					<Route path='/dive-in/web-design-service' element={<Web_Design_Service />} />
					<Route path='/dive-in/web-development-service' element={<Web_App_Development />} />
					<Route path='/dive-in/web-maintenance-service' element={<Web_App_Maintenance />} />
					<Route path='/dive-in/search-engine-optimization' element={<Search_Engine_O />} />
					<Route path='/dive-in/social-media-advertisements' element={<Social_Media_Ads />} />
					<Route path='/dive-in/whatsapp-api-solutions' element={<WA_Solutions />} />
					<Route path='/dive-in/call-engaging-solutions' element={<CallEngagingSolutions />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />

				</Routes>

			</BrowserRouter>
	
		</>
	
	)

}

export default App
