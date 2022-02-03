import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'

export const SecondPage = () => <h1>Home Page</h1>

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<HomePage />}>
					<Route path='expenses' element={<SecondPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
