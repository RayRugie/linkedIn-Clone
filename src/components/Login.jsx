import styled from 'styled-components'
//import {connect} from 'react-redux'
import {useDispatch } from 'react-redux'
import {signInApi} from '../actions/index'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'




const Login = () => {
    const dispatch = useDispatch()
    const cakes = useSelector(state => state.userState.user)
    return (
       <Container>
           {cakes && <Redirect to= '/home'/>} 
           <Nav>
               <a href='/'>
                   <img src= './images/login-logo.svg' alt=''/>
               </a>

               <div>
                   <Join>Join now</Join>
                   <SignIn>Sign In</SignIn>
               </div>
           </Nav>

           <Section>
               <Hero>
                   <h1>Welcome to your Professional Community</h1>

                   <img src='./images/login-hero.svg' alt="" />
                </Hero>
               <Form>
                   <Google onClick={() => dispatch(signInApi())}>
                       <img src='images/google.svg' alt=''/>
                       Sign in with Google
                   </Google>
               </Form>
            </Section>
       </Container>
    )
}

// const mapStateToProps = (state) => {
//     return{}
// }

// const mapDispatchToProps = (dispatch) => {
//    return(
//     {
//         signIn: () => dispatch(signInApi())
//         }
//    ) 
// } 
const Container = styled.div`
padding: 0px;

`
const Nav = styled.nav`
max-width: 1120px;
margin:auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;


& > a {
    width: 135px;
    height: 34px;
    @media(max-width: 768px){|
        img{padding: 0 5px;}
    }
}

`
const Join = styled.a`
font-size: 16px;
padding: 10px 2px;
text-decoration: none;
border-radius:4px;
color: rgba(0,0,0,0.6);
margin-right: 12px;

&:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration:none;
    cursor:pointer;
}
`
const SignIn = styled.a`
box-shadow: inset 0 0 1px #0a56c2;
color: #0a65c2;
border-radius: 24px;
transition-duration: 165ms;
font-size: 16px;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0,0,0,0);

&:hover{
    background-color : rgba(112,181,249,0.15);
    color: #0a65c2;
    text-decoration:none;
    cursor:pointer;
}
`
const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    position: relative;
    padding: 60px 0;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1128px;
    margin:auto;

@media(max-width:768px){
margin: auto;
min-height: 0px;
}
`
const Hero = styled.div`
width: 100%;
h1{
    padding-bottom: 0;
    font-size: 55px;
    width: 55%;
    color: #2977c9;
    font-weight: 600;
    line-height: 70px;
    @media(max-width:768px){
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    }
}

img{
    
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right:-150px;
    @media(max-width: 768px){
        top: 230px;
        width: initial;
        position: initial;
        height: initial;
    }
}

`

const Form = styled.div`
margin-right: 10px;
margin-top: 100px;
width: 420px;

@media(max-width: 768px){
    margin-top: 20px;

}

`

const Google = styled.button`

display: flex;
justify-content: center;
align-items: center;
height: 56px;
background-color: #fff;
border-radius: 20px;
width: 100%;
box-shadow: inset 0 0 0 1px rgb(0 0 0/60%),
inset 0 0 0 2px rgb(0 0 0/60%) inset 0 0 0 1px rgb(0 0 0/60%);

vertical-align: middle;
z-index: 0;
transition-duration : 167ms;
font-size: 16px;
color : rgba(0,0,0,0.6);


&:hover{
    background-color: rgba(207,207,207,0.25);
    cursor: pointer;
    color: rgba(0,0,0,0.75);
}
`
export default Login


 