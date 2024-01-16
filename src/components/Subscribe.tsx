
export const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe__title">Subscribe to get the Latest News</div>
        <div className="subscribe__desc">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</div>
        <div className="subscribe__email">
            <input type="email" placeholder='Enter your email addres' className="subscribe__field" />
            <button  className=" btn subscribe__button"> <img src="public/assets/icons/teleg.svg" alt="massage" />Subscribe</button>
          </div>
    </div>
  )
}
