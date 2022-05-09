import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import fetchVehicle from '../../HTTP/fetchVehicle'
import { GlobalFiltersContext } from '../PageWrapper/PageWrapper'
import { priceRangeOptions } from '../SearchOfferForm/selectOptions/PriceRangeOptions'
import { yearOptions } from '../SearchOfferForm/selectOptions/YearOptions'
import Card from './Card'
import { CardsWrapper } from './ResultsCards.styles'


const getFilteredData = (data, filters)=>{
    if(!filters) return []
    
    return data
    //Filter Brand
    .filter(vehicle=>{
        if(filters.brand === "") return true
        return filters.brand === vehicle.Make
    })
    //Filter Model
    .filter(vehicle=>{
        if(filters.model === "") return true
        return filters.model === vehicle.Model
    })
    //Filter Version
    .filter(vehicle=>{
        if(filters.version === "") return true
        return filters.version === vehicle.Version
    })
    //Filter Year
    .filter(vehicle=>{
        if(filters.year === "") return true

        const selectedYears = yearOptions.find(option=>option.label === filters.year)
        return (
            selectedYears.fab === vehicle.YearFab &&
            selectedYears.model === vehicle.YearModel
        )
    })
    //Filter Price
    .filter(vehicle=>{
        if(filters.priceRange === "") return true

        const selectedRange = priceRangeOptions.find(option=>option.label === filters.priceRange)
        const price = parseFloat(vehicle.Price)/1000
        debugger
        return (
            !selectedRange.max? price > selectedRange.min:
            !selectedRange.min? price <= selectedRange.max:
            price > selectedRange.min && price <= selectedRange.max
        )
    })

}
const Page = ({pageNum, loadedPages, setLoadedPages, LoadMorePages, setMaximumPages}) =>{
    const [stopLoading, setStopLoading]= useState(false)
    const {filters} = useContext(GlobalFiltersContext)
    const {isLoading, error, data} = 
    useQuery(`vehicles - page ${pageNum}`, 
    async () => await fetchVehicle(pageNum),
    {onSuccess: (data)=>{
        if(data.length === 0){
            setStopLoading(true)
            setMaximumPages(prev=>{
                if(pageNum < prev) return pageNum
                return prev
            })
        }
        setLoadedPages(prev=>[...prev, pageNum])
    }}
    )
    const highestNumPage = loadedPages.reduce((total, current)=>{
        if(current>total) return current
        return total
    },0)

    

    const thePreviousPageHasLoaded = loadedPages.includes(pageNum)
    
    return<>{thePreviousPageHasLoaded && filters &&<>
    {isLoading && 'loading'}
    {data && getFilteredData(data, filters).map(item => <Card key={item.ID} {...item}/>) }
    
    {highestNumPage === pageNum && !stopLoading && <LoadMorePages/>}
    </>}
    </> 
} 

const ResultsCards = () => {
    const [maximumPages, setMaximumPages] = useState(5)
    const [loadedPages, setLoadedPages] = useState([])

    const LoadMorePages = ()=>{
        const onClick = ()=>{
            setMaximumPages(prev=> prev+5)
        }
        return <button {...{onClick}}>Load More</button>
    }

    const Pages = (()=>{
        const newArray = []

        for(let i = 0; i < maximumPages; i++ ){
            newArray.push(<Page key={i+1} pageNum={i+1}  {...{loadedPages, setLoadedPages, LoadMorePages, setMaximumPages}}/>)
        }
        return newArray
    })()


  return (
    <CardsWrapper>
        {Pages}
    </CardsWrapper>
  )
}

export default ResultsCards