import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function CovidApi() {

    const [data, setData] = useState("")
    const [tarih, setTarih] = useState("")
    
    useEffect(()=> {
        axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
        .then((res)=> setData(res.data[tarih]))
        .catch((error)=>console.log(error))
    },[data,tarih])
  
    return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 mx-auto mt-4'>
                    <h2 className='text-center dislay-3'>
                        TÜRKİYE GÜNCEL COVİD İSTATİKLERİ
                    </h2>
                </div>
                <input type='' className='form-control text-center' placeholder='GG/AA/YYYY' onChange={(e) => setTarih(e.target.value)}>

                </input>
                <table>

                    <thead>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col'>Günlük Test Sayısı</th>
                            <th scope='col'>Günlük Hasta Sayısı</th>
                            <th scope='col'>Toplam Hasta Sayısı</th>
                            <th scope='col'>Günlük Vefat Sayısı</th>
                            <th scope='col'>Toplam Vefat Sayısı</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className= {data === undefined ? "bg-danger" : "bg-success"}>
                            <th scope='row'>1</th>
                            <td>{data === undefined ? "Veri Bekleniyor..." : data.tests}</td>
                            <td>{data === undefined ? "Veri Bekleniyor..." : data.patients}</td>
                            <td>{data === undefined ? "Veri Bekleniyor..." : data.totalPatients}</td>
                            <td>{data === undefined ? "Veri Bekleniyor..." : data.deaths}</td>
                            <td>{data === undefined ? "Veri Bekleniyor..." : data.totalDeaths}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default CovidApi