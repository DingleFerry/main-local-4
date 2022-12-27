import { useAddress, useMetamask, useWalletConnect } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json";
import brownMics from "../public/brownMics.json";
import goldMics from "../public/goldMics.json";
import platMics from "../public/platMics.json";
import holiList from "../public/holiList.json";
// import heroes from "../public/specialMicsAllMe.json";
import IPinfoWrapper, { IPinfo, AsnResponse } from "node-ipinfo";
import { isKeystoreWallet } from '@ethersproject/json-wallets';

const Home: NextPage = () => {
  const address = useAddress();
  const connectMM = useMetamask();
  const connectWC = useWalletConnect();

  const bList = brownList.brownList;
  const gList = goldList.goldList;
  const pList = platinumList.platinumList;

  let bListTotal = bList.length;
  let gListTotal = gList.length;
  let pListTotal = pList.length;

  const jotFormURL = "https://form.jotform.com/223266588147061";

  
  const showTrophies = async() => {
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

    const queryBtn = (document.getElementById('queryBtn') as HTMLElement);
    const mainCont = (document.getElementById('mainCont') as HTMLElement);
    const certTrophyMosaics = (document.getElementById('certTrophyMosaics') as HTMLElement);
    const trophyGrid = (document.getElementById('trophyGrid') as HTMLElement);
    const trophyGridMob = (document.getElementById('trophyGridMob') as HTMLElement);
    const checkListCont = (document.getElementById('checkListCont') as HTMLElement);
    const listTotals = (document.getElementById('listTotals') as HTMLElement);
    const listTotalsMob = (document.getElementById('listTotalsMob') as HTMLElement);
    const trophyDetails = (document.getElementById('trophyDetails') as HTMLElement);
    const trophyDetailsMob = (document.getElementById('trophyDetailsMob') as HTMLElement);
    const resultForm = (document.getElementById('resultForm') as HTMLElement);

    // if any list is hit
    if (brownHit !== undefined || goldHit !== undefined || platHit !== undefined){
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      checkListCont.classList.add('Home_displayNone__dFRW_');
      listTotals.classList.add('Home_displayNone__dFRW_');
      listTotalsMob.classList.add('Home_displayNone__dFRW_');
      
      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContPostReveal__EA8rR');
      trophyGrid.classList.remove('Home_displayNone__dFRW_');
      trophyGrid.classList.add('Home_trophyGrid__kculm');
      trophyGridMob.classList.remove('Home_displayNone__dFRW_');
      trophyGridMob.classList.add('Home_trophyGridMob__vIgID');
      trophyDetails.classList.remove('Home_displayNone__dFRW_');
      trophyDetails.classList.add('Home_trophyDetails__frLPK');
      trophyDetailsMob.classList.remove('Home_displayNone__dFRW_');
      trophyDetailsMob.classList.add('Home_trophyDetailsMob__DTMoH');

    // if no list is hit
    } else if (brownHit == undefined && goldHit == undefined && platHit == undefined) {
      certTrophyMosaics.classList.add('Home_displayNone__dFRW_');
      queryBtn.classList.add('Home_displayNone__dFRW_');
      checkListCont.classList.add('Home_displayNone__dFRW_');
  
      mainCont.classList.remove('Home_mainCont__eFoHJ');
      mainCont.classList.add('Home_mainContForm__NPSuz');
      resultForm.classList.remove('Home_displayNone__dFRW_');
      resultForm.classList.add('Home_displayBlock__4805r');
    } else {};
  };

  const checkStatus = async () => {
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

    const tweetBtnBrown = (document.getElementById('tweetBtnBrown') as HTMLElement);
    const tweetBtnGold = (document.getElementById('tweetBtnGold') as HTMLElement);
    const tweetBtnPlat = (document.getElementById('tweetBtnPlat') as HTMLElement);

    const platStatusMsg = (document.getElementById('platStatusMsg') as HTMLElement);
    const goldStatusMsg = (document.getElementById('goldStatusMsg') as HTMLElement);
    const brownStatusMsg = (document.getElementById('brownStatusMsg') as HTMLElement);
    
    const certTrophyPlat = (document.getElementById('certTrophyPlat') as HTMLImageElement);
    const certTrophyGold = (document.getElementById('certTrophyGold') as HTMLImageElement);
    const certTrophyBrown = (document.getElementById('certTrophyBrown') as HTMLImageElement);
    const platSwirlMob = (document.getElementById('platSwirlMob') as HTMLElement);
    const goldSwirlMob = (document.getElementById('goldSwirlMob') as HTMLElement);
    const brownSwirlMob = (document.getElementById('brownSwirlMob') as HTMLElement);

    const pageDetails = (document.getElementById('pageDetails') as HTMLElement);
    const trophyDetails = (document.getElementById('trophyDetails') as HTMLElement);
    const pageDetailsMob = (document.getElementById('pageDetailsMob') as HTMLElement);
    const trophyDetailsMob = (document.getElementById('trophyDetailsMob') as HTMLElement);

    // if on Brownlist
    if  (platHit !== undefined){
        platStatusMsg.classList.remove('Home_displayNone__dFRW_');
        platStatusMsg.classList.add('Home_totalPlat__psvtb');
        tweetBtnPlat.classList.remove('Home_displayNone__dFRW_');
        tweetBtnPlat.classList.add('Home_tweetBtnPlat__lexI5');
        
        certTrophyPlat.classList.remove('Home_displayNone__dFRW_');
        certTrophyPlat.classList.add('Home_certTrophyCont__3hYjc');
        certTrophyGold.classList.remove('Home_displayNone__dFRW_');
        certTrophyGold.classList.add('Home_certTrophyCont__3hYjc');
        certTrophyBrown.classList.remove('Home_displayNone__dFRW_');
        certTrophyBrown.classList.add('Home_certTrophyCont__3hYjc');
        brownSwirlMob.classList.remove('Home_displayNone__dFRW_');
        brownSwirlMob.classList.add('Home_gridUnitContMobBrown__zIldd');
        goldSwirlMob.classList.remove('Home_displayNone__dFRW_');
        goldSwirlMob.classList.add('Home_gridUnitContMobGold__fjmre');
        platSwirlMob.classList.remove('Home_displayNone__dFRW_');
        platSwirlMob.classList.add('Home_gridUnitContMobPlat__kNy_E');

      // if on Goldlist
    } else if (goldHit !== undefined){
      goldStatusMsg.classList.remove('Home_displayNone__dFRW_');
      goldStatusMsg.classList.add('Home_totalGold__JWfRU');
      tweetBtnGold.classList.remove('Home_displayNone__dFRW_');
      tweetBtnGold.classList.add('Home_tweetBtnGold__3mlX3');

      certTrophyBrown.classList.remove('Home_displayNone__dFRW_');
      certTrophyBrown.classList.add('Home_certTrophyCont__3hYjc');
      certTrophyGold.classList.remove('Home_displayNone__dFRW_');
      certTrophyGold.classList.add('Home_certTrophyCont__3hYjc');
      brownSwirlMob.classList.remove('Home_displayNone__dFRW_');
      brownSwirlMob.classList.add('Home_gridUnitContMobBrown__zIldd');
      goldSwirlMob.classList.remove('Home_displayNone__dFRW_');
      goldSwirlMob.classList.add('Home_gridUnitContMobGold__fjmre');

      trophyDetails.style.background = "#D68E22";
      pageDetails.style.background = "#D68E22";
      trophyDetailsMob.style.background = "#D68E22";
      pageDetailsMob.style.background = "#D68E22";

      // if on Platinumlist
    } else if (brownHit !== undefined) {
      brownStatusMsg.classList.remove('Home_displayNone__dFRW_');
      brownStatusMsg.classList.add('Home_totalBrown__51Xiu');
      tweetBtnBrown.classList.remove('Home_displayNone__dFRW_');
      tweetBtnBrown.classList.add('Home_tweetBtnBrown__l7wc1');

      certTrophyBrown.classList.remove('Home_displayNone__dFRW_');
      certTrophyBrown.classList.add('Home_certTrophyCont__3hYjc');
      brownSwirlMob.classList.remove('Home_displayNone__dFRW_');
      brownSwirlMob.classList.add('Home_gridUnitContMobBrown__zIldd');

      trophyDetails.style.background = "#995c3d";
      pageDetails.style.background = "#995c3d";
      trophyDetailsMob.style.background = "#995c3d";
      pageDetailsMob.style.background = "#995c3d";

    } else {};
  };

  const checkMics = async () => {
    const brownMicList = brownMics.karaokeSingers;
    const goldMicList = goldMics.karaokeStunners;
    const platMicList = platMics.karaokeStars;
    const arr: string[] = brownMicList;
    const arr1: string[] = goldMicList;
    const arr2: string[] = platMicList;
    const str = address?.toString();
      const found = arr.find((element) => {
        return element.toLocaleLowerCase() === str?.toLowerCase();
      });
      const found1 = arr1.find((element) => {
        return element.toLocaleLowerCase() === str?.toLowerCase();
      });
      const found2 = arr2.find((element) => {
        return element.toLocaleLowerCase() === str?.toLowerCase();
      });

    const brownMic = (document.getElementById('brownMic') as HTMLElement);
    const goldMic = (document.getElementById('goldMic') as HTMLElement);
    const platMic = (document.getElementById('platMic') as HTMLElement);
    const brownMicMob = (document.getElementById('brownMicMob') as HTMLElement);
    const goldMicMob = (document.getElementById('goldMicMob') as HTMLElement);
    const platMicMob = (document.getElementById('platMicMob') as HTMLElement);

    // if karaoke singer
    if (found2 !== undefined){
        brownMic.classList.remove('Home_displayNone__dFRW_');
        brownMic.classList.add('Home_certTrophyCont__3hYjc');
        goldMic.classList.remove('Home_displayNone__dFRW_');
        goldMic.classList.add('Home_certTrophyCont__3hYjc');
        platMic.classList.remove('Home_displayNone__dFRW_');
        platMic.classList.add('Home_certTrophyCont__3hYjc');
        brownMicMob.classList.remove('Home_displayNone__dFRW_');
        brownMicMob.classList.add('Home_gridUnitContMobBrown__zIldd');
        goldMicMob.classList.remove('Home_displayNone__dFRW_');
        goldMicMob.classList.add('Home_gridUnitContMobGold__fjmre');
        platMicMob.classList.remove('Home_displayNone__dFRW_');
        platMicMob.classList.add('Home_gridUnitContMobPlat__kNy_E');

    // if karaoke stunner
    } else if (found1 !== undefined){
      brownMic.classList.remove('Home_displayNone__dFRW_');
      brownMic.classList.add('Home_certTrophyCont__3hYjc');
      goldMic.classList.remove('Home_displayNone__dFRW_');
      goldMic.classList.add('Home_certTrophyCont__3hYjc');
      brownMicMob.classList.remove('Home_displayNone__dFRW_');
      brownMicMob.classList.add('Home_gridUnitContMobBrown__zIldd');
      goldMicMob.classList.remove('Home_displayNone__dFRW_');
      goldMicMob.classList.add('Home_gridUnitContMobGold__fjmre');

    // if karaoke star
    } else if (found !== undefined) {
      brownMic.classList.remove('Home_displayNone__dFRW_');
      brownMic.classList.add('Home_certTrophyCont__3hYjc');
      brownMicMob.classList.remove('Home_displayNone__dFRW_');
      brownMicMob.classList.add('Home_gridUnitContMobBrown__zIldd');
    } else {}
  };

  // const checkSC = async() => {
  //   // Update lists to time-capped Swirled Cup list when ready
  //   // const bList = brownList.brownList;
  //   // const gList = goldList.goldList;
  //   // const pList = platinumList.platinumList;

  //   const arr: string[] = bList;
  //   const arr1: string[] = gList;
  //   const arr2: string[] = pList;
  //   const str = address?.toString();
  //   const found = arr.find((element) => {
  //     return element.toLocaleLowerCase() === str?.toLowerCase();
  //   });
  //   const found1 = arr1.find((element) => {
  //     return element.toLocaleLowerCase() === str?.toLowerCase();
  //   });
  //   const found2 = arr2.find((element) => {
  //     return element.toLocaleLowerCase() === str?.toLowerCase();
  //   });

  //   const ipinfoWrapper = new IPinfoWrapper("5689eeab9ca86e");
  //   const scUSA = (document.getElementById('scUSA') as HTMLElement);
  //   const scUSAMob = (document.getElementById('scUSAMob') as HTMLElement);
  //   const scWorld = (document.getElementById('scWorld') as HTMLElement);
  //   const scWorldMob = (document.getElementById('scWorldMob') as HTMLElement);

  //   ipinfoWrapper.lookupIp("1.1.1.1").then((response: IPinfo) => {
  //     const country = response.country;
  //     console.log(response)
  //     if (country === "United States" && found !== undefined || found1 !== undefined || found2 !== undefined) {
  //       scUSA.classList.remove('Home_displayNone__dFRW_');
  //       scUSA.classList.add('Home_certTrophyCont__3hYjc');
  //       scUSAMob.classList.remove('Home_displayNone__dFRW_');
  //       scUSAMob.classList.add('Home_gridUnitContMobUSA__NfsoF');
  //       // show custom first place world trophy
  //     } else if (country === "Nigeria" && found !== undefined || found1 !== undefined || found2 !== undefined) {
  //       console.log("show Nigerian trophy")
  //     } else if (found !== undefined || found1 !== undefined || found2 !== undefined) {
  //       scWorld.classList.remove('Home_displayNone__dFRW_');
  //       scWorld.classList.add('Home_certTrophyCont__3hYjc');
  //       scWorldMob.classList.remove('Home_displayNone__dFRW_');
  //       scWorldMob.classList.add('Home_gridUnitContMobWorld__QNzwn');
  //     } else {};
  //   });
  // }

  const checkHoliday = async() => {
    const hList = holiList.holi22;
    const str = address?.toString();
    const arr: string[] = hList;
    const holiHit = arr.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });
    const hapHoliMob = (document.getElementById('hapHoliMob') as HTMLElement);
    const hapHoli = (document.getElementById('hapHoli') as HTMLElement);
    if (arr !== undefined){
      hapHoli.classList.remove('Home_displayNone__dFRW_');
      hapHoli.classList.add('Home_certTrophyCont__3hYjc');
      hapHoliMob.classList.remove('Home_displayNone__dFRW_');
      hapHoliMob.classList.add('Home_trophyImageMob__m5vS2');
    }
  }
  
  const checkSpecial = async () => {
    const str = address?.toString();
    // REAL ADDRESSES
    const lisa = "0x4ABb0F6b101aecBC90C935E374C10F8c7f0D1F36";
    const faceless = "0x9C09f65588E9e8C7d33162F45f861bd75CFBCd2F";
    const kyle = "0x590E73D948Bee9558Be2B54D501af758959570AE";
    const goose = "0x6b88BE34AD594df6d031f9B8923166Bac9531f38";
    const herb = "0xa302919403B9F8e3372A4efCc2b599e581606Eb4";
    
    // PSUEDO ADDRESSES
    // const lisa = "";
    // const faceless = "";
    // const kyle = "";
    // const goose = "";
    // const herb = "0xA3e4E4da0f8D272EE960647F509C9d4Ee9e81698";
    
    const lisaMicMob = (document.getElementById('lisaMicMob') as HTMLElement);
    const lisaMic = (document.getElementById('lisaMic') as HTMLElement);
    const faceMicMob = (document.getElementById('faceMicMob') as HTMLElement);
    const faceMic = (document.getElementById('faceMic') as HTMLElement);
    const kyleMicMob = (document.getElementById('kyleMicMob') as HTMLElement);
    const kyleMic = (document.getElementById('kyleMic') as HTMLElement);
    const gooseMicMob = (document.getElementById('gooseMicMob') as HTMLElement);
    const gooseMic = (document.getElementById('gooseMic') as HTMLElement);
    if (str == lisa) {
      lisaMic.classList.remove('Home_displayNone__dFRW_');
      lisaMic.classList.add('Home_certTrophyCont__3hYjc');
      lisaMicMob.classList.remove('Home_displayNone__dFRW_');
      lisaMicMob.classList.add('Home_gridUnitContMobPlat__kNy_E');
    } else if (str == faceless) {
      faceMic.classList.remove('Home_displayNone__dFRW_');
      faceMic.classList.add('Home_certTrophyCont__3hYjc');
      faceMicMob.classList.remove('Home_displayNone__dFRW_');
      faceMicMob.classList.add('Home_gridUnitContMobPlat__kNy_E');
    } else if (str == kyle) {
      kyleMic.classList.remove('Home_displayNone__dFRW_');
      kyleMic.classList.add('Home_certTrophyCont__3hYjc');
      kyleMicMob.classList.remove('Home_displayNone__dFRW_');
      kyleMicMob.classList.add('Home_gridUnitContMobPlat__kNy_E');
    } else if (str == goose) {
      gooseMic.classList.remove('Home_displayNone__dFRW_');
      gooseMic.classList.add('Home_certTrophyCont__3hYjc');
      gooseMicMob.classList.remove('Home_displayNone__dFRW_');
      gooseMicMob.classList.add('Home_gridUnitContMobPlat__kNy_E');
    } else {}

    const herbSwirl = (document.getElementById('stellarSwirl') as HTMLElement);
    const herbSwirlMob = (document.getElementById('stellarSwirlMob') as HTMLElement);

    if (str == herb) {
      herbSwirl.classList.remove('Home_displayNone__dFRW_');
      herbSwirl.classList.add('Home_certTrophyCont__3hYjc');
      herbSwirlMob.classList.remove('Home_displayNone__dFRW_');
      herbSwirlMob.classList.add('Home_gridUnitContMobPlat__kNy_E');
    }
  }

  const checkAll = async() =>{
    showTrophies();
    checkStatus();
    checkMics();
    // checkSC();
    checkHoliday();
    checkSpecial();
  };

  const popModal = async() => {
    const modal = (document.getElementById('modalCont') as HTMLElement);
    modal.classList.remove('Home_displayNone__dFRW_');
    modal.classList.add('Home_modalCont__SFakS');
  };
  const closeModal = async() => {
    const modal = (document.getElementById('modalCont') as HTMLElement);
    modal.classList.remove('Home_modalCont__SFakS');
    modal.classList.add('Home_displayNone__dFRW_');
  };
  const popModal1 = async() => {
    const modal1 = (document.getElementById('modalCont1') as HTMLElement);
    modal1.classList.remove('Home_displayNone__dFRW_');
    modal1.classList.add('Home_modalCont__SFakS');
  };
  const closeModal1 = async() => {
    const modal1 = (document.getElementById('modalCont1') as HTMLElement);
    modal1.classList.remove('Home_modalCont__SFakS');
    modal1.classList.add('Home_displayNone__dFRW_');
  };
  const popModal2 = async() => {
    const modal2 = (document.getElementById('modalCont2') as HTMLElement);
    modal2.classList.remove('Home_displayNone__dFRW_');
    modal2.classList.add('Home_modalCont__SFakS');
  };
  const closeModal2 = async() => {
    const modal2 = (document.getElementById('modalCont2') as HTMLElement);
    modal2.classList.remove('Home_modalCont__SFakS');
    modal2.classList.add('Home_displayNone__dFRW_');
  };
  const popModal3 = async() => {
    const modal3 = (document.getElementById('modalCont3') as HTMLElement);
    modal3.classList.remove('Home_displayNone__dFRW_');
    modal3.classList.add('Home_modalCont__SFakS');
  };
  const closeModal3 = async() => {
    const modal3 = (document.getElementById('modalCont3') as HTMLElement);
    modal3.classList.remove('Home_modalCont__SFakS');
    modal3.classList.add('Home_displayNone__dFRW_');
  };
  const popModal4 = async() => {
    const modal4 = (document.getElementById('modalCont4') as HTMLElement);
    modal4.classList.remove('Home_displayNone__dFRW_');
    modal4.classList.add('Home_modalCont__SFakS');
  };
  const closeModal4 = async() => {
    const modal4 = (document.getElementById('modalCont4') as HTMLElement);
    modal4.classList.remove('Home_modalCont__SFakS');
    modal4.classList.add('Home_displayNone__dFRW_');
  };
  const popModal5 = async() => {
    const modal5 = (document.getElementById('modalCont5') as HTMLElement);
    modal5.classList.remove('Home_displayNone__dFRW_');
    modal5.classList.add('Home_modalCont__SFakS');
  };
  const closeModal5 = async() => {
    const modal5 = (document.getElementById('modalCont5') as HTMLElement);
    modal5.classList.remove('Home_modalCont__SFakS');
    modal5.classList.add('Home_displayNone__dFRW_');
  };
  // const popModal6 = async() => {
  //   const modal6 = (document.getElementById('modalCont6') as HTMLElement);
  //   modal6.classList.remove('Home_displayNone__dFRW_');
  //   modal6.classList.add('Home_modalCont__SFakS');
  // }
  // const closeModal6 = async() => {
  //   const modal6 = (document.getElementById('modalCont6') as HTMLElement);
  //   modal6.classList.remove('Home_modalCont__SFakS');
  //   modal6.classList.add('Home_displayNone__dFRW_');
  // }
  // const popModal7 = async() => {
  //   const modal7 = (document.getElementById('modalCont7') as HTMLElement);
  //   modal7.classList.remove('Home_displayNone__dFRW_');
  //   modal7.classList.add('Home_modalCont__SFakS');
  // }
  // const closeModal7 = async() => {
  //   const modal7 = (document.getElementById('modalCont7') as HTMLElement);
  //   modal7.classList.remove('Home_modalCont__SFakS');
  //   modal7.classList.add('Home_displayNone__dFRW_');
  // }
  const popModal8 = async() => {
    const modal8 = (document.getElementById('modalCont8') as HTMLElement);
    modal8.classList.remove('Home_displayNone__dFRW_');
    modal8.classList.add('Home_modalCont__SFakS');
  }
  const closeModal8 = async() => {
    const modal8 = (document.getElementById('modalCont8') as HTMLElement);
    modal8.classList.add('Home_displayNone__dFRW_');
  }
  const popModal9 = async() => {
    const modal9 = (document.getElementById('modalCont9') as HTMLElement);
    modal9.classList.remove('Home_displayNone__dFRW_');
    modal9.classList.add('Home_modalCont__SFakS');
  }
  const closeModal9 = async() => {
    const modal9 = (document.getElementById('modalCont9') as HTMLElement);
    modal9.classList.add('Home_displayNone__dFRW_');
  }
  const popModal10 = async() => {
    const modal10 = (document.getElementById('modalCont10') as HTMLElement);
    modal10.classList.remove('Home_displayNone__dFRW_');
    modal10.classList.add('Home_modalCont__SFakS');
  }
  const closeModal10 = async() => {
    const modal10 = (document.getElementById('modalCont10') as HTMLElement);
    modal10.classList.add('Home_displayNone__dFRW_');
  }
  const popModal11 = async() => {
    const modal11 = (document.getElementById('modalCont11') as HTMLElement);
    modal11.classList.remove('Home_displayNone__dFRW_');
    modal11.classList.add('Home_modalCont__SFakS');
  }
  const closeModal11 = async() => {
    const modal11 = (document.getElementById('modalCont11') as HTMLElement);
    modal11.classList.add('Home_displayNone__dFRW_');
  }
  const popModal12 = async() => {
    const modal12 = (document.getElementById('modalCont12') as HTMLElement);
    modal12.classList.remove('Home_displayNone__dFRW_');
    modal12.classList.add('Home_modalCont__SFakS');
  }
  const closeModal12 = async() => {
    const modal12 = (document.getElementById('modalCont12') as HTMLElement);
    modal12.classList.add('Home_displayNone__dFRW_');
  }
  const popModal13 = async() => {
    const modal13 = (document.getElementById('modalCont13') as HTMLElement);
    modal13.classList.remove('Home_displayNone__dFRW_');
    modal13.classList.add('Home_modalCont__SFakS');
  }
  const closeModal13 = async() => {
    const modal13 = (document.getElementById('modalCont13') as HTMLElement);
    modal13.classList.add('Home_displayNone__dFRW_');
  }

  const reload = async() => {
    location.reload();
  };

  const showHamMenu = async() => {
    const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
    hamMenu.classList.add('Home_hamMenuDropdownActive__iT_P6')
  };
  const hideHamMenu = async() => {
    const hamMenu = (document.getElementById('hamMenu') as HTMLElement);
    hamMenu.classList.remove('Home_hamMenuDropdownActive__iT_P6')
  };


  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        {/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV */}
        <div className={styles.mainNav}>
          <div className={styles.logo} onClick={reload}>
            <Link href="">
              <a>
                <Image src='https://ik.imagekit.io/ts6bfcsg8/all-black-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455908' alt='Black BMA Logo' width={80} height={80} />
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
            <div className={styles.pageLinkCont}>
              <Link href="/brownlist-submit">
                <a><h3 className={styles.pageLink}>Submit for BL</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont}>
              <Link href="https://themushroomcolonel.editorx.io/stinky-shop">
                <a><h3 className={styles.pageLink}>Shop</h3></a>
              </Link>
            </div>
            <div className={styles.pageLinkCont} onClick={reload}>
              <Link href="">
                  <a><h3 className={styles.pageLinkPink}>My Trophies</h3></a>
              </Link>
            </div>
          </div>
          <div className={styles.social}>
            <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
              <a target="_blank">
                <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-black-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456279' alt='Black Twitter Logo' width={45} height={45} />
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.hamNav}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-black-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456279' alt='Black Twitter Logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo} onClick={reload}>
                <Link href="">
                    <a>
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/all-black-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455908' alt='Black BMA Logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamMenu} onClick={showHamMenu}>
                <Link href="">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/hamburger-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518138' alt='Black Hamburger Icon' width={40} height={40} />
                </Link>
            </div>
        </div>

        <div id="hamMenu" className={styles.hamMenuDropdown}>
            <div className={styles.hamSocial}>
                <Link href="https://twitter.com/BMAssholesNFT" target="_blank">
                    <a className={styles.twitLogoCont} target="_blank">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/twitter-white-circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629456050' alt='White Twitter Logo' width={45} height={45} />
                    </a>
                </Link>
            </div>
            <div className={styles.hamLogo} onClick={reload}>
                <Link href="/">
                    <a>
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/all-white-trans.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629455900' alt='White BMA Logo' width={60} height={60} />
                    </a>
                </Link>
            </div>
            <div className={styles.closeBtn} onClick={hideHamMenu}>
                <Link href="">
                    <Image src='https://ik.imagekit.io/ts6bfcsg8/close-btn-f5f5f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629518301' alt='Close Menu Button' width={45} height={45} />
                </Link>
            </div>
            <div className={styles.hamLinks}>
                <ul className={styles.hamLinksUL}>
                  <li className={styles.hamLinkPinkLI} onClick={reload}>
                      <Link href="">
                          <a><h3 className={styles.hamLinkPink}>My Trophies</h3></a>
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




        {/* PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES */}
        {/* PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES */}
        <div className={styles.titleCont}>
          <div id="listTotals" className={styles.mfBreakdown}>
            <h1 className={styles.brownMFs}>{bListTotal} Brown</h1>
            <h1 className={styles.goldMFs}>{gListTotal} Gold</h1>
            <h1 className={styles.platMFs}>{pListTotal} Platinum</h1>
          </div>

          <div id="listTotalsMob" className={styles.mfBreakdownMob}>
            <h1 className={styles.brownMFs}>{bListTotal}</h1>
            <h1 className={styles.goldMFs}>{gListTotal}</h1>
            <h1 className={styles.platMFs}>{pListTotal}</h1>
          </div>

          <h1 id='platStatusMsg' className={styles.displayNone}>Status: Platinum MF!!</h1>
          <h1 id='goldStatusMsg' className={styles.displayNone}>Status: Gold MF!</h1>
          <h1 id='brownStatusMsg' className={styles.displayNone}>Status: Brown MF</h1>
        </div>
        {/* PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES */}
        {/* PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES */}
        {/* PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES */}
        {/* PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES PAGE TITLES */}




        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        <div id='modalCont13' className={styles.displayNone} onClick={closeModal13}>
          <div className={styles.modalCardHoli}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/happy-holidays-22-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672005924117' alt='Stellar Swirl Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Happy Holidays &apos;22</h1>
              <p className={styles.modalPar}>Awarded to every MF that made it on the Brownlist before the end of 2022. Happy New Year Asshole! 2023 is going to be fun...</p>
              <button><a href="https://twitter.com/intent/tweet?text=It&apos;s%20beginning%20to%20look%20a%20lot%20like%20Mint%20Day%0ASwirls%20in%20every%20Tweet%0ABut%20the%20prettiest%20sight%20to%20see%20are%20free%20pieces%20that%20will%20be%0AOn%20your%20own%20home%20feed%0A@BMAssholesNFT&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/7ZrVcVpsaY%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        <div id='modalCont12' className={styles.displayNone} onClick={closeModal12}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/bma-420-69-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671911745754' alt='Stellar Swirl Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>BMA 420 - 69</h1>
              <p className={styles.modalPar}>Awarded for buying the BMA Community an MF&apos;n star! Maybe one day we&apos;ll get a BMA on a ledger orbitting BMA 420-69 ... I mean, we are going to the moon, and then some! From the bottom of our holes, thank you!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=BMA%20is%20going%20to%20the%20moon%20and%20beyond!%20Before%20our%20journey%20begins,%20I%20made%20sure%20to%20grab%20us%20an%20actual%20mf&apos;n%20star%20so%20we&apos;re%20ready!%20Are%20you%20coming%20with%20us??&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/1raeKAxl7P%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        <div id='modalCont11' className={styles.displayNone} onClick={closeModal11}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/mic-goose-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671131207127' alt='Platinum Karaoke Star Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Host</h1>
              <p className={styles.modalPar}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/772ebf8GkY%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        <div id='modalCont10' className={styles.displayNone} onClick={closeModal10}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/mic-kyle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900717598' alt='Platinum Karaoke Star Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Host</h1>
              <p className={styles.modalPar}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/7sP90VGFMP%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        <div id='modalCont9' className={styles.displayNone} onClick={closeModal9}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/mic-faceless.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900718465' alt='Platinum Karaoke Star Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke &quot;Host&quot;</h1>
              <p className={styles.modalPar}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/8h8vHuCuCY%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        <div id='modalCont8' className={styles.displayNone} onClick={closeModal8}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/mic-lisa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900718594' alt='Platinum Karaoke Star Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Host</h1>
              <p className={styles.modalPar}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/wzLgHYCvsj%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        {/* <div id='modalCont7' className={styles.displayNone} onClick={closeModal7}>
          <div className={styles.modalCard7}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/swirled-cup-world-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629243792' alt='Black BMA logo' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>S.C. 1st Place</h1>
              <p className={styles.modalPar}>Awarded to everyone that helped the USA take Platinum in the recent BMA Swirled Cup. Congrats you MF&#39;n champion!</p>
              <button><a href="https://twitter.com/intent/tweet?text=" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        
        <div id='modalCont6' className={styles.displayNone} onClick={closeModal6}>
          <div className={styles.modalCard6}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/swirled-cup-usa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629243661' alt='Black BMA logo' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>S.C. 1st Place</h1>
              <p className={styles.modalPar}>Awarded to everyone that helped the USA take Platinum in the recent BMA Swirled Cup. Congrats you MF&#39;n champion!</p>
              <button><a href="https://twitter.com/intent/tweet?text=" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div> */}

        <div id='modalCont5' className={styles.displayNone} onClick={closeModal5}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-star.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621095654' alt='Platinum Karaoke Star Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Star</h1>
              <p className={styles.modalPar}>Awarded to a select few for positively melting faces at a BMA Karaoke night! Easily one of the most coveted trophies in the entire world!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=New%20addition%20to%20my%20@BMAssholesNFT%20trophy%20collection.%20No%20big%20deal%20...%20just%20the%20rarest%20trophy%20in%20the%20entire%20system.%20Thanks%20for%20the%20votes%20MFs,%20I%20mean%20it!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/6dhadNJElM%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>

        <div id='modalCont4' className={styles.displayNone} onClick={closeModal4}>
          <div className={styles.modalCard4}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-stunner.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621095690' alt='Gold Karaoke Stunner Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Stunner</h1>
              <p className={styles.modalPar}>Awarded to every performer that makes it into a &#34;Final 4 Poll.&#34; Your talent impressed us all MF! Share this golden mic with pride!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=It's%20true%20what%20they%20say,%20I%20did%20stun%20some%20buns%20at%20@BMAssholesNFT%20karaoke%20night.%20Mark%20your%20calendars%20for%20the%20next%20one%20MFs!%20I%20wanna%20see%20your%20cheeks%20there!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/PPTqkBQmpP%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>

        <div id='modalCont3' className={styles.displayNone} onClick={closeModal3}>
          <div className={styles.modalCard3}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-singer-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670630991269' alt='Brown Karaoke Singer Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Karaoke Singer</h1>
              <p className={styles.modalPar}>Awarded to anyone courageous enough to sing, rap, or otherwise entertain at a BMA Karaoke Night. This is no easy feat, MF! Seriously impressive!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=I%20can't%20help%20it,%20my%20voice%20is%20just%20too%20damn%20beautiful%20not%20to%20share!%20I%20wanna%20hear%20yours%20at%20the%20next%20@BMAssholesNFT%20karaoke%20night!%20I%20promise%20I%20won't%20hog%20the%20mic%20all%20night...&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/osf6UoyqYA%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>

        <div id='modalCont2' className={styles.displayNone} onClick={closeModal2}>
          <div className={styles.modalCardPlat}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/certified-plat.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960125' alt='Platinum Status Swirl Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Certified Platinum</h1>
              <p className={styles.modalPar}>Awarded to anyone officially on the Platinumlist. You know why this is here ... congrats, MF! Let&apos;s build this dynasty together!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=Oh%20this?%20It's%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20The%20list%20is%20almost%20full%20MF%20...%20don't%20say%20I%20didn't%20warn%20you!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/nAPozwvx1N%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>

        <div id='modalCont1' className={styles.displayNone} onClick={closeModal1}>
          <div className={styles.modalCard1}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/certified-gold.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960235' alt='Gold Status Swirl Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Certified Gold</h1>
              <p className={styles.modalPar}>Awarded to anyone officially on the Goldlist. We like your style MF and want to see you shine! Get ready for Mint Day!!</p>
              <button><a href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/5GL5mtcDnC%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>

        <div id='modalCont' className={styles.displayNone} onClick={closeModal}>
          <div className={styles.modalCard}>
            <div className={styles.modalImgCont}>
              <Image className={styles.modalImg} src='https://ik.imagekit.io/ts6bfcsg8/certified-brown.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960242' alt='Brown Status Swirl Trophy' width={900} height={900} />
            </div>
            <div className={styles.modalMeta}>
              <h1>Certified Brown</h1>
              <p className={styles.modalPar}>Awarded to anyone officially on the Brownlist. Note: being on the Brownlist does not guarantee you a mint. Only Gold & Platinum MFs have guaranteed mints.</p>
              <button><a href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/LUnk6cm1v7%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
            </div>
          </div>
        </div>
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        {/* MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS MODALS */}
        


        {address ? (
          <>
            <div id="mainCont" className={styles.mainCont}>

              {/* STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS */}
              {/* STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS */}
              <div>
                <script async src="https://platform.twitter.com/widgets.js"></script>
                <button className={styles.displayNone} id="tweetBtnBrown"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/LUnk6cm1v7%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnGold"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/5GL5mtcDnC%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
                <button className={styles.displayNone} id="tweetBtnPlat"><a className={styles.tweetAnc} href="https://twitter.com/intent/tweet?text=Oh%20this?%20It's%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20The%20list%20is%20almost%20full%20MF%20...%20don't%20say%20I%20didn't%20warn%20you!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/nAPozwvx1N%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Tweet Status</a></button>
              </div>
              {/* STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS */}
              {/* STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS */}
              {/* STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS */}
              {/* STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS STATUS BTNS */}




              {/* DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID  */}
              {/* DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID  */}
              <div id="trophyGrid" className={styles.displayNone}>

                <div className={styles.gridUnitCont} onClick={popModal13}>
                  <div id="hapHoli" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/happy-holidays-22-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672005924117' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal12}>
                  <div id="stellarSwirl" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/bma-420-69-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671911745754' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal11}>
                  <div id="gooseMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/mic-goose-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671131207127' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal10}>
                  <div id="kyleMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/mic-kyle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900717598' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal9}>
                  <div id="faceMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/mic-faceless.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900718465' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal8}>
                  <div id="lisaMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/mic-lisa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900718594' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                {/* <div className={styles.gridUnitCont} onClick={popModal7}>
                  <div id="scWorld" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/swirled-cup-world-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629243792' alt='Brown Karaoke Attendee Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal6}>
                  <div id="scUSA" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/swirled-cup-usa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629243661' alt='Brown Karaoke Attendee Trophy' width={1269} height={1269} />
                  </div>
                </div> */}
                <div className={styles.gridUnitCont} onClick={popModal5}>
                  <div id="platMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-star.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621095654' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal4}>
                  <div id="goldMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-stunner.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621095690' alt='Gold Karaoke Stunner Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal3}>
                  <div id="brownMic" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-singer-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670630991269' alt='Brown Karaoke Singer Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal2}>
                  <div id="certTrophyPlat" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/certified-plat.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960125' alt='Platinum Status Swirl Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal1}>
                  <div id="certTrophyGold" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/certified-gold.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960235' alt='Gold Status Swirl Trophy' width={1269} height={1269} />
                  </div>
                </div>
                <div className={styles.gridUnitCont} onClick={popModal}>
                  <div id="certTrophyBrown" className={styles.displayNone}>
                    <Image className={styles.trophyImage} src='https://ik.imagekit.io/ts6bfcsg8/certified-brown.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960242' alt='Brown Status Swirl Trophy' width={1269} height={1269} />
                  </div>
                </div>
              </div>
              {/* DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID  */}
              {/* DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID  */}
              {/* DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID  */}
              {/* DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID DESKTOP GRID  */}




              {/* MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID  */}
              {/* MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID  */}
              <div id="trophyGridMob" className={styles.displayNone}> {/* trophyGridMob */}
                <div id="hapHoliMob" className={styles.gridUnitContMobHoli}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/happy-holidays-22-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672005924117' alt='Stellar Swirl Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobHoli}>
                    <h1>Happy Holidays &apos;22</h1>
                    <p className={styles.modalParMob}>Awarded to every MF that made it on the Brownlist before the end of 2022. Happy New Year Asshole! 2023 is going to be fun...</p>
                    <button><a href="https://twitter.com/intent/tweet?text=It&apos;s%20beginning%20to%20look%20a%20lot%20like%20Mint%20Day%0ASwirls%20in%20every%20Tweet%0ABut%20the%20prettiest%20sight%20to%20see%20are%20free%20pieces%20that%20will%20be%0AOn%20your%20own%20home%20feed%0A@BMAssholesNFT&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/7ZrVcVpsaY%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="stellarSwirlMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/bma-420-69-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671911745754' alt='Stellar Swirl Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>BMA 420 - 69</h1>
                    <p className={styles.modalParMob}>Awarded for buying the BMA Community an MF&apos;n star! Maybe one day we&apos;ll get a BMA on a ledger orbitting BMA 420-69 ... I mean, we are going to the moon, and then some! From the bottom of our holes, thank you!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=BMA%20is%20going%20to%20the%20moon%20and%20beyond!%20Before%20our%20journey%20begins,%20I%20made%20sure%20to%20grab%20us%20an%20actual%20mf&apos;n%20star%20so%20we&apos;re%20ready!%20Are%20you%20coming%20with%20us??&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/1raeKAxl7P%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="gooseMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/mic-goose-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671131207127' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>Karaoke Host</h1>
                    <p className={styles.modalParMob}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/772ebf8GkY%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="kyleMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/mic-kyle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900717598' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>Karaoke Host</h1>
                    <p className={styles.modalParMob}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/7sP90VGFMP%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="faceMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/mic-faceless.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900718465' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>Karaoke &quot;Host&quot;</h1>
                    <p className={styles.modalParMob}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/8h8vHuCuCY%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="lisaMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/mic-lisa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670900718594' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>Karaoke Host</h1>
                    <p className={styles.modalParMob}>Awarded to you and only you ... everybody else can kiss my ass! Seriously, thanks for everything you do MF! BMA wouldn&apos;t be the same without you!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=I&apos;m%20locked%20in,%20are%20you??%20@BMAssholesNFT%20to%20100%20ETH!%20Need%20I%20say%20more?&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/wzLgHYCvsj%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                {/* <div id="scWorldMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/swirled-cup-world-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629243792' alt='Brown Karaoke Attendee Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobWorld}>
                    <h1>Team World</h1>
                    <p className={styles.modalParMob}>Awarded to each competitor of the BMA Swirled Cup 2022 that didn&apos;t quite make it. Keep in mind MF, only true OGs find this trophy in their collection. Go team BMA!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="scUSAMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/swirled-cup-usa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670629243661' alt='Brown Karaoke Attendee Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobUSA}>
                    <h1>S.C. 1st Place</h1>
                    <p className={styles.modalParMob}>Awarded to every MF from team USA for clinching Platinum in the BMA Swirled Cup 2022. Congrats you MF&#39;n champion!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div> */}
                <div id="platMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-star.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621095654' alt='Platinum Karaoke Star Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>Karaoke Star</h1>
                    <p className={styles.modalParMob}>Awarded to a select few for positively melting faces at a BMA Karaoke night! Easily one of the most coveted trophies in the entire world!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=New%20addition%20to%20my%20@BMAssholesNFT%20trophy%20collection.%20No%20big%20deal%20...%20just%20the%20rarest%20trophy%20in%20the%20entire%20system.%20Thanks%20for%20the%20votes%20MFs,%20I%20mean%20it!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/6dhadNJElM%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="goldMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-stunner.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621095690' alt='Gold Karaoke Stunner Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobGold}>
                    <h1>Karaoke Stunner</h1>
                    <p className={styles.modalParMob}>Awarded to every performer that makes it into a &#34;Final 4 Poll.&#34; Your talent impressed us all MF! Share this golden mic with pride!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=It's%20true%20what%20they%20say,%20I%20did%20stun%20some%20buns%20at%20@BMAssholesNFT%20karaoke%20night.%20Mark%20your%20calendars%20for%20the%20next%20one%20MFs!%20I%20wanna%20see%20your%20cheeks%20there!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/PPTqkBQmpP%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="brownMicMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/karaoke-singer-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670630991269' alt='Brown Karaoke Singer Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobBrown}>
                    <h1>Karaoke Singer</h1>
                    <p className={styles.modalParMob}>Awarded to anyone courageous enough to sing, rap, or otherwise entertain at a BMA Karaoke Night. This is no easy feat, MF! Seriously impressive!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=I%20can't%20help%20it,%20my%20voice%20is%20just%20too%20damn%20beautiful%20not%20to%20share!%20I%20wanna%20hear%20yours%20at%20the%20next%20@BMAssholesNFT%20karaoke%20night!%20I%20promise%20I%20won't%20hog%20the%20mic%20all%20night...&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/osf6UoyqYA%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="platSwirlMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/certified-plat.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960125' alt='Platinum Status Swirl Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobPlat}>
                    <h1>Certified Platinum</h1>
                    <p className={styles.modalParMob}>Awarded to anyone officially on the Platinumlist. You know why this is here ... congrats, MF! Let&apos;s build this dynasty together!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=Oh%20this?%20It's%20just%20my%20official%20@BMAssholesNFT%20Platinum%20status%20trophy!%20The%20list%20is%20almost%20full%20MF%20...%20don't%20say%20I%20didn't%20warn%20you!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/nAPozwvx1N%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="goldSwirlMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/certified-gold.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960235' alt='Gold Status Swirl Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobGold}>
                    <h1>Certified Gold</h1>
                    <p className={styles.modalParMob}>Awarded to anyone officially on the Goldlist. We like your style MF and want to see you shine! Get ready for Mint Day!!</p>
                    <button><a href="https://twitter.com/intent/tweet?text=Sorry%20if%20I%20blinded%20you%20MF,%20my%20official%20@BMAssholesNFT%20Gold%20Status%20is%20just%20too%20damn%20shiny!!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/5GL5mtcDnC%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
                <div id="brownSwirlMob" className={styles.displayNone}>
                  <div className={styles.certTrophyContMob}>
                    <Image className={styles.trophyImageMob} src='https://ik.imagekit.io/ts6bfcsg8/certified-brown.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670628960242' alt='Brown Status Swirl Trophy' width={1269} height={1269} />
                  </div>
                  <div className={styles.modalMetaMobBrown}>
                    <h1>Certified Brown</h1>
                    <p className={styles.modalParMob}>Awarded to anyone officially on the Brownlist. Note: being on the Brownlist does not guarantee you a mint. Only Gold & Platinum MFs have guaranteed mints.</p>
                    <button><a href="https://twitter.com/intent/tweet?text=Smell%20that?!%20That's%20the%20smell%20of%20my%20official%20@BMAssholesNFT%20Brownlist%20spot!%20A%20dynasty%20is%20being%20born%20and%20I'm%20not%20missing%20out!&hashtags=BMA,MakeMemesNotWar,KissMyAss%0Dpic.twitter.com/LUnk6cm1v7%0DCheck%20your%20status%20now:%20https://bearmarketassholes.io/" data-show-count="false" target="_blank" rel="noreferrer">Share Trophy</a></button>
                  </div>
                </div>
              </div>
              {/* MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID  */}
              {/* MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID  */}
              {/* MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID  */}
              {/* MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID MOBILE GRID  */}







              {/* CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER */}
              {/* CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER */}
              <div id="certTrophyMosaics" className={styles.mosaicCont}>
                <Image className={styles.trophyMosaics} src='https://ik.imagekit.io/ts6bfcsg8/trophies-mosaic.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1670621287564' alt='Swirl Trophy Mosaic Slideshow GIF' width={800} height={800} />
              </div>
              <div id="checkListCont" className={styles.checkListCont}>
                <p className={styles.message}>Connected!</p>
                <div className={styles.buttonsCont}>
                  <button onClick={checkAll} className={styles.mainButton} id="queryBtn">View Trophies</button>
                </div>
              </div>
              {/* CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER */}
              {/* CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER */}
              {/* CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER */}
              {/* CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER CONNECTED CONTAINER */}
              
            </div>
          </>
        ) : (

          // CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER
          // CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER
          <div className={styles.connectCont}>
            <div id="certTrophyMosaics" className={styles.mosaicCont}>
              <Image className={styles.trophyMosaics} src='https://ik.imagekit.io/ts6bfcsg8/trophies-mosaic.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1670621287564' alt='Swirl Trophy Mosaic Slideshow GIF' width={800} height={800} />
            </div>
            <div className={styles.connectBtnsCont}>
              <h1 className={styles.connectInst}>Connect to Begin</h1>
              <button onClick={connectMM} className={styles.connectBtnMM} id={styles.connectBtn}>MetaMask</button>
              <button onClick={connectWC} className={styles.connectBtnWC} id={styles.connectBtn}>WalletConnect</button>
            </div>
            <div className={styles.connectBtnsContMob}>
              <h1 className={styles.connectInstMob}>Connect to Begin</h1>
              <button onClick={connectMM} className={styles.connectMMMob}>
                <Image src='https://ik.imagekit.io/ts6bfcsg8/metamask.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670620948034' alt='MetaMask connect button' width={40} height={40} />
              </button>
              <button onClick={connectWC} className={styles.connectBtnWCMob}>
                <Image src='https://ik.imagekit.io/ts6bfcsg8/wallet-connect-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670620949435' alt='WalletConnect connect button' width={40} height={40} />
              </button>
            </div>
          </div>
          // CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER
          // CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER
          // CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER
          // CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER CONNECT CONTAINER

        )};
      
        {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
        {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
        <div className={styles.formCont}>
          <div id="resultForm" className={styles.displayNone}>
            <h1>The connected address is not on The Brownlist.</h1>
            <p>Fill out the form below to request placement, though interviews are not guaranteed. If you really want a spot, do not wait for us to reach out; make memes, show up in the comments, attend Karaoke nights ... just do whatever it takes to MAKE YOURSELF KNOWN.</p>
            <iframe className={styles.newForm} title="Jotform Embed" src={jotFormURL}></iframe>
          </div>
        </div>
        {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
        {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
        {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
        {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}



        {/* PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS */}
        {/* PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS */}
        <div id="pageDetails" className={styles.pageDetails}>
          <p id="trophyDetails" className={styles.displayNone}>Click on any trophy to learn more.<br></br>If you believe a trophy is missing from your collection, stay calm MF and DM us on Twitter.<br></br><br></br>Note: final mint numbers correlating to swirl status will not be cummulative. For example, if Platinum yields 3 mints, Gold yields 2, and Brown yields an unguaranteed 1 ... you do not get 6 mints for having all three trophies in your collection, you get 3 mints for having platinum status. Again, these numbers are NOT final.</p>
        </div>
        <div id="pageDetailsMob" className={styles.pageDetailsMob}>
          <p id="trophyDetailsMob" className={styles.displayNone}>If you believe a trophy is missing from your collection, stay calm MF and DM us on Twitter.<br></br><br></br>Note: final mint numbers correlating to swirl status will not be cummulative. For example, if Platinum yields 3 mints, Gold yields 2, and Brown yields an unguaranteed 1 ... you do not get 6 mints for having all three trophies in your collection, you get 3 mints for having platinum status. Again, these numbers are NOT final.</p>
        </div>
        {/* PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS */}
        {/* PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS */}
        {/* PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS */}
        {/* PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS PAGE DETAILS */}

      </main>
    </div>
  );
};

export default Home;
