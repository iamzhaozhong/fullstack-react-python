import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import axiosInstance from '../Services/AxiosConfig';

const DeleteButton = styled.div`
	position: relative;
	top: 90vh;
	left: 38%;
	.btn {
		border: 0;
		background-color: grey;
		padding: 18px 30px;
		font-size: 14px;
		line-height: 1.5;
		text-transform: uppercase;
		letter-spacing: 0.0875em;
		font-weight: 500;
		color: #fff;
		outline: 0;
		transition: background-color 300ms cubic-bezier(0.215, 0.61, 0.355, 1),
			color 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.btn:focus,
	.btn:active,
	.btn:hover {
		background-color: black;
		color: white;
	}
`;
export default function Delete() {
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete(`admin/delete/` + id)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
				navigate({
					pathname: '/',
				});
				window.location.reload();
			});
	};
	return (
		<DeleteButton>
			<button onSubmit={handleSubmit} className='btn'>
				Click Here to Delete the Post
			</button>
		</DeleteButton>
	);
}
