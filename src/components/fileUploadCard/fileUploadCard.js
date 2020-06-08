import React from 'react';
import logo from './logo.svg';
import docIcon from './icon-document.svg';
import folIcon from './icon-folder.svg';
import uplIcon from './icon-upload.svg';
import './fileUploadCard.css';

function FileCard() {
	return (
		<div className=" w-4/6 card-container flex h-56 bg-dark-blue rounded-lg top-right-rounded shadow-2xl sm:ml-5 sm:mr-5 sm:w-5/6">
			<div className="self-center flex-col pl-10">
				<div className="pb-6">
					<img src={logo} alt="logo" />
				</div>

				<div className="flex flex-row">
					<div className="icon p-3 mr-4 rounded-lg  bg-darker-blue flex justify-center">
						<img src={docIcon} alt="document-icon" className="self-center" />
					</div>
					<div className="icon p-3 mr-4 rounded-lg  bg-darker-blue flex justify-center">
						<img src={folIcon} alt="folder-icon" className="" />
					</div>
					<div className="icon p-3 rounded-lg  bg-darker-blue flex justify-center">
						<img src={uplIcon} alt="upload-icon" className="self-center" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FileCard;
