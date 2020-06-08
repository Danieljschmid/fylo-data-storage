import React from 'react';
import './dataStorageCard.css';

function storageCard() {
	return (
		<div className="card-container storage-card flex flex-col justify-center w-4/6 sm:mr-5 sm:ml-5">
			<div className="white-box-2 bg-white rounded-lg w-48 ml-auto mr-auto -mb-10
       flex flex-row justify-center pt-2 pb-2 z-10">
				<div className="font-raleway text-4xl font-bold">185</div>
				<div className="font-raleway text-grayish-blue text-xs font-bold ml-4 flex mt-auto mb-auto">GB LEFT</div>
			</div>

			<div className="flex h-40 bg-dark-blue rounded-lg mt-5  shadow-2xl flex justify-center ">
				<div className=" mt-8 flex-col sm:w-3/4 sm:mt-10">
					<p className="text-white text-sm font-raleway text-center font-nomral sm:text-left">
						You've used <strong>835 GB</strong> of your storage
					</p>
					<div className="flex flex-row">
						<div class=" w-full bg-grey-light mt-2 h-5 bg-darker-blue rounded-full p-1">
							<div class="gradient-background leading-none py-1 text-center text-white w-7/12 h-full rounded-full flex content-center justify-end">
								<div className="h-3 w-3 mr-1 bg-white rounded-full -mt-1" />
							</div>
							<div className="w-full flex justify-between ">
								<p className="text-xs font-raleway text-white mt-2 font-bold">0 GB</p>
								<p className="text-xs font-raleway text-white mt-2 font-bold">1000 GB</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="white-box bg-white rounded-lg w-6/12 ml-auto mr-auto -mt-8 flex flex-row justify-center pt-2 pb-2">
				<div className="font-raleway text-4xl font-bold">185</div>
				<div className="font-raleway text-grayish-blue text-xs font-bold ml-4 flex mt-auto mb-auto">GB LEFT</div>
			</div>
		</div>
	);
}

export default storageCard;
