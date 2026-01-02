// timeline-data.js
// NOTE: dateISO is used for sorting; dateDisplay is what you show to humans.

const TIMELINE_ITEMS = [
  {
    id: "2025-10-29-mmm-news",
    dateISO: "2025-10-29",
    dateDisplay: "10/29/2025",
    title: "Autumn 2025 Margo's News",
    pageUrl: "./imgz1760/10292025_MMMnews/10292025_MMMnews_en.pdf",
    description: "Posted on the Community Bulletin Board, and printed for distribution.",
    fileUrl: "./imgz1760/10292025_MMMnews/10292025_MMMnews_en.pdf",
    thumbUrl: "./imgz1760/06012025_MMMnews/06012025_MMM_news_01.png",
    tags: ["newsletter"]
  },
  {
    id: "2025-10-09-mmm-news",
    dateISO: "2025-10-09",
    dateDisplay: "10/09/2025",
    title: "October 2025 Margo's News",
    pageUrl: "./imgz1760/10092025_MMMnews/10092025_MMMnews.pdf",
    description: "Posted on the Community Bulletin Board, and finally printed for distribution and displayed for pickup.",
    fileUrl: "./imgz1760/10092025_MMMnews/10092025_MMMnews.pdf",
    thumbUrl: "./wtp/imgz1760/10092025_MMMnews/10092025_MMM_news_01.png",
    tags: ["newsletter"]
  },
  {
    id: "2025-09-16-rca-hack",
    dateISO: "2025-09-16",
    dateDisplay: "09/16/2025",
    title: "September 2025 McNulty's News: McNulty Contracts Her Company",
    pageUrl: "./imgz1760/09162025_MMMRCAhack/09162025_MMMRCAhack.pdf",
    description: "RCA not democratically chosen; McNulty just made it happen.",
    fileUrl: "./imgz1760/09162025_MMMRCAhack/09162025_MMMRCAhack.pdf",
    thumbUrl: "./imgz1760/icon-fire.png",
    tags: ["newsletter", "rca"]
  },

  {
    id: "2025-05-27-mmm-news",
    dateISO: "2025-05-27",
    dateDisplay: "05/27/2025",
    title: "May 2025 Margo's News",
    pageUrl: null,
    description: "Posted on the Community Bulletin Board (controlled access).",
    fileUrl: "./imgz1760/05272025_MMMnews/05272025_MMM_news_01.pdf",
    thumbUrl: "./imgz1760/06012025_MMMnews/06012025_MMM_news_01.png",
    tags: ["newsletter"]
  },
  {
    id: "2025-04-07-mmm-visit",
    dateISO: "2025-04-07",
    dateDisplay: "04/07/2025",
    title: "McNulty visits Rittenburg",
    pageUrl: null,
    description: "After McNulty was granted a RO, she taunts Rittenburg with a visit and a note.",
    fileUrl: "./imgz1760/04072025_MMMvisit412/04072025_MMMvisit412.png",
    thumbUrl: "./imgz1760/04072025_MMMvisit412/04072025_MMMvisit412.png",
    tags: ["incident"]
  },
  {
    id: "2025-02-06-bylaws-door",
    dateISO: "2025-02-06",
    dateDisplay: "02/06/2025",
    title: "1760 Tenant Association ByLaws (door posting)",
    pageUrl: null,
    description: "Posted next to the Community Bulletin Board; copy from Helen Hale’s office. Multi-language PDFs linked.",
    fileUrl: "./imgz1760/bylawsDoor02062025/02062025_BylawsDoor.pdf",
    thumbUrl: "./imgz1760/02052025_MMMnews/02052025-01.png",
    tags: ["bylaws"]
  },
  {
    id: "2025-02-05-newsletter",
    dateISO: "2025-02-05",
    dateDisplay: "02/05/2025",
    title: "Newsletter (posted in lobby case)",
    pageUrl: null,
    description: "Posted by McNulty in the community case in the lobby.",
    fileUrl: "./imgz1760/02052025_MMMnews/02052025_MMMnews.pdf",
    thumbUrl: "./imgz1760/02052025_MMMnews/02052025-01.png",
    tags: ["newsletter"]
  },
  {
    id: "2025-01-05-stipend",
    dateISO: "2025-01-05",
    dateDisplay: "01/05/2025",
    title: "Board increases stipend",
    pageUrl: null,
    description: "Claims stipend increased from $40 to $50; cites bylaws Article 9.11; includes estimated monthly totals.",
    fileUrl: "./imgz1760/bylaws05282024/05282024_MMMbylaws.pdf",
    thumbUrl: "./imgz1760/bylaws05282024/May24_posted_pg_09.jpg",
    tags: ["stipend", "bylaws"]
  },

  {
    id: "2024-10-21-news-jj",
    dateISO: "2024-10-21",
    dateDisplay: "10/21/2024",
    title: "10212024_MMMnewsJJ",
    pageUrl: "./imgz1760/10212024_MMMnewsJJ/10212024_news.html",
    description: "Newsletter about her time at Amazon Studios; includes an online version.",
    fileUrl: "./imgz1760/10212024_MMMnewsJJ/10212024_MMMnewsJJ.pdf",
    thumbUrl: "./imgz1760/icon-web-en.png",
    tags: ["newsletter", "video"]
  },
  {
    id: "2024-10-01-2024mmm",
    dateISO: "2024-10-01",
    dateDisplay: "10/01/2024",
    title: "2024MMM.pdf",
    pageUrl: null,
    description: "Large PDF detailing nomination/election events in 2024; notes multiple languages (icons shown).",
    fileUrl: "./imgz1760/infoCH/2024MMM.pdf",
    thumbUrl: null,
    tags: ["pdf", "summary"]
  },
  {
    id: "2024-09-23-garden-news",
    dateISO: "2024-09-23",
    dateDisplay: "09/23/2024",
    title: "September 23, 2024 McNulty's News",
    pageUrl: "./imgz1760/09232024_NEWSgarden/09232024_MMMnewsGarden.html",
    description: "Posted on the Community Bulletin Board.",
    fileUrl: "./imgz1760/09232024_NEWSgarden/09232024_MMMnewsGarden.html",
    thumbUrl: "./imgz1760/06012025_MMMnews/06012025_MMM_news_01.png",
    tags: ["newsletter"]
  },

  // NOTE: your HTML has an "08/00/2024" placeholder date. Keep it sortable by setting a best-effort ISO date.
  // You can change dateISO to the real date once known.
  {
    id: "2024-08-00-2024mmm",
    dateISO: "2024-08-01",
    dateDisplay: "08/00/2024",
    title: "2024MMM.pdf [English version]",
    pageUrl: "./imgz1760/infoCH/2024MMM.pdf",
    description: "Large PDF detailing the nomination/election events. (Date in source is a placeholder.)",
    fileUrl: "./imgz1760/infoCH/2024MMM.pdf",
    thumbUrl: "./imgz1760/05282024_nomination/05302024_NOMofficers.png",
    tags: ["pdf", "placeholder-date"]
  },

  {
    id: "2024-07-11-secretary-letter",
    dateISO: "2024-07-11",
    dateDisplay: "07/11/2024",
    title: "Board Secretary response letter (still on door)",
    pageUrl: "./imgz1760/STUFFyouNEEDtoKNOW/07112024_letter.jpg",
    description: "TA Board Secretary's response to the Notice of Irregular Elections Letter.",
    fileUrl: "./imgz1760/STUFFyouNEEDtoKNOW/07112024_letter.jpg",
    thumbUrl: "./imgz1760/STUFFyouNEEDtoKNOW/07112024_letter.jpg",
    tags: ["letter"]
  },
  {
    id: "2024-07-05-mm-response",
    dateISO: "2024-07-05",
    dateDisplay: "07/05/2024",
    title: "Margo's response to the Notice of Irregular Elections",
    pageUrl: "./imgz1760/07052024_response/07052024_ARrespondMMM.pdf",
    description: "PDF response (as listed on the timeline page).",
    fileUrl: "./imgz1760/07052024_response/07052024_ARrespondMMM.pdf",
    thumbUrl: "./imgz1760/07052024_response/07052024-MMM-01.jpg",
    tags: ["response", "pdf"]
  },

  // NOTE: your row shows "07/03/2023" but links look like 2024 filenames.
  // Keep as-is for now, but this should probably be corrected to 07/03/2024.
  {
    id: "2023-07-03-irregular-election",
    dateISO: "2023-07-03",
    dateDisplay: "07/03/2023",
    title: "Notice of Irregular Nomination & Election (PDF)",
    pageUrl: "./imgz1760/07032024_TENANTSrespond/0703252024_election.pdf",
    description: "Irregular 'Election' conducted; document alleges CFR violations; multi-language PDFs linked.",
    fileUrl: "./imgz1760/07032024_TENANTSrespond/0703252024_election.pdf",
    thumbUrl: "./imgz1760/07032024_TENANTSrespond/icon_election.jpg",
    tags: ["election", "pdf", "date-mismatch"]
  },

  {
    id: "2024-06-29-fired",
    dateISO: "2024-06-29",
    dateDisplay: "06/29/2024",
    title: 'TA President "fires" Treasurer Rittenburg',
    pageUrl: "./TAdocs/TAPresAction/05222024MMMfireAR.html",
    description: "Removal without due process; links to supporting page(s).",
    fileUrl: "./imgz1760/06292024_MMMfireAR.jpg",
    thumbUrl: "./imgz1760/06292024_MMMresponse/06292024_MMMresponse_01.png",
    tags: ["board-action"]
  },
  {
    id: "2024-06-27-results-posted",
    dateISO: "2024-06-27",
    dateDisplay: "06/27/2024",
    title: "Election results posted (not by ITP)",
    pageUrl: null,
    description: "Results posted; notes removal/disregard of vote.",
    fileUrl: "./imgz1760/06252024_election/06262024-01.jpg",
    thumbUrl: "./imgz1760/06252024_election/06262024-01.jpg",
    tags: ["election"]
  },
  {
    id: "2024-06-25-election-meeting",
    dateISO: "2024-06-25",
    dateDisplay: "06/25/2024",
    title: "Election-themed meeting",
    pageUrl: "https://wtpo1760.github.io/wtp/MMMelection.html",
    description: "Election-themed meeting held; page explains why it is considered irregular.",
    fileUrl: null,
    thumbUrl: null,
    tags: ["meeting", "election"]
  },
  {
    id: "2024-06-08-second-nominees",
    dateISO: "2024-06-08",
    dateDisplay: "06/08/2024",
    title: "Second group of nominees posted",
    pageUrl: "./imgz1760/05282024_nomination/06082024_MMMnominees.pdf",
    description: "Second group of nominees posted by McNulty (per page text).",
    fileUrl: "./imgz1760/05282024_nomination/06082024_MMMnominees.pdf",
    thumbUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMmichelle.jpg",
    tags: ["nomination"]
  },
  {
    id: "2024-05-29-michelle-letter",
    dateISO: "2024-05-29",
    dateDisplay: "05/29/2024",
    title: "Letter to Michelle",
    pageUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMMichelle_02.pdf",
    description: "Letter to Michelle (as described in the table).",
    fileUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMMichelle_02.pdf",
    thumbUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMmichelle_02a.jpg",
    tags: ["letter"]
  },
  {
    id: "2024-05-29-wendell",
    dateISO: "2024-05-29",
    dateDisplay: "05/29/2024",
    title: "Wendell / nominations added after meeting",
    pageUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMwendell.pdf",
    description: "Admits adding nominations after meeting (per table text).",
    fileUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMwendell.pdf",
    thumbUrl: "./imgz1760/STUFFyouNEEDtoKNOW/05292024_MMMwindell.jpg",
    tags: ["nomination"]
  },
  {
    id: "2024-05-28-first-nominees",
    dateISO: "2024-05-28",
    dateDisplay: "05/28/2024",
    title: "First group of nominees posted",
    pageUrl: "./imgz1760/05282024_nomination/05282024_MMMnominees.pdf",
    description: "First group of nominees posted (per table text).",
    fileUrl: "./imgz1760/05282024_nomination/05282024_MMMnominees.pdf",
    thumbUrl: "./imgz1760/05282024_nomination/05282024afterNom-02.jpg",
    tags: ["nomination"]
  },
  {
    id: "2024-05-25-memday",
    dateISO: "2024-05-25",
    dateDisplay: "05/25/2024",
    title: "Memorial Day / pizza & cake party",
    pageUrl: "./imgz1760/05252024_MMMHappyMemDay.jpg",
    description: "Flyer/notice about pizza & cake & song party.",
    fileUrl: "./imgz1760/05252024_MMMHappyMemDay.jpg",
    thumbUrl: "./imgz1760/05252024_MMMHappyMemDay.jpg",
    tags: ["flyer"]
  },
  {
    id: "2024-05-24-negativity",
    dateISO: "2024-05-24",
    dateDisplay: "05/24/2024",
    title: "05242024_MMMnegativity",
    pageUrl: null,
    description: "Nomination-themed meeting goes poorly (per table text).",
    fileUrl: "./imgz1760/05242024_MMMnegativity/05242024_MMMnegativity.jpg",
    thumbUrl: "./imgz1760/05242024_MMMnegativity/05242024_MMMnegativity.jpg",
    tags: ["flyer"]
  },
  {
    id: "2024-05-23-ultimate-authority",
    dateISO: "2024-05-23",
    dateDisplay: "05/23/2024",
    title: "Claim of ultimate authority (PDF)",
    pageUrl: "./imgz1760/05232024_ultimate/05232024_MMMsuper.pdf",
    description: "PDF asserting role/authority (as described in the table).",
    fileUrl: "./imgz1760/05232024_ultimate/05232024_MMMsuper.pdf",
    thumbUrl: "./imgz1760/05232024_ultimate/05232024SuperMM.jpg",
    tags: ["pdf"]
  },
  {
    id: "2024-05-22-ccsd-recall-response",
    dateISO: "2024-05-22",
    dateDisplay: "05/22/2024",
    title: "Public response to CCS/D recall",
    pageUrl: "./imgz1760/05222024MMMnews.html",
    description: "McNulty’s version leading up to recall; multi-language PDFs linked.",
    fileUrl: "./imgz1760/05222024_MMMnews/05222024_MMMresponseCCSDRECALL_en.pdf",
    thumbUrl: "./imgz1760/05222024_MMMnews/05222024MMnews01.png",
    tags: ["ccsd", "pdf"]
  },
  {
    id: "2024-05-19-texts",
    dateISO: "2024-05-19",
    dateDisplay: "05/19/2024",
    title: "Margo and Angel text messages",
    pageUrl: "./imgz1760/05192024_AR-MMtexts/05192024-AR-MM-text-01.pdf",
    description: "Text messages referenced in the table; context around notice/roles/accountability.",
    fileUrl: "./imgz1760/05192024_AR-MMtexts/05192024-AR-MM-text-01.pdf",
    thumbUrl: "./imgz1760/05192024_AR-MMtexts/05192024-AR-MM-text-01.jpg",
    tags: ["texts"]
  },
  {
    id: "2024-05-15-dear-tenant",
    dateISO: "2024-05-15",
    dateDisplay: "05/15/2024",
    title: "Dear Tenant (images / multilingual)",
    pageUrl: "imgz1760/05152024_MMMconfusionNEWS/05152024dearTenant.jpg",
    description: "Image(s) and multi-language versions linked.",
    fileUrl: "imgz1760/05152024_MMMconfusionNEWS/05152024dearTenant.jpg",
    thumbUrl: "./imgz1760/05152024_MMMconfusionNEWS/05152024dearTenant.jpg",
    tags: ["notice"]
  },
  {
    id: "2024-05-14-board-texts",
    dateISO: "2024-05-14",
    dateDisplay: "05/14/2024",
    title: "Texts between board members",
    pageUrl: "./2024_board_msg.html",
    description: "Disclaimer row: board president/treasurer messages on TA-paid phone.",
    fileUrl: "./2024_board_msg.html",
    thumbUrl: "./imgz1760/icon-text-msg.png",
    tags: ["texts", "disclaimer"]
  },
  {
    id: "2024-05-14-irregular-flyer",
    dateISO: "2024-05-14",
    dateDisplay: "05/14/2024",
    title: "Irregular Nomination & Election flyer posted",
    pageUrl: "./imgz1760/05142024/index.html",
    description: "Row references Brown Act/CFR concerns and linked items.",
    fileUrl: "./imgz1760/05142024/05142024-964-420.pdf",
    thumbUrl: "./imgz1760/05142024/05142024-01.png",
    tags: ["flyer", "nomination", "election"]
  },

  // NOTE: table shows "04/04/2023" but text says April 4, 2024 meeting.
  {
    id: "2023-04-04-hoc-seat",
    dateISO: "2023-04-04",
    dateDisplay: "04/04/2023",
    title: "HOC April meeting minutes / Seat 11 appointment",
    pageUrl: "https://hsh.sfgov.org/wp-content/uploads/2024/05/HOC-April-4-2024-Meeting-Minutes-Adopted.pdf",
    description: "Row describes April 4, 2024 meeting minutes, but the displayed date is 04/04/2023 (needs correction).",
    fileUrl: "https://hsh.sfgov.org/wp-content/uploads/2024/05/HOC-April-4-2024-Meeting-Minutes-Adopted.pdf",
    thumbUrl: "./imgz1760/04042024_MMMhoc.png",
    tags: ["public-meeting", "date-mismatch"]
  },

  { id:"2023-03-ccsd-recall", dateISO:"2023-03-01", dateDisplay:"03/2023", title:"CCSD cause / recall meeting disrupted", pageUrl:"CCSDcause.html", description:"Row describes recall meeting disrupted and premature adjournment.", fileUrl:"CCSDcause.html", thumbUrl:"./imgz1760/CCSDmmm/CCSDcauseEN/CCSDcauseEN_02.png", tags:["ccsd"] },
  { id:"2022-09-interim", dateISO:"2022-09-01", dateDisplay:"09/2022", title:"CCSD appoints interim president", pageUrl:"CCSDcause.html", description:"Appointment as interim president (as described).", fileUrl:"CCSDcause.html", thumbUrl:"./imgz1760/CCSDmmm/CCSDcauseEN/CCSDcauseEN_02.png", tags:["ccsd"] },
  { id:"2022-01-negotiations", dateISO:"2022-01-01", dateDisplay:"2022", title:"1760 returns to CCSD negotiations (TBD)", pageUrl:null, description:"Row describes negotiations/appointment notes (TBD).", fileUrl:null, thumbUrl:"./imgz1760/icon-docs.png", tags:["ccsd", "tbd"] },
  { id:"2016-01-disassociate", dateISO:"2016-01-01", dateDisplay:"2016", title:"1760 vote to disassociate with CCSD", pageUrl:null, description:"Row describes disassociation vote and related notes.", fileUrl:"./imgz1760/CCSDexitAXEL.jpg", thumbUrl:"./imgz1760/CCSDexitAXEL.jpg", tags:["ccsd"] }
];
