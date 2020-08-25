import React, { useState } from 'react';
import map from 'lodash/map';
import moment from 'moment';

const listAction = [
	{
		id: 1,
		title: 'My name is',
		icon: 'mdi-account-outline',
		key: 'name',
	},
	{
		id: 2,
		title: 'My birthday is',
		icon: 'mdi-calendar-month-outline',
		key: 'dob',
	},
	{
		id: 3,
		title: 'My address is',
		icon: 'mdi-map-legend',
		key: 'location',
	},
	{
		id: 4,
		title: 'My phone number is',
		icon: 'mdi-phone',
		key: 'phone',
	},
	{
		id: 5,
		title: 'My cell is',
		icon: 'mdi-lock',
		key: 'cell',
	},
];

export default ({ profile }) => {
	const [actionActive, setActionActive] = useState(3);
	const [titleContent, setTitleContent] = useState('My address is');
	const [key, setKey] = useState('location');

	const convertContent = (key) => {
		switch (key) {
			case 'name':
				return `${profile.name.first} ${profile.name.last}`;
			case 'dob':
				return moment(Number(profile.dob)).format('DD/MM/YYYY');
			case 'location':
				return `${profile.location.city} ${profile.location.state}`;
			case 'phone':
				return profile.phone;
			case 'cell':
				return profile.cell;
			default:
				return ``;
		}
	};

	return (
		<div className="card">
			<div className="card__header header">
				<div className="header__avatar">
					{profile.picture && <img alt="orangedog690" src={profile.picture} />}
				</div>
			</div>
			<div className="card__content content">
				<div className="content__profile profile">
					<p className="profile__title">{titleContent}</p>
					<p className="profile__content">{convertContent(key)}</p>
				</div>
				<div className="content_action action">
					{map(listAction, (action) => {
						return (
							<div
								className={action.id === actionActive ? `action__item active` : 'action__item'}
								key={action.id}
								title={action.title}
								onClick={() => {
									setActionActive(action.id);
									setTitleContent(action.title);
									setKey(action.key);
								}}
							>
								<span className={`mdi ${action.icon}`}></span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
