import styled from 'styled-components'
import React from 'react'

const Rightside = () => {
    return (
        <Container>
            <FollowCard>
              <Title>
                  <h2>Add to your feed</h2>
                  <img src="/images/feed-icon.svg" alt="" />
              </Title>

              <FeedList>
                  <li>
                      <a href ='#'>
                          <Avatar/>
                      </a>

                      <div>
                          <span>LinkedIn</span>
                          <button>Follow</button>
                      </div>
                  </li>
                  <li>
                      <a>
                          <Avatar/>
                      </a>

                      <div>
                          <span>Video</span>
                          <button>Follow</button>
                      </div>
                  </li>

            
              </FeedList>

            <Recommendation>
                View all recommendation
                <img src= '/images/right-icon.svg' alt= ''/>
            </Recommendation>
            </FollowCard>

            <BannerCard>
                <img src="https://pbs.twimg.com/media/DlxDLEWW0AA7cfh.jpg" 
                    alt="" 
                />
            </BannerCard>
        </Container>
     )
 }
 
 const Container = styled.div`
    grid-area: 'Rightside';
 `
 const FollowCard = styled.div`
 text-align: center;
 overflow: hidden;
 margin-bottom: 8px;;
 background-color: #fff;
 border-radius:5px;
 position: relative;
 border:none;
 box-shadow:0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 /20%);
 padding: 12px;
 
 `
 const Title = styled.div`
 display: inline-flex;
 align-items: center;
 justify-content: space-between;
 font-size:16px;
 width: 100%;
 color: rgba(0,0,0,0.6);

 
 `

 const FeedList = styled.ul`
 margin-top: 15px;
 li{
     display: flex;
     align-items: center;
     margin: 12px 0;
     position: relative;
     font-size: 14px;

     &>div{
         display: flex;
         flex-direction: column;
     }

     button{
         background-color: transparent;
         color: rgba(0,0,0,0.6);
         box-sizing:border-box;
         justify-content: center;
         display: inline-flex;
         align-items: center;
         box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
         padding: 10px;
         border-radius: 16px;
         font-weight:600;
         max-height: 32px;
         max-width: 480px;
         text-align: center;
         outline:none;

     }
 }
 
 `

 const Avatar = styled.div`
background-image : url('https://flyclipart.com/thumb2/hashtag-icon-icon-851710.png');
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 48px;
height: 48px;
margin-right: 8px;
 
 
`
const Recommendation = styled.a``

const BannerCard = styled(FollowCard)`
img{
    width: 100%;
    height: 100%;
}
`


export default Rightside
