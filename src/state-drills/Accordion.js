import React from 'react'

// export default class Accordion extends React.Component {
//     static defaultProps = {
//         sections: [
//             {
//               title: 'Section 1',
//               content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//             },
//             {
//               title: 'Section 2',
//               content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//             },
//             {
//               title: 'Section 3',
//               content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//             },
//           ]
//     };

//     state = {
//       expanded: false
//     }

//     handleClick = () => {
//       this.setState({
//         expanded: !this.state.expanded
//       })
//     }

//     render() {
//       if(this.state.expanded) {
//         return <ul>
//         {this.props.sections.map((el) =>
//         <li><button onClick={() => this.handleClick(el.content)}>{el.title}</button>
//         <p>{el.content}</p></li>)}
//         </ul>
//       } else if(!this.state.expanded)
//         return(
//             <ul>
//                 {this.props.sections.map((el) =>
//                 <li><button onClick={() => this.handleClick(el.content)}>{el.title}</button></li>)}
//             </ul>
//         )
//     }
// }



export default class Accordion extends React.Component {
  static defaultProps = {
      sections: [
          {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
          },
          {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
          },
        ]
  };

  state = {
    content: ''
  }

  handleClick = (change) => {
    this.setState({
      content: change
    })
  }

  render() {
      return <ul>
      {this.props.sections.map((el) =>
      <li><button onClick={() => this.handleClick(el.content)}>{el.title}</button>
      </li>)}
      <p>{this.state.content}</p>
      </ul>
}
}
