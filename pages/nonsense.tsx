import type { NextPage } from "next";
import Link from 'next/link';
import Image from 'next/image'
import styles from "../styles/Home.module.css";


const Nonsense: NextPage = () => {

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

  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>

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
            <div className={styles.pageLinkCont} onClick={reload}>
              <Link href="">
                <a><h3 className={styles.pageLinkWhite}>BS</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="/swirled-cup">
                <a><h3 className={styles.pageLink}>Swirled Cup</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="/brownlist-submit">
                <a><h3 className={styles.pageLink}>Submit for BL</h3></a>
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
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/close-btn-f5f5f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518301' alt='Close menu button' width={45} height={45} />
                </Link>
            </div>
            <div className={styles.hamLinks}>
                <ul className={styles.hamLinksUL}>
                  <li>
                      <Link href="/">
                          <a><h3 className={styles.hamLink}>My Trophies</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/brownlist-submit">
                          <a><h3 className={styles.hamLink}>Submit for BL</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/swirled-cup">
                          <a><h3 className={styles.hamLink}>Swirled Cup</h3></a>
                      </Link>
                  </li>
                  <li className={styles.hamLinkWhiteLI} onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLinkWhite}>BS</h3></a>
                      </Link>
                  </li>
                </ul>
            </div>
        </div>

        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}


        <div className={styles.sectCont}>
          <div className={styles.sect1}>
            <h1 className={styles.busModel}>Business Model:<br></br>Make Dope <span className={styles.busModelShit}>Shit.</span></h1>
          </div>

          <div className={styles.sect2}>
            <h1 className={styles.licenseHeader}>BMA Licensing Agreement</h1><br></br>
            <p className={styles.licenseBody}>
              When you acquire a BMA NFT, you own all personal property rights to the token underlying the BMA NFT (the right to freely sell or transfer the NFT), but you do not own the associated artwork, brand, or other intellectual property (IP) associated with that NFT, except for the specific licensed rights set forth below:<br></br><br></br>
              For the duration of its presence in your wallet, you may use your BMA NFT for any Commercial Use. This means, you can make an album cover with it, use it as your monetized YouTube channel&apos;s PFP, display it in your fancy schmancy third-wave coffee shop ... you can even make and sell derivatives, just as long as you do not use any BMA Trademarks, logos, or other IP. You own your piece, not our identity.<br></br><br></br>
              So please, make some dope shit and show us on Twitter!! But know that we plan on doing precisely the same thing. By purchasing or minting a BMA NFT, you hereby acknowledge and agree that the BMA Founders reserve all commercial rights and may modify, create derivative works of, or update any BMA artwork, image or works of authorship associated with a specific BMA NFT until the end of time.
            </p>
          </div>

          <div className={styles.sect3}>
            <h1 className={styles.warningHeader}>And one more thing...</h1><br></br>
            <p className={styles.warningBody}>
              We will NEVER ask you for your seed phrase or private key.
              <br></br>&<br></br>
              We will ALWAYS give advanced notice on our official Twitter and this website of any upcoming mint or release of any kind.
              Web 3 is still a wild place, MF! Be smart out there and DYOR!!
            </p>
          </div>
        </div>

      </main>
    </div>
    </>
  );
};

export default Nonsense;