import Title from './Title';
import Close from './Close';

const getHeader = (CREATE) => {
	return {
		uuid: `create-modal-${CREATE.uuid}__header`,
		type: 'div',
		children: [
			Title(CREATE),
			Close(CREATE),
		],
	};
};

export default getHeader;
