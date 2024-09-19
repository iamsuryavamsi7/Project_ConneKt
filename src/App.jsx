import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Web_Design_Service from './Components/Web_Design_Service'

function App() {

	return (

		<>

			<BrowserRouter>
			
				<NavBar />

				<Routes>

					<Route index path='/' element={<Home />} />
					<Route path='/dive-in/web-design-service' element={<Web_Design_Service />} />

				</Routes>

				<Footer />

			</BrowserRouter>
	
		</>
	
	)

}

export default App
