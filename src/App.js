import React from 'react';
import './App.css';
import FileCard from './components/fileUploadCard/fileUploadCard';
import StorageCard from './components/dataStorageCard/dataStorageCard';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<FileCard />
				<StorageCard />
			</header>
		</div>
	);
}

export default App;
