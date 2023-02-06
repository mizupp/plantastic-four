// Avatar selection component
import './styles.css'
import Create from '../../pages/Create'

import React, { useContext, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image20,
	image21,
	image22, 
	image23,
	image24,
	image25,
	image26,
	image27,
	image28,
	image29,
	image30,
	image31,
	image32
} from "../../assets/img"

const AvatarSelection = () => {
	const dispatch = useDispatch()
	const [avatars, setAvatars] = useState([
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
		image14,
		image15,
		image16,
		image17,
		image18,
		image19,
		image20,
		image21,
		image22, 
		image23,
		image24,
		image25,
		image26,
		image27,
		image28,
		image29,
		image30,
		image31,
		image32
	])

	const [selectedAvatar, setSelectedAvatar] = useState({image1});
	const [testData, setTestData] =useState()

	const onSelect = (a) => {
		setSelectedAvatar(a)
		updateAvatar(a)
		setTestData('Testing link with avatar selection')
		
	}

	const updateAvatar = (a) => {
		// const playerInfo = user;
		// playerInfo.icon = a;
		// dispatch(updateLocalUser(playerInfo))
		
	}

	console.log(selectedAvatar)
	console.log(testData)

	return (
		<>
			<div className='avatar-selection'>
				<div className="flex flex-col items-center  gap-2 bg-#43A047-200 rounded-lg p-2 drop-shadow-lg text-black">
					<div className='title'>Please choose your plant's avatar:</div>
					<div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 text-6xl">
						{avatars.map((a, i) => (
							<>
							<img
							// onLoad={onLoad}
								src={a}
								id={a}
								key={i}
								placeholder={image2}
								className={`h-20 w-20 ${
									a == selectedAvatar ? "opacity-20" : "opacity-100"
								}`}
								onClick={() => onSelect(a)}
							/>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default AvatarSelection;
