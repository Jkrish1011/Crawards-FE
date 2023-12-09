import { useContext, useEffect } from 'react'

const Banner = () => {
    /*
        To call the 
    */
  

  useEffect(() => {
    fetch('/api/twitter')
    .then(response => {
      console.log('response');
      console.log(response);
      return response
    })
    .then(data => {
      console.log('Tweets:', data);
      // Handle the data as required
    })
    .catch(error => console.error('Error:', error));
    
  }, []);

  return (
    <div>

    </div>
  )
}

export default Banner