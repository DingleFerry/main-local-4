import {useAddress, useMetamask, useWalletConnect} from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";
import { getDisplayName } from 'next/dist/shared/lib/utils';


const BrownlistSubmit: NextPage = () => {
    const connectMM = useMetamask();
    const connectWC = useWalletConnect();
    const address = useAddress();
    console.log(address);

    const jotFormURL = "https://form.jotform.com/223266588147061";

    const showHamMenu = async() => {
        const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
        hamMenu.classList.add('Home_hamMenuDropdownActive__iT_P6')
    }

    const hideHamMenu = async() => {
        const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
        hamMenu.classList.remove('Home_hamMenuDropdownActive__iT_P6')
    }

    const reload = async() => {
        location.reload();
    }

    const bList = brownList.brownList;
    const gList = goldList.goldList;
    const pList = platinumList.platinumList;

    const showBlistConnectMsg = async() => {
        const arr: string[] = bList;
        const arr1: string[] = gList;
        const arr2: string[] = pList;

        const str = address?.toString();

        const brownHit = arr.find((element) => {
        return element.toLocaleLowerCase() === str?.toLowerCase();
        });

        const goldHit = arr1.find((element) => {
        return element.toLocaleLowerCase() === str?.toLowerCase();
        });

        const platHit = arr2.find((element) => {
        return element.toLocaleLowerCase() === str?.toLowerCase();
        });

        const noBlistMsg = (document.getElementById('noBlistMsg') as HTMLElement);
        const yesBlistMsg = (document.getElementById('yesBlistMsg') as HTMLElement);
        const noConnectedWal = (document.getElementById('noConnectedWal') as HTMLElement);

        const submitForm = (document.getElementById('newForm') as HTMLElement);

        const blistMsgTitle = (document.getElementById('blistMsgTitle') as HTMLElement);
        const blistMsgPar = (document.getElementById('blistMsgPar') as HTMLElement);

        if (address === undefined){
            noConnectedWal.classList.remove('Home_displayNone__dFRW_');
        } else if (address !== undefined && brownHit !== undefined || goldHit !== undefined || platHit !== undefined){
            noConnectedWal.classList.add('Home_displayNone__dFRW_');
            yesBlistMsg.classList.remove('Home_displayNone__dFRW_');
        } else {
            noConnectedWal.classList.add('Home_displayNone__dFRW_');
            noBlistMsg.classList.remove('Home_displayNone__dFRW_');
            submitForm.classList.remove('Home_newFormDisabled__wK_Qj');
            submitForm.classList.add('Home_newForm__ijaKq');
        };
    }

    showBlistConnectMsg();


  return (
    <>
    <div className={styles.container}>

        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        <div className={styles.mainNav}>

        <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src='https://ik.imagekit.io/ts6bfcsg8/all-black-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455908' alt='Black BMA logo' width={80} height={80} />
              </a>
            </Link>
          </div>

          <div className={styles.pageLinksCont}>
            <div className={styles.pageLinkCont}>
              <Link href="/nonsense">
                <a><h3 className={styles.pageLink}>BS</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="/swirled-cup">
                <a><h3 className={styles.pageLink}>Swirled Cup</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont} onClick={reload}>
              <Link href="">
                <a><h3 className={styles.pageLinkBrown}>Submit for BL</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="https://themushroomcolonel.editorx.io/stinky-shop">
                <a><h3 className={styles.pageLink}>Shop</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="/">
                  <a><h3 className={styles.pageLink}>My Trophies</h3></a>
              </Link>
            </div>
          </div>

          <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
              <a target="_blank">
                <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-black-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456279' alt='Black Twitter logo' width={45} height={45} />
              </a>
            </Link>
          </div>

        </div>


        <div className={styles.hamNav}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-black-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456279' alt='Black Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo}>
                <Link href="/">
                    <a>
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/all-black-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455908' alt='Black BMA logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamMenu} onClick={showHamMenu}>
                <Link href="">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/hamburger-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518138' alt='Black hamburger icon' width={40} height={40} />
                </Link>
            </div>
        </div>

        <div id="hamMenu" className={styles.hamMenuDropdown}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-white-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456050' alt='White Twitter logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo}>
                <Link href="/">
                    <a>
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/all-white-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455900' alt='White BMA logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.closeBtn} onClick={hideHamMenu}>
                <Link href="">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/close-btn-f5f5f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518301' alt='Close Menu button' width={45} height={45} />
                </Link>
            </div>
            <div className={styles.hamLinks}>
                <ul className={styles.hamLinksUL}>
                    <li className={styles.hamLink}>
                      <Link href="/">
                          <a><h3 className={styles.hamLink}>My Trophies</h3></a>
                      </Link>
                  </li>
                  <li className={styles.hamLinkBrownLI} onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLinkBrown}>Submit for BL</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/swirled-cup">
                          <a><h3 className={styles.hamLink}>Swirled Cup</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/nonsense">
                          <a><h3 className={styles.hamLink}>BS</h3></a>
                      </Link>
                  </li>
                </ul>
            </div>
        </div>

        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}


        <div className={styles.formTitleCont}>
            <h1 className={styles.formTitle}>Brownlist Submission Form</h1>
        </div>

        <div className={styles.formCont}>
            <div id="noConnectedWal" className={styles.displayNone}>
                <h1>No address has been detected.</h1>
                <p>Connect first to confirm your address is not already on the Brownlist:</p>
                {/* <button className={styles.myTrophiesBlist}><Link href="/"><a>My Trophies</a></Link></button> */}
                <div className={styles.connectBtnsCont}>
                    <button onClick={connectMM} className={styles.connectBtnMM} id={styles.connectBtn}>MetaMask</button>
                    <button onClick={connectWC} className={styles.connectBtnWC} id={styles.connectBtn}>WalletConnect</button>
                </div>

                <div className={styles.connectBtnsContMob}>
                    <button onClick={connectMM} className={styles.connectMMMob}>
                        <Image className={styles.connectMMMobImage} src='https://ik.imagekit.io/ts6bfcsg8/metamask.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670620948034' alt='MetaMask connect button' width={40} height={40} />
                    </button>
                    <button onClick={connectWC} className={styles.connectBtnWCMob}>
                        <Image className={styles.connectMMMobImage} src='https://ik.imagekit.io/ts6bfcsg8/wallet-connect-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670620949435' alt='WalletConnect connect button' width={40} height={40} />
                    </button>
                </div>
            </div>
            <div id="noBlistMsg" className={styles.displayNone}>
                <h1 id="blistMsgTitle">The connected address is not on The Brownlist.</h1>
                <p id="blistMsgPar">Fill out the form below to request placement, though interviews are not guaranteed. If you really want a spot, do not wait for us to reach out; make memes, show up in the comments, attend Karaoke nights ... just do whatever it takes to MAKE YOURSELF KNOWN.</p>
                {/* <button className={styles.myTrophiesBlist}><Link href="/"><a>My Trophies</a></Link></button> */}
            </div>
            <div id="yesBlistMsg" className={styles.displayNone}>
                <h1>The connected address is already on the Brownlist.</h1>
                <p>This form is for MFs NOT on the Brownlist that would like to request placement. Click here to view your trophies and verify your status:</p>
                <button className={styles.myTrophiesBlist}><Link href="/"><a>My Trophies</a></Link></button>
            </div>

          <iframe id='newForm' className={styles.newFormDisabled} title="Jotform Embed" src={jotFormURL}></iframe>
        </div>

    </div>
    </>
  );
};

export default BrownlistSubmit;
