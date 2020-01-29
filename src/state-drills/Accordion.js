import React from 'react'

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

    render() {
        return(
            <ul>{this.props.sections.map((section)) => {
            <li type="button"> Title = {section.title} </li> 
        }
            </ul>
        )
    }

}
