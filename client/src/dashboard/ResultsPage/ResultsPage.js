// EXAMPLE COMPONENT

// import React, { Component } from 'react';
// import './ResultsPage.css';

// import API from '../utils/API';

// class Feed extends Component {
//   state = {
//     tweet: '',
//   };

//   componentDidMount() {
//     this.populateFeed();
//   }

//   populateFeed = () => {
//     API.getResultsBUSINESS()
//       .then((res) =>
//         this.setState({
//           tweet: res.data,
//         })
//       )
//       .catch((err) => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h1 className='text-center'>Your Tweet Results: {this.state.tweet}</h1>
//       </div>
//     );
//   }
// }

// export default Feed;
