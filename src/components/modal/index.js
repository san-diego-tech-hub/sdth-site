// import React from 'react'
// import ReactDOM from 'react-dom'

export default () => 'hi'

// const modalRoot = document.getElementById('modal')

// class Modal extends React.Component {
//   componentDidMount() {
//     document.body.style.overflow = 'hidden'
//     document.documentElement.style.overflow = 'hidden'
//     // document.body.style.height = '100%';
//   }
//   componentWillUnmount() {
//     document.body.style.overflow = 'auto'
//     document.documentElement.style.overflow = 'scroll'
//   }

//   render() {
//     return ReactDOM.createPortal(
//       <div
//         style={{
//           background: 'red',
//           height: '100%',
//           position: 'absolute',
//           top: '0',
//           bottom: '0',
//           left: '0',
//           right: '0',
//           display: 'grid',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'rgba(0,0,0,0.3)',
//         }}
//       >
//         <div
//           style={{
//             padding: 20,
//             background: '#fff',
//             borderRadius: '2px',
//             display: 'inline-block',
//             minHeight: '300px',
//             margin: '1rem',
//             position: 'relative',
//             minWidth: '300px',
//             boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//             justifySelf: 'center',
//           }}
//         >
//           <div onClick={this.props.close}>Close</div>

//           {this.props.children}
//         </div>
//       </div>,
//       modalRoot
//     )
//   }
// }

// export default Modal
