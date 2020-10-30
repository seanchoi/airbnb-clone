import React from 'react'
import './SearchPage.css';
import {Button} from "@material-ui/core"
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 30 guest </p>
                <h1>Stays nearby</h1>
                <Button variant="outline">Cancellation flexibility</Button>
                <Button variant="outline">Entire Place</Button>
                <Button variant="outline">Price</Button>
                <Button variant="outline">Instant Book</Button>
                <Button variant="outline">More filters</Button>
            </div>
            <SearchResult
                img="https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/09/19/nz-space-190918.jpg?itok=d6SxE8lZ&timestamp=1537321974"
                location="Private room in center of London"
                title="Pretty room and spacious Edwardian House"
                description="8 guests · 3 bedrooms · 3 beds · 2 bathsKitchen · Washer · Dishwasher · Dryer"
                star={4.73}
                price="$200/night"
                total="$800 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQO4NdA9FbKxzh7fZMVMHo-8ZwPKqQTgBC8wA&usqp=CAU"
                location="Private room in center of London"
                title="Pretty room and spacious Edwardian House"
                description="8 guests · 3 bedrooms · 3 beds · 2 bathsKitchen · Washer · Dishwasher · Dryer"
                star={4.73}
                price="$150/night"
                total="$600 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRILUMsdCmYILuFrI4Dhl6xCiQky2Um2P99Rg&usqp=CAU"
                location="Private room in center of London"
                title="Pretty room and spacious Edwardian House"
                description="8 guests · 3 bedrooms · 3 beds · 2 bathsKitchen · Washer · Dishwasher · Dryer"
                star={4.73}
                price="$180/night"
                total="$720 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlYvMKFd1Uz2xM6FAt6Xx8aOdqXaQG6l3QPw&usqp=CAU"
                location="Private room in center of London"
                title="Pretty room and spacious Edwardian House"
                description="8 guests · 3 bedrooms · 3 beds · 2 bathsKitchen · Washer · Dishwasher · Dryer"
                star={4.73}
                price="$110/night"
                total="$440 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6Eet123mDgSrBXuP5lJSFZ-aGqA45DxzGag&usqp=CAU"
                location="Private room in center of London"
                title="Pretty room and spacious Edwardian House"
                description="8 guests · 3 bedrooms · 3 beds · 2 bathsKitchen · Washer · Dishwasher · Dryer"
                star={4.73}
                price="$190/night"
                total="$760 total"
            />
        </div>
    )
}

export default SearchPage
