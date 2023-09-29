import './cta.css'

const CTA = () => {
  const redirectToWebsite = () => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.href = 'https://openai.com/';
  };
  
  return (
    <div className='gpt3__cta section__padding' >
      <div className='gpt3__cta_register'>
        <p>
          Request Early Access to Get Started
        </p>
        <h3>Register today & start exploring the endless posssibilities</h3>

      </div>
     
        <button onClick={redirectToWebsite} type="button">Get Started</button>
    
      
    </div>
  )
}

export default CTA
