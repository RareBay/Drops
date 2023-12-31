import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ConnectWallet, Web3Button, useContract, useAddress } from "@thirdweb-dev/react";
import ResponsiveMenu from 'react-responsive-navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from "../components/drop"




import Script from "dangerous-html/react";

const Home = (props) => {
  const user = useAddress()
  const notify = () => toast("CHECK YOUR WALLET FOR CONFIRMATION");
  const _contents = [
    {
      recipient: user, // first recipient address
      amount: "50000000000000000", // number of tokens in wei units
    }
  ];
  const _tokenAddress = "0x3a202ee3e212c2884e9ec7001488caf14119754e"; // Address of the ERC20 token being airdropped
  const _tokenOwner = "0x91e7dbb1e86f2df9a9509a407363ba93aec01bf5"; // Address of the owner of the tokens being airdropped

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Whales</title>
          <meta
            name="description"
            content="BITCOIN-LIKE AND FULLY DECENTRALIZED PROTOCOL LAYER MADE BY WHALES, FOR WHALES. BUILT ON CORE."
          />
          <meta property="og:title" content="Whales" />
          <meta
            property="og:description"
            content="BITCOIN-LIKE AND FULLY DECENTRALIZED PROTOCOL LAYER MADE BY WHALES, FOR WHALES. BUILT ON CORE."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/623c6193-afa9-4fbb-88fd-c9f03988ed43/bd3dfeac-3220-4500-9d68-0b54b0a1008f?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <section className="home-hero">
          <video   
          style={
            {position: "fixed"}
          }
            src="https://bafybeidbia5v5q7toetkgqgomh6ujr5owibp4efgnc5b72panpjhsrk3jq.ipfs.nftstorage.link/ipfs/bafybeidbia5v5q7toetkgqgomh6ujr5owibp4efgnc5b72panpjhsrk3jq/Untitled.mp4"
            loop
            muted
            preload="none"
            autoPlay
            playsInline
            className="home-video"
          ></video>
          <header data-thq="thq-navbar" className="home-navbar">
            <img
              alt="image"
              src="/iuterdry-200w.webp"
              className="home-branding"
            />

<ResponsiveMenu
  menuOpenButton={
    <div className="home-hamburger">
    <svg viewBox="0 0 1024 1024" className="home-icon">
      <path d="M810.667 725.333h-298.667c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h298.667c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      <path d="M810.667 426.667h-298.667c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h298.667c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      <path d="M810.667 128h-298.667c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h298.667c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      <path d="M320 810.667c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"></path>
      <path d="M320 512c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"></path>
      <path d="M320 213.333c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"></path>
    </svg>
  </div>
  }
        menuCloseButton={  <div className="home-hamburger">
       x
      </div>}
      changeMenuOn="500px"
      largeMenuClassName="large-menu-classname"

        menu={
          <div
          style={{
            color: "white",
            width: "100%",
            display: "flex",
            gap: "15px",
            fontSize: "12px",
            backgroundColor: "black",
            padding: "8%",
            marginRight: "5%",
            marginTop: "1%"

          }}
                
          >
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
            <a href="https://boredwhalesyachtclub.org/#mint">Mint</a>
          </div>
        }
      />
          </header>
          <div className="home-hero-content">
            <div className="home-header-container">
              <div className="home-header">
                <h3 className="home-heading">
                  <span>WHALES TOKEN</span>
                </h3>
              </div>
              <div className="mints-container42">
      </div>  
            </div>
            {!user? (
              <>
                 <button>
              <span>
                
                <ConnectWallet
              theme={"dark"}
              btnTitle={"CONNECT WALLET"}
              switchToActiveChain={true}
              modalSize={"compact"}
              welcomeScreen={{
                title: "WHALES RULE",
                subtitle: "CONNECT YOUR WHALE WALLET",
              }}
              style={{background: "transparent",
            textShadow: "gray 1px 1px 3px",
            border: "white 1px solid",
            color: "white"
            }}
                />
              </span>
            </button>
              </>
            ) : (
<>
<Page id="airdrop" />
<p style={{color: "gray", fontStyle: "italic", fontSize: "12px", margin: "1%"}}>
               WHLS Airdrop will be done to All Eligible Members, Eligibility Depends on Community Contributions and NFT Ownership.
               1 WHLS Every 48 Hrs for New Members and Whale NFT Owners.
              </p>
                        

</>
            )}
         
          </div>
        
        </section>
       
        <h1 id="tokenomics" className="home-heading1">
          WHALENOMICS
        </h1>
        <div id="tokenomics" className="home-stat">
          <h1 className="home-text06">21,000,000</h1>
          <span className="home-text07">100%</span>
          <span className="home-text08">
            MAXIMUM SUPPLY OF WHALES TOKEN. THIS VALUE IS CREDITED FOR BEING
            INFLATION PROOF JUST LIKE BITCOIN, SMART contract ownership will be
            renounced, and no further tokens will ever be minted or burnt.
            21000000 FOREVER.
          </span>
        </div>
        <div className="home-stats">
          <div className="home-stat1">
            <h1 className="home-text09">14,700,000</h1>
            <span className="home-text10">70%</span>
            <span className="home-text11">
              HALF OF WHALES TOKEN IS ALLOCATED FOR ECOSYSTEM FUND. THIS
              INCLUDES STAKING, P2E and gaming. STAKED REWARDS ARE HALVED EVERR
              66 WEEKS UNTIL ALL TOKENS ARE FULLY DISTRIBUTED. ANY UNCLAIMABLE
              REWARD WITHIN THIS TIME IS LOCKED. P2E GAMING REWARDS WILL BE
              UNLOCKED AFTER EACH HALVING (66 WEEKS). FUNDS WILL BE USED AS
              ECOSYSTEM UTILITY.
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text12">2,100,000</h1>
            <span className="home-text13">10%</span>
            <span className="home-text14">
              LIQUIDITY LOCKED. 10% OF TOKENS WILL BE LOCKED UNTIL HALVING HAS
              ENDED WITH 100% OF TOKENS IN CIRCULATING SUPPLY. THIS PERIOD WILL
              DEPEND ON REWARDS COLLECTED WHILE HALVING AFTER 66 WEEKS
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text15">2,100,000</h1>
            <span className="home-text16">10%</span>
            <span className="home-text17">
              TEAM ALLOCATION. THIS NUMBER OF TOKENS WILL BE LOCKED FOR 132
              WEEKS AND 1% OF IT UNLOCKED EVERY MONTH UNTIL PERIOD COMPLETES.
              ALL PROJECT FOUNDERS WILL SHARE THIS AMOUNT IN RATIO OF
              CONTRIBUTION, DECIDED BY THE DAO.
            </span>
          </div>
          <div className="home-stat4">
            <h1 className="home-text18">2,100,000</h1>
            <span className="home-text19">10%</span>
            <span className="home-text20">
              MARKETING, AIRDROP, presales AND PARTNERSHIPS. 
            </span>
          </div>
        </div>
        <div id="roadmap" className="home-steps">
          <h1 className="home-text21">ROADMAP</h1>
          <span className="home-text22">
            <span>
              our ROADMAP IS SIMPLE. TO THE MOON AND FAR BEYOND. WHALES ONBOARD.
            </span>
            <br></br>
          </span>
          <div className="home-container02">
            <div className="home-step">
              <div className="home-container03">
                <div className="home-line"></div>
                <div className="home-container04">
                  <svg viewBox="0 0 1024 1024" className="home-icon09">
                    <path d="M616.149 181.12l-104.149 60.16-104.149-60.16 82.603-47.189c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM170.667 585.941l106.667 61.611v120.747l-85.12-48.64c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581zM746.667 768.299v-120.747l106.667-61.611v96.725c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333zM809.003 291.328l-297.003 171.819-297.003-171.819 107.093-61.227 168.576 97.408c13.611 7.851 29.739 7.381 42.709 0l168.533-97.365zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l136.448-77.995c9.301-1.835 17.536-6.699 23.637-13.483l138.624-79.232c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-139.008-79.403c-6.272-7.125-14.635-11.776-23.595-13.525l-136.405-77.952c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-136.533 77.995c-8.96 1.749-17.323 6.4-23.595 13.483l-138.624 79.232c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l139.008 79.445c6.059 6.827 14.293 11.691 23.637 13.483l136.405 77.952c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-106.667-60.928v-194.133c0-15.701-8.491-29.44-21.333-36.949l-170.667-98.603v-123.093zM554.667 877.995v-340.949l298.667-172.757v123.093l-170.667 98.603c-13.611 7.851-21.248 22.059-21.333 36.949v194.133z"></path>
                  </svg>
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container05">
                <h1 className="home-text25">JULY 2023</h1>
                <span className="home-text26">
                  <span>LAUNCH STAKING POOLS FOR bwyc ecosystem,</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container06">
                <div className="home-line2"></div>
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon11">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="home-line3"></div>
              </div>
              <div className="home-container08">
                <h1 className="home-text29">JULY-NOV 2023</h1>
                <span className="home-text30">
                  <span>
                    BUILD UTILITIES SUCH AS A MARKETPLACE, WHALECARDS AS A PASS
                    TO GATED COMMUNITY AND DAO GOVERNANCE FOR BWYC DAO
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-container09">
                <div className="home-line4"></div>
                <div className="home-container10">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
                    <path d="M384 0l-384 512h384l-256 512 896-640h-512l384-384z"></path>
                  </svg>
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container11">
                <h1 className="home-text33">NOV-DEC 2023</h1>
                <span className="home-text34">
                  <span>
                    BUILD RAREBAY DEX, MEMBERS CAN STAKE, TRADE UTILITY NFT,
                    INSCRIBE ORDINALS, SWAP NFT AND READY SELLS. 
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-container12">
                <div className="home-line6"></div>
                <div className="home-container13">
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
                  </svg>
                </div>
                <div className="home-line7"></div>
              </div>
              <div className="home-container14">
                <h1 className="home-text37">JANUARY 2024</h1>
                <span className="home-text38">
                  <span>EXPLORE INFINITY.</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="home-text41">ECOSYSTEM</h1>
        <div className="home-pricing">
          <div className="home-card">
            <img
              alt="image"
              sizes="(min-width: 768px) 800px, 480px"
              src="/xcxczxz-800h.webp"
              srcSet="/xcxczxz-800h.webp 800w, /xcxczxz-mobile.webp 480w"
              className="home-image"
            />
            <span className="home-text42">
              RAREbay dex is a next generation nft marketplace where members can
              TRACK AND inscribe rare sats, SWAP NFT FOR TOKENS DIRECLY WITHOUTH
              THE NEED FOR LISTING AND WAIT FOR SOMEONE TO BUY. RAREBAY WILL BE
              PERMISSIONLESS AND ANYONE CAN TRACK, INSCRIBE AND TRADE NFT
              WITHOUT KYC. BUT RARE COIN OWNERS NEED TO BE VERIFIED TO EARN
              REWARDS IN POOLS.
            </span>
            <a
              href="https://rarebay.xyz"
              rel="noreferrer noopener"
              className="home-link03 button"
            >
              RAREBAY
            </a>
          </div>
          <div className="home-card1">
            <img
              alt="image"
              src="sdgzshls;al.png"
              className="home-image1"
            />
            <span className="home-text43">
              WHALESDAO. MEMBERS CAN DELEGATE WHALES TOKENS AND MAKE PROPOSALS
              0R VOTE ON PROPOSALS IN WHALES DAO, WITH WHALECARD AS PASS. AT
              LEAST 100 IS NEEDED FOR DELEGATION IN VOTING CONTRACT. TREASURY OF
              WHALES AND NEW WHITEPAPER CHAPTER WILL BE DECENTRALIZED, WITH ALL
              Decisions MADE MY THE COMMUNITY.
            </span>
            <a
              href="https://boredwhalesyachtclub.org"
              rel="noreferrer noopener"
              className="home-link04 button"
            >
              WHALESDAO
            </a>
          </div>
          <div className="home-card2">
            <img
              alt="image"
              src="/iuterdry-200w.webp"
              className="home-image2"
            />
            <span className="home-text44">
              STAKING AND P2E GAMING. MEMBERS CAN EARN TOKEN REWARDS BY STAKING
              BWYC NFT AND NPC WOJAK NFT. REWARDS ARE HALVED EVERY 66 WEEKS
              UNTILL ALL TOKENS HAVE BEEN DISTIBUTED AND IN CIRCULATION. ALL
              WHALES SEASON CAN BE STAKED AND RAREBAY NFT CAN BE STAKED AND ALL
              ADMIN RIGHTS FOR ALL POOLS RENOUNCED to allow autonomous
              distribution. 
            </span>
            <a
              href="https://rarebay.xyz/pools"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05 button"
            >
              POOLS
            </a>
          </div>
        </div>
        <button className="home-button1 button">
          <span>
            <a href="https://boredwhalesyachtclub.org/#mint">MINT WHALES NFT</a>
            <br></br>
          </span>
        </button>
        <div className="home-footer">
          <div className="home-container15">
            <img alt="image" src="/core-200h.webp" className="home-image3" />
            <img alt="image" src="/btc2-200w.webp" className="home-image4" />
            <img
              alt="image"
              src="/sdgzshls;al.png"
              className="home-image5"
            />
          </div>
          <div className="home-content">
            <div className="home-main">
              <div className="home-branding1">
                <img
                  alt="image"
                  src="/iuterdry-200w.webp"
                  className="home-image6"
                />
                <span className="home-text48">WHALES TOKEN</span>
              </div>
              <div className="home-links">
                <div className="home-column">
                  <div className="home-list">
                    <a href="#about" className="home-link06">
                      About
                    </a>
                    <a href="#tokenomics" className="home-link07">
                      TOKENOMICS
                    </a>
                    <a href="#roadmap" className="home-link08">
                      ROADMAP
                    </a>
                  </div>
                </div>
                <div className="home-column1">
                  <span className="home-header1">Social</span>
                  <div className="home-list1">
                    <a
                      href="https://twitter.com/whales_token"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link09"
                    >
                      Twitter
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="home-bottom">
              <span className="home-text49">
                © 2023 WHALES - All rights reserved
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container17">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 900px;
            display: flex;
            marginTop: 10%;
            z-index: 1;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-video {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 1500px;
            filter: opacity(0.4) blur(5px);
            height: 100%;
            margin: auto;
            object-fit: cover;
          }
          .home-navbar {
            width: 1701px;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .home-branding {
            width: 64px;
            height: 65px;
            object-fit: cover;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hamburger {
            width: 173px;
            cursor: pointer;
            height: 18px;
            display: flex;
            color: white;
            transition: 0.3s;
            align-items: center;
            position: relative;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-hamburger:hover {
            opacity: 0.5;
          }
          .home-icon {
            fill: #d9d9d9;
            width: 142px;
            height: 30px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
            width: 1919px;
            height: 244px;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            backdrop-filter: blur(10px);
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.87);
          }
          .home-nav {
            width: 1118px;
            height: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-hero-content {
            gap: var(--dl-space-space-fiveunits);
            width: 885px;
            height: 701px;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            border-color: #8a8a8a;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-header-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 1200px;
            height: 647px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            font-size: 70px;
            max-width: 790px;
            background: -webkit-linear-gradient(#fff6, rgba(0, 0, 0, 0.5));
            font-style: normal;
            text-align: center;
            font-weight: 500;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-caption11 {
            color: rgb(255, 255, 255);
            width: 702px;
            font-size: 12px;
            font-style: italic;
            max-width: 600px;
            text-align: center;
            line-height: 15px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            width: 702px;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            line-height: 36px;
          }
          .home-button {
            border-color: #b7b7b7;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #0a0a0a;
          }
          .home-heading1 {
            color: rgb(128, 128, 128);
            textShadow: "orange 1px 1px 10px"
          }
          .home-stat {
            width: 713px;
            height: 204px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text06 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
          }
          .home-text07 {
            color: #beff50;
            font-size: 2rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text08 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stats {
            width: 100%;
            height: 369px;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: 1%;
            max-width: var(--dl-size-size-maxwidth);
            padding-left: var(--dl-space-space-twounits);
            padding-right: 39px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat1 {
            width: 317px;
            height: 269px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text09 {
            color: rgb(255, 124, 76);
            font-size: 1.5rem;
          }
          .home-text10 {
            color: rgb(208, 208, 208);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text11 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
          }
          .home-stat2 {
            width: 299px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text12 {
            color: rgb(255, 124, 76);
            font-size: 1.5rem;
          }
          .home-text13 {
            color: rgb(222, 222, 222);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text14 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
          }
          .home-stat3 {
            width: 276px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text15 {
            color: rgb(255, 124, 76);
            font-size: 1.5rem;
          }
          .home-text16 {
            color: rgb(222, 222, 222);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text17 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
          }
          .home-stat4 {
            width: 223px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text18 {
            color: rgb(255, 124, 76);
            font-size: 1.5rem;
          }
          .home-text19 {
            color: rgb(222, 222, 222);
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text20 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
          }
          .home-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-text21 {
            color: #393939;
            font-size: 3rem;
          }
          .home-text22 {
            color: var(--dl-color-gray-700);
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon09 {
            width: 24px;
            height: 24px;
          }
          .home-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container05 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 27px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            color: rgb(150, 150, 150);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text26 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon11 {
            fill: #2b2b2b;
            width: 24px;
            height: 24px;
          }
          .home-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container08 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            color: rgb(154, 154, 154);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text30 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon13 {
            fill: #004bd6;
            width: 24px;
            height: 24px;
          }
          .home-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container11 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text33 {
            color: rgb(206, 206, 206);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text34 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon15 {
            width: 24px;
            height: 24px;
          }
          .home-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container14 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text37 {
            color: #9e9e9e;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text38 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .home-text41 {
            color: rgb(170, 170, 170);
            font-size: 3em;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-card {
            height: 251px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #bebebe;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: #000000;
          }
          .home-image {
            width: 200px;
            object-fit: cover;
          }
          .home-text42 {
            color: #aaaaaa;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
          }
          .home-link03 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            border-color: #adadad;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-link03:hover {
            transform: scale(1.02);
          }
          .home-card1 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-white);
          }
          .home-image1 {
            width: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text43 {
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
          }
          .home-link04 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-link04:hover {
            transform: scale(1.02);
          }
          .home-card2 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #dbdbdb;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: #080808;
          }
          .home-image2 {
            width: 200px;
            object-fit: cover;
          }
          .home-text44 {
            color: rgb(199, 199, 199);
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
          }
          .home-link05 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            border-color: #d4d4d4;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-link05:hover {
            transform: scale(1.02);
          }
          .home-button1 {
            border-color: #b7b7b7;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #0a0a0a;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: 88px;
            flex-direction: column;
          }
          .home-container15 {
            gap: 10%;
            width: 100%;
            height: 139px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-image3 {
            width: 82px;
            height: 80px;
            object-fit: cover;
          }
          .home-image4 {
            width: 72px;
            height: 77px;
            object-fit: cover;
          }
          .home-image5 {
            width: 88px;
            height: 79px;
            object-fit: cover;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .home-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-branding1 {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image6 {
            width: 78px;
            height: 80px;
            object-fit: cover;
          }
          .home-text48 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link06 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link06:hover {
            opacity: 0.5;
          }
          .home-link07 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link07:hover {
            opacity: 0.5;
          }
          .home-link08 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link08:hover {
            opacity: 0.5;
          }
          .home-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link09 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link09:hover {
            opacity: 0.5;
          }
          .home-link10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text49 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          .home-container17 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .home-video {
              width: 1599px;
              height: 1072px;
            }
          }
          @media (max-width: 1200px) {
            .home-video {
              width: 1199px;
              height: 1087px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-video {
              width: 990px;
              height: 1065px;
            }
            .home-navbar {
              width: 990px;
              height: 54px;
            }
            .home-branding {
              width: 53px;
              height: 51px;
            }
            .home-hero-content {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text06 {
              text-align: center;
            }
            .home-stats {
              width: 100%;
              padding-right: 21px;
            }
            .home-stat1 {
              width: 206px;
            }
            .home-text09 {
              text-align: center;
            }
            .home-stat2 {
              width: 228px;
            }
            .home-text12 {
              text-align: center;
            }
            .home-stat3 {
              width: 198px;
            }
            .home-text15 {
              text-align: center;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text21 {
              text-align: center;
            }
            .home-text22 {
              text-align: center;
            }
            .home-text42 {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-link03 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text43 {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-link04 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text44 {
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-link05 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-content {
              border-top-width: 0px;
            }
            .home-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-branding1 {
              width: 100%;
            }
            .home-image6 {
              width: 77px;
              height: 80px;
            }
          }
          @media (max-width: 767px) {
            .home-video {
              width: 766px;
              height: 1097px;
            }
            .home-navbar {
              width: 766px;
              height: 64px;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-hero-content {
              width: 527px;
              padding-right: 0px;
            }
            .home-heading {
              font-size: 60px;
            }
            .home-text07 {
              text-align: center;
            }
            .home-stats {
              height: 769px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text13 {
              text-align: center;
            }
            .home-text16 {
              text-align: center;
            }
            .home-text19 {
              text-align: center;
            }
            .home-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container02 {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .home-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container03 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container05 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text25 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text26 {
              text-align: left;
            }
            .home-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container06 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container08 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text29 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text30 {
              text-align: left;
            }
            .home-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container09 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container11 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text33 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text34 {
              text-align: left;
            }
            .home-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container12 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container14 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text37 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text38 {
              text-align: left;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-card {
              width: 100%;
              height: 606px;
              flex-direction: column;
            }
            .home-text42 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-card1 {
              width: 100%;
              flex-direction: column;
            }
            .home-text43 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-card2 {
              width: 100%;
              flex-direction: column;
            }
            .home-text44 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              height: 769px;
              padding-left: 0px;
            }
            .home-video {
              top: -5px;
              right: -4px;
              width: 461px;
              height: 1057px;
              margin: auto;
            }
            .home-navbar {
              width: 301px;
            }
            .home-branding {
              width: 48px;
              height: 56px;
              padding-top: 11px;
              padding-left: 4px;
              padding-right: var(--dl-space-space-halfunit);
            }
            .home-hamburger {
              width: 72px;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero-content {
              gap: var(--dl-space-space-threeunits);
              width: 301px;
              height: 717px;
            }
            .home-header-container {
              width: 268px;
            }
            .home-heading {
              font-size: 36px;
            }
            .home-caption {
              width: 321px;
              height: 286px;
              font-size: 16px;
              line-height: 24px;
            }
            .home-button {
              text-align: center;
            }
            .home-stat {
              width: 338px;
              height: 204px;
            }
            .home-text06 {
              width: 320px;
              font-size: 2.5rem;
            }
            .home-text08 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .home-stats {
              width: 305px;
              height: 1034px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-stat1 {
              width: 277px;
            }
            .home-stat2 {
              width: 269px;
            }
            .home-stat3 {
              width: 278px;
            }
            .home-stat4 {
              width: 293px;
            }
            .home-steps {
              width: 370px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text22 {
              color: var(--dl-color-gray-700);
              font-size: 1.15rem;
            }
            .home-container02 {
              padding-left: 0px;
            }
            .home-container04 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-line1 {
              border-style: dotted;
            }
            .home-container05 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text25 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container07 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-container08 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text29 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container10 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-container11 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text33 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container13 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-container14 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text37 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-pricing {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-card {
              width: 331px;
              height: 749px;
              border-color: #cecece;
              border-style: solid;
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: transparent;
            }
            .home-text42 {
              color: #cecece;
              text-align: left;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-link03 {
              border-color: #ffffff;
            }
            .home-card1 {
              width: 323px;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-text43 {
              text-align: left;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-card2 {
              width: 326px;
              border-color: #c8c8c8;
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: #000000;
            }
            .home-text44 {
              color: #c5c5c5;
              text-align: left;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-link05 {
              border-color: #9b9b9b;
              border-width: 1px;
            }
            .home-button1 {
              width: 264px;
              text-align: center;
            }
            .home-footer {
              width: 408px;
              align-items: center;
            }
            .home-container15 {
              width: 367px;
              height: 161px;
              display: flex;
              overflow-x: scroll;
              padding-top: var(--dl-space-space-unit);
              padding-left: 40px;
              padding-right: 43px;
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-main {
              align-items: center;
            }
            .home-links {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              flex-direction: column;
            }
            .home-list {
              align-items: center;
            }
            .home-bottom {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;