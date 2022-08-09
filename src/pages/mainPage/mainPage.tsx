import { useState, useEffect } from 'react'
import getAllDriver, { overTakeDriver } from '../../services/driversData'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import type { FC } from "react"
import '../../Drivers.css'

const MainPage: FC = () => {
    const [drivers, setDrivers] = useState<object>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getAllDriver().then(results => {
            results.sort((a:any,b:any) => a.place - b.place)
            setDrivers(results)
            setLoading(false)
        })
    }, [])

    const buttonClickHandler = (driverId: number) => {
        overTakeDriver(driverId).then((results) => {
            results.sort((a:any,b:any) => a.place - b.place)
            setDrivers(results)
        })
    }

    if(loading) return null
    
    return (<div className='main'>
        <Box className="main-title">Formula 1 results:</Box>
        <div>{Object.values(drivers).map((item, i) => {
            return (
                <Box className={`mainbox`} key={i}>
                    <Box>
                        <Box
                            component="img"
                            sx={{
                                height: 'auto',
                                width: 100,
                            }}
                            src={`${process.env.REACT_APP_API_URL}${item.imgUrl}`}
                        />
                    </Box>
                    <Box className='driver-flag-box'>
                        <Box
                            component="img"
                            className='driver-flag'
                            src={`https://countryflagsapi.com/png/${item.country.toLowerCase()}`}
                        />
                    </Box>
                    <Box className="driver-name">{item.firstname} {item.lastname}</Box>
                    <Box className="driver-team">{item.team}</Box>
                    <Box>
                        <Button disabled={item.place === 1} variant="contained" onClick={() => buttonClickHandler(item.id)}>Overtake</Button>
                    </Box>
                </Box>
            )
        })}</div>
    </div>)
}

export default MainPage
