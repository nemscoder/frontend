import axios from "axios"

const getAllDriver = async () => {
    const response = await axios.get(
		`${process.env.REACT_APP_API_URL}/api/drivers`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
            withCredentials: false,
		}
	)

    return response.data
}

export const overTakeDriver = async (driverId: number) => {
    const response = await axios.post(
		`${process.env.REACT_APP_API_URL}/api/drivers/${driverId}/overtake`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
            withCredentials: false,
		}
	)

    return response.data
}

export default getAllDriver
