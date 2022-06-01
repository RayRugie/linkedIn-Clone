import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux'
import { signOutApi } from '../actions'

const Header = () => {
    const auth = useSelector(state => state.userState.user)

    const dispatch = useDispatch()
    return (
      <Container>
          <Content>
            <Logo> 
                <a href='/home'>
                    <img src='images/home-logo.svg' alt=''/>
                </a>
            </Logo>

            <Search>
                <div>
                    <input type = 'text' placeholder='Search'/>
                </div>
                <SearchIcon>
                <img src='./images/search-icon.svg'/>
                </SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className ='active'>
                        <a href='#'>
                            <img src="./images/nav-home.svg" alt="" />
                            <span>Home</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a href='#'>
                            <img src="./images/nav-network.svg" alt="" />
                            <span>My Network</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='#'>
                            <img src="./images/nav-jobs.svg" alt="" />
                            <span>Jobs</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='#'>
                            <img src="./images/nav-messaging.svg" alt="" />
                            <span>Messaging</span>
                        </a>
                    </NavList>

                    <NavList>
                        <a href='#'>
                            <img src="./images/nav-notifications.svg" alt="" />
                            <span>Notifications</span>
                           
                        </a>
                    </NavList>

            

                    <User>
                        <a> 
                            {
                                auth && auth.photoURL ? <img src = {auth.photoURL}/> : 
                                <img src="/images/user.svg"  className= 'icon'alt="" />
                            
                            }
                            <span>Me</span>
                            <img src="/images/down-icon.svg" alt="" />
                        </a>

                        <SignOut onClick = {dispatch(signOutApi())}>
                            <a>
                                Sign Out
                            </a>
                        </SignOut>
                    </User>
                    <Work>
                        <a>
                            <img src="/images/nav-work.svg" alt="" />
                            <span>Work <img src="/images/down-icon.svg" alt="" /></span>
                            
                        </a>
                    </Work>
                </NavListWrap>
            </Nav>
          </Content>
      </Container>
    )
}

const Container = styled.div`
background-color: white;
border-bottom : 1px solid rgba(0,0,0,0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
`

const Content = styled.div`
display: flex;
align-items : center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px;
`

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`
const Search = styled.div`
opacity: 1;
flex-grow: 1;
position : relative;

& > div{
    max-width: 200px;
    input{
        border: none;
        box-shadow:none;
        background-color: #eef3f8;
        color: rgba(0,0,0,0.8);
        width: 216px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 15px;
        height: 34px;
        outline: none;
        vertical-align: text-top;

    }
}
`

const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-item : center;
`

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media(max-width: 768px){
        position: fixed; 
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }

`

const NavListWrap = styled.ul`
display: flex;
flex-wrap: no-wrap;
list-style-type: none;

.active{
    span::after{
        content: '';
        transform :scaleX(1);
        border-bottom: 2px solid var(--white, #fff);
        bottom: 0;
        left:0;
        position:absolute;
        transition: 0.2s ease-in-out;
        width: 100%;

        border-color:rgba(0,0,0,0.9);


    }
}
`

const NavList = styled.li`
display: flex;
align-items: center;

a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction:column;
    font-size: 12px;
    justify-content; center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span{
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }

    @media(max-width : 768px){
        min-width: 70px;
    }
}


&:hover, &:active {
    a{
        span{
            color: rgba(0,0,0,0.9);
        }
    }
}

`
const SignOut = styled.div`
position: absolute;
top: 45px;
background: white;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 0.4s;
text-align: center;
display:none;
`
const User = styled(NavList)`
margin-top: 5px;
a > svg{
    width: 24px;
    border-radi
}
a> img{
    width:24px;
    height: 24px;
    border-radius: 50%;
}



span{
    display: flex;
    align-items:center;
}
&:hover{
    ${SignOut} {
        display: flex;
        align-items: center;
        justify-content:center;
    }
}

`;

const Work = styled(User)`
border-left: 1px solid rgba(0,0,0,0.6);
`;




export default Header
