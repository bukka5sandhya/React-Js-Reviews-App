import './index.css'
import {Component} from 'react'


class ReviewCarousel extends Component{
    state={activeReviewIndex: 0}
    
    onClickRightArrow =  () => {
        const {activeReviewIndex} = this.state
        const {reviewsList} = this.props

        if(activeReviewIndex < reviewsList.length -1){
            this.setState(prevState => ({
                activeReviewIndex: prevState.activeReviewIndex+1

            }))
        }

    }

    renderActiveReview = review => {
        const {imageUrl,userName,companyName,description} = review
        return(
            <div className="review-container">
                <img src={imageUrl} alt={userName}/>
                <p className="username">{userName}</p>
                <p className="company">{companyName}</p>
                <p className="description">{description}</p>
            </div>
        )
    }
    onClickLeftArrow = () => {
        const {activeReviewIndex} = this.state

        if(activeReviewIndex > 0){
            this.setState(prevState => ({
                activeReviewIndex:prevState.activeReviewIndex-1

            }))
        }
    }
    
    render(){
        const {activeReviewIndex} = this.state
        const {reviewsList} = this.props 
        const activeReviewDetails = reviewsList[activeReviewIndex]
        return(
            <>
            <div className="app-container">
                <h1 className="heading">Reviews</h1>
                <div className="carousel-container">
                    <button 
                    className="arrow-button"
                    type="button"
                    onClick = {this.onClickLeftArrow}
                    testid = "leftArrow">
                        <img
                         src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                         alt="left arrow"
                         />
                    </button>
                    {this.renderActiveReview(activeReviewDetails)}
                    <button
                    type="button"
                    className="arrow-button"
                    onClick = {this.onClickRightArrow}
                    testid = "rightArrow">
                        <img
                        src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                        alt="right arrow"
                        />
                    </button>

                </div>

            </div>
            </>
        )
    }
}
export default ReviewCarousel