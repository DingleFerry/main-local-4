import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";



const countries = ["USA","Indonesia","Nigeria","UK","Canada","Germany","India","Netherlands","Australia","Mexico","Philippines","France","New Zealand","Singapore","Turkey","Colombia","Italy","Spain","Hong Kong","Switzerland","Argentina","Austria","Russia","Vietnam","China","Morocco","Pakistan","Belgium","Greece","Belarus","Croatia","Hungary","Portugal","Seychelles","Brazil","Denmark","Guatemala","Ireland","Japan","Malaysia","Thailand","Bangladesh","Cameroon","Czechia","Estonia","Papua New Guinea","Slovakia","South Africa","Syria","Algeria","Bahrain","Chile","El Salvador","Georgia","Grenada","Iran","Israel","Nepal","Norway","Qatar","Saudi Arabia","Senegal","South Korea","Sweden","Taiwan","Tunisia","Venezuela"]
const pointTotals = [566,401,186,75,50,42,30,30,29,27,26,17,13,13,13,12,12,11,9,8,7,7,7,7,6,6,6,5,5,4,4,4,4,4,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const totalsSum = pointTotals.reduce((partialSum, a) => partialSum + a, 0);


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


const SwirledCup: NextPage = () => {
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
            <div className={styles.pageLinkCont} onClick={reload}>
              <Link href="">
                <a><h3 className={styles.pageLinkBlue}>Swirled Cup</h3></a>
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
                    <li className={styles.hamLink}>
                      <Link href="/">
                          <a><h3 className={styles.hamLink}>My Trophies</h3></a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/brownlist-submit">
                          <a><h3 className={styles.hamLink}>Submit for BL</h3></a>
                      </Link>
                  </li>
                  <li className={styles.hamLinkBlueLI} onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLinkBlue}>Swirled Cup</h3></a>
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


        <div className={styles.cupTitleCont}>
            <h1 className={styles.cupTitle}>Swirled Cup Leaderboard</h1>
        </div>


        <div className={styles.listsCont}>

            <div className={styles.winListCont}>
                <ol className={styles.winListOL}>
                    <li className={styles.worldLi}>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/world.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511156' alt='World Icon' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> World</span><span className={styles.usersTotal}>{totalsSum}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/united-states.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511351' alt='1st Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[0]}</span><span className={styles.usersTotal}>{pointTotals[0]}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/indonesia.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634510720' alt='2nd Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[1]}</span><span className={styles.usersTotal}>{pointTotals[1]}</span></li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/nigeria-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511028' alt='3rd Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[2]}</span><span className={styles.usersTotal}>{pointTotals[2]}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/united-kingdom-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511212' alt='4th Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[3]}</span><span className={styles.usersTotal}>{pointTotals[3]}</span>
                    </li>
                    <li>
                        <Image src='https://ik.imagekit.io/ts6bfcsg8/canada.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670634511072' alt='5th Place Flag' className={styles.countryImg} width={60} height={60} />
                        <span className={styles.countryName}> {countries[4]}</span><span className={styles.usersTotal}>{pointTotals[4]}</span>
                    </li>
                </ol>
            </div>

            <div className={styles.loseListSect}>
                <div className={styles.loseListCont}>
                    <h1>The Underdogs</h1>
                    <ol start={6} className={styles.loseListOL}>
                        <li>6. {countries[5]}<span className={styles.usersTotal}>{pointTotals[5]}</span></li>
                        <li>7. {countries[6]}<span className={styles.usersTotal}>{pointTotals[6]}</span></li>
                        <li>8. {countries[7]}<span className={styles.usersTotal}>{pointTotals[7]}</span></li>
                        <li>9. {countries[8]}<span className={styles.usersTotal}>{pointTotals[8]}</span></li>
                        <li>10. {countries[9]}<span className={styles.usersTotal}>{pointTotals[9]}</span></li>
                        <li>11. {countries[10]}<span className={styles.usersTotal}>{pointTotals[10]}</span></li>
                        <li>12. {countries[11]}<span className={styles.usersTotal}>{pointTotals[11]}</span></li>
                        <li>13. {countries[12]}<span className={styles.usersTotal}>{pointTotals[12]}</span></li>
                        <li>14. {countries[13]}<span className={styles.usersTotal}>{pointTotals[13]}</span></li>
                        <li>15. {countries[14]}<span className={styles.usersTotal}>{pointTotals[14]}</span></li>
                        <li>16. {countries[15]}<span className={styles.usersTotal}>{pointTotals[15]}</span></li>
                        <li>17. {countries[16]}<span className={styles.usersTotal}>{pointTotals[16]}</span></li>
                        <li>18. {countries[17]}<span className={styles.usersTotal}>{pointTotals[17]}</span></li>
                        <li>19. {countries[18]}<span className={styles.usersTotal}>{pointTotals[18]}</span></li>
                        <li>20. {countries[19]}<span className={styles.usersTotal}>{pointTotals[19]}</span></li>
                        <li>21. {countries[20]}<span className={styles.usersTotal}>{pointTotals[20]}</span></li>
                        <li>22. {countries[21]}<span className={styles.usersTotal}>{pointTotals[21]}</span></li>
                        <li>23. {countries[22]}<span className={styles.usersTotal}>{pointTotals[22]}</span></li>
                        <li>24. {countries[23]}<span className={styles.usersTotal}>{pointTotals[23]}</span></li>
                        <li>25. {countries[24]}<span className={styles.usersTotal}>{pointTotals[24]}</span></li>
                        <li>26. {countries[25]}<span className={styles.usersTotal}>{pointTotals[25]}</span></li>
                        <li>27. {countries[26]}<span className={styles.usersTotal}>{pointTotals[26]}</span></li>
                        <li>28. {countries[27]}<span className={styles.usersTotal}>{pointTotals[27]}</span></li>
                        <li>29. {countries[28]}<span className={styles.usersTotal}>{pointTotals[28]}</span></li>
                        <li>30. {countries[29]}<span className={styles.usersTotal}>{pointTotals[29]}</span></li>
                        <li>31. {countries[30]}<span className={styles.usersTotal}>{pointTotals[30]}</span></li>
                        <li>32. {countries[31]}<span className={styles.usersTotal}>{pointTotals[31]}</span></li>
                        <li>33. {countries[32]}<span className={styles.usersTotal}>{pointTotals[32]}</span></li>
                        <li>34. {countries[33]}<span className={styles.usersTotal}>{pointTotals[33]}</span></li>
                        <li>35. {countries[34]}<span className={styles.usersTotal}>{pointTotals[34]}</span></li>
                        <li>36. {countries[35]}<span className={styles.usersTotal}>{pointTotals[35]}</span></li>
                        <li>37. {countries[36]}<span className={styles.usersTotal}>{pointTotals[36]}</span></li>
                        <li>38. {countries[37]}<span className={styles.usersTotal}>{pointTotals[37]}</span></li>
                        <li>39. {countries[38]}<span className={styles.usersTotal}>{pointTotals[38]}</span></li>
                        <li>40. {countries[39]}<span className={styles.usersTotal}>{pointTotals[39]}</span></li>
                        <li>41. {countries[40]}<span className={styles.usersTotal}>{pointTotals[40]}</span></li>
                        <li>42. {countries[41]}<span className={styles.usersTotal}>{pointTotals[41]}</span></li>
                        <li>43. {countries[42]}<span className={styles.usersTotal}>{pointTotals[42]}</span></li>
                        <li>44. {countries[43]}<span className={styles.usersTotal}>{pointTotals[43]}</span></li>
                        <li>45. {countries[44]}<span className={styles.usersTotal}>{pointTotals[44]}</span></li>
                        <li>46. {countries[45]}<span className={styles.usersTotal}>{pointTotals[45]}</span></li>
                        <li>47. {countries[46]}<span className={styles.usersTotal}>{pointTotals[46]}</span></li>
                        <li>48. {countries[47]}<span className={styles.usersTotal}>{pointTotals[47]}</span></li>
                        <li>49. {countries[48]}<span className={styles.usersTotal}>{pointTotals[48]}</span></li>
                        <li>50. {countries[49]}<span className={styles.usersTotal}>{pointTotals[49]}</span></li>
                        <li>51. {countries[50]}<span className={styles.usersTotal}>{pointTotals[50]}</span></li>
                        <li>52. {countries[51]}<span className={styles.usersTotal}>{pointTotals[51]}</span></li>
                        <li>53. {countries[52]}<span className={styles.usersTotal}>{pointTotals[52]}</span></li>
                        <li>54. {countries[53]}<span className={styles.usersTotal}>{pointTotals[53]}</span></li>
                        <li>55. {countries[54]}<span className={styles.usersTotal}>{pointTotals[54]}</span></li>
                        <li>56. {countries[55]}<span className={styles.usersTotal}>{pointTotals[55]}</span></li>
                        <li>57. {countries[56]}<span className={styles.usersTotal}>{pointTotals[56]}</span></li>
                        <li>58. {countries[57]}<span className={styles.usersTotal}>{pointTotals[57]}</span></li>
                        <li>59. {countries[58]}<span className={styles.usersTotal}>{pointTotals[58]}</span></li>
                        <li>60. {countries[59]}<span className={styles.usersTotal}>{pointTotals[59]}</span></li>
                        <li>61. {countries[60]}<span className={styles.usersTotal}>{pointTotals[60]}</span></li>
                        <li>62. {countries[61]}<span className={styles.usersTotal}>{pointTotals[61]}</span></li>
                        <li>63. {countries[62]}<span className={styles.usersTotal}>{pointTotals[62]}</span></li>
                        <li>64. {countries[63]}<span className={styles.usersTotal}>{pointTotals[63]}</span></li>
                        <li>65. {countries[64]}<span className={styles.usersTotal}>{pointTotals[64]}</span></li>
                        <li>66. {countries[65]}<span className={styles.usersTotal}>{pointTotals[65]}</span></li>
                        <li>67. {countries[66]}<span className={styles.usersTotal}>{pointTotals[66]}</span></li>
                        {/* <li>68. {countries[67]}<span className={styles.usersTotal}>{pointTotals[67]}</span></li>
                        <li>69. {countries[68]}<span className={styles.usersTotal}>{pointTotals[68]}</span></li>
                        <li>70. {countries[69]}<span className={styles.usersTotal}>{pointTotals[69]}</span></li>
                        <li>71. {countries[70]}<span className={styles.usersTotal}>{pointTotals[70]}</span></li>
                        <li>72. {countries[71]}<span className={styles.usersTotal}>{pointTotals[71]}</span></li>
                        <li>73. {countries[72]}<span className={styles.usersTotal}>{pointTotals[72]}</span></li>
                        <li>74. {countries[73]}<span className={styles.usersTotal}>{pointTotals[73]}</span></li>
                        <li>75. {countries[74]}<span className={styles.usersTotal}>{pointTotals[74]}</span></li>
                        <li>76. {countries[75]}<span className={styles.usersTotal}>{pointTotals[75]}</span></li>
                        <li>77. {countries[76]}<span className={styles.usersTotal}>{pointTotals[76]}</span></li>
                        <li>78. {countries[77]}<span className={styles.usersTotal}>{pointTotals[77]}</span></li>
                        <li>79. {countries[78]}<span className={styles.usersTotal}>{pointTotals[78]}</span></li>
                        <li>80. {countries[79]}<span className={styles.usersTotal}>{pointTotals[79]}</span></li>
                        <li>81. {countries[80]}<span className={styles.usersTotal}>{pointTotals[80]}</span></li>
                        <li>82. {countries[81]}<span className={styles.usersTotal}>{pointTotals[81]}</span></li>
                        <li>83. {countries[82]}<span className={styles.usersTotal}>{pointTotals[82]}</span></li>
                        <li>84. {countries[83]}<span className={styles.usersTotal}>{pointTotals[83]}</span></li>
                        <li>85. {countries[84]}<span className={styles.usersTotal}>{pointTotals[84]}</span></li>
                        <li>86. {countries[85]}<span className={styles.usersTotal}>{pointTotals[85]}</span></li>
                        <li>87. {countries[86]}<span className={styles.usersTotal}>{pointTotals[86]}</span></li>
                        <li>88. {countries[87]}<span className={styles.usersTotal}>{pointTotals[87]}</span></li>
                        <li>89. {countries[88]}<span className={styles.usersTotal}>{pointTotals[88]}</span></li>
                        <li>90. {countries[89]}<span className={styles.usersTotal}>{pointTotals[89]}</span></li>
                        <li>91. {countries[90]}<span className={styles.usersTotal}>{pointTotals[90]}</span></li>
                        <li>92. {countries[91]}<span className={styles.usersTotal}>{pointTotals[91]}</span></li>
                        <li>93. {countries[92]}<span className={styles.usersTotal}>{pointTotals[92]}</span></li>
                        <li>94. {countries[93]}<span className={styles.usersTotal}>{pointTotals[93]}</span></li>
                        <li>95. {countries[94]}<span className={styles.usersTotal}>{pointTotals[94]}</span></li>
                        <li>96. {countries[95]}<span className={styles.usersTotal}>{pointTotals[95]}</span></li>
                        <li>97. {countries[96]}<span className={styles.usersTotal}>{pointTotals[96]}</span></li>
                        <li>98. {countries[97]}<span className={styles.usersTotal}>{pointTotals[97]}</span></li>
                        <li>99. {countries[98]}<span className={styles.usersTotal}>{pointTotals[98]}</span></li>
                        <li>100. {countries[99]}<span className={styles.usersTotal}>{pointTotals[99]}</span></li> */}
                    </ol>
                </div>
            </div>

            <div className={styles.cupInstruct}>
                <p className={styles.pointDef}>Each point represents a unique user of this website from that part of the world.<br></br>Point distribution will end on December 31st, 2022.</p>
            </div>

        </div>


    </div>
    </>
  );
};

export default SwirledCup;
